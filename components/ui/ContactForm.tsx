'use client'

import { useState, type FormEvent, type ReactNode } from 'react'
import type { Dictionary } from '@/lib/i18n/types'
import { contactFormEndpoint, siteConfig } from '@/lib/site-config'
import { cn } from '@/lib/utils/cn'

type RequiredField = 'name' | 'organization' | 'email' | 'message'
type Errors = Partial<Record<RequiredField, string>>
type Status = 'idle' | 'submitting' | 'success' | 'mailto' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FIELD_CLASS =
  'w-full rounded-2xl border border-borde bg-white px-4 py-3 text-texto placeholder:text-gris focus:border-teal-accesible focus:outline-none focus:ring-2 focus:ring-teal-accesible/30'

/**
 * Every submission is addressed to comercial@intelicrop.com:
 * - With NEXT_PUBLIC_CONTACT_FORM_ENDPOINT set, it POSTs JSON to that endpoint
 *   (Formspree / FormSubmit / webhook configured to deliver to that inbox).
 * - Without it, it opens the visitor's email app with the message pre-filled and
 *   addressed to that inbox — never a fake "sent" confirmation.
 */
export function ContactForm({
  dictionary,
  interestOptions,
  defaultInterest,
}: {
  dictionary: Dictionary
  interestOptions: string[]
  defaultInterest?: string
}) {
  const { form } = dictionary.contact
  const initialValues = {
    name: '',
    organization: '',
    organizationType: form.organizationTypeOptions[0] ?? '',
    interest: defaultInterest ?? interestOptions[0] ?? '',
    email: '',
    phone: '',
    message: '',
  }
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function updateField(field: keyof typeof initialValues, value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function validate(): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = form.nameError
    if (!values.organization.trim()) next.organization = form.organizationError
    if (!EMAIL_PATTERN.test(values.email.trim())) next.email = form.emailError
    if (!values.message.trim()) next.message = form.messageError
    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      const firstInvalid = Object.keys(nextErrors)[0]
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const subject = `${form.subjectPrefix} · ${values.interest} · ${values.organization.trim()}`
    const lines = [
      `${form.nameLabel}: ${values.name.trim()}`,
      `${form.organizationLabel}: ${values.organization.trim()}`,
      `${form.organizationTypeLabel}: ${values.organizationType}`,
      `${form.interestLabel}: ${values.interest}`,
      `${form.emailLabel}: ${values.email.trim()}`,
      values.phone.trim() ? `${form.phoneLabel}: ${values.phone.trim()}` : '',
      '',
      values.message.trim(),
    ].filter((line, index, all) => line !== '' || all[index - 1] !== '')

    if (!contactFormEndpoint) {
      const mailto = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`
      window.location.href = mailto
      setStatus('mailto')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: values.name.trim(),
          organization: values.organization.trim(),
          organizationType: values.organizationType,
          interest: values.interest,
          email: values.email.trim(),
          phone: values.phone.trim(),
          message: values.message.trim(),
          // Conventional fields understood by Formspree / FormSubmit.
          _subject: subject,
          _replyto: values.email.trim(),
          _template: 'table',
          _captcha: 'false',
          to: siteConfig.contactEmail,
        }),
      })
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
    }
  }

  const statusMessage =
    status === 'success'
      ? form.successMessage
      : status === 'mailto'
        ? form.mailtoMessage
        : status === 'error'
          ? form.errorMessage
          : ''

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2"
    >
      <TextField
        id="name"
        label={form.nameLabel}
        value={values.name}
        error={errors.name}
        autoComplete="name"
        onChange={(value) => updateField('name', value)}
      />
      <TextField
        id="organization"
        label={form.organizationLabel}
        value={values.organization}
        error={errors.organization}
        autoComplete="organization"
        onChange={(value) => updateField('organization', value)}
      />
      <SelectField
        id="organizationType"
        label={form.organizationTypeLabel}
        value={values.organizationType}
        options={form.organizationTypeOptions}
        onChange={(value) => updateField('organizationType', value)}
      />
      <SelectField
        id="interest"
        label={form.interestLabel}
        value={values.interest}
        options={interestOptions}
        onChange={(value) => updateField('interest', value)}
      />
      <TextField
        id="email"
        type="email"
        label={form.emailLabel}
        value={values.email}
        error={errors.email}
        autoComplete="email"
        onChange={(value) => updateField('email', value)}
      />
      <TextField
        id="phone"
        type="tel"
        label={form.phoneLabel}
        value={values.phone}
        autoComplete="tel"
        onChange={(value) => updateField('phone', value)}
      />

      <div className="sm:col-span-2">
        <FieldLabel id="message">{form.messageLabel}</FieldLabel>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={(event) => updateField('message', event.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'contact-message-error' : undefined}
          className={FIELD_CLASS}
        />
        <FieldError id="contact-message-error">{errors.message}</FieldError>
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="inline-flex min-h-12 items-center justify-center self-start rounded-full bg-tinta px-8 py-3.5 text-[15px] font-extrabold text-white transition-colors duration-200 hover:bg-teal-accesible disabled:opacity-60"
        >
          {status === 'submitting' ? form.submittingLabel : form.submitLabel}
        </button>
        <p className="text-sm text-gris-texto">{form.privacyNote}</p>
        <p
          role="status"
          aria-live="polite"
          className={cn(
            'min-h-6 text-[15px] font-semibold',
            status === 'error' ? 'text-riesgo-critico' : 'text-teal-accesible'
          )}
        >
          {statusMessage}
        </p>
      </div>
    </form>
  )
}

function TextField({
  id,
  label,
  value,
  error,
  type = 'text',
  autoComplete,
  onChange,
}: {
  id: string
  label: string
  value: string
  error?: string
  type?: string
  autoComplete?: string
  onChange: (value: string) => void
}) {
  const errorId = `contact-${id}-error`
  return (
    <div>
      <FieldLabel id={id}>{label}</FieldLabel>
      <input
        id={`contact-${id}`}
        name={id}
        type={type}
        value={value}
        autoComplete={autoComplete}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={FIELD_CLASS}
      />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

function SelectField({
  id,
  label,
  value,
  options,
  onChange,
}: {
  id: string
  label: string
  value: string
  options: string[]
  onChange: (value: string) => void
}) {
  return (
    <div>
      <FieldLabel id={id}>{label}</FieldLabel>
      <select
        id={`contact-${id}`}
        name={id}
        value={value}
        onChange={(event) => onChange(event.target.value)}
        className={FIELD_CLASS}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

function FieldLabel({ id, children }: { id: string; children: ReactNode }) {
  return (
    <label htmlFor={`contact-${id}`} className="mb-2 block text-sm font-bold text-tinta">
      {children}
    </label>
  )
}

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null
  return (
    <p id={id} className="mt-2 text-sm font-semibold text-riesgo-critico">
      {children}
    </p>
  )
}
