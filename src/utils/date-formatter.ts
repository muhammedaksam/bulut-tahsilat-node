/**
 * Date formatting utilities for SOAP requests
 */

/**
 * Format a JavaScript Date to ISO 8601 string for SOAP
 * @param date - The date to format
 * @returns ISO 8601 formatted string
 */
export function formatDateForSOAP(date: Date): string {
  return date.toISOString();
}

/**
 * Parse ISO 8601 date string from SOAP response
 * @param dateString - The ISO date string
 * @returns JavaScript Date object
 */
export function parseDateFromSOAP(dateString: string): Date {
  return new Date(dateString);
}

/**
 * Format date to SOAP-compatible string (YYYY-MM-DDTHH:mm:ss)
 * @param date - The date to format
 * @returns Formatted date string
 */
export function formatDateTime(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
}
