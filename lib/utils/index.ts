/**
 * Utility functions
 */

export function formatDate(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'short', 
    day: 'numeric' 
  });
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
}