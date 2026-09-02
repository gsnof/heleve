"use client";

import React, { useState, useEffect } from "react";
import { CLINIC_INFO } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import { Menu, X, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import clsx from "clsx";

const NAV_LINKS = [
  { label: "A Clínica", href: "#sobre" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Resultados", href: "#resultados" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Corpo Clínico", href: "#equipe" },
  { label: "FAQ", href: "#faq" },
  { label: "Localização", href: "#localizacao" },
];

import { asset } from "@/lib/assets";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerWhatsAppUrl = getWhatsAppUrl(
    "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação."
  );

  return (
    <>
      <header
        data-testid="main-header"
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-obsidian-950/95 backdrop-blur-md border-b border-gold-400/15 py-3 shadow-2xl shadow-black/60"
            : "bg-transparent py-4 sm:py-5"
        )}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
          {/* Brand Logo & Title */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none flex-shrink-0"
            aria-label="Clínica Heleve - Página Inicial"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-gold-400/40 p-0.5 bg-obsidian-900 group-hover:border-gold-300 transition-colors flex-shrink-0">
              <img
                src={asset("/images/logo-heleve.jpg")}
                alt="Logo Clínica Heleve"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="flex flex-col whitespace-nowrap">
              <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gold-200 group-hover:text-gold-100 transition-colors uppercase">
                Heleve
              </span>
              <span className="text-[9px] uppercase tracking-wider text-slate-400 font-medium">
                Odontologia & Saúde
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7 2xl:gap-8 mx-auto" data-testid="desktop-nav">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-wider font-medium text-slate-300 hover:text-gold-300 transition-colors whitespace-nowrap py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gold-400 hover:after:w-full after:transition-all after:duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop Header Actions (Separated Phone & WhatsApp CTA) */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6 flex-shrink-0">
            {/* Phone Number with Clear Separator (Direct Phone Call) */}
            <a
              href={`tel:${CLINIC_INFO.phoneFormatted}`}
              className="flex items-center gap-2 pl-4 xl:pl-6 border-l border-white/15 text-xs text-slate-300 hover:text-gold-300 transition-colors font-medium whitespace-nowrap"
              title="Ligar para o Telefone Fixo: (32) 3518-5253"
              aria-label="Ligar para o telefone fixo (32) 3518-5253"
            >
              <Phone className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
              <span>{CLINIC_INFO.phone}</span>
            </a>

            {/* Prominent CTA */}
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 xl:px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 shadow-md shadow-gold-500/20 hover:shadow-gold-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 whitespace-nowrap"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current flex-shrink-0" />
              <span>Agendar Avaliação</span>
            </a>
          </div>

          {/* Mobile Actions & Menu Button */}
          <div className="flex lg:hidden items-center gap-2.5">
            <a
              href={headerWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gold-400 text-obsidian-950 font-semibold text-xs hover:bg-gold-300 transition-colors whitespace-nowrap"
              aria-label="Agendar no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-current" />
              <span className="hidden sm:inline">Agendar</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="mobile-hamburger"
              className="p-2 rounded-lg text-slate-300 hover:text-gold-300 hover:bg-white/5 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" data-testid="mobile-drawer-backdrop">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div
            data-testid="mobile-drawer"
            className="fixed top-0 right-0 bottom-0 w-4/5 max-w-sm bg-obsidian-950 border-l border-gold-400/20 p-6 flex flex-col justify-between overflow-y-auto shadow-2xl z-50"
          >
            <div className="flex flex-col">
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full overflow-hidden border border-gold-400/40">
                    <img
                      src={asset("/images/logo-heleve.jpg")}
                      alt="Clínica Heleve"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="font-serif text-base font-bold tracking-widest text-gold-200">
                      HELEVE
                    </span>
                    <p className="text-[9px] text-slate-400 uppercase">Odontologia & Saúde</p>
                  </div>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  data-testid="mobile-drawer-close"
                  className="p-1.5 text-slate-400 hover:text-white rounded-lg"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-3 mt-6">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-xs uppercase tracking-wider text-slate-200 hover:text-gold-300 py-2.5 border-b border-white/5 transition-colors font-medium"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* Mobile Drawer Footer with CTAs and verified Info */}
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col gap-4">
              <a
                href={headerWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 font-semibold text-xs uppercase tracking-wider shadow-lg shadow-gold-500/20"
              >
                <MessageCircle className="w-4 h-4 fill-current" />
                <span>Agendar Avaliação</span>
              </a>

              <a
                href={`tel:${CLINIC_INFO.phone.replace(/[^0-9]/g, "")}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 font-medium text-xs border border-white/10 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold-400" />
                <span>Ligar: {CLINIC_INFO.phone}</span>
              </a>

              <div className="text-xs text-slate-400 space-y-2 mt-2">
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-gold-400 flex-shrink-0 mt-0.5" />
                  <span>São João del-Rei - MG</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-gold-400 flex-shrink-0" />
                  <span>Seg a Sex: 08:30–12:00 | 13:00–18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
