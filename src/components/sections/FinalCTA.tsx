import React from "react";
import { Container } from "@/components/ui/Container";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { MessageCircle, ShieldCheck, Sparkles } from "lucide-react";

export function FinalCTA() {
  const finalWaUrl = getWhatsAppUrl(
    "Olá! Quero agendar minha avaliação na Clínica Heleve."
  );

  return (
    <section className="py-20 sm:py-28 bg-obsidian-950 relative overflow-hidden">
      {/* Glow aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold-400/10 rounded-full blur-[160px] pointer-events-none" />

      <Container size="lg" className="relative z-10">
        <div className="relative rounded-3xl p-8 sm:p-14 lg:p-16 border border-gold-400/30 bg-gradient-to-b from-obsidian-900/95 via-obsidian-900/90 to-obsidian-950 text-center shadow-2xl shadow-black/80">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gold-400/10 border border-gold-400/20 text-gold-300 text-xs font-semibold uppercase tracking-widest mb-6">
            <Sparkles className="w-3.5 h-3.5 text-gold-400" />
            <span>Agendamento Exclusivo</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-gold-champagne tracking-tight max-w-2xl mx-auto leading-tight">
            Seu cuidado começa com uma avaliação detalhada.
          </h2>

          <p className="mt-5 text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Dê o primeiro passo para transformar a estética do seu sorriso ou elevar sua saúde e
            performance física. Converse diretamente com nossa equipe e escolha seu melhor horário.
          </p>

          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={finalWaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 shadow-2xl shadow-gold-500/30 hover:shadow-gold-500/50 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>Agendar Minha Avaliação</span>
            </a>
          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 font-light">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Atendimento com hora marcada</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>Privacidade & Conforto</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-gold-400" />
              <span>São João del-Rei - MG</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
