/**
 * XML parsing utilities using fast-xml-parser
 */

import { XMLParser, XMLBuilder } from 'fast-xml-parser';

/**
 * XML parser instance with SOAP-friendly options
 */
const parser = new XMLParser({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  parseAttributeValue: true,
  parseTagValue: true,
  trimValues: true,
  removeNSPrefix: true, // Remove namespace prefixes for easier access
  isArray: (name: string) => {
    // Treat these tags as arrays
    return [
      'BankPaymentListItem',
      'SubFirmReturn',
      'POSPaymentListItem',
      'PaymentCategoryListItem',
      'BankBalance',
      'Formula',
      'string',
      'int',
    ].includes(name);
  },
});

/**
 * XML builder instance
 */
const builder = new XMLBuilder({
  ignoreAttributes: false,
  attributeNamePrefix: '@_',
  textNodeName: '#text',
  format: false,
  suppressEmptyNode: true,
});

/**
 * Parse XML string to JavaScript object
 * @param xml - XML string to parse
 * @returns Parsed JavaScript object
 */
/**
 * Parse XML string to JavaScript object
 * @param xml - XML string to parse
 * @returns Parsed JavaScript object
 */
export function parseXML<T = unknown>(xml: string): T {
  return parser.parse(xml);
}

/**
 * Build XML string from JavaScript object
 * @param obj - JavaScript object to convert
 * @returns XML string
 */
export function buildXML(obj: unknown): string {
  return builder.build(obj);
}

/**
 * Extract SOAP body from response
 * @param xml - SOAP response XML
 * @returns SOAP body content
 */
export function extractSOAPBody<T = unknown>(xml: string): T {
  const parsed = parseXML<Record<string, unknown>>(xml);

  // Navigate through SOAP envelope structure
  const envelope = parsed['soap:Envelope'] || parsed['Envelope'];
  if (!envelope) {
    throw new Error('Invalid SOAP response: No Envelope found');
  }

  const body = envelope['soap:Body'] || envelope['Body'];
  if (!body) {
    throw new Error('Invalid SOAP response: No Body found');
  }

  // Check for SOAP fault (handles both with and without namespace prefix due to removeNSPrefix option)
  const fault = body['Fault'];
  if (fault) {
    // Handle SOAP 1.1 faultstring
    let faultString: string | undefined = (fault as Record<string, unknown>).faultstring as
      | string
      | undefined;

    // Handle SOAP 1.2 Reason/Text structure
    if (!faultString) {
      const reason = (fault as Record<string, unknown>)['Reason'] as
        | Record<string, unknown>
        | undefined;
      if (reason) {
        const text = reason['Text'];
        // Handle both string and object with #text property
        if (typeof text === 'string') {
          faultString = text;
        } else if (text && typeof text === 'object') {
          faultString = (text as Record<string, unknown>)['#text'] as string;
        }
      }
    }

    throw new Error(`SOAP Fault: ${faultString || 'Unknown SOAP fault'}`);
  }

  return body as T;
}

/**
 * Check if response contains an error
 * @param response - Parsed response object
 * @returns True if error exists
 */
export function hasSOAPError(response: unknown): boolean {
  const r = response as { StatusCode?: number };
  return r?.StatusCode !== undefined && r.StatusCode !== 0;
}

/**
 * Get error message from response
 * @param response - Parsed response object
 * @returns Error message or null
 */
export function getSOAPErrorMessage(response: unknown): string | null {
  if (hasSOAPError(response)) {
    const r = response as { StatusMessage?: string; StatusCode: number };
    return r.StatusMessage || `Error code: ${r.StatusCode}`;
  }
  return null;
}
