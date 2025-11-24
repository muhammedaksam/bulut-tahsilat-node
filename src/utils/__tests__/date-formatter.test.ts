import { formatDateForSOAP, parseDateFromSOAP, formatDateTime } from '../date-formatter';

describe('date-formatter', () => {
  describe('formatDateForSOAP', () => {
    it('should format date to ISO string', () => {
      const date = new Date('2024-01-15T10:30:45.123Z');
      const result = formatDateForSOAP(date);
      expect(result).toBe('2024-01-15T10:30:45.123Z');
    });

    it('should handle different dates', () => {
      const date = new Date('2023-12-31T23:59:59.999Z');
      const result = formatDateForSOAP(date);
      expect(result).toBe('2023-12-31T23:59:59.999Z');
    });
  });

  describe('parseDateFromSOAP', () => {
    it('should parse ISO date string to Date object', () => {
      const dateString = '2024-01-15T10:30:45.123Z';
      const result = parseDateFromSOAP(dateString);
      expect(result).toBeInstanceOf(Date);
      expect(result.toISOString()).toBe(dateString);
    });

    it('should handle different date formats', () => {
      const dateString = '2023-12-31';
      const result = parseDateFromSOAP(dateString);
      expect(result).toBeInstanceOf(Date);
      expect(result.getFullYear()).toBe(2023);
      expect(result.getMonth()).toBe(11); // December is month 11
      expect(result.getDate()).toBe(31);
    });
  });

  describe('formatDateTime', () => {
    it('should format date to YYYY-MM-DDTHH:mm:ss', () => {
      const date = new Date('2024-01-15T10:30:45.123Z');
      const result = formatDateTime(date);
      // Note: This will be in local timezone
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
    });

    it('should pad single digit values with zero', () => {
      const date = new Date('2024-01-05T08:05:03.000Z');
      const result = formatDateTime(date);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
      // Check that there are no single digit numbers
      const parts = result.split(/[-:T]/);
      parts.forEach((part) => {
        expect(part.length).toBeGreaterThanOrEqual(2);
      });
    });

    it('should handle midnight correctly', () => {
      const date = new Date('2024-06-15T00:00:00.000Z');
      const result = formatDateTime(date);
      expect(result).toMatch(/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}$/);
    });
  });
});
