"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLINICAL_CASES } from "@/data/clinicData";
import { getWhatsAppUrl } from "@/lib/whatsapp";
import {
  MessageCircle,
  ZoomIn,
  X,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Pause,
  Play,
} from "lucide-react";
import clsx from "clsx";

const AUTO_PLAY_INTERVAL = 5000; // 5 seconds per case

export function Transformations() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<"todos" | "odontologia" | "nutrologia">("todos");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const filteredCases = activeCategory === "todos"
    ? CLINICAL_CASES
    : CLINICAL_CASES.filter((item) => item.category === activeCategory);

  const totalCases = filteredCases.length;
  const currentCase = filteredCases[currentIndex] || filteredCases[0];

  // Handle category change and reset index
  const handleCategoryChange = (category: "todos" | "odontologia" | "nutrologia") => {
    setActiveCategory(category);
    setCurrentIndex(0);
    setProgress(0);
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalCases);
    setProgress(0);
  }, [totalCases]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalCases) % totalCases);
    setProgress(0);
  }, [totalCases]);

  // Autoplay timer with progress bar
  useEffect(() => {
    if (isPaused || totalCases <= 1) return;

    const progressStep = 100 / (AUTO_PLAY_INTERVAL / 50);

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + progressStep;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isPaused, totalCases, nextSlide]);

  const caseWaUrl = getWhatsAppUrl(
    `Olá! Vi o caso de ${currentCase?.title} no site da Clínica Heleve e gostaria de agendar uma avaliação.`
  );

  return (
    <section id="resultados" className="py-20 sm:py-28 bg-obsidian-900 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold-400/5 rounded-full blur-[160px] pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Casos Reais & Transformações"
          title="Resultados reais em odontologia e nutrologia esportiva."
          subtitle="Acompanhe as transformações de pacientes da Clínica Heleve em São João del-Rei. Veja a evolução de um em um com visualização completa e sem cortes."
        />

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-10">
          <button
            onClick={() => handleCategoryChange("todos")}
            data-testid="filter-tab-todos"
            className={clsx(
              "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200",
              activeCategory === "todos"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 shadow-lg shadow-gold-500/20"
                : "bg-obsidian-950/80 text-slate-300 hover:text-white border border-white/10 hover:border-gold-400/30"
            )}
          >
            Todos os Casos ({CLINICAL_CASES.length})
          </button>

          <button
            onClick={() => handleCategoryChange("odontologia")}
            data-testid="filter-tab-odontologia"
            className={clsx(
              "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200",
              activeCategory === "odontologia"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 shadow-lg shadow-gold-500/20"
                : "bg-obsidian-950/80 text-slate-300 hover:text-white border border-white/10 hover:border-gold-400/30"
            )}
          >
            Odontologia & Implantes (3)
          </button>

          <button
            onClick={() => handleCategoryChange("nutrologia")}
            data-testid="filter-tab-nutrologia"
            className={clsx(
              "px-5 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200",
              activeCategory === "nutrologia"
                ? "bg-gradient-to-r from-gold-500 to-gold-400 text-obsidian-950 shadow-lg shadow-gold-500/20"
                : "bg-obsidian-950/80 text-slate-300 hover:text-white border border-white/10 hover:border-gold-400/30"
            )}
          >
            Nutrologia & Performance (2)
          </button>
        </div>

        {/* Animated Single-Case Spotlight Showcase */}
        <div
          data-testid="carousel-showcase"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-5xl mx-auto rounded-3xl border border-gold-400/25 bg-gradient-to-b from-obsidian-950/95 to-obsidian-950 p-5 sm:p-8 lg:p-10 shadow-2xl shadow-black/80"
        >
          {/* Top Progress Bar for Autoplay */}
          <div className="w-full bg-white/5 h-1 rounded-full overflow-hidden mb-6 sm:mb-8">
            <div
              className="bg-gradient-to-r from-gold-500 to-gold-300 h-full transition-all duration-75"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Big Clean Uncropped Before/After Image */}
            <div className="lg:col-span-6 relative">
              <div
                onClick={() => setSelectedImage(currentCase?.image)}
                className="relative group rounded-2xl overflow-hidden border border-gold-400/30 bg-black/80 shadow-2xl h-[380px] sm:h-[460px] lg:h-[480px] flex items-center justify-center p-2 cursor-pointer"
                title="Clique para ampliar em tela cheia"
              >
                {/* Full Uncropped Image */}
                <img
                  key={currentCase?.id}
                  src={currentCase?.image}
                  alt={currentCase?.title}
                  className="w-full h-full object-contain object-center rounded-xl animate-fade-in transition-all duration-500 group-hover:scale-[1.01]"
                />

                {/* Badges on Top */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-obsidian-950/90 border border-gold-400/30 text-xs font-semibold uppercase text-gold-300 backdrop-blur-md pointer-events-none">
                  <Sparkles className="w-3.5 h-3.5 text-gold-400" />
                  <span>Antes & Depois</span>
                </div>

                {/* Zoom Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedImage(currentCase?.image);
                  }}
                  data-testid="btn-zoom-active-case"
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-obsidian-950/90 text-gold-300 hover:text-white border border-gold-400/30 transition-all backdrop-blur-md hover:scale-105"
                  aria-label="Ampliar foto em alta resolução"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Right Column: Case Details & Controls */}
            <div className="lg:col-span-6 flex flex-col justify-between h-full">
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between gap-4 pb-4 border-b border-white/10">
                  <span className="text-xs font-semibold uppercase tracking-wider text-gold-400 px-3 py-1 rounded-full bg-gold-400/10 border border-gold-400/20">
                    {currentCase?.treatmentType}
                  </span>

                  <div className="flex items-center gap-2">
                    <span className="font-serif text-sm text-gold-300 font-semibold tracking-wider">
                      {String(currentIndex + 1).padStart(2, "0")} / {String(totalCases).padStart(2, "0")}
                    </span>

                    <button
                      onClick={() => setIsPaused(!isPaused)}
                      className="p-1.5 text-slate-400 hover:text-gold-300 rounded-lg transition-colors"
                      aria-label={isPaused ? "Retomar reprodução automática" : "Pausar reprodução"}
                      title={isPaused ? "Retomar reprodução automática" : "Pausar reprodução"}
                    >
                      {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>

                {/* Case Title */}
                <h3
                  key={`title-${currentCase?.id}`}
                  className="font-serif text-2xl sm:text-3xl font-medium text-gold-champagne mt-4 leading-tight animate-fade-in"
                >
                  {currentCase?.title}
                </h3>

                {/* Case Description */}
                <p
                  key={`desc-${currentCase?.id}`}
                  className="mt-3 text-sm sm:text-base text-slate-300 font-light leading-relaxed animate-fade-in"
                >
                  {currentCase?.description}
                </p>

                {/* Highlights / Metric Tags */}
                {currentCase?.highlights && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {currentCase.highlights.map((h, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 rounded-lg bg-gold-400/10 border border-gold-400/25 text-xs font-medium text-gold-200"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action and Navigation Controls */}
              <div className="mt-8 pt-6 border-t border-white/10 space-y-5">
                {/* CTA Button */}
                <a
                  href={caseWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2.5 w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-obsidian-950 shadow-lg shadow-gold-500/20 hover:shadow-gold-500/35 transition-all duration-200"
                >
                  <MessageCircle className="w-4 h-4 fill-current" />
                  <span>Quero avaliar um caso como este</span>
                </a>

                {/* Arrows and Slide Indicators */}
                <div className="flex items-center justify-between">
                  <button
                    onClick={prevSlide}
                    data-testid="btn-prev-case"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-obsidian-950 border border-gold-400/20 hover:border-gold-400/40 text-slate-300 hover:text-gold-200 text-xs font-medium transition-colors"
                    aria-label="Caso anterior"
                  >
                    <ChevronLeft className="w-4 h-4" />
                    <span>Anterior</span>
                  </button>

                  {/* Dot Indicators */}
                  <div className="flex items-center gap-1.5">
                    {filteredCases.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => {
                          setCurrentIndex(idx);
                          setProgress(0);
                        }}
                        data-testid={`dot-case-${idx}`}
                        className={clsx(
                          "h-2 rounded-full transition-all duration-300",
                          currentIndex === idx
                            ? "w-6 bg-gold-400"
                            : "w-2 bg-white/20 hover:bg-white/40"
                        )}
                        aria-label={`Ir para caso ${idx + 1}`}
                      />
                    ))}
                  </div>

                  <button
                    onClick={nextSlide}
                    data-testid="btn-next-case"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-obsidian-950 border border-gold-400/20 hover:border-gold-400/40 text-slate-300 hover:text-gold-200 text-xs font-medium transition-colors"
                    aria-label="Próximo caso"
                  >
                    <span>Próximo</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Thumbnail Selector Strip (Quick jump to any case) */}
        <div className="mt-8 max-w-5xl mx-auto grid grid-cols-5 gap-2 sm:gap-3">
          {filteredCases.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => {
                setCurrentIndex(idx);
                setProgress(0);
              }}
              data-testid={`thumbnail-case-${idx}`}
              className={clsx(
                "relative rounded-xl overflow-hidden aspect-[4/3] border transition-all duration-200 group text-left bg-black/60",
                currentIndex === idx
                  ? "border-gold-400 ring-2 ring-gold-400/40 scale-[1.02] shadow-lg shadow-gold-500/10"
                  : "border-white/10 opacity-60 hover:opacity-100 hover:border-gold-400/30"
              )}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-contain p-1"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <span className="absolute bottom-1.5 left-2 text-[10px] font-semibold text-warmWhite line-clamp-1">
                {item.treatmentType.split("&")[0]}
              </span>
            </button>
          ))}
        </div>

        {/* Ethical Notice */}
        <div className="mt-12 p-4 sm:p-5 rounded-xl bg-obsidian-950/70 border border-white/10 text-center max-w-3xl mx-auto">
          <p className="text-[11px] sm:text-xs text-slate-400 font-light leading-relaxed">
            <strong className="text-slate-300">Nota informativa e ética:</strong> As imagens acima
            demonstram resultados de casos reais de odontologia e nutrologia esportiva atendidos pela
            equipe da Clínica Heleve. Cada organismo é único; os resultados dependem da resposta biológica,
            disciplina e adesão individual de cada paciente ao plano terapêutico e nutricional.
          </p>
        </div>

        {/* Section Action CTA */}
        <div className="mt-10 text-center">
          <a
            href={getWhatsAppUrl(
              "Olá! Vi a apresentação de casos reais no site da Clínica Heleve e gostaria de agendar uma avaliação."
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider bg-gold-400/10 hover:bg-gold-400/20 text-gold-300 border border-gold-400/30 transition-all duration-200"
          >
            <MessageCircle className="w-4 h-4 fill-current" />
            <span>Falar com a equipe da Clínica Heleve no WhatsApp</span>
          </a>
        </div>
      </Container>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          data-testid="lightbox-modal"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-obsidian-950 border border-gold-400/30 rounded-2xl overflow-hidden p-2 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              data-testid="lightbox-close"
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/70 text-white hover:text-gold-400 transition-colors"
              aria-label="Fechar ampliação"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={selectedImage}
              alt="Caso Clínico Ampliado"
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
          </div>
        </div>
      )}
    </section>
  );
}
