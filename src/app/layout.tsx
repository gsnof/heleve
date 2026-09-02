import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { CLINIC_INFO } from "@/data/clinicData";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#06080B",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Clínica Heleve | Implante Dentário, Ortodontia e Nutrologia Esportiva em São João del-Rei",
  description:
    "Clínica Heleve em São João del-Rei - MG. Excelência em implantes dentários, reabilitação oral de alta precisão, ortodontia e nutrologia esportiva. Atendimento com hora marcada.",
  keywords: [
    "Clínica Heleve",
    "Clínica Heleve São João del-Rei",
    "implante dentário São João del-Rei",
    "ortodontia São João del-Rei",
    "nutrologia esportiva São João del-Rei",
    "dentista São João del-Rei",
    "reabilitação oral São João del-Rei",
    "Dr Leonardo Leite",
    "odontologia estética São João del-Rei",
  ],
  authors: [{ name: "Clínica Heleve" }],
  creator: "Clínica Heleve",
  publisher: "Clínica Heleve",
  formatDetection: {
    telephone: true,
    address: true,
    email: false,
  },
  metadataBase: new URL("https://heleveclinica.com.br"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Clínica Heleve | Implante Dentário, Ortodontia e Nutrologia Esportiva",
    description:
      "Saúde, confiança e excelência em cada detalhe. Odontologia especializada e nutrologia esportiva em São João del-Rei - MG.",
    url: "https://heleveclinica.com.br",
    siteName: "Clínica Heleve",
    images: [
      {
        url: "/images/corpo-clinico-consultorio.jpg",
        width: 1200,
        height: 630,
        alt: "Corpo Clínico da Clínica Heleve em São João del-Rei",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Clínica Heleve | Implante Dentário, Ortodontia e Nutrologia Esportiva",
    description:
      "Referência em reabilitação oral, implantes, ortodontia e nutrologia esportiva em São João del-Rei.",
    images: ["/images/corpo-clinico-consultorio.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": "https://heleveclinica.com.br/#clinic",
      name: CLINIC_INFO.name,
      legalName: CLINIC_INFO.legalName,
      description: CLINIC_INFO.subheadline,
      url: "https://heleveclinica.com.br",
      telephone: CLINIC_INFO.phone,
      logo: "https://heleveclinica.com.br/images/logo-heleve.jpg",
      image: "https://heleveclinica.com.br/images/corpo-clinico-consultorio.jpg",
      address: {
        "@type": "PostalAddress",
        streetAddress: `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.number}`,
        addressLocality: CLINIC_INFO.address.city,
        addressRegion: CLINIC_INFO.address.state,
        postalCode: CLINIC_INFO.address.zipCode,
        addressCountry: "BR",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -21.1356,
        longitude: -44.2618,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "08:30",
          closes: "12:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "13:00",
          closes: "18:00",
        },
      ],
      sameAs: [CLINIC_INFO.instagramUrl],
      medicalSpecialty: [
        "https://health-lifesci.schema.org/Dentistry",
        "https://health-lifesci.schema.org/SportsMedicine",
      ],
      priceRange: "$$$",
    },
    {
      "@type": "Dentist",
      "@id": "https://heleveclinica.com.br/#dentist",
      name: "Clínica Heleve - Odontologia Especializada",
      telephone: CLINIC_INFO.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: `${CLINIC_INFO.address.street}, ${CLINIC_INFO.address.number}`,
        addressLocality: CLINIC_INFO.address.city,
        addressRegion: CLINIC_INFO.address.state,
        postalCode: CLINIC_INFO.address.zipCode,
        addressCountry: "BR",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${plusJakarta.variable}`}>
      <head>
        <link rel="icon" href="/images/logo-heleve.jpg" type="image/jpeg" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-obsidian-950 text-warmWhite selection:bg-gold-400 selection:text-obsidian-950 antialiased font-sans">
        {children}
      </body>
    </html>
  );
}
