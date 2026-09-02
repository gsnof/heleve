import { CLINIC_INFO } from "@/data/clinicData";

/**
 * Generate a clean, properly URL-encoded WhatsApp link with a predefined message
 * @param message Custom message string or context
 * @returns Fully formatted wa.me URL
 */
export function getWhatsAppUrl(message?: string): string {
  const defaultMsg = "Olá! Conheci a Clínica Heleve pelo site e gostaria de agendar uma avaliação.";
  const text = message || defaultMsg;
  const encodedText = encodeURIComponent(text.trim());
  return `https://wa.me/${CLINIC_INFO.whatsappRaw}?text=${encodedText}`;
}
