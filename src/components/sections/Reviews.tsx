import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLINIC_INFO } from "@/data/clinicData";
import { Star, ExternalLink, ShieldCheck, Heart } from "lucide-react";

export function Reviews() {
  const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
    "Clínica Heleve São João del-Rei MG"
  )}`;

  return (
    <section className="py-20 sm:py-28 bg-obsidian-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Reputação & Compromisso"
          title="A confiança de quem cuida da saúde conosco."
          subtitle="Nosso compromisso é oferecer um atendimento de excelência com pontualidade, transparência e acolhimento em São João del-Rei."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Commitment Card 1 */}
          <div className="card-luxury p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-gold-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="font-serif text-base font-semibold text-warmWhite">
                Pontualidade e Respeito ao Paciente
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                Consultas planejadas com tempo hábil e horário exclusivo, garantindo atenção total às suas queixas e dúvidas clínicas.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Pilar de Qualidade Heleve</span>
            </div>
          </div>

          {/* Commitment Card 2 */}
          <div className="card-luxury p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-gold-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="font-serif text-base font-semibold text-warmWhite">
                Transparência no Diagnóstico
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                Explicações detalhadas de cada etapa do tratamento, com apresentação clara dos exames e alternativas de planejamento.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-400" />
              <span>Rigor Técnico & Ético</span>
            </div>
          </div>

          {/* Commitment Card 3 */}
          <div className="card-luxury p-6 rounded-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-1 text-gold-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <h4 className="font-serif text-base font-semibold text-warmWhite">
                Acolhimento & Conforto
              </h4>
              <p className="text-xs text-slate-300 mt-2 leading-relaxed font-light">
                Ambiente tranquilo e equipe atenciosa para que sua experiência seja o mais agradável e segura possível.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] text-slate-400">
              <Heart className="w-3.5 h-3.5 text-gold-400" />
              <span>Experiência Humanizada</span>
            </div>
          </div>
        </div>

        {/* Google CTA */}
        <div className="mt-10 text-center">
          <a
            href={googleSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-medium text-slate-300 hover:text-gold-300 border border-white/10 hover:border-gold-400/30 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200"
          >
            <span>Ver perfil e avaliações no Google</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
}
