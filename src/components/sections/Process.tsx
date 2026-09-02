import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PROCESS_STEPS } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ArrowRight } from "lucide-react";

export function Process() {
  const processWaUrl = getWhatsAppUrl(
    "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação."
  );

  return (
    <section className="py-20 sm:py-28 bg-obsidian-950 relative">
      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Como Funciona"
          title="Seu atendimento em etapas claras e transparentes."
          subtitle="Do primeiro contato ao planejamento do seu tratamento, uma jornada desenhada com total atenção ao seu conforto."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, index) => (
            <div
              key={step.title}
              className="relative p-6 rounded-2xl bg-obsidian-900/70 border border-gold-400/15 flex flex-col justify-between group hover:border-gold-400/40 transition-colors"
            >
              <div>
                <span className="font-serif text-3xl sm:text-4xl font-light text-gold-400/40 group-hover:text-gold-400 transition-colors">
                  {step.number || String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="font-serif text-lg font-medium text-warmWhite mt-4 mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-slate-300/80 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                <span>Etapa {index + 1} de 4</span>
                <ArrowRight className="w-3.5 h-3.5 text-gold-400 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* Action Link */}
        <div className="mt-12 text-center">
          <a
            href={processWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gold-400/10 hover:bg-gold-400/20 text-gold-300 border border-gold-400/30 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Iniciar etapa 01: Falar com a equipe no WhatsApp</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
