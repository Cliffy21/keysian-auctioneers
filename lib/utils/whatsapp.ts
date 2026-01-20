/**
 * WhatsApp utility functions
 */
export const WHATSAPP_NUMBER = '+254723937043';

export interface WhatsAppMessage {
  message?: string;
}

/**
 * Opens WhatsApp with a pre-filled message
 */
export function openWhatsApp({ message = '' }: WhatsAppMessage = {}) {
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${WHATSAPP_NUMBER.replace(/[^0-9]/g, '')}${message ? `?text=${encodedMessage}` : ''}`;
  window.open(url, '_blank');
}

/**
 * Generates a WhatsApp message for different contexts
 */
export function generateWhatsAppMessage(context: {
  type: 'service' | 'auction' | 'general' | 'callback';
  details?: string;
}): string {
  const { type, details } = context;
  
  const messages = {
    service: `Hello, I'm interested in ${details || 'your services'}. Please provide more information.`,
    auction: `Hello, I'm interested in ${details || 'this auction'}. Please share more details.`,
    general: 'Hello, I would like to inquire about your services.',
    callback: 'Hello, please call me back at your earliest convenience.',
  };

  return messages[type] || messages.general;
}