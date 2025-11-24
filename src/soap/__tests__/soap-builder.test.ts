import { buildSOAP11Envelope, buildSOAP12Envelope, getSOAPAction } from '../soap-builder';

describe('soap-builder', () => {
  describe('buildSOAP11Envelope', () => {
    it('should build basic SOAP 1.1 envelope', () => {
      const result = buildSOAP11Envelope('TestOperation', {
        userName: 'test',
        password: 'pass',
      });

      expect(result).toContain('<?xml version="1.0" encoding="utf-8"?>');
      expect(result).toContain('<soap:Envelope');
      expect(result).toContain('<soap:Body>');
      expect(result).toContain('<TestOperation');
      expect(result).toContain('<userName>test</userName>');
      expect(result).toContain('<password>pass</password>');
      expect(result).toContain('</TestOperation>');
      expect(result).toContain('</soap:Body>');
      expect(result).toContain('</soap:Envelope>');
    });

    it('should handle numeric parameters', () => {
      const result = buildSOAP11Envelope('TestOp', {
        id: 123,
        count: 456,
      });

      expect(result).toContain('<id>123</id>');
      expect(result).toContain('<count>456</count>');
    });

    it('should handle boolean parameters', () => {
      const result = buildSOAP11Envelope('TestOp', {
        isActive: true,
        isDeleted: false,
      });

      expect(result).toContain('<isActive>1</isActive>');
      expect(result).toContain('<isDeleted>0</isDeleted>');
    });

    it('should handle Date parameters', () => {
      const date = new Date('2024-01-15T10:30:45.000Z');
      const result = buildSOAP11Envelope('TestOp', {
        startDate: date,
      });

      expect(result).toContain('<startDate>');
      expect(result).toMatch(/<startDate>\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}<\/startDate>/);
    });

    it('should handle null/undefined parameters', () => {
      const result = buildSOAP11Envelope('TestOp', {
        nullValue: null,
        undefinedValue: undefined,
      });

      expect(result).toContain('<nullValue xsi:nil="true" />');
      expect(result).toContain('<undefinedValue xsi:nil="true" />');
    });

    it('should handle array parameters', () => {
      const result = buildSOAP11Envelope('TestOp', {
        ids: [1, 2, 3],
      });

      expect(result).toContain('<ids>');
      expect(result).toContain('<int>1</int>');
      expect(result).toContain('<int>2</int>');
      expect(result).toContain('<int>3</int>');
      expect(result).toContain('</ids>');
    });

    it('should handle nested object parameters', () => {
      const result = buildSOAP11Envelope('TestOp', {
        subFirm: {
          FirmName: 'Test Company',
          CityID: 34,
        },
      });

      expect(result).toContain('<subFirm>');
      expect(result).toContain('<FirmName>Test Company</FirmName>');
      expect(result).toContain('<CityID>34</CityID>');
      expect(result).toContain('</subFirm>');
    });

    it('should handle deeply nested objects', () => {
      const result = buildSOAP11Envelope('TestOp', {
        outer: {
          inner: {
            value: 'nested',
          },
        },
      });

      expect(result).toContain('<outer>');
      expect(result).toContain('<inner>');
      expect(result).toContain('<value>nested</value>');
      expect(result).toContain('</inner>');
      expect(result).toContain('</outer>');
    });

    it('should handle empty string parameters', () => {
      const result = buildSOAP11Envelope('TestOp', {
        emptyString: '',
      });

      expect(result).toContain('<emptyString></emptyString>');
    });

    it('should handle objects with null and undefined nested values', () => {
      const result = buildSOAP11Envelope('TestOp', {
        data: {
          nullValue: null,
          undefinedValue: undefined,
          stringValue: 'test',
        },
      });

      expect(result).toContain('<data>');
      expect(result).toContain('<stringValue>test</stringValue>');
      expect(result).toContain('</data>');
    });

    it('should handle nested objects with arrays', () => {
      const result = buildSOAP11Envelope('TestOp', {
        container: {
          items: ['item1', 'item2', 'item3'],
        },
      });

      expect(result).toContain('<container>');
      expect(result).toContain('<items>');
      expect(result).toContain('item1');
      expect(result).toContain('item2');
      expect(result).toContain('item3');
      expect(result).toContain('</items>');
      expect(result).toContain('</container>');
    });

    it('should handle nested objects with mixed array types', () => {
      const result = buildSOAP11Envelope('TestOp', {
        data: {
          values: [1, true, 'text'],
        },
      });

      expect(result).toContain('<data>');
      expect(result).toContain('<values>');
      expect(result).toContain('1');
      expect(result).toContain('text');
      expect(result).toContain('</values>');
      expect(result).toContain('</data>');
    });

    it('should handle nested objects with empty arrays', () => {
      const result = buildSOAP11Envelope('TestOp', {
        wrapper: {
          emptyList: [],
        },
      });

      expect(result).toContain('<wrapper>');
      expect(result).toContain('<emptyList></emptyList>');
      expect(result).toContain('</wrapper>');
    });

    it('should escape XML entities', () => {
      const result = buildSOAP11Envelope('TestOp', {
        text: 'Test & <test> "quoted" \'apostrophe\'',
      });

      expect(result).toContain('&amp;');
      expect(result).toContain('&lt;');
      expect(result).toContain('&gt;');
      expect(result).toContain('&quot;');
      expect(result).toContain('&apos;');
    });
  });

  describe('buildSOAP12Envelope', () => {
    it('should build basic SOAP 1.2 envelope', () => {
      const result = buildSOAP12Envelope('TestOperation', {
        userName: 'test',
        password: 'pass',
      });

      expect(result).toContain('<?xml version="1.0" encoding="utf-8"?>');
      expect(result).toContain('<soap12:Envelope');
      expect(result).toContain('http://www.w3.org/2003/05/soap-envelope');
      expect(result).toContain('<soap12:Body>');
      expect(result).toContain('<TestOperation');
      expect(result).toContain('<userName>test</userName>');
      expect(result).toContain('<password>pass</password>');
    });

    it('should handle the same parameter types as SOAP 1.1', () => {
      const result = buildSOAP12Envelope('TestOp', {
        id: 123,
        isActive: true,
        nullValue: null,
      });

      expect(result).toContain('<id>123</id>');
      expect(result).toContain('<isActive>1</isActive>');
      expect(result).toContain('<nullValue xsi:nil="true" />');
    });
  });

  describe('getSOAPAction', () => {
    it('should return correct SOAP action', () => {
      const result = getSOAPAction('TestOperation');
      expect(result).toBe('http://tempuri.org/TestOperation');
    });

    it('should handle different operation names', () => {
      expect(getSOAPAction('BankPaymentList')).toBe('http://tempuri.org/BankPaymentList');
      expect(getSOAPAction('SubFirmAddNew')).toBe('http://tempuri.org/SubFirmAddNew');
      expect(getSOAPAction('GetFirmBankBalance')).toBe('http://tempuri.org/GetFirmBankBalance');
    });
  });
});
