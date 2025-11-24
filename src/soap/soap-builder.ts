/**
 * SOAP envelope builder utility
 */

import { formatDateTime } from '../utils/date-formatter';

/**
 * SOAP namespace constants
 */
const SOAP_NS = 'http://schemas.xmlsoap.org/soap/envelope/';
const XSI_NS = 'http://www.w3.org/2001/XMLSchema-instance';
const XSD_NS = 'http://www.w3.org/2001/XMLSchema';
const TARGET_NS = 'http://tempuri.org/';

/**
 * Convert a value to XML-safe format
 */
/**
 * Convert a value to XML-safe format
 */
function serializeValue(value: unknown): string {
  if (value === null || value === undefined) {
    return '';
  }

  if (value instanceof Date) {
    return formatDateTime(value);
  }

  if (typeof value === 'boolean') {
    return value ? '1' : '0';
  }

  if (typeof value === 'object' && !Array.isArray(value)) {
    // Handle nested objects
    return Object.entries(value as Record<string, unknown>)
      .map(([k, v]) => `<${k}>${serializeValue(v)}</${k}>`)
      .join('');
  }

  if (Array.isArray(value)) {
    // Handle arrays
    return value.map((item) => serializeValue(item)).join('');
  }

  // Escape XML entities
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

/**
 * Build parameter elements for SOAP request
 */
function buildParameters(params: Record<string, unknown>): string {
  return Object.entries(params)
    .map(([key, value]) => {
      if (value === null || value === undefined) {
        return `<${key} xsi:nil="true" />`;
      }

      if (Array.isArray(value)) {
        // Handle array parameters
        const items = value.map((item) => `<int>${item}</int>`).join('');
        return `<${key}>${items}</${key}>`;
      }

      if (typeof value === 'object' && !(value instanceof Date)) {
        // Handle complex types
        const nested = Object.entries(value as Record<string, unknown>)
          .map(([k, v]) => `<${k}>${serializeValue(v)}</${k}>`)
          .join('');
        return `<${key}>${nested}</${key}>`;
      }

      return `<${key}>${serializeValue(value)}</${key}>`;
    })
    .join('');
}

/**
 * Build a SOAP 1.1 envelope
 */
export function buildSOAP11Envelope(operation: string, params: Record<string, unknown>): string {
  const parameters = buildParameters(params);

  return `<?xml version="1.0" encoding="utf-8"?>
<soap:Envelope xmlns:soap="${SOAP_NS}" xmlns:xsi="${XSI_NS}" xmlns:xsd="${XSD_NS}">
  <soap:Body>
    <${operation} xmlns="${TARGET_NS}">
      ${parameters}
    </${operation}>
  </soap:Body>
</soap:Envelope>`;
}

/**
 * Build a SOAP 1.2 envelope
 */
export function buildSOAP12Envelope(operation: string, params: Record<string, unknown>): string {
  const parameters = buildParameters(params);

  return `<?xml version="1.0" encoding="utf-8"?>
<soap12:Envelope xmlns:soap12="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="${XSI_NS}" xmlns:xsd="${XSD_NS}">
  <soap12:Body>
    <${operation} xmlns="${TARGET_NS}">
      ${parameters}
    </${operation}>
  </soap12:Body>
</soap12:Envelope>`;
}

/**
 * Get SOAP action header value
 */
export function getSOAPAction(operation: string): string {
  return `${TARGET_NS}${operation}`;
}
