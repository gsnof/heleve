import { LucideIcon } from "lucide-react";
import { asset } from "@/lib/assets";

export interface ClinicInfo {
  name: string;
  legalName: string;
  tagline: string;
  subheadline: string;
  description: string;
  cnes: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappFormatted: string;
  whatsappRaw: string;
  address: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    full: string;
    googleMapsUrl: string;
    googleMapsEmbedUrl: string;
  };
  instagram: string;
  instagramUrl: string;
  instagramHandle: string;
  operatingHours: {
    weekdays: string;
    saturday: string;
    sunday: string;
    note: string;
  };
}

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
  iconName: "ShieldCheck" | "Smile" | "Activity";
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

export interface Differential {
  title: string;
  description: string;
  iconName: "Sparkles" | "Clock" | "Cpu" | "HeartPulse" | "Award" | "CheckCircle2";
}

export interface FaqItem {
  question: string;
  answer: string;
  category?: string;
}

export interface StepItem {
  number: string;
  title: string;
  description: string;
}

export const CLINIC_INFO: ClinicInfo = {
  name: "Clínica Heleve",
  legalName: "Heleve Odontologia e Saúde Ltda.",
  tagline: "Implante Dentário, Ortodontia e Nutrologia Esportiva",
  subheadline:
    "Especialistas em implantes dentários, ortodontia e nutrologia esportiva. Cuidado integral com hora marcada em São João del-Rei.",
  description:
    "Clínica de alto padrão em São João del-Rei especializada em implantes dentários, reabilitação oral, estética do sorriso, ortodontia e nutrologia esportiva. Excelência, segurança e cuidado integrativo.",
  cnes: "0819867",
  phone: "(32) 3518-5253",
  phoneFormatted: "+553235185253",
  whatsapp: "(32) 99837-0905",
  whatsappFormatted: "5532998370905",
  whatsappRaw: "5532998370905",
  address: {
    street: "Avenida Trinta e Um de Março, 1291A",
    neighborhood: "Colônia do Marçal",
    city: "São João del-Rei",
    state: "MG",
    cep: "36302-016",
    full: "Av. Trinta e Um de Março, 1291A - Colônia do Marçal, São João del-Rei - MG, 36302-016",
    googleMapsUrl:
      "https://maps.google.com/?q=Avenida+Trinta+e+Um+de+Março,+1291A+-+Colônia+do+Marçal,+São+João+del-Rei+-+MG",
    googleMapsEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3725.2638843936636!2d-44.24151242398485!3d-21.12192138055273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1c1ee0c76fb97%3A0x6b801a6136d4f6c4!2sAv.%2031%20de%20Mar%C3%A7o%2C%201291A%20-%20Col%C3%B4nia%20do%20Mar%C3%A7al%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG%2C%2036302-016!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr",
  },
  instagram: "https://www.instagram.com/heleveclinica/",
  instagramUrl: "https://www.instagram.com/heleveclinica/",
  instagramHandle: "@heleveclinica",
  operatingHours: {
    weekdays: "08:30 às 12:00 | 13:00 às 18:00",
    saturday: "Mediante agendamento prévio",
    sunday: "Fechado",
    note: "Atendimento com hora marcada para garantir exclusividade, privacidade e pontualidade.",
  },
};

export const SPECIALTIES: Specialty[] = [
  {
    id: "implantes",
    title: "Implante Dentário e Reabilitação Oral",
    subtitle: "Recupere a mastigação, segurança e a harmonia do seu sorriso.",
    badge: "Reabilitação de Alta Precisão",
    description:
      "Tratamento planejado com rigor clínico e diagnóstico tomográfico para repor perdas dentárias parciais ou totais. Devolve a capacidade mastigatória, estabilidade oclusal e a naturalidade estética com materiais biocompatíveis de padrão superior.",
    benefits: [
      "Planejamento digital guiado e seguro",
      "Materiais nobres com alta biocompatibilidade",
      "Recuperação da eficiência mastigatória e suporte labial",
      "Ambiente cirúrgico moderno com protocolo de biossegurança",
    ],
    ctaText: "Quero saber sobre implantes",
    ctaMessage: "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação para Implante Dentário.",
    image: asset("/images/caso-clinico-1.jpg"),
    iconName: "ShieldCheck",
  },
  {
    id: "ortodontia",
    title: "Ortodontia & Estética do Sorriso",
    subtitle: "Alinhamento com foco na oclusão correta e harmonia facial.",
    badge: "Planejamento Digital",
    description:
      "Avaliação ortodôntica minuciosa para correção de desalinhamentos, mordidas inadequadas e espaçamentos. O tratamento visa restabelecer a função mastigatória ideal, a facilidade de higienização e a beleza proporcional do sorriso.",
    benefits: [
      "Diagnóstico ortodôntico minucioso",
      "Alinhamento dos dentes e equilíbrio estético do rosto",
      "Melhora da função mastigatória e respiração",
      "Acompanhamento personalizado em cada consulta",
    ],
    ctaText: "Quero avaliar meu sorriso",
    ctaMessage: "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação de Ortodontia.",
    image: asset("/images/caso-clinico-2.jpg"),
    iconName: "Smile",
  },
  {
    id: "nutrologia",
    title: "Nutrologia Esportiva & Performance",
    subtitle: "Saúde integrativa, composição corporal e rendimento físico.",
    badge: "Saúde & Longevidade",
    description:
      "Acompanhamento focado na otimização metabólica, equilíbrio nutricional e composição corporal. Ideal tanto para atletas quanto para quem busca mais disposição, controle de peso e longevidade saudável.",
    benefits: [
      "Avaliação metabólica e nutricional detalhada",
      "Estratégias para ganho de massa magra e redução de gordura",
      "Acompanhamento focado em energia, sono e performance",
      "Plano adaptado à sua rotina pessoal e objetivos reais",
    ],
    ctaText: "Agendar consulta de nutrologia",
    ctaMessage: "Olá! Conheci a Clínica Heleve pelo site e gostaria de saber mais sobre a consulta de Nutrologia Esportiva.",
    image: asset("/images/caso-nutrologia-1.jpg"),
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
    image: asset("/images/caso-clinico-1.jpg"),
    highlights: ["Recuperação mastigatória", "Naturalidade estética"],
  },
  {
    id: "2",
    title: "Transformação do Sorriso e Função Oclusal",
    description: "Reestruturação anatômica com alinhamento, fechamento de espaços e estabilidade funcional.",
    treatmentType: "Reabilitação Estética & Funcional",
    category: "odontologia",
    image: asset("/images/caso-clinico-2.jpg"),
    highlights: ["Alinhamento anatômico", "Estabilidade oclusal"],
  },
  {
    id: "3",
    title: "Harmonia Estética e Rejuvenescimento",
    description: "Restabelecimento da dimensão oclusal, suporte labial e harmonia proporcional do sorriso.",
    treatmentType: "Reabilitação Oral Avançada",
    category: "odontologia",
    image: asset("/images/caso-clinico-3.jpg"),
    highlights: ["Suporte labial", "Rejuvenescimento facial"],
  },
  {
    id: "4",
    title: "Transformação Corporal em 3 Meses",
    description: "Evolução metabólica expressiva com -12 kg de peso e -14 cm de cintura através de acompanhamento personalizado.",
    treatmentType: "Nutrologia & Composição Corporal",
    category: "nutrologia",
    image: asset("/images/caso-nutrologia-1.jpg"),
    highlights: ["-12 kg de peso", "-14 cm de cintura", "+ Disposição"],
  },
  {
    id: "5",
    title: "Evolução e Definição em 1 Mês",
    description: "Resultados obtidos com planejamento nutricional, otimização de rotina e acompanhamento focado.",
    treatmentType: "Nutrologia & Performance",
    category: "nutrologia",
    image: asset("/images/caso-nutrologia-2.jpg"),
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
    title: "Atendimento com Horário Marcado",
    description:
      "Respeito absoluto ao tempo do paciente. Consultas planejadas para garantir atenção exclusiva, sem esperas desnecessárias.",
    iconName: "Clock",
  },
  {
    title: "Tecnologia e Diagnóstico Preciso",
    description:
      "Planejamento detalhado com apoio de exames tomográficos e recursos modernos para máxima previsibilidade e segurança nos procedimentos.",
    iconName: "Cpu",
  },
  {
    title: "Ambiente Confortável e Acolhedor",
    description:
      "Consultórios estruturados para oferecer tranquilidade, privacidade e bem-estar desde a recepção até o término do tratamento.",
    iconName: "Sparkles",
  },
  {
    title: "Corpo Clínico Dedicado",
    description:
      "Profissionais com atuação focada em reabilitação oral, estética e acompanhamento metabólico, prezando pelo rigor técnico e ética.",
    iconName: "Award",
  },
  {
    title: "Transparência e Plano sob Medida",
    description:
      "Diagnósticos claros, explicações minuciosas de cada etapa e propostas terapêuticas alinhadas à sua saúde e expectativa.",
    iconName: "CheckCircle2",
  },
];

export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    number: "01",
    title: "Agendamento Prévio",
    description:
      "Entre em contato pelo WhatsApp e reserve o horário mais conveniente para sua consulta inicial em São João del-Rei.",
  },
  {
    number: "02",
    title: "Avaliação Diagnóstica & Exames",
    description:
      "Consulta completa para entender suas necessidades, analisar exames e planejar o tratamento com visão integral.",
  },
  {
    number: "03",
    title: "Apresentação do Plano Terapêutico",
    description:
      "Definição clara das etapas, tempo estimado, tecnologias empregadas e orientações personalizadas para o seu caso.",
  },
  {
    number: "04",
    title: "Tratamento & Acompanhamento Contínuo",
    description:
      "Execução do procedimento com conforto, segurança e suporte próximo da equipe da Clínica Heleve em todas as fases.",
  },
];

export const PROCESS_STEPS = HOW_IT_WORKS_STEPS;

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Onde a Clínica Heleve está localizada em São João del-Rei?",
    answer:
      "Estamos localizados na Avenida Trinta e Um de Março, 1291A, no bairro Colônia do Marçal, em São João del-Rei - MG (CEP 36302-016). Um local de fácil acesso e estacionamento prático.",
  },
  {
    question: "Como funciona o atendimento com horário marcado?",
    answer:
      "Para garantir pontualidade e dedicação total a cada paciente, realizamos todos os atendimentos mediante agendamento prévio. Assim, você não perde tempo em salas de espera e recebe o tempo necessário com os especialistas.",
  },
  {
    question: "Quais são as principais especialidades atendidas pela clínica?",
    answer:
      "Atuamos com foco em Implantes Dentários, Reabilitação Oral de alta precisão, Ortodontia (alinhamento e estética do sorriso) e Nutrologia Esportiva (otimização metabólica, saúde integrativa e composição corporal).",
  },
  {
    question: "Como agendar uma primeira avaliação?",
    answer:
      "Basta clicar em qualquer um dos botões de WhatsApp do site ou enviar uma mensagem direta para (32) 99837-0905. Nossa equipe responderá prontamente para encontrar o melhor dia e horário para você.",
  },
  {
    question: "O que esperar da consulta de Nutrologia Esportiva?",
    answer:
      "Na consulta de nutrologia é realizada uma anamnese aprofundada, análise de rotina de treinos, histórico metabólico e hábitos alimentares, estruturando um plano individualizado para atingir seus objetivos de saúde e rendimento.",
  },
  {
    question: "A clínica possui registro oficial nos órgãos de saúde?",
    answer:
      "Sim, a Clínica Heleve (Heleve Odontologia e Saúde Ltda.) opera em total conformidade com a vigilância sanitária e conselhos de classe, registrada no Cadastro Nacional de Estabelecimentos de Saúde sob o CNES 0819867.",
  },
];
