import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLINIC_INFO } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ShieldCheck, CalendarCheck, MessageCircle } from "lucide-react";
import { asset } from "@/lib/assets";

export function Team() {
  const teamWaUrl = getWhatsAppUrl(
    "Olá! Gostaria de agendar uma consulta de avaliação com o corpo clínico da Clínica Heleve."
  );

  return (
    <section id="equipe" className="py-20 sm:py-28 bg-obsidian-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Corpo Clínico"
          title="Profissionais dedicados à sua saúde e excelência estética."
          subtitle="Atendimento humanizado, qualificação técnica e compromisso com diagnósticos precisos em São João del-Rei."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Main Portrait Card */}
          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-gold-500/25 via-transparent to-gold-400/10 blur-md opacity-60 group-hover:opacity-100 transition-opacity" />

              <div className="relative rounded-2xl overflow-hidden border border-gold-400/30 bg-obsidian-950 shadow-2xl">
                <img
                  src={asset("/images/corpo-clinico-consultorio.jpg")}
                  alt="Corpo Clínico da Clínica Heleve no consultório"
                  className="w-full h-[450px] sm:h-[520px] object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950 via-obsidian-950/20 to-transparent" />

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-obsidian-900/90 border border-gold-400/30 backdrop-blur-md">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-warmWhite">
                        Dr. Leonardo Leite e Equipe
                      </h4>
                      <p className="text-xs text-gold-300">
                        Odontologia & Nutrologia Esportiva
                      </p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-gold-400/15 border border-gold-400/30 text-[10px] uppercase font-semibold text-gold-400">
                      São João del-Rei
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Clinical Principles and Values */}
          <div className="lg:col-span-6 flex flex-col items-start space-y-6">
            <div className="p-6 rounded-2xl bg-obsidian-950/80 border border-gold-400/20 w-full">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-warmWhite">
                    Especialistas em Reabilitação & Estética
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">
                    Foco na recuperação integral da função oclusal, próteses fixas, implantes dentários e alinhamento ortodôntico, respeitando a anatomia natural de cada sorriso.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-obsidian-950/80 border border-gold-400/20 w-full">
              <div className="flex items-start gap-3.5">
                <div className="w-9 h-9 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0">
                  <CalendarCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-base font-semibold text-warmWhite">
                    Saúde Integrada & Nutrologia Esportiva
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 font-light leading-relaxed">
                    Acompanhamento metabólico e nutricional voltado para desempenho físico, composição corporal saudável, energia e longevidade.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 w-full">
              <p className="text-xs text-slate-400 font-light leading-relaxed">
                Consultas realizadas com tempo dedicado e reserva de horário para que você possa tirar todas as suas dúvidas diretamente com o profissional responsável.
              </p>

              <div className="mt-6">
                <a
                  href={teamWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 shadow-lg shadow-gold-500/20"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Agendar com nossos especialistas</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
