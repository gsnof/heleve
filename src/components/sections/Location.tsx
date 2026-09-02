import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CLINIC_INFO } from "@/data/clinicData";
import { MapPin, Navigation, Clock, Phone, MessageCircle } from "lucide-react";
import { getWhatsAppUrl } from "@/lib/whatsapp";

export function Location() {
  const locationWaUrl = getWhatsAppUrl(
    "Olá! Gostaria de confirmar a localização e agendar uma avaliação na Clínica Heleve em São João del-Rei."
  );

  return (
    <section id="localizacao" className="py-20 sm:py-28 bg-obsidian-900 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <Container size="xl" className="relative z-10">
        <SectionHeading
          eyebrow="Localização & Acesso"
          title="Fácil acesso no coração de São João del-Rei."
          subtitle="Ambiente moderno e preparado para receber você com comodidade e segurança."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Contact & Location Info Details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="card-luxury p-7 rounded-2xl flex-1 flex flex-col justify-between">
              <div className="space-y-6">
                {/* Address Item */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wider">
                      Endereço
                    </h4>
                    <p className="text-sm text-slate-200 mt-1 font-light leading-relaxed">
                      {CLINIC_INFO.address.street}
                    </p>
                    <p className="text-xs text-slate-400">
                      {CLINIC_INFO.address.neighborhood} • {CLINIC_INFO.address.city} - {CLINIC_INFO.address.state}
                    </p>
                    <p className="text-xs text-slate-400">
                      CEP: {CLINIC_INFO.address.cep}
                    </p>
                  </div>
                </div>

                {/* Hours Item */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wider">
                      Horário de Funcionamento
                    </h4>
                    <p className="text-xs text-slate-200 mt-1 font-light">
                      {CLINIC_INFO.operatingHours.weekdays}
                    </p>
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Atendimento mediante agendamento prévio
                    </p>
                  </div>
                </div>

                {/* Telephones Item */}
                <div className="flex items-start gap-4 pt-4 border-t border-white/5">
                  <div className="w-10 h-10 rounded-xl bg-gold-400/15 border border-gold-400/30 flex items-center justify-center text-gold-400 flex-shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-warmWhite uppercase tracking-wider">
                      Contato Direto
                    </h4>
                    <p className="text-xs text-slate-200 mt-1">
                      Telefone Fixo: {CLINIC_INFO.phone}
                    </p>
                    <p className="text-xs text-slate-200">
                      WhatsApp: {CLINIC_INFO.whatsapp}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row gap-3">
                <a
                  href={CLINIC_INFO.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-gold-400 hover:bg-gold-300 text-obsidian-950 transition-colors shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Traçar Rota</span>
                </a>

                <a
                  href={locationWaUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider bg-white/5 hover:bg-white/10 text-warmWhite border border-white/10 transition-colors"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Agendar Visita</span>
                </a>
              </div>
            </div>
          </div>

          {/* Interactive Map Frame */}
          <div className="lg:col-span-7">
            <div className="h-full min-h-[380px] lg:min-h-[460px] rounded-2xl overflow-hidden border border-gold-400/25 shadow-2xl relative bg-obsidian-950">
              <iframe
                title="Localização da Clínica Heleve em São João del-Rei"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3714.471545620958!2d-44.249870!3d-21.134580!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa1b204646543b5%3A0x741b0213d8d6ebef!2sAv.%20Trinta%20e%20Um%20de%20Mar%C3%A7o%2C%201291A%20-%20Col%C3%B4nia%20do%20Mar%C3%A7al%2C%20S%C3%A3o%20Jo%C3%A3o%20del%20Rei%20-%20MG%2C%2036302-016!5e0!3m2!1spt-BR!2sbr!4v1700000000000!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(95%) contrast(90%)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full min-h-[380px] lg:min-h-[460px]"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
