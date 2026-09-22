'use client'

import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import type { Dictionary } from '@/lib/i18n/types'

type FieldName = 'name' | 'organization' | 'email' | 'need'
type Errors = Partial<Record<FieldName, string>>
type Status = 'idle' | 'submitting' | 'success' | 'error'

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

const FIELD_CLASS =
  'w-full border-0 border-b border-mist bg-transparent py-3 text-field placeholder:text-mist focus:border-teal-bright focus:outline-none'

export function ContactForm({ dictionary }: { dictionary: Dictionary }) {
  const { form } = dictionary.finalCta
  const [values, setValues] = useState({
    name: '',
    organization: '',
    organizationType: form.organizationTypeOptions[0] ?? '',
    email: '',
    need: '',
  })
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<Status>('idle')

  function updateField(field: FieldName | 'organizationType', value: string) {
    setValues((current) => ({ ...current, [field]: value }))
  }

  function validate(): Errors {
    const next: Errors = {}
    if (!values.name.trim()) next.name = form.nameError
    if (!values.organization.trim()) next.organization = form.organizationError
    if (!EMAIL_PATTERN.test(values.email)) next.email = form.emailError
    if (!values.need.trim()) next.need = form.needError
    return next
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate()
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    setStatus('submitting')
    try {
      // TODO: conectar a endpoint (ver docs/CONTENT_TODO.md). Sin integraciones de terceros en esta fase.
      await new Promise((resolve) => setTimeout(resolve, 600))
      setStatus('success')
      setValues({
        name: '',
        organization: '',
        organizationType: form.organizationTypeOptions[0] ?? '',
        email: '',
        need: '',
      })
    } catch {
      setStatus('error')
    }
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2"
    >
      <Field
        id="name"
        label={form.nameLabel}
        value={values.name}
        error={errors.name}
        onChange={(event) => updateField('name', event.target.value)}
      />
      <Field
        id="organization"
        label={form.organizationLabel}
        value={values.organization}
        error={errors.organization}
        onChange={(event) => updateField('organization', event.target.value)}
      />

      <div>
        <FieldLabel id="organizationType">{form.organizationTypeLabel}</FieldLabel>
        <select
          id="organizationType"
          name="organizationType"
          value={values.organizationType}
          onChange={(event) => updateField('organizationType', event.target.value)}
          className={FIELD_CLASS}
        >
          {form.organizationTypeOptions.map((option) => (
            <option key={option} value={option} className="text-canopy">
              {option}
            </option>
          ))}
        </select>
      </div>

      <Field
        id="email"
        type="email"
        label={form.emailLabel}
        value={values.email}
        error={errors.email}
        onChange={(event) => updateField('email', event.target.value)}
      />

      <TextAreaField
        id="need"
        label={form.needLabel}
        value={values.need}
        error={errors.need}
        onChange={(event) => updateField('need', event.target.value)}
      />

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="min-h-11 border border-current px-6 py-3 text-sm font-medium tracking-wide text-field transition-colors duration-[180ms] ease-[var(--ease-entry)] hover:border-gold hover:bg-gold hover:text-canopy disabled:opacity-60"
        >
          {status === 'submitting' ? form.submittingLabel : form.submitLabel}
        </button>
        <p
          role="status"
          aria-live="polite"
          className="mt-4 min-h-5 text-sm text-teal-bright"
        >
          {status === 'success'
            ? form.successMessage
            : status === 'error'
              ? form.errorMessage
              : ''}
        </p>
      </div>
    </form>
  )
}

function Field({
  id,
  label,
  value,
  error,
  type = 'text',
  onChange,
}: {
  id: FieldName
  label: string
  value: string
  error?: string
  type?: string
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}) {
  const errorId = `${id}-error`
  return (
    <div>
      <FieldLabel id={id}>{label}</FieldLabel>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={FIELD_CLASS}
      />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

function TextAreaField({
  id,
  label,
  value,
  error,
  onChange,
}: {
  id: FieldName
  label: string
  value: string
  error?: string
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void
}) {
  const errorId = `${id}-error`
  return (
    <div className="sm:col-span-2">
      <FieldLabel id={id}>{label}</FieldLabel>
      <textarea
        id={id}
        name={id}
        rows={4}
        value={value}
        onChange={onChange}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? errorId : undefined}
        className={FIELD_CLASS}
      />
      <FieldError id={errorId}>{error}</FieldError>
    </div>
  )
}

function FieldLabel({ id, children }: { id: string; children: ReactNode }) {
  return (
    <label
      htmlFor={id}
      className="mb-2 block font-mono text-xs font-medium tracking-[0.14em] text-mist uppercase"
    >
      {children}
    </label>
  )
}

function FieldError({ id, children }: { id: string; children?: string }) {
  if (!children) return null
  return (
    <p id={id} className="mt-2 text-xs text-teal-bright">
      {children}
    </p>
  )
}
