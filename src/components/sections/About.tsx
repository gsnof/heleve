import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CheckCircle2, Award, HeartHandshake, ShieldCheck } from "lucide-react";
import { asset } from "@/lib/assets";

export function About() {
  return (
    <section id="sobre" className="py-20 sm:py-28 bg-obsidian-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Real Photography of Team & Clinic */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Gold frame accent */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-500/20 to-transparent blur-sm -z-10" />

              <div className="rounded-2xl overflow-hidden border border-gold-400/25 bg-obsidian-950 shadow-2xl">
                <img
                  src={asset("/images/corpo-clinico-recepcao.jpg")}
                  alt="Corpo Clínico da Clínica Heleve na recepção da clínica"
                  className="w-full h-[460px] sm:h-[520px] object-cover object-top"
                />
              </div>

              {/* Verified Badge */}
              <div className="absolute -bottom-6 -right-2 sm:-right-6 bg-obsidian-950 border border-gold-400/30 p-4 rounded-2xl shadow-2xl max-w-[260px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-warmWhite">Atendimento Humanizado</p>
                    <p className="text-[11px] text-slate-400">Dedicação exclusiva ao seu bem-estar</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text Presentation */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
            <SectionHeading
              eyebrow="Sobre a Clínica Heleve"
              title="Mais do que tratamentos, uma experiência de cuidado e saúde integrativa."
              align="left"
              className="mb-6 max-w-none"
            />

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
              Na <strong className="text-warmWhite font-medium">Clínica Heleve</strong>, acreditamos que a
              saúde do sorriso e a performance do corpo caminham juntas. Localizada em São João del-Rei, nossa
              estrutura foi concebida para oferecer tratamentos de odontologia especializada e nutrologia
              esportiva em um ambiente sofisticado, seguro e acolhedor.
            </p>

            <p className="mt-4 text-sm sm:text-base text-slate-400 leading-relaxed">
              Cada paciente recebe um plano individualizado, estruturado a partir de uma avaliação diagnóstica
              criteriosa. Aliamos a ciência da reabilitação oral e da ortodontia ao acompanhamento nutricional e
              metabólico para que você alcance resultados duradouros com tranquilidade e confiança.
            </p>

            {/* Key Pillars */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-start gap-3 p-4 rounded-xl bg-obsidian-950/60 border border-white/5">
                <CheckCircle2 className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wide">
                    Planejamento Individualizado
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Cada conduta é planejada de acordo com as necessidades biológicas e objetivos de cada paciente.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-obsidian-950/60 border border-white/5">
                <ShieldCheck className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wide">
                    Rigor Clínico & Biossegurança
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Protocolos sanitários rigorosos e tecnologia para diagnósticos precisos e confortáveis.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 rounded-xl bg-obsidian-950/60 border border-white/5 sm:col-span-2">
                <HeartHandshake className="w-5 h-5 text-gold-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wide">
                    Integração Multidisciplinar
                  </h4>
                  <p className="text-xs text-slate-400 mt-1">
                    Odontologia estética, reabilitação oral e nutrologia esportiva sob uma mesma visão de saúde e qualidade de vida.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
