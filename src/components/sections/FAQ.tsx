"use client";

import React, { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FAQ_ITEMS } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { ChevronDown, MessageCircle } from "lucide-react";
import clsx from "clsx";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqWaUrl = getWhatsAppUrl(
    "Olá! Estava visualizando o FAQ no site da Clínica Heleve e gostaria de tirar uma dúvida."
  );

  return (
    <section id="faq" className="py-20 sm:py-28 bg-obsidian-950 relative">
      <Container size="md" className="relative z-10">
        <SectionHeading
          eyebrow="Perguntas Frequentes"
          title="Tire suas dúvidas antes de sua visita."
          subtitle="Informações transparentes sobre o nosso modelo de atendimento, agendamentos e especialidades."
        />

        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className={clsx(
                  "rounded-2xl border transition-all duration-200 overflow-hidden",
                  isOpen
                    ? "bg-obsidian-900 border-gold-400/40 shadow-lg shadow-black/40"
                    : "bg-obsidian-900/50 border-white/10 hover:border-gold-400/20"
                )}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-serif text-base sm:text-lg font-medium text-warmWhite">
                    {item.question}
                  </span>
                  <div
                    className={clsx(
                      "w-8 h-8 rounded-full border flex items-center justify-center flex-shrink-0 transition-transform duration-300",
                      isOpen
                        ? "rotate-180 bg-gold-400/20 border-gold-400/40 text-gold-300"
                        : "bg-white/5 border-white/10 text-slate-400"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-xs sm:text-sm text-slate-300 leading-relaxed font-light border-t border-white/5 mt-1 pt-4">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* WhatsApp Help CTA */}
        <div className="mt-12 p-6 rounded-2xl bg-obsidian-900 border border-gold-400/20 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-serif text-base font-medium text-warmWhite">
              Ainda ficou com alguma dúvida?
            </h4>
            <p className="text-xs text-slate-400 mt-1 font-light">
              Nossa equipe está à disposição para esclarecer tudo pelo WhatsApp.
            </p>
          </div>

          <a
            href={faqWaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-xs font-semibold uppercase tracking-wider bg-gold-400 hover:bg-gold-300 text-obsidian-950 flex-shrink-0 transition-all duration-200"
          >
            <MessageCircle className="w-3.5 h-3.5 fill-current" />
            <span>Falar com a equipe</span>
          </a>
        </div>
      </Container>
    </section>
  );
}
