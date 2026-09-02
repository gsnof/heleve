import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { DIFFERENTIALS } from "@/data/clinicData";
import { HeartPulse, Sparkles, Clock, Building, ShieldCheck } from "lucide-react";

export function Differentials() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "HeartPulse":
        return <HeartPulse className="w-6 h-6 text-gold-400" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6 text-gold-400" />;
      case "Clock":
        return <Clock className="w-6 h-6 text-gold-400" />;
      case "Building":
        return <Building className="w-6 h-6 text-gold-400" />;
      default:
        return <ShieldCheck className="w-6 h-6 text-gold-400" />;
    }
  };

  return (
    <section id="diferenciais" className="py-20 sm:py-28 bg-obsidian-950 relative">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-gold-400/5 rounded-full blur-[130px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="A Experiência Heleve"
          title="Por que nossos pacientes confiam em nosso cuidado."
          subtitle="Fundamentos clínicos concretos e respeito à sua saúde, tempo e individualidade."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DIFFERENTIALS.map((diff, index) => (
            <div
              key={index}
              className="card-luxury p-7 rounded-2xl flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold-400/10 border border-gold-400/20 flex items-center justify-center mb-6 group-hover:border-gold-400/40 group-hover:bg-gold-400/15 transition-colors">
                  {getIcon(diff.iconName)}
                </div>

                <h3 className="font-serif text-lg sm:text-xl font-medium text-warmWhite mb-3 leading-snug">
                  {diff.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300/80 leading-relaxed font-light">
                  {diff.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-gold-400 font-semibold">
                  Padrão Heleve
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
