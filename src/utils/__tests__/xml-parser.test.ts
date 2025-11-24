import {
  parseXML,
  buildXML,
  extractSOAPBody,
  hasSOAPError,
  getSOAPErrorMessage,
} from '../xml-parser';

describe('xml-parser', () => {
  describe('parseXML', () => {
    it('should parse simple XML', () => {
      const xml = '<root><name>test</name><value>123</value></root>';
      const result = parseXML(xml);
      expect(result).toEqual({
        root: {
          name: 'test',
          value: 123,
        },
      });
    });

    it('should handle attributes', () => {
      const xml = '<root id="1"><name attr="value">test</name></root>';
      const result = parseXML(xml);
      expect(result).toHaveProperty('root');
    });

    it('should handle nested elements', () => {
      const xml = '<root><parent><child>value</child></parent></root>';
      const result = parseXML(xml);
      expect(result).toEqual({
        root: {
          parent: {
            child: 'value',
          },
        },
      });
    });
  });

  describe('buildXML', () => {
    it('should build XML from object', () => {
      const obj = {
        root: {
          name: 'test',
          value: 123,
        },
      };
      const result = buildXML(obj);
      expect(result).toContain('<root>');
      expect(result).toContain('<name>test</name>');
      expect(result).toContain('<value>123</value>');
    });

    it('should handle nested objects', () => {
      const obj = {
        root: {
          parent: {
            child: 'value',
          },
        },
      };
      const result = buildXML(obj);
      expect(result).toContain('<root>');
      expect(result).toContain('<parent>');
      expect(result).toContain('<child>value</child>');
    });
  });

  describe('extractSOAPBody', () => {
    it('should extract SOAP body from envelope', () => {
      const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <TestResponse>
              <TestResult>Success</TestResult>
            </TestResponse>
          </soap:Body>
        </soap:Envelope>`;

      const result = extractSOAPBody(xml);
      expect(result).toHaveProperty('TestResponse');
    });

    it('should handle Envelope without namespace prefix', () => {
      const xml = `<?xml version="1.0"?>
        <Envelope xmlns="http://schemas.xmlsoap.org/soap/envelope/">
          <Body>
            <TestResponse>
              <TestResult>Success</TestResult>
            </TestResponse>
          </Body>
        </Envelope>`;

      const result = extractSOAPBody(xml);
      expect(result).toHaveProperty('TestResponse');
    });

    it('should throw error if no Envelope found', () => {
      const xml = '<root><data>test</data></root>';
      expect(() => extractSOAPBody(xml)).toThrow('Invalid SOAP response: No Envelope found');
    });

    it('should throw error if no Body found', () => {
      const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Header/>
        </soap:Envelope>`;

      expect(() => extractSOAPBody(xml)).toThrow('Invalid SOAP response: No Body found');
    });

    it('should throw error for SOAP Fault', () => {
      const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <soap:Fault>
              <faultstring>Server Error</faultstring>
            </soap:Fault>
          </soap:Body>
        </soap:Envelope>`;

      expect(() => extractSOAPBody(xml)).toThrow('SOAP Fault: Server Error');
    });

    it('should handle SOAP 1.2 Fault format', () => {
      const xml = `<?xml version="1.0" encoding="UTF-8"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
          <soap:Body>
            <soap:Fault>
              <soap:Code>
                <soap:Value>soap:Sender</soap:Value>
              </soap:Code>
              <soap:Reason>
                <soap:Text>Custom Error</soap:Text>
              </soap:Reason>
            </soap:Fault>
          </soap:Body>
        </soap:Envelope>`;

      expect(() => extractSOAPBody(xml)).toThrow('SOAP Fault: Custom Error');
    });

    it('should handle SOAP 1.2 Fault with text as object with #text property', () => {
      // When XML has attributes, the parser may return an object with #text
      const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
          <soap:Body>
            <soap:Fault>
              <soap:Reason>
                <soap:Text xml:lang="en">Error with attribute</soap:Text>
              </soap:Reason>
            </soap:Fault>
          </soap:Body>
        </soap:Envelope>`;

      expect(() => extractSOAPBody(xml)).toThrow('SOAP Fault');
    });

    it('should handle SOAP fault without faultstring or Reason', () => {
      const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
          <soap:Body>
            <soap:Fault>
              <faultcode>soap:Server</faultcode>
            </soap:Fault>
          </soap:Body>
        </soap:Envelope>`;

      expect(() => extractSOAPBody(xml)).toThrow('SOAP Fault: Unknown SOAP fault');
    });

    it('should handle SOAP 1.2 fault with Reason but no Text', () => {
      const xml = `<?xml version="1.0"?>
        <soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope">
          <soap:Body>
            <soap:Fault>
              <soap:Reason>
                <soap:Code>Error</soap:Code>
              </soap:Reason>
            </soap:Fault>
          </soap:Body>
        </soap:Envelope>`;

      expect(() => extractSOAPBody(xml)).toThrow('SOAP Fault: Unknown SOAP fault');
    });
  });

  describe('hasSOAPError', () => {
    it('should return true if StatusCode is non-zero', () => {
      const response = { StatusCode: 1, StatusMessage: 'Error' };
      expect(hasSOAPError(response)).toBe(true);
    });

    it('should return false if StatusCode is zero', () => {
      const response = { StatusCode: 0, StatusMessage: 'Success' };
      expect(hasSOAPError(response)).toBe(false);
    });

    it('should return false if no StatusCode', () => {
      const response = { data: 'test' };
      expect(hasSOAPError(response)).toBe(false);
    });

    it('should handle negative StatusCode', () => {
      const response = { StatusCode: -1 };
      expect(hasSOAPError(response)).toBe(true);
    });
  });

  describe('getSOAPErrorMessage', () => {
    it('should return StatusMessage if error exists', () => {
      const response = { StatusCode: 1, StatusMessage: 'Custom error message' };
      expect(getSOAPErrorMessage(response)).toBe('Custom error message');
    });

    it('should return error code if no StatusMessage', () => {
      const response = { StatusCode: 404 };
      expect(getSOAPErrorMessage(response)).toBe('Error code: 404');
    });

    it('should return null if no error', () => {
      const response = { StatusCode: 0, StatusMessage: 'Success' };
      expect(getSOAPErrorMessage(response)).toBe(null);
    });

    it('should return null if no StatusCode', () => {
      const response = { data: 'test' };
      expect(getSOAPErrorMessage(response)).toBe(null);
    });
  });
});
