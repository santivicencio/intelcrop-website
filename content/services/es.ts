import type { Service } from './types'

export const servicesEs: Service[] = [
  {
    slug: 'score-agroclimatico',
    icon: 'gauge',
    name: 'Score Agroclimático',
    short:
      'Calificación del riesgo productivo por productor y por predio, en 24–72 horas.',
    kicker: 'Score Agroclimático · Originación de crédito agrícola',
    headline: 'El riesgo productivo, medido en 24–72 horas.',
    intro:
      'Una calificación del riesgo productivo por productor y por predio para originar crédito agrícola. Es un overlay del score tradicional, no un reemplazo: complementa el modelo de la institución con la fuente productiva de repago que el modelo financiero no captura.',
    highlights: [
      { value: '24–72 h', label: 'de la solicitud al informe' },
      { value: '0–100', label: 'banda de riesgo productivo' },
      { value: '8', label: 'bloques productivos sobre el predio' },
      { value: '4', label: 'componentes ponderados' },
    ],
    steps: {
      kicker: 'Cómo funciona',
      title: 'De la captura a la decisión, en cuatro pasos',
      items: [
        {
          name: 'Captura',
          subtitle: 'Canal digital de la IFI',
          points: [
            'Polígono del predio',
            'Cultivo, variedad y hectáreas',
            'Fecha de siembra y ciclo',
            'Historial de cosechas de 12 a 36 meses',
            'Identidad y contacto del productor',
          ],
          body: 'El productor carga los datos una sola vez; no se requiere documentación adicional en esta fase.',
        },
        {
          name: 'Verificación',
          subtitle: 'Satélite + IA',
          points: [
            'Validación del polígono declarado',
            'Rendimiento histórico de 2 a 3 años',
            'Peligro climático intrínseco, incluido el análisis ENSO',
            'Presión sanitaria y estrés hídrico',
            'Acceso vial y riesgo de inundación',
          ],
          body: 'Contrasta lo declarado contra lo observado y elimina la dependencia del dato autorreportado.',
        },
        {
          name: 'Score',
          subtitle: 'Ponderación de componentes',
          points: [
            'Climático: anomalías, ENSO, sequía, inundación',
            'Productivo: vigor, fenología, rendimiento frente al histórico',
            'Sanitario: presión de plagas y enfermedades',
            'Exposición: área, concentración, acceso vial',
          ],
          body: 'Todo se ajusta por el factor de resiliencia del productor.',
        },
        {
          name: 'Decisión',
          subtitle: 'Banda de riesgo y acción',
          body: 'Cada banda se traduce en una acción concreta sobre monto, plazo y garantía.',
        },
      ],
    },
    bands: {
      kicker: 'Bandas de riesgo',
      title: 'Cada banda, una decisión',
      items: [
        { name: 'Verde', action: 'Aprobar en condiciones estándar.', tone: 'bajo' },
        { name: 'Amarillo', action: 'Aprobar con seguimiento quincenal.', tone: 'medio' },
        {
          name: 'Naranja',
          action: 'Ajustar monto, plazo o exigir mitigante.',
          tone: 'alto',
        },
        {
          name: 'Rojo',
          action: 'Condicionar a seguro o garantía adicional.',
          tone: 'rojo',
        },
        {
          name: 'Crítico',
          action: 'Diferir o rechazar; reevaluar el próximo ciclo.',
          tone: 'critico',
        },
      ],
      note: 'Overlay del score tradicional, no reemplazo.',
    },
    formulas: {
      kicker: 'Lógica del modelo',
      title: 'Cuatro variables, una sola lectura del riesgo',
      items: [
        {
          name: 'Riesgo',
          expression:
            'Peligro climático × Exposición del productor × Vulnerabilidad del cultivo ÷ Resiliencia de la operación',
        },
      ],
    },
    benefits: {
      kicker: 'Qué habilita en el negocio',
      title: 'Más crédito agro, con el mismo apetito de riesgo',
      items: [
        {
          name: 'Bancariza sin relajar el riesgo',
          body: 'El historial productivo verificable sustituye al historial crediticio inexistente: habilita al productor sin score tradicional.',
        },
        {
          name: 'Reduce el costo de originación',
          body: 'La verificación remota del predio sustituye buena parte de la visita de campo y acorta el ciclo de aprobación.',
        },
        {
          name: 'Precio por riesgo real',
          body: 'Reconoce mitigantes concretos (riego, drenaje, seguro, diversificación) en lugar de penalizar por geografía.',
        },
        {
          name: 'Canal batch',
          body: 'Entrega score, banda, variables explicativas y confianza al core sin modificar el motor de decisión existente.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Proceso de crédito',
        title: 'No entramos solo al final',
        intro:
          'La misma medición que aprueba la operación la monitorea durante el ciclo y anticipa la cobranza: una sola fuente productiva de repago, auditable de principio a fin.',
        items: [
          {
            name: 'Prospección',
            body: 'Análisis sectorial por cultivo: dónde está el universo, qué siembra y en qué superficie.',
            icon: 'binoculars',
          },
          {
            name: 'Originación',
            body: 'Score Agroclimático y georreferenciación: monto, plazo y garantías según la banda de riesgo.',
            icon: 'file',
          },
          {
            name: 'Seguimiento',
            body: 'Monitoreo satelital y alertas sobre los lotes en garantía, cruzados con el calendario de cuotas.',
            icon: 'satellite',
          },
          {
            name: 'Cobranza',
            body: 'Digitalización del productor y cobranza preventiva: reprogramar antes del vencimiento, no después de la mora.',
            icon: 'coins',
          },
        ],
      },
    ],
    footnote:
      'Salvaguarda: el score complementa el modelo de la institución, no lo reemplaza. Ninguna decisión adversa sobre un cliente se funda solo en la señal climática; la decisión conserva revisión humana documentada.',
  },
  {
    slug: 'licencias-analiticas',
    icon: 'smartphone',
    name: 'Licencias analíticas',
    short:
      'Digitalización del productor: todo su sistema productivo y climático en el smartphone.',
    kicker: 'Licencias analíticas · Digitalización del productor',
    headline: 'La parcela completa, en el celular del productor.',
    intro:
      'Un sistema de seguimiento y control integral de cultivos que funciona mediante licencias anuales por hectárea en producción, asignadas a los productores. Una solución accesible: la app funciona con y sin conexión y entrega hallazgos constantes sobre cada cultivo.',
    highlights: [
      { value: '1.111', label: 'fotografías individuales por hectárea' },
      { value: '3×3 m', label: 'cobertura de cada celda analizada' },
      { value: 'Anual', label: 'licencia por hectárea en producción' },
      { value: 'Off-line', label: 'y on-line en el smartphone' },
    ],
    steps: {
      kicker: 'Cómo funciona',
      title: 'El productor carga datos; InteliCrop le devuelve hallazgos',
      items: [
        {
          name: 'App móvil',
          body: 'Licencia para un aplicativo en el smartphone, que funciona off-line y on-line.',
        },
        {
          name: 'Formularios parametrizados',
          body: 'Formularios para la carga de datos productivos, ajustables a la medida de la institución financiera.',
        },
        {
          name: 'Alertas al productor',
          body: 'Sistemas de alertas parametrizados para notificar al productor por SMS, WhatsApp o e-mail.',
        },
        {
          name: 'Indicadores de evolución',
          body: 'El sistema analítico genera los indicadores de evolución del cultivo según las hectáreas que maneja el productor.',
        },
        {
          name: 'Analítica a 3×3 m',
          body: 'Cada hectárea se lee como 1.111 fotografías individuales, cada una con sus propios datos y estatus productivo.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Cinco módulos',
        title: 'Un sistema integral de control y monitoreo agrícola',
        items: [
          {
            name: 'Producción',
            body: 'Control y seguimiento de la salud productiva del cultivo.',
            icon: 'trending',
          },
          {
            name: 'Clima',
            body: 'Seguimiento de las condiciones climáticas y atmosféricas.',
            icon: 'cloudSun',
          },
          {
            name: 'Predicción vegetativa',
            body: 'Situación del cultivo y predicción de producción por cosecha.',
            icon: 'brain',
          },
          {
            name: 'Salud',
            body: 'Seguimiento de potenciales enfermedades en el cultivo.',
            icon: 'heart',
          },
          {
            name: 'Sostenibilidad',
            body: 'Métricas de uso de agua, captura de carbono y más.',
            icon: 'leaf',
          },
        ],
        note: 'Las licencias tienen duración anual y se asignan a un perfil administrador definido por el productor.',
      },
      {
        kicker: 'En la app',
        title: 'Ocho indicadores sobre cada parcela',
        items: [
          {
            name: 'Biomasa verde',
            body: 'Cobertura vegetal y germinación.',
            icon: 'sprout',
          },
          {
            name: 'Nitrógeno',
            body: 'Nivel nutricional de las plantas en producción.',
            icon: 'atom',
          },
          {
            name: 'Estrés hídrico',
            body: 'Nivel óptimo de necesidad de agua.',
            icon: 'droplets',
          },
          {
            name: 'Precipitación',
            body: 'Cantidad de lluvia probable.',
            icon: 'cloudRain',
          },
          {
            name: 'Temperatura',
            body: 'Golpes de calor o frío probables.',
            icon: 'thermometer',
          },
          { name: 'Notificaciones', body: 'SMS, WhatsApp y e-mail.', icon: 'bell' },
          {
            name: 'Etapa vegetativa',
            body: 'Progreso del crecimiento.',
            icon: 'activity',
          },
          { name: 'Cosecha esperada', body: 'Fecha y cantidad estimada.', icon: 'wheat' },
        ],
      },
      {
        kicker: 'Análisis de salud',
        title: 'Alertas de enfermedades en cada etapa productiva',
        intro:
          'Monitoreo de enfermedades y probabilidad de aparición en cada etapa del cultivo, para actuar antes de que el organismo afecte la cosecha.',
        items: [
          {
            name: 'Cultivo',
            body: 'Etapa vegetativa y probabilidad de aparición de distintos tipos de enfermedades.',
            icon: 'sprout',
          },
          {
            name: 'Enfermedades',
            body: 'Modelo predictivo de posibles impactos.',
            icon: 'bug',
          },
          {
            name: 'Manejo de insumos químicos',
            body: 'Control de hongos y enfermedades con la aplicación justa.',
            icon: 'flask',
          },
        ],
      },
    ],
    commercial:
      'Precios de introducción: valor por licencia + valor por hectárea analizada.',
  },
  {
    slug: 'analisis-sectorial',
    icon: 'map',
    name: 'Análisis sectorial',
    short: 'Producción, salud y riesgo de cada zona: país, provincia y cantón.',
    kicker: 'Análisis sectorial · Situación productiva zonal',
    headline: 'Cada hectárea activa de una región, vista desde el espacio.',
    intro:
      'Análisis masivos por zonas geográficas para determinar cuántas hectáreas por cultivo están activas, su estado vegetativo, su salud y sus riesgos climáticos. Para clientes corporativos, institucionales y de gobierno, por segmento productivo (micro, pyme, corporativo) y por ciclo.',
    highlights: [
      { value: '10×10 m', label: 'resolución de datos' },
      { value: '3 niveles', label: 'país, provincia y cantón' },
      { value: 'Temporada', label: 'superficie sembrada por ciclo' },
    ],
    steps: {
      kicker: 'Cómo funciona',
      title: 'Seis lecturas sobre la geografía que usted elija',
      items: [
        {
          name: 'Zonas de producción',
          body: 'Identificar zonas de producción por cultivo en las geografías seleccionadas por el cliente.',
        },
        {
          name: 'Georreferenciación',
          body: 'Georreferenciar las parcelas en producción.',
        },
        {
          name: 'Toneladas potenciales',
          body: 'Entender las toneladas potenciales de producción: proyecciones de oferta y precio.',
        },
        {
          name: 'Niveles productivos',
          body: 'Determinar los niveles productivos de cada zona.',
        },
        {
          name: 'Salud',
          body: 'Detectar el estado de salud de los cultivos identificados.',
        },
        {
          name: 'Riesgo climático',
          body: 'Analizar los riesgos climáticos encontrados en la zona.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Indicadores',
        title: 'Lo que mide cada análisis',
        items: [
          {
            name: 'Identificación de cultivos',
            body: 'Ubicación geográfica de los cultivos en producción.',
            icon: 'wheat',
          },
          {
            name: 'Biomasa verde',
            body: 'Cobertura vegetal y germinación.',
            icon: 'leaf',
          },
          { name: 'Salud', body: 'Riesgos de salud del cultivo.', icon: 'heart' },
          {
            name: 'Temperatura',
            body: 'Riesgo climático en la zona.',
            icon: 'thermometer',
          },
        ],
      },
      {
        kicker: 'Georreferenciación',
        title: 'Procesos masivos de análisis zonal',
        intro:
          'La vista en mapa muestra la estimación de la superficie cultivada en una región durante la temporada seleccionada.',
        items: [
          {
            name: 'Identificación',
            body: 'Cultivos en la zona geográfica seleccionada, georreferenciados por país, provincia y cantón.',
            icon: 'target',
          },
          {
            name: 'Hectáreas activas',
            body: 'Hectáreas activas del cultivo investigado y su rendimiento productivo.',
            icon: 'layers',
          },
          {
            name: 'Rendimiento por tramos',
            body: 'Rendimiento de los cultivos activos en tramos de tiempo parametrizables.',
            icon: 'calendar',
          },
        ],
      },
    ],
    commercial: 'Valor por km² analizado, por cultivo.',
  },
  {
    slug: 'riesgo-climatico',
    icon: 'cloudSun',
    name: 'Riesgo climático zonal',
    short: 'Clima, ENSO y estrés hídrico sobre los predios, con el marco de Basilea.',
    kicker: 'Analítica climática · Riesgo físico zonal',
    headline: 'El riesgo climático se mide por zona, no por cliente.',
    intro:
      'Una cartera diversificada en clientes puede seguir concentrada en la misma cuenca, cultivo y calendario de cosecha. Monitoreamos cada zona agroclimática (país, provincia, cantón): anomalías de lluvia y temperatura, eventos ENSO, sequía e inundación, cruzados con la exposición de la cartera.',
    highlights: [
      { value: 'Semanal', label: 'monitoreo satelital por zona' },
      { value: 'ENSO', label: 'prueba de estrés con El Niño 1997–98' },
      { value: '5', label: 'frentes de Basilea cubiertos' },
    ],
    steps: {
      kicker: 'Cómo funciona',
      title: 'Cuatro herramientas sobre la misma cartera georreferenciada',
      items: [
        {
          name: 'Mapa de exposición',
          points: [
            'Georreferencia cada predio financiado',
            'Cruza el saldo con la amenaza por zona, cultivo y ciclo',
            'Saldo expuesto por cuenca y cantón, no solo por provincia',
          ],
        },
        {
          name: 'Monitoreo zonal semanal',
          points: [
            'Reportes satelitales de las zonas donde están los clientes',
            'Alertas de lluvia extrema, sequía y ola de calor',
            'Bitácora de indicadores climáticos para la institución',
          ],
        },
        {
          name: 'Prueba de estrés ENSO',
          points: [
            'Aplica el escenario de El Niño 1997–98 a la cartera actual',
            'Pérdida esperada incremental por zona y cultivo',
            'Insumo para provisiones y apetito de riesgo',
          ],
        },
        {
          name: 'Calendario de cuotas',
          points: [
            'Cruza cada vencimiento con la ventana de lluvias',
            'Prioriza la reprogramación antes de la mora',
            'Cobranza preventiva activada por la condición del cultivo',
          ],
        },
      ],
    },
    basel: {
      kicker: 'Basilea · Riesgo climático',
      title: 'Basilea ya trata el clima como riesgo prudencial en cinco frentes',
      intro:
        'El Comité de Basilea define el clima como impulsor de los riesgos que el banco ya gestiona: sin variables climáticas, no puede medirlos ni reportarlos.',
      requiresLabel: 'Qué exige',
      contributionLabel: 'Aporte InteliCrop',
      items: [
        {
          name: 'Gobierno y apetito',
          body: 'El directorio incorpora el clima en la estrategia y fija cuánto riesgo climático acepta.',
          requires: 'Responsables y límites definidos',
          contribution: 'Exposición por zona agroclimática, cultivo y ciclo',
        },
        {
          name: 'Riesgo de crédito',
          body: 'Originación, seguimiento y garantías reflejan la amenaza climática del predio.',
          requires: 'Clima en PD, LGD y garantías',
          contribution: 'Georreferencia del predio, amenaza y estado del cultivo',
        },
        {
          name: 'Capital y liquidez',
          body: 'La evaluación interna de capital y liquidez incluye el impacto climático.',
          requires: 'Suficiencia frente al shock',
          contribution: 'Pérdida esperada incremental por evento climático',
        },
        {
          name: 'Escenarios y estrés',
          body: 'El banco mide su resiliencia ante escenarios climáticos severos y plausibles.',
          requires: 'Análisis de escenarios',
          contribution: 'Escenario ENSO 1997–98 aplicado a la cartera actual',
        },
        {
          name: 'Divulgación (Pilar 3)',
          body: 'El marco de 2025 pide reportar la cartera expuesta a riesgo físico por región.',
          requires: 'Reporte cualitativo y cuantitativo',
          contribution: 'Saldo expuesto por provincia, cantón y amenaza',
        },
      ],
      closing:
        'Las cinco exigencias parten del mismo dato: la cartera georreferenciada y cruzada con la amenaza climática de cada zona.',
      sources:
        'BCBS, Principles for the effective management and supervision of climate-related financial risks (jun. 2022) · BCBS, A framework for the voluntary disclosure of climate-related financial risks (jun. 2025).',
    },
    formulas: {
      kicker: 'Ajuste de pérdida esperada',
      title: 'Se mide una vez y tiene dos salidas: la regulatoria y la de crédito',
      items: [
        {
          name: 'PD ajustada',
          expression: 'PD base × (1 + k × deterioro productivo × amenaza)',
        },
        {
          name: 'LGD ajustada',
          expression: 'LGD base × (1 + k × amenaza × (1 − resiliencia))',
        },
        {
          name: 'Pérdida esperada',
          expression: 'PD ajustada × LGD ajustada × Exposición',
        },
      ],
      note: 'La pérdida esperada incremental, con y sin ajuste climático y en dólares sobre la cartera real, permite comparar el costo del programa con la pérdida que evita.',
    },
    footnote:
      'Salvaguarda: el score complementa el modelo del banco, no lo reemplaza. Ninguna decisión adversa sobre un cliente se funda solo en la señal climática; la decisión conserva revisión humana documentada.',
  },
  {
    slug: 'analitica-de-precision',
    icon: 'satellite',
    name: 'Analítica de precisión',
    short: 'Monitoreo satelital a 3×3 m y modelos de IA para 170+ cultivos.',
    kicker: 'Analítica de precisión · Modelos de IA',
    headline: 'Seis frentes de información sobre cada cultivo.',
    intro:
      'Utilizamos más de 200 satélites en todas las zonas del mundo para generar imágenes de alta definición (3×3 m), de las que extraemos datos e indicadores productivos. Más de 40 años de imágenes y 20 años de seguimiento de cultivos a nivel global sostienen modelos de precisión que trabajan 100 % en la nube, disponibles 24/7.',
    highlights: [
      { value: '+200', label: 'satélites' },
      { value: '3×3 m', label: 'resolución por imagen' },
      { value: '+40 años', label: 'de histórico de imágenes' },
      { value: '+170', label: 'cultivos con machine learning' },
    ],
    featureBlocks: [
      {
        kicker: 'Seis frentes',
        title: 'Identificar, analizar, alertar y controlar todo el ciclo',
        items: [
          {
            name: 'Monitoreo',
            body: 'Estado vegetativo en tiempo real y principales indicadores de desarrollo.',
            icon: 'sprout',
          },
          {
            name: 'Visión',
            body: 'Planificación de cosechas y proyección de toneladas de producción.',
            icon: 'tractor',
          },
          {
            name: 'Enfermedades',
            body: 'Control y notificación de enfermedades por cambios climáticos y plagas.',
            icon: 'bug',
          },
          {
            name: 'Alertas',
            body: 'Alertamiento a la medida: condiciones climáticas, productivas y de sostenibilidad.',
            icon: 'bell',
          },
          {
            name: 'Planificación',
            body: 'Decisiones de fertilización, aplicación y procesos correctivos.',
            icon: 'calendar',
          },
          {
            name: 'Desarrollo',
            body: 'Capacitación en mejores prácticas por suelo, geografía y clima.',
            icon: 'graduation',
          },
        ],
      },
      {
        kicker: 'Modelos de IA',
        title: 'Predicción e inteligencia de datos climáticos y productivos',
        intro:
          'Invertimos continuamente en modelos fundacionales específicos para cada dominio.',
        items: [
          {
            name: 'Detección de cultivos',
            body: 'Detecta el área de cultivo y estima la producción por país, cantón o parcela.',
            icon: 'scan',
          },
          {
            name: 'Absorción de nitrógeno',
            body: 'Monitorea la absorción de nitrógeno del cultivo.',
            icon: 'atom',
          },
          {
            name: 'Estrés hídrico',
            body: 'Recomienda riego por ubicación y etapa de crecimiento.',
            icon: 'droplets',
          },
          { name: 'Enfermedad', body: 'Alertas tempranas de enfermedades.', icon: 'bug' },
          {
            name: 'Progreso de cultivos',
            body: 'Monitorea el progreso de la etapa del cultivo.',
            icon: 'activity',
          },
          {
            name: 'Pronóstico de rendimiento',
            body: 'Estima el rendimiento hasta la fecha de madurez.',
            icon: 'trending',
          },
        ],
      },
      {
        kicker: 'La base',
        title: 'Datos de alto valor para todos los actores del sector',
        items: [
          {
            name: 'Analítica',
            body: '+200 satélites en todo el mundo e imágenes de alta definición a 3×3 m.',
            icon: 'satellite',
          },
          {
            name: 'Data',
            body: '+40 años de imágenes y 20 años de seguimiento de cultivos a nivel global.',
            icon: 'database',
          },
          {
            name: 'Nube',
            body: '100 % en la nube: datos y procesamiento disponibles 24/7.',
            icon: 'cloud',
          },
          {
            name: 'Cultivos',
            body: '+170 cultivos, diferenciando cepas y tipos, bajo machine learning constante.',
            icon: 'wheat',
          },
        ],
      },
    ],
  },
  {
    slug: 'visualizadores',
    icon: 'chart',
    name: 'Visualizadores automatizados',
    short:
      'Tableros inteligentes que convierten grandes volúmenes de datos en decisiones.',
    kicker: 'Visualizadores · Tableros inteligentes',
    headline: 'Grandes volúmenes de datos, convertidos en decisiones.',
    intro:
      'Una plataforma simplificada que convierte grandes volúmenes de datos en historias visuales que impulsan decisiones rentables y generan accionables de manera dinámica y oportuna. Análisis resumido de las condiciones de los productores por zona, segmento y tipo de cultivo. Potenciados por Power BI de Microsoft.',
    highlights: [
      { value: 'Diaria', label: 'actualización de la información' },
      { value: '3', label: 'módulos de alertas' },
      { value: 'Power BI', label: 'de Microsoft' },
    ],
    steps: {
      kicker: 'Qué incluye',
      title: 'Seguimiento y monitoreo en un solo tablero',
      items: [
        {
          name: 'Plataforma dinámica',
          body: 'Información acumulada del estado del cultivo, del productor y de la zona.',
        },
        {
          name: 'Actualización diaria',
          body: 'La información se actualiza todos los días.',
        },
        {
          name: 'Módulos de alertas',
          body: 'Alertas climáticas, productivas y de salud.',
        },
        {
          name: 'Módulo de producción',
          body: 'Indicadores productivos, salud vegetativa y proyecciones.',
        },
        {
          name: 'Módulo de sostenibilidad',
          body: 'Indicadores de CO₂, uso de agua y deforestación.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Vistas',
        title: 'Cinco lentes sobre su cartera de productores',
        items: [
          {
            name: 'Producción',
            body: 'Rendimiento, fenología y proyecciones.',
            icon: 'wheat',
          },
          {
            name: 'Productores',
            body: 'Estado por productor, zona y segmento.',
            icon: 'users',
          },
          { name: 'Clima', body: 'Condiciones y alertas climáticas.', icon: 'cloudSun' },
          { name: 'Salud', body: 'Riesgos sanitarios del cultivo.', icon: 'heart' },
          {
            name: 'Sostenibilidad',
            body: 'Carbono, agua y deforestación.',
            icon: 'leaf',
          },
        ],
      },
    ],
    commercial: 'Licencia mensual de uso — Power BI.',
  },
  {
    slug: 'sostenibilidad-eudr',
    icon: 'leaf',
    name: 'Sostenibilidad y EUDR',
    short: 'Huella de carbono, uso de agua, deforestación y cumplimiento EUDR.',
    kicker: 'Sostenibilidad · Indicadores y cumplimiento',
    headline: 'Más cosecha, menos huella.',
    intro:
      'Un portal simplificado para entender la evolución de los cultivos y sus impactos en el medio ambiente: huella de carbono, uso de agua y deforestación. Con control histórico de los polígonos analizados, anterior a 2020, para cumplir la regulación europea sobre productos libres de deforestación.',
    highlights: [
      { value: '31/12/2020', label: 'fecha de corte de deforestación EUDR' },
      { value: 'Polígono', label: 'completo y geolocalizado' },
      { value: 'Carbono + agua', label: 'medidos con el mismo dato satelital' },
    ],
    featureBlocks: [
      {
        kicker: 'Huella de carbono',
        title: 'Lo que el cultivo le hace al territorio',
        items: [
          {
            name: 'Monitoreo de deforestación',
            body: 'Uso de suelos: bosque frente a cultivos.',
            icon: 'trees',
          },
          {
            name: 'Captura de carbono en biomasa',
            body: 'Modelo de estimación de captura de carbono.',
            icon: 'atom',
          },
          {
            name: 'Modelo de riego eficiente',
            body: 'Uso de agua combinado entre riego productivo y precipitaciones, vinculado a las condiciones meteorológicas.',
            icon: 'droplets',
          },
        ],
      },
      {
        kicker: 'Prácticas sostenibles',
        title: 'Siete prácticas clave, disponibles para el productor',
        items: [
          {
            name: 'Gestión del cultivo',
            body: 'Manejo productivo con datos.',
            icon: 'sprout',
          },
          { name: 'Huella de carbono', body: 'Monitoreo continuo.', icon: 'footprints' },
          { name: 'Deforestación', body: 'Control de polígonos.', icon: 'trees' },
          {
            name: 'Huella hídrica',
            body: 'Reducción y recomendación de riego.',
            icon: 'droplets',
          },
          { name: 'Uso de suelos', body: 'Cobertura y cambio de uso.', icon: 'layers' },
          { name: 'Residuos en cultivo', body: 'Gestión de residuos.', icon: 'recycle' },
          { name: 'Químicos', body: 'Uso adecuado de insumos.', icon: 'flask' },
        ],
        note: 'Comprometidos con los ODS: Hambre cero · Trabajo decente · Producción responsable · Acción por el clima · Vida de ecosistemas terrestres.',
      },
    ],
    timeline: {
      kicker: 'Cumplimiento EUDR',
      title: 'Regulación de la UE sobre productos libres de deforestación',
      items: [
        { name: 'Adopción', date: 'Mayo 2023', icon: 'gavel' },
        { name: 'Entrada en vigor', date: 'Mayo 2023', icon: 'file' },
        { name: 'Corporativos', date: 'Diciembre 2025', icon: 'factory' },
        { name: 'Pymes', date: 'Junio 2026', icon: 'box' },
      ],
      facts: [
        'Cubre productos asociados con deforestación: madera, ganado, soya, aceite de palma, café, cacao, caucho y sus derivados.',
        'Los productos no pueden provenir de tierras deforestadas o degradadas después del 31 de diciembre de 2020.',
        'Debe identificarse la ubicación exacta de las parcelas de producción: geolocalización y análisis del polígono completo.',
      ],
      note: 'Las herramientas digitales de CROPIN permiten controlar la deforestación de los polígonos analizados con información histórica anterior a 2020.',
    },
  },
  {
    slug: 'capacitaciones',
    icon: 'graduation',
    name: 'Capacitaciones continuas',
    short:
      'Formación para productores y equipos en herramientas, alertas y mejores prácticas.',
    kicker: 'Capacitaciones continuas',
    headline: 'Tecnología que se adopta en el campo.',
    intro:
      'Un sistema de capacitaciones en el uso de las herramientas digitales, los sistemas de alertamiento y la información productiva, con recomendaciones de técnicas para el control y desarrollo del cultivo y las mejores prácticas vistas en otros países. Para productores y para los equipos de las instituciones que los acompañan.',
    highlights: [
      { value: '2 públicos', label: 'productores y stakeholders' },
      { value: 'Continua', label: 'durante todo el ciclo' },
      { value: 'Global', label: 'mejores prácticas de otros países' },
    ],
    featureBlocks: [
      {
        kicker: 'Contenidos',
        title: 'Del dato a la práctica',
        items: [
          {
            name: 'Herramientas digitales',
            body: 'Uso de la app, los tableros y los indicadores.',
            icon: 'smartphone',
          },
          {
            name: 'Sistemas de alertamiento',
            body: 'Cómo leer y actuar ante cada alerta.',
            icon: 'bell',
          },
          {
            name: 'Información productiva',
            body: 'Interpretación de indicadores y proyecciones.',
            icon: 'chart',
          },
          {
            name: 'Control del cultivo',
            body: 'Técnicas para el control y desarrollo del cultivo.',
            icon: 'sprout',
          },
          {
            name: 'Mejores prácticas',
            body: 'Lo que funciona en otras latitudes, adaptado.',
            icon: 'globe',
          },
          {
            name: 'Suelo, geografía y clima',
            body: 'Recomendaciones según las condiciones de cada cultivo.',
            icon: 'layers',
          },
        ],
      },
    ],
  },
]
