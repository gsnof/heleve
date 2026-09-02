import React from "react";
import { Container } from "@/components/ui/Container";
import { CLINIC_INFO, SPECIALTIES } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Instagram, Phone, MessageCircle, MapPin, Clock, Shield } from "lucide-react";
import { asset } from "@/lib/assets";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const footerWaUrl = getWhatsAppUrl(
    "Olá! Conheci a Clínica Heleve pelo site e gostaria de tirar uma dúvida."
  );

  return (
    <footer className="bg-obsidian-950 border-t border-gold-400/15 pt-16 pb-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4 flex flex-col items-start">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full overflow-hidden border border-gold-400/40 p-0.5 bg-obsidian-900 flex-shrink-0">
                <img
                  src={asset("/images/logo-heleve.jpg")}
                  alt="Logo Clínica Heleve"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-xl font-bold tracking-widest text-gold-200 uppercase">
                  Heleve
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                  Odontologia & Saúde
                </span>
              </div>
            </div>

            <p className="mt-4 text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
              Referência em implante dentário, ortodontia e nutrologia esportiva em São João del-Rei.
              Tratamentos integrados com alta tecnologia, respeito ao paciente e rigor diagnóstico.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a
                href={CLINIC_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-gold-400/20 border border-white/10 hover:border-gold-400/40 flex items-center justify-center text-slate-300 hover:text-gold-300 transition-colors"
                aria-label="Instagram Oficial da Clínica Heleve"
              >
                <Instagram className="w-4 h-4" />
              </a>

              <a
                href={footerWaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-emerald-500/20 border border-white/10 hover:border-emerald-500/40 flex items-center justify-center text-slate-300 hover:text-emerald-400 transition-colors"
                aria-label="WhatsApp da Clínica Heleve"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Specialties */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-300 mb-4">
              Especialidades
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {SPECIALTIES.map((spec) => (
                <li key={spec.id}>
                  <a
                    href="#especialidades"
                    className="hover:text-gold-200 transition-colors block py-0.5"
                  >
                    {spec.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#especialidades" className="hover:text-gold-200 transition-colors block py-0.5">
                  Reabilitação Oral e Próteses
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-gold-200 transition-colors block py-0.5">
                  Estética do Sorriso & Oclusão
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-300 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <a href="#sobre" className="hover:text-gold-200 transition-colors block py-0.5">
                  A Clínica
                </a>
              </li>
              <li>
                <a href="#especialidades" className="hover:text-gold-200 transition-colors block py-0.5">
                  Especialidades
                </a>
              </li>
              <li>
                <a href="#resultados" className="hover:text-gold-200 transition-colors block py-0.5">
                  Resultados Reais
                </a>
              </li>
              <li>
                <a href="#equipe" className="hover:text-gold-200 transition-colors block py-0.5">
                  Corpo Clínico
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-gold-200 transition-colors block py-0.5">
                  Dúvidas Frequentes
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-gold-200 transition-colors block py-0.5">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Verified Legal Info */}
          <div className="lg:col-span-3">
            <h4 className="font-serif text-sm font-semibold uppercase tracking-wider text-gold-300 mb-4">
              Informações Oficiais
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold-400 flex-shrink-0 mt-0.5" />
                <span>{CLINIC_INFO.address.full}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>
                  Fixo:{" "}
                  <a
                    href={`tel:${CLINIC_INFO.phoneFormatted}`}
                    className="text-slate-300 hover:text-gold-300 transition-colors"
                    title="Ligar para o Telefone Fixo"
                  >
                    {CLINIC_INFO.phone}
                  </a>
                  {" • "}
                  WhatsApp:{" "}
                  <a
                    href={footerWaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 hover:text-emerald-300 transition-colors"
                    title="Abrir WhatsApp"
                  >
                    {CLINIC_INFO.whatsapp}
                  </a>
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>Seg a Sex: 08:30–12:00 | 13:00–18:00</span>
              </div>
              <div className="flex items-center gap-2.5 pt-2 border-t border-white/5">
                <Shield className="w-4 h-4 text-gold-400 flex-shrink-0" />
                <span>CNES: {CLINIC_INFO.cnes} • {CLINIC_INFO.legalName}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-footer Copyright and Compliance */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-slate-500 font-light">
          <p>
            © {currentYear} {CLINIC_INFO.name}. Todos os direitos reservados.
          </p>
          <p>
            As imagens e informações deste site possuem caráter informativo e institucional, em
            conformidade com as normas dos Conselhos Federais e Regionais de Saúde.
          </p>
        </div>
      </Container>
    </footer>
  );
}
