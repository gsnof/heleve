import React from "react";
import { Container } from "@/components/ui/Container";
import { MessageCircle, ArrowRight, ShieldCheck, Clock, MapPin, Sparkles } from "lucide-react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { asset } from "@/lib/assets";

export function Hero() {
  const heroWhatsAppUrl = getWhatsAppUrl(
    "Olá! Acessei o site da Clínica Heleve e gostaria de agendar uma avaliação com os especialistas."
  );

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 lg:pt-36 lg:pb-24 overflow-hidden">
      {/* Background Subtle Radial Glow & Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gold-400/8 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-gold-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Value Proposition & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Elegant Tag/Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-obsidian-900/90 border border-gold-400/30 text-gold-300 text-xs font-medium tracking-wide mb-6 shadow-sm backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-gold-400" />
              <span>Odontologia Especializada & Nutrologia Esportiva</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-warmWhite leading-[1.12] tracking-tight">
              Saúde, confiança e{" "}
              <span className="text-gold-gradient font-medium italic">excelência</span> em cada detalhe.
            </h1>

            {/* Subheadline */}
            <p className="mt-6 text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl">
              Especialistas em <strong className="text-warmWhite font-medium">implantes dentários</strong>,{" "}
              <strong className="text-warmWhite font-medium">ortodontia</strong> e{" "}
              <strong className="text-warmWhite font-medium">nutrologia esportiva</strong>. Um ambiente
              moderno, planejado para oferecer segurança, diagnóstico preciso e cuidado integral em São João del-Rei.
            </p>

            {/* CTAs */}
            <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
              <a
                href={heroWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-testid="hero-primary-cta"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 shadow-xl shadow-gold-500/20 hover:shadow-gold-500/35 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar uma avaliação</span>
              </a>

              <a
                href="#sobre"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full text-xs sm:text-sm font-medium tracking-wider text-slate-200 hover:text-white bg-obsidian-900/80 hover:bg-obsidian-850 border border-white/10 hover:border-gold-400/40 transition-all duration-200 group"
              >
                <span>Conhecer a clínica</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Verified Trust Metrics */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-3 gap-6 w-full">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wider">
                    São João del-Rei
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Colônia do Marçal</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wider">
                    Horário Marcado
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Atendimento Exclusivo</p>
                </div>
              </div>

              <div className="flex items-start gap-3 col-span-2 sm:col-span-1">
                <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wider">
                    CNES 0819867
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">Registro Oficial de Saúde</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: High-End Real Photography Composition */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative gold frame */}
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-b from-gold-400/30 via-gold-500/10 to-transparent blur-sm -z-10" />

              {/* Main Photo Card */}
              <div className="relative rounded-2xl overflow-hidden border border-gold-400/30 bg-obsidian-900 shadow-2xl shadow-black/80">
                <img
                  src={asset("/images/corpo-clinico-consultorio.jpg")}
                  alt="Especialistas da Clínica Heleve no consultório"
                  className="w-full h-[420px] sm:h-[480px] object-cover object-top filter brightness-[0.98] contrast-[1.03]"
                />

                {/* Gradient vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-transparent to-transparent opacity-80" />

                {/* Integrated Clean Label */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-obsidian-950 via-obsidian-950/90 to-transparent">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-gold-400/60 p-0.5 bg-obsidian-900 flex-shrink-0">
                      <img
                        src={asset("/images/logo-heleve.jpg")}
                        alt="Logo Heleve"
                        className="w-full h-full object-cover rounded-full"
                      />
                    </div>
                    <div>
                      <p className="font-serif text-sm font-semibold text-gold-200">
                        Clínica Heleve
                      </p>
                      <p className="text-[11px] text-slate-300">
                        Excelência Odontológica & Nutrologia Esportiva
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
