"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { CLINIC_INFO } from "@/data/clinicData";
import { asset } from "@/lib/assets";
import clsx from "clsx";

interface WhatsAppFloatingProps {
  message?: string;
}

export function WhatsAppFloating({ message }: WhatsAppFloatingProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const targetUrl = getWhatsAppUrl(
    message || "Olá! Estou no site da Clínica Heleve e gostaria de agendar uma avaliação."
  );

  return (
    <div
      data-testid="floating-whatsapp-container"
      className={clsx(
        "fixed bottom-6 right-6 z-50 flex flex-col items-end transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-4 pointer-events-none"
      )}
    >
      {/* Tooltip / Mini card preview */}
      {isOpen && (
        <div
          data-testid="floating-whatsapp-preview"
          className="mb-3 w-72 sm:w-80 rounded-2xl bg-obsidian-900 border border-gold-400/30 p-4 shadow-2xl shadow-black/80 animate-fade-in text-left"
        >
          <div className="flex items-start justify-between pb-2 border-b border-white/10">
            <div className="flex items-center gap-2.5">
              <div className="relative w-9 h-9 rounded-full overflow-hidden border border-gold-400/40">
                <img
                  src={asset("/images/logo-heleve.jpg")}
                  alt="Clínica Heleve"
                  className="w-full h-full object-cover"
                />
                <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-obsidian-900" />
              </div>
              <div>
                <p className="text-xs font-semibold text-warmWhite">Clínica Heleve</p>
                <p className="text-[10px] text-emerald-400">Atendimento Online</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              data-testid="floating-whatsapp-close"
              className="text-slate-400 hover:text-white p-1 rounded-lg transition-colors"
              aria-label="Fechar"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-3 text-xs text-slate-300 bg-obsidian-850 p-3 rounded-xl border border-white/5">
            <p>Olá! Seja bem-vindo(a) à Clínica Heleve.</p>
            <p className="mt-1 text-slate-400">
              Deseja agendar uma avaliação com nossos especialistas em São João del-Rei?
            </p>
          </div>

          <a
            href={targetUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-testid="floating-whatsapp-chat-btn"
            className="mt-3 flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-xs font-semibold shadow-lg shadow-emerald-950/40 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            Iniciar conversa no WhatsApp
          </a>
        </div>
      )}

      {/* Main Trigger Button */}
      <div className="flex items-center gap-2">
        {!isOpen && (
          <span className="hidden sm:inline-block px-3 py-1.5 rounded-full bg-obsidian-900/90 text-gold-200 text-xs font-medium border border-gold-400/20 shadow-lg backdrop-blur-md">
            Falar no WhatsApp
          </span>
        )}
        <button
          onClick={() => setIsOpen(!isOpen)}
          data-testid="floating-whatsapp-trigger"
          className="relative group p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-600 to-emerald-500 text-white shadow-xl shadow-emerald-900/30 hover:scale-105 active:scale-95 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-obsidian-950"
          aria-label="Atendimento via WhatsApp"
        >
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400"></span>
          </span>
          <MessageCircle className="w-6 h-6 fill-current" />
        </button>
      </div>
    </div>
  );
}
