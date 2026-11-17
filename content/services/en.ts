import type { Service } from './types'

export const servicesEn: Service[] = [
  {
    slug: 'score-agroclimatico',
    icon: 'gauge',
    name: 'Agroclimatic Score',
    short: 'Productive risk rating per producer and per plot, in 24–72 hours.',
    kicker: 'Agroclimatic Score · Agricultural credit origination',
    headline: 'Productive risk, measured in 24–72 hours.',
    intro:
      "A productive-risk rating per producer and per plot for originating agricultural credit. It overlays the traditional score rather than replacing it: it complements the institution's model with the productive source of repayment the financial model doesn't capture.",
    highlights: [
      { value: '24–72 h', label: 'from request to report' },
      { value: '0–100', label: 'productive risk band' },
      { value: '8', label: 'productive blocks on the plot' },
      { value: '4', label: 'weighted components' },
    ],
    steps: {
      kicker: 'How it works',
      title: 'From capture to decision, in four steps',
      items: [
        {
          name: 'Capture',
          subtitle: "The lender's digital channel",
          points: [
            'Plot polygon',
            'Crop, variety and hectares',
            'Planting date and cycle',
            '12–36 month harvest history',
            'Producer identity and contact',
          ],
          body: 'The producer enters the data once; no extra paperwork is needed at this stage.',
        },
        {
          name: 'Verification',
          subtitle: 'Satellite + AI',
          points: [
            'Validation of the declared polygon',
            '2–3 years of historical yield',
            'Intrinsic climate hazard, including ENSO analysis',
            'Pest pressure and water stress',
            'Road access and flood risk',
          ],
          body: 'Checks what was declared against what is observed and removes the reliance on self-reported data.',
        },
        {
          name: 'Score',
          subtitle: 'Weighted components',
          points: [
            'Climate: anomalies, ENSO, drought, flooding',
            'Productive: vigor, phenology, yield vs. history',
            'Health: pest and disease pressure',
            'Exposure: area, concentration, road access',
          ],
          body: "Everything is adjusted by the producer's resilience factor.",
        },
        {
          name: 'Decision',
          subtitle: 'Risk band and action',
          body: 'Each band translates into a concrete action on amount, term and collateral.',
        },
      ],
    },
    bands: {
      kicker: 'Risk bands',
      title: 'Every band, a decision',
      items: [
        { name: 'Green', action: 'Approve on standard terms.', tone: 'bajo' },
        { name: 'Yellow', action: 'Approve with fortnightly monitoring.', tone: 'medio' },
        {
          name: 'Orange',
          action: 'Adjust amount or term, or require a mitigant.',
          tone: 'alto',
        },
        {
          name: 'Red',
          action: 'Require insurance or additional collateral.',
          tone: 'rojo',
        },
        {
          name: 'Critical',
          action: 'Defer or decline; reassess next cycle.',
          tone: 'critico',
        },
      ],
      note: 'An overlay of the traditional score, not a replacement.',
    },
    formulas: {
      kicker: 'Model logic',
      title: 'Four variables, one reading of risk',
      items: [
        {
          name: 'Risk',
          expression:
            'Climate hazard × Producer exposure × Crop vulnerability ÷ Operational resilience',
        },
      ],
    },
    benefits: {
      kicker: 'What it unlocks',
      title: 'More agri credit, with the same risk appetite',
      items: [
        {
          name: 'Bank the unbanked without loosening risk',
          body: 'A verifiable productive history replaces the missing credit history: producers without a traditional score become eligible.',
        },
        {
          name: 'Lower origination cost',
          body: 'Remote plot verification replaces much of the field visit and shortens the approval cycle.',
        },
        {
          name: 'Price for real risk',
          body: 'Recognizes concrete mitigants (irrigation, drainage, insurance, diversification) instead of penalizing geography.',
        },
        {
          name: 'Batch channel',
          body: 'Delivers score, band, explanatory variables and confidence to the core without changing the existing decision engine.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Credit process',
        title: "We don't only come in at the end",
        intro:
          'The same measurement that approves the loan monitors it during the cycle and anticipates collections: one productive source of repayment, auditable from start to finish.',
        items: [
          {
            name: 'Prospecting',
            body: 'Sector analysis by crop: where the universe is, what it grows and on how much land.',
            icon: 'binoculars',
          },
          {
            name: 'Origination',
            body: "Agroclimatic Score and georeferencing: amount, term and collateral set by the plot's risk band.",
            icon: 'file',
          },
          {
            name: 'Monitoring',
            body: 'Satellite monitoring and alerts on pledged plots, crossed with the repayment calendar.',
            icon: 'satellite',
          },
          {
            name: 'Collections',
            body: 'Producer digitization and preventive collections: reschedule before the due date, not after default.',
            icon: 'coins',
          },
        ],
      },
    ],
    footnote:
      "Safeguard: the score complements the institution's model, it doesn't replace it. No adverse decision about a client rests on the climate signal alone; every decision keeps documented human review.",
  },
  {
    slug: 'licencias-analiticas',
    icon: 'smartphone',
    name: 'Analytics licenses',
    short:
      'Producer digitization: their whole production and climate picture on a smartphone.',
    kicker: 'Analytics licenses · Producer digitization',
    headline: "The whole plot, on the producer's phone.",
    intro:
      'An end-to-end crop monitoring and control system sold as annual licenses per hectare in production, assigned to producers. An accessible solution: the app works online and offline and returns continuous findings on every crop.',
    highlights: [
      { value: '1,111', label: 'individual images per hectare' },
      { value: '3×3 m', label: 'coverage of each analyzed cell' },
      { value: 'Annual', label: 'license per hectare in production' },
      { value: 'Offline', label: 'and online on a smartphone' },
    ],
    steps: {
      kicker: 'How it works',
      title: 'The producer uploads data; InteliCrop sends back findings',
      items: [
        {
          name: 'Mobile app',
          body: 'A license for a smartphone app that works offline and online.',
        },
        {
          name: 'Configurable forms',
          body: "Forms for entering production data, adjustable to the financial institution's needs.",
        },
        {
          name: 'Producer alerts',
          body: 'Configurable alert systems that notify the producer by SMS, WhatsApp or email.',
        },
        {
          name: 'Progress indicators',
          body: 'The analytics engine produces crop progress indicators based on the hectares each producer manages.',
        },
        {
          name: '3×3 m analytics',
          body: 'Each hectare is read as 1,111 individual images, each with its own data and productive status.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Five modules',
        title: 'A complete farm control and monitoring system',
        items: [
          {
            name: 'Production',
            body: 'Tracking of the crop’s productive health.',
            icon: 'trending',
          },
          {
            name: 'Climate',
            body: 'Tracking of climate and atmospheric conditions.',
            icon: 'cloudSun',
          },
          {
            name: 'Vegetative forecast',
            body: 'Crop status and production forecast per harvest.',
            icon: 'brain',
          },
          { name: 'Health', body: 'Tracking of potential crop diseases.', icon: 'heart' },
          {
            name: 'Sustainability',
            body: 'Water use, carbon capture and more.',
            icon: 'leaf',
          },
        ],
        note: 'Licenses last one year and are assigned to an administrator profile chosen by the producer.',
      },
      {
        kicker: 'In the app',
        title: 'Eight indicators on every plot',
        items: [
          {
            name: 'Green biomass',
            body: 'Vegetation cover and germination.',
            icon: 'sprout',
          },
          {
            name: 'Nitrogen',
            body: 'Nutrient level of plants in production.',
            icon: 'atom',
          },
          { name: 'Water stress', body: 'Optimal water requirement.', icon: 'droplets' },
          { name: 'Rainfall', body: 'Expected amount of rain.', icon: 'cloudRain' },
          {
            name: 'Temperature',
            body: 'Likely heat or cold events.',
            icon: 'thermometer',
          },
          { name: 'Notifications', body: 'SMS, WhatsApp and email.', icon: 'bell' },
          { name: 'Growth stage', body: 'Crop development progress.', icon: 'activity' },
          { name: 'Expected harvest', body: 'Estimated date and volume.', icon: 'wheat' },
        ],
      },
      {
        kicker: 'Health analysis',
        title: 'Disease alerts at every growth stage',
        intro:
          'Disease monitoring and likelihood of occurrence at each crop stage, so producers can act before an outbreak affects the harvest.',
        items: [
          {
            name: 'Crop',
            body: 'Growth stage and likelihood of different diseases.',
            icon: 'sprout',
          },
          {
            name: 'Diseases',
            body: 'Predictive model of potential impact.',
            icon: 'bug',
          },
          {
            name: 'Agrochemical management',
            body: 'Fungus and disease control with the right application.',
            icon: 'flask',
          },
        ],
      },
    ],
    commercial: 'Introductory pricing: price per license + price per hectare analyzed.',
  },
  {
    slug: 'analisis-sectorial',
    icon: 'map',
    name: 'Sector analysis',
    short: 'Production, health and risk for every zone: country, province and canton.',
    kicker: 'Sector analysis · Zonal production status',
    headline: 'Every active hectare in a region, seen from space.',
    intro:
      'Large-scale analysis by geographic zone to find how many hectares of each crop are active, their vegetative status, health and climate risks. For corporate, institutional and government clients, by production segment (micro, SME, corporate) and by cycle.',
    highlights: [
      { value: '10×10 m', label: 'data resolution' },
      { value: '3 levels', label: 'country, province and canton' },
      { value: 'Season', label: 'planted area per cycle' },
    ],
    steps: {
      kicker: 'How it works',
      title: 'Six readings on the geography you choose',
      items: [
        {
          name: 'Production zones',
          body: 'Identify production zones by crop in the geographies the client selects.',
        },
        { name: 'Georeferencing', body: 'Georeference the plots in production.' },
        {
          name: 'Potential tonnage',
          body: 'Estimate potential production tonnage: supply and price projections.',
        },
        {
          name: 'Productivity levels',
          body: 'Determine productivity levels in each zone.',
        },
        { name: 'Health', body: 'Detect the health status of the crops identified.' },
        { name: 'Climate risk', body: 'Analyze the climate risks found in the zone.' },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Indicators',
        title: 'What each analysis measures',
        items: [
          {
            name: 'Crop identification',
            body: 'Geographic location of crops in production.',
            icon: 'wheat',
          },
          {
            name: 'Green biomass',
            body: 'Vegetation cover and germination.',
            icon: 'leaf',
          },
          { name: 'Health', body: 'Crop health risks.', icon: 'heart' },
          { name: 'Temperature', body: 'Climate risk in the zone.', icon: 'thermometer' },
        ],
      },
      {
        kicker: 'Georeferencing',
        title: 'Large-scale zonal analysis',
        intro:
          'The map view shows the estimated cultivated area in a region for the selected season.',
        items: [
          {
            name: 'Identification',
            body: 'Crops in the selected zone, georeferenced by country, province and canton.',
            icon: 'target',
          },
          {
            name: 'Active hectares',
            body: 'Active hectares of the crop studied and their yield.',
            icon: 'layers',
          },
          {
            name: 'Yield by period',
            body: 'Yield of active crops over configurable time windows.',
            icon: 'calendar',
          },
        ],
      },
    ],
    commercial: 'Price per km² analyzed, per crop.',
  },
  {
    slug: 'riesgo-climatico',
    icon: 'cloudSun',
    name: 'Zonal climate risk',
    short:
      'Climate, ENSO and water stress on financed plots, mapped to the Basel framework.',
    kicker: 'Climate analytics · Zonal physical risk',
    headline: 'Climate risk is measured by zone, not by client.',
    intro:
      'A portfolio diversified by client can still be concentrated in the same basin, crop and harvest calendar. We monitor every agroclimatic zone (country, province, canton): rainfall and temperature anomalies, ENSO events, drought and flooding, crossed with portfolio exposure.',
    highlights: [
      { value: 'Weekly', label: 'satellite monitoring by zone' },
      { value: 'ENSO', label: 'stress test with the 1997–98 El Niño' },
      { value: '5', label: 'Basel fronts covered' },
    ],
    steps: {
      kicker: 'How it works',
      title: 'Four tools on the same georeferenced portfolio',
      items: [
        {
          name: 'Exposure map',
          points: [
            'Georeferences every financed plot',
            'Crosses the balance with the hazard by zone, crop and cycle',
            'Exposed balance by basin and canton, not only by province',
          ],
        },
        {
          name: 'Weekly zonal monitoring',
          points: [
            'Satellite reports on the zones where clients are',
            'Alerts for extreme rainfall, drought and heat waves',
            'A log of climate indicators for the institution',
          ],
        },
        {
          name: 'ENSO stress test',
          points: [
            "Applies the 1997–98 El Niño scenario to today's portfolio",
            'Incremental expected loss by zone and crop',
            'Input for provisions and risk appetite',
          ],
        },
        {
          name: 'Repayment calendar',
          points: [
            'Crosses each due date with the rainy-season window',
            'Prioritizes rescheduling before default',
            'Preventive collections triggered by crop condition',
          ],
        },
      ],
    },
    basel: {
      kicker: 'Basel · Climate risk',
      title: 'Basel already treats climate as a prudential risk on five fronts',
      intro:
        "The Basel Committee defines climate as a driver of the risks banks already manage: without climate variables, they can't measure or report them.",
      requiresLabel: 'What it requires',
      contributionLabel: "InteliCrop's contribution",
      items: [
        {
          name: 'Governance and appetite',
          body: 'The board brings climate into strategy and sets how much climate risk it accepts.',
          requires: 'Defined owners and limits',
          contribution: 'Exposure by agroclimatic zone, crop and cycle',
        },
        {
          name: 'Credit risk',
          body: "Origination, monitoring and collateral reflect the plot's climate hazard.",
          requires: 'Climate in PD, LGD and collateral',
          contribution: 'Plot georeference, hazard and crop condition',
        },
        {
          name: 'Capital and liquidity',
          body: 'Internal capital and liquidity assessment includes climate impact.',
          requires: 'Adequacy under shock',
          contribution: 'Incremental expected loss per climate event',
        },
        {
          name: 'Scenarios and stress',
          body: 'The bank measures its resilience to severe but plausible climate scenarios.',
          requires: 'Scenario analysis',
          contribution: "1997–98 ENSO scenario applied to today's portfolio",
        },
        {
          name: 'Disclosure (Pillar 3)',
          body: 'The 2025 framework asks banks to report physical-risk exposure by region.',
          requires: 'Qualitative and quantitative reporting',
          contribution: 'Exposed balance by province, canton and hazard',
        },
      ],
      closing:
        "All five requirements start from the same data: the georeferenced portfolio crossed with each zone's climate hazard.",
      sources:
        'BCBS, Principles for the effective management and supervision of climate-related financial risks (Jun 2022) · BCBS, A framework for the voluntary disclosure of climate-related financial risks (Jun 2025).',
    },
    formulas: {
      kicker: 'Expected loss adjustment',
      title: 'Measured once, with two outputs: regulatory and credit',
      items: [
        {
          name: 'Adjusted PD',
          expression: 'Base PD × (1 + k × productive deterioration × hazard)',
        },
        {
          name: 'Adjusted LGD',
          expression: 'Base LGD × (1 + k × hazard × (1 − resilience))',
        },
        { name: 'Expected loss', expression: 'Adjusted PD × Adjusted LGD × Exposure' },
      ],
      note: 'Incremental expected loss, with and without the climate adjustment and in dollars on the real portfolio, lets you compare the program cost with the loss it avoids.',
    },
    footnote:
      "Safeguard: the score complements the bank's model, it doesn't replace it. No adverse decision about a client rests on the climate signal alone; every decision keeps documented human review.",
  },
  {
    slug: 'analitica-de-precision',
    icon: 'satellite',
    name: 'Precision analytics',
    short: 'Satellite monitoring at 3×3 m and AI models for 170+ crops.',
    kicker: 'Precision analytics · AI models',
    headline: 'Six information fronts on every crop.',
    intro:
      'We use more than 200 satellites covering every region of the world to produce high-definition imagery (3×3 m), from which we extract crop data and productive indicators. Over 40 years of imagery and 20 years of global crop tracking power precision models that run 100% in the cloud, available 24/7.',
    highlights: [
      { value: '200+', label: 'satellites' },
      { value: '3×3 m', label: 'resolution per image' },
      { value: '40+ years', label: 'of imagery history' },
      { value: '170+', label: 'crops with machine learning' },
    ],
    featureBlocks: [
      {
        kicker: 'Six fronts',
        title: 'Identify, analyze, alert and control the whole cycle',
        items: [
          {
            name: 'Monitoring',
            body: 'Real-time vegetative status and key development indicators.',
            icon: 'sprout',
          },
          {
            name: 'Outlook',
            body: 'Harvest planning and projected production tonnage.',
            icon: 'tractor',
          },
          {
            name: 'Disease',
            body: 'Control and notification of disease driven by climate shifts and pests.',
            icon: 'bug',
          },
          {
            name: 'Alerts',
            body: 'Tailored alerts on climate, production and sustainability.',
            icon: 'bell',
          },
          {
            name: 'Planning',
            body: 'Fertilization, application and corrective decisions.',
            icon: 'calendar',
          },
          {
            name: 'Development',
            body: 'Training in best practices by soil, geography and climate.',
            icon: 'graduation',
          },
        ],
      },
      {
        kicker: 'AI models',
        title: 'Prediction and intelligence on climate and production data',
        intro: 'We keep investing in domain-specific foundation models.',
        items: [
          {
            name: 'Crop detection',
            body: 'Detects crop area and estimates production by country, canton or plot.',
            icon: 'scan',
          },
          {
            name: 'Nitrogen uptake',
            body: 'Monitors the crop’s nitrogen uptake.',
            icon: 'atom',
          },
          {
            name: 'Water stress',
            body: 'Recommends irrigation by location and growth stage.',
            icon: 'droplets',
          },
          { name: 'Disease', body: 'Early disease warnings.', icon: 'bug' },
          {
            name: 'Crop progress',
            body: 'Tracks the crop’s growth stage.',
            icon: 'activity',
          },
          {
            name: 'Yield forecast',
            body: 'Estimates yield up to maturity.',
            icon: 'trending',
          },
        ],
      },
      {
        kicker: 'The foundation',
        title: 'High-value data for every player in the sector',
        items: [
          {
            name: 'Analytics',
            body: '200+ satellites worldwide and high-definition imagery at 3×3 m.',
            icon: 'satellite',
          },
          {
            name: 'Data',
            body: '40+ years of imagery and 20 years of global crop tracking.',
            icon: 'database',
          },
          {
            name: 'Cloud',
            body: '100% cloud: data and processing available 24/7.',
            icon: 'cloud',
          },
          {
            name: 'Crops',
            body: '170+ crops, distinguishing strains and types, under continuous machine learning.',
            icon: 'wheat',
          },
        ],
      },
    ],
  },
  {
    slug: 'visualizadores',
    icon: 'chart',
    name: 'Automated dashboards',
    short: 'Smart dashboards that turn large volumes of data into decisions.',
    kicker: 'Dashboards · Smart monitoring',
    headline: 'Large volumes of data, turned into decisions.',
    intro:
      'A streamlined platform that turns large volumes of data into visual stories that drive profitable decisions and produce timely, actionable insights. A summary of producer conditions by zone, segment and crop type. Powered by Microsoft Power BI.',
    highlights: [
      { value: 'Daily', label: 'data refresh' },
      { value: '3', label: 'alert modules' },
      { value: 'Power BI', label: 'by Microsoft' },
    ],
    steps: {
      kicker: "What's included",
      title: 'Monitoring and tracking in a single dashboard',
      items: [
        {
          name: 'Dynamic platform',
          body: 'Accumulated information on crop, producer and zone status.',
        },
        { name: 'Daily refresh', body: 'Information is updated every day.' },
        { name: 'Alert modules', body: 'Climate, production and health alerts.' },
        {
          name: 'Production module',
          body: 'Productive indicators, vegetative health and projections.',
        },
        {
          name: 'Sustainability module',
          body: 'CO₂, water use and deforestation indicators.',
        },
      ],
    },
    featureBlocks: [
      {
        kicker: 'Views',
        title: 'Five lenses on your producer portfolio',
        items: [
          {
            name: 'Production',
            body: 'Yield, phenology and projections.',
            icon: 'wheat',
          },
          {
            name: 'Producers',
            body: 'Status by producer, zone and segment.',
            icon: 'users',
          },
          { name: 'Climate', body: 'Conditions and climate alerts.', icon: 'cloudSun' },
          { name: 'Health', body: 'Crop health risks.', icon: 'heart' },
          {
            name: 'Sustainability',
            body: 'Carbon, water and deforestation.',
            icon: 'leaf',
          },
        ],
      },
    ],
    commercial: 'Monthly usage license — Power BI.',
  },
  {
    slug: 'sostenibilidad-eudr',
    icon: 'leaf',
    name: 'Sustainability and EUDR',
    short: 'Carbon footprint, water use, deforestation and EUDR compliance.',
    kicker: 'Sustainability · Indicators and compliance',
    headline: 'Bigger harvests, smaller footprint.',
    intro:
      "A simple portal for understanding how crops evolve and their environmental impact: carbon footprint, water use and deforestation. With historical control of each analyzed polygon going back before 2020, to comply with the EU's deforestation-free products regulation.",
    highlights: [
      { value: '12/31/2020', label: 'EUDR deforestation cut-off date' },
      { value: 'Polygon', label: 'complete and geolocated' },
      { value: 'Carbon + water', label: 'measured with the same satellite data' },
    ],
    featureBlocks: [
      {
        kicker: 'Carbon footprint',
        title: 'What the crop does to the land',
        items: [
          {
            name: 'Deforestation monitoring',
            body: 'Land use: forest vs. crops.',
            icon: 'trees',
          },
          {
            name: 'Carbon capture in biomass',
            body: 'Carbon capture estimation model.',
            icon: 'atom',
          },
          {
            name: 'Efficient irrigation model',
            body: 'Water use combining irrigation and rainfall, linked to weather conditions.',
            icon: 'droplets',
          },
        ],
      },
      {
        kicker: 'Sustainable practices',
        title: 'Seven key practices, available to producers',
        items: [
          {
            name: 'Crop management',
            body: 'Data-driven production management.',
            icon: 'sprout',
          },
          {
            name: 'Carbon footprint',
            body: 'Continuous monitoring.',
            icon: 'footprints',
          },
          { name: 'Deforestation', body: 'Polygon control.', icon: 'trees' },
          {
            name: 'Water footprint',
            body: 'Reduction and irrigation advice.',
            icon: 'droplets',
          },
          { name: 'Land use', body: 'Cover and land-use change.', icon: 'layers' },
          { name: 'On-farm waste', body: 'Waste management.', icon: 'recycle' },
          { name: 'Agrochemicals', body: 'Responsible input use.', icon: 'flask' },
        ],
        note: 'Committed to the SDGs: Zero hunger · Decent work · Responsible production · Climate action · Life on land.',
      },
    ],
    timeline: {
      kicker: 'EUDR compliance',
      title: 'EU regulation on deforestation-free products',
      items: [
        { name: 'Adoption', date: 'May 2023', icon: 'gavel' },
        { name: 'Entry into force', date: 'May 2023', icon: 'file' },
        { name: 'Large companies', date: 'December 2025', icon: 'factory' },
        { name: 'SMEs', date: 'June 2026', icon: 'box' },
      ],
      facts: [
        'Covers products linked to deforestation: wood, cattle, soy, palm oil, coffee, cocoa, rubber and their derivatives.',
        'Products cannot come from land deforested or degraded after December 31, 2020.',
        'The exact location of production plots must be identified: geolocation and analysis of the full polygon.',
      ],
      note: "CROPIN's digital tools control deforestation on analyzed polygons using historical data from before 2020.",
    },
  },
  {
    slug: 'capacitaciones',
    icon: 'graduation',
    name: 'Ongoing training',
    short: 'Training for producers and teams on tools, alerts and best practices.',
    kicker: 'Ongoing training',
    headline: 'Technology that takes root in the field.',
    intro:
      'A training program on using the digital tools, alert systems and production data, with recommended techniques for crop control and development and best practices from other countries. For producers and for the institutions that support them.',
    highlights: [
      { value: '2 audiences', label: 'producers and stakeholders' },
      { value: 'Ongoing', label: 'throughout the cycle' },
      { value: 'Global', label: 'best practices from other countries' },
    ],
    featureBlocks: [
      {
        kicker: 'Topics',
        title: 'From data to practice',
        items: [
          {
            name: 'Digital tools',
            body: 'Using the app, dashboards and indicators.',
            icon: 'smartphone',
          },
          {
            name: 'Alert systems',
            body: 'How to read and act on every alert.',
            icon: 'bell',
          },
          {
            name: 'Production data',
            body: 'Interpreting indicators and projections.',
            icon: 'chart',
          },
          {
            name: 'Crop control',
            body: 'Techniques for crop control and development.',
            icon: 'sprout',
          },
          {
            name: 'Best practices',
            body: 'What works elsewhere, adapted locally.',
            icon: 'globe',
          },
          {
            name: 'Soil, geography and climate',
            body: 'Advice tailored to each crop’s conditions.',
            icon: 'layers',
          },
        ],
      },
    ],
  },
]
