"use client";

import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SPECIALTIES } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, Check, Shield, Smile, Activity } from "lucide-react";

export function Specialties() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Smile":
        return <Smile className="w-5 h-5 text-gold-400" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-gold-400" />;
      default:
        return <Shield className="w-5 h-5 text-gold-400" />;
    }
  };

  return (
    <section id="especialidades" className="py-20 sm:py-28 bg-obsidian-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-gold-400/5 rounded-full blur-[140px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Nossas Especialidades"
          title="Odontologia especializada e saúde de alto padrão."
          subtitle="Tratamentos conduzidos com rigor científico, diagnóstico individualizado e equipamentos modernos."
        />

        <div className="space-y-16 lg:space-y-24">
          {SPECIALTIES.map((spec, index) => {
            const isEven = index % 2 === 1;
            const waUrl = getWhatsAppUrl(spec.ctaMessage);

            return (
              <div
                key={spec.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Visual / Image Showcase Column */}
                <div
                  className={`lg:col-span-5 ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-gold-500/20 to-transparent blur-sm opacity-50 group-hover:opacity-100 transition-opacity" />

                    <div className="relative rounded-2xl overflow-hidden border border-gold-400/25 bg-obsidian-900 shadow-2xl">
                      <img
                        src={spec.image}
                        alt={spec.title}
                        className="w-full h-[320px] sm:h-[380px] object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-obsidian-950/90 via-transparent to-transparent" />

                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-xl bg-obsidian-900/90 border border-gold-400/20 backdrop-blur-md">
                        <div className="flex items-center gap-2.5">
                          <div className="p-2 rounded-lg bg-gold-400/15 border border-gold-400/30">
                            {getIcon(spec.iconName)}
                          </div>
                          <div>
                            <span className="text-xs font-semibold text-warmWhite">
                              {spec.badge}
                            </span>
                            <p className="text-[10px] text-slate-400">Atendimento Especializado</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content Details Column */}
                <div
                  className={`lg:col-span-7 flex flex-col items-start ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-400 text-xs font-semibold uppercase tracking-wider mb-3">
                    <span>{spec.badge}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-medium text-gold-champagne leading-tight">
                    {spec.title}
                  </h3>

                  <p className="mt-2 text-sm sm:text-base font-medium text-gold-200/90">
                    {spec.subtitle}
                  </p>

                  <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed font-light">
                    {spec.description}
                  </p>

                  {/* Bullet Benefits */}
                  <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full">
                    {spec.benefits.map((benefit, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-gold-400/15 border border-gold-400/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-gold-400" />
                        </div>
                        <span className="text-xs sm:text-sm text-slate-300 font-light leading-snug">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Contextual WhatsApp CTA */}
                  <div className="mt-8">
                    <a
                      href={waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 transition-all duration-200"
                    >
                      <MessageCircle className="w-4 h-4 fill-current" />
                      <span>{spec.ctaText}</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
