export interface Specialty {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaMessage: string;
  image: string;
  iconName: string;
}

export interface Differential {
  title: string;
  description: string;
  iconName: string;
}

export interface TeamMember {
  name: string;
  role: string;
  specialties: string[];
  description: string;
  image: string;
  cro?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ClinicalCase {
  id: string;
  title: string;
  description: string;
  treatmentType: string;
  category: "odontologia" | "nutrologia";
  image: string;
  highlights?: string[];
}

export const CLINIC_INFO = {
  name: "Clínica Heleve",
  legalName: "Heleve Odontologia e Saúde Ltda.",
  tagline: "Implante Dentário, Ortodontia e Nutrologia Esportiva",
  headline: "Saúde, confiança e excelência em cada detalhe.",
  subheadline:
    "Referência em odontologia especializada, reabilitação oral de alta precisão e nutrologia esportiva. Cuidado multidisciplinar e atendimento com horário marcado em São João del-Rei.",
  phone: "(32) 3518-5253",
  whatsapp: "(32) 99837-0905",
  whatsappRaw: "5532998370905",
  instagramUrl: "https://www.instagram.com/heleveclinica/",
  instagramHandle: "@heleveclinica",
  cnes: "0819867",
  address: {
    street: "Avenida Trinta e Um de Março",
    number: "1291A",
    neighborhood: "Colônia do Marçal",
    city: "São João del-Rei",
    state: "MG",
    zipCode: "36302-016",
    full: "Av. Trinta e Um de Março, 1291A - Colônia do Marçal, São João del-Rei - MG, 36302-016",
    mapsUrl: "https://maps.google.com/?q=Av.+Trinta+e+Um+de+Março,+1291A,+Colônia+do+Marçal,+São+João+del-Rei+-+MG",
  },
  openingHours: {
    weekdays: "Segunda a Sexta: 08:30 às 12:00 | 13:00 às 18:00",
    weekends: "Sábado e Domingo: Fechado (atendimentos com agendamento prévio)",
  },
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "implantes",
    title: "Implante Dentário e Reabilitação Oral",
    subtitle: "Recupere a mastigação, segurança e a harmonia do seu sorriso",
    badge: "Reabilitação de Alta Precisão",
    description:
      "Tratamento planejado com rigor clínico e diagnóstico tomográfico computadorizado para repor perdas dentárias parciais ou totais. Devolve a capacidade mastigatória, estabilidade oclusal e a naturalidade estética com materiais biocompatíveis de padrão superior.",
    benefits: [
      "Planejamento diagnóstico individualizado",
      "Restauração da função mastigatória e fonética",
      "Soluções para perdas unitárias, múltiplas ou protocolo total",
      "Conforto e previsibilidade em cada etapa do procedimento",
    ],
    ctaText: "Quero saber sobre implantes",
    ctaMessage: "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação para Implante Dentário.",
    image: "/images/caso-clinico-1.jpg",
    iconName: "ShieldCheck",
  },
  {
    id: "ortodontia",
    title: "Ortodontia & Estética do Sorriso",
    subtitle: "Alinhamento com foco na oclusão correta e harmonia facial",
    badge: "Planejamento Digital",
    description:
      "Avaliação ortodôntica minuciosa para correção de desalinhamentos, mordidas inadequadas e espaçamentos dentários. O tratamento visa restabelecer a função mastigatória ideal, a facilidade de higienização e a beleza proporcional do sorriso.",
    benefits: [
      "Diagnóstico facial e oclusal detalhado",
      "Alinhamento dos arcos dentários com conforto",
      "Prevenção de desgastes e sobrecargas articulares",
      "Acompanhamento frequente e suporte personalizado",
    ],
    ctaText: "Quero avaliar meu sorriso",
    ctaMessage: "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação de Ortodontia.",
    image: "/images/caso-clinico-2.jpg",
    iconName: "Smile",
  },
  {
    id: "nutrologia",
    title: "Nutrologia Esportiva & Performance",
    subtitle: "Saúde integrativa, composição corporal e rendimento físico",
    badge: "Saúde & Longevidade",
    description:
      "Acompanhamento médico focado na otimização metabólica, equilíbrio nutricional e composição corporal. Ideal tanto para atletas de rendimento quanto para pessoas que buscam mais disposição, qualidade de vida e longevidade saudável.",
    benefits: [
      "Avaliação metabólica e bioquímica individual",
      "Planejamento de estratégias nutricionais esportivas",
      "Foco em composição corporal, energia e recuperação muscular",
      "Conduta fundamentada em evidências científicas e metas pessoais",
    ],
    ctaText: "Agendar consulta de nutrologia",
    ctaMessage: "Olá! Conheci a Clínica Heleve pelo site e gostaria de saber mais sobre a consulta de Nutrologia Esportiva.",
    image: "/images/caso-nutrologia-1.jpg",
    iconName: "Activity",
  },
];

export const CLINICAL_CASES: ClinicalCase[] = [
  {
    id: "1",
    title: "Reabilitação com Implantes Dentários",
    description: "Recuperação completa da estética do sorriso e da capacidade mastigatória com reabilitação oral planejada.",
    treatmentType: "Implante Dentário & Reabilitação",
    category: "odontologia",
    image: "/images/caso-clinico-1.jpg",
    highlights: ["Recuperação mastigatória", "Naturalidade estética"],
  },
  {
    id: "2",
    title: "Transformação do Sorriso e Função Oclusal",
    description: "Reestruturação anatômica com alinhamento, fechamento de espaços e estabilidade funcional.",
    treatmentType: "Reabilitação Estética & Funcional",
    category: "odontologia",
    image: "/images/caso-clinico-2.jpg",
    highlights: ["Alinhamento anatômico", "Estabilidade oclusal"],
  },
  {
    id: "3",
    title: "Harmonia Estética e Rejuvenescimento",
    description: "Restabelecimento da dimensão oclusal, suporte labial e harmonia proporcional do sorriso.",
    treatmentType: "Reabilitação Oral Avançada",
    category: "odontologia",
    image: "/images/caso-clinico-3.jpg",
    highlights: ["Suporte labial", "Rejuvenescimento facial"],
  },
  {
    id: "4",
    title: "Transformação Corporal em 3 Meses",
    description: "Evolução metabólica expressiva com -12 kg de peso e -14 cm de cintura através de acompanhamento personalizado.",
    treatmentType: "Nutrologia & Composição Corporal",
    category: "nutrologia",
    image: "/images/caso-nutrologia-1.jpg",
    highlights: ["-12 kg de peso", "-14 cm de cintura", "+ Disposição"],
  },
  {
    id: "5",
    title: "Evolução e Definição em 1 Mês",
    description: "Resultados obtidos com planejamento nutricional, otimização de rotina e acompanhamento focado.",
    treatmentType: "Nutrologia & Performance",
    category: "nutrologia",
    image: "/images/caso-nutrologia-2.jpg",
    highlights: ["Redução de medidas", "Otimização metabólica"],
  },
];

export const DIFFERENTIALS: Differential[] = [
  {
    title: "Abordagem Multidisciplinar Integrada",
    description:
      "União da odontologia reabilitadora e estética à nutrologia esportiva, promovendo saúde sistêmica, bem-estar e performance completa.",
    iconName: "HeartPulse",
  },
  {
    title: "Diagnóstico Rigoroso e Preciso",
    description:
      "Análise aprofundada baseada em exames radiográficos, tomográficos e avaliação clínica detalhada para máxima previsibilidade.",
    iconName: "Sparkles",
  },
  {
    title: "Atendimento com Horário Marcado",
    description:
      "Respeito absoluto ao seu tempo, com consultas com horários dedicados e atendimento atencioso em cada etapa da jornada.",
    iconName: "Clock",
  },
  {
    title: "Estrutura Moderna e Acolhedora",
    description:
      "Ambiente pensado para proporcionar tranquilidade, segurança sanitária e máximo conforto durante todo o seu atendimento.",
    iconName: "Building",
  },
];

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Contato Inicial",
    description: "Clique em qualquer botão do site para iniciar uma conversa direta e rápida pelo WhatsApp oficial da clínica.",
  },
  {
    step: "02",
    title: "Agendamento Personalizado",
    description: "Nossa equipe orienta sobre os horários disponíveis e reserva o melhor momento para sua visita.",
  },
  {
    step: "03",
    title: "Avaliação Clínica Individual",
    description: "Consulta detalhada com análise das suas necessidades, queixas, exames e planejamento sob medida.",
  },
  {
    step: "04",
    title: "Plano e Acompanhamento",
    description: "Apresentação clara das orientações, etapas do tratamento e acompanhamento contínuo da sua evolução.",
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Como funciona o agendamento de uma avaliação na Clínica Heleve?",
    answer:
      "O agendamento é feito de forma simples e rápida através do nosso WhatsApp oficial (32) 99837-0905 ou telefone (32) 3518-5253. Nossa equipe apresentará os horários disponíveis de acordo com a sua preferência.",
    category: "Agendamento",
  },
  {
    question: "A clínica atende com horário marcado?",
    answer:
      "Sim. Todos os atendimentos na Clínica Heleve são realizados com horário previamente reservado, garantindo pontualidade, privacidade e dedicação exclusiva do profissional ao seu caso.",
    category: "Atendimento",
  },
  {
    question: "Como saber se o implante dentário é indicado para mim?",
    answer:
      "A indicação de implantes requer uma consulta de avaliação presencial, onde analisamos sua saúde bucal, histórico clínico e realizamos o estudo de exames radiográficos e tomográficos da estrutura óssea.",
    category: "Odontologia",
  },
  {
    question: "O que é avaliado na consulta de Nutrologia Esportiva?",
    answer:
      "A consulta avalia seu estado nutricional e metabólico, rotina de treinos, objetivos de composição corporal (como ganho de massa magra ou redução de gordura), sono e biomarcadores, estabelecendo uma estratégia personalizada e fundamentada.",
    category: "Nutrologia",
  },
  {
    question: "Onde a Clínica Heleve está localizada em São João del-Rei?",
    answer:
      "Estamos localizados na Avenida Trinta e Um de Março, 1291A, no bairro Colônia do Marçal, em São João del-Rei - MG. O local conta com fácil acesso e estacionamento nas proximidades.",
    category: "Localização",
  },
  {
    question: "Quais são os dias e horários de funcionamento?",
    answer:
      "Nosso atendimento é de segunda a sexta-feira, das 08:30 às 12:00 e das 13:00 às 18:00. Caso precise de horários específicos, consulte nossa equipe pelo WhatsApp.",
    category: "Funcionamento",
  },
];
