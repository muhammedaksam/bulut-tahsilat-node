import * as index from '../index';

describe('index exports', () => {
  it('should export BankPaymentServiceClient', () => {
    expect(index.BankPaymentServiceClient).toBeDefined();
  });

  it('should export PaymentStatusType enum', () => {
    expect(index.PaymentStatusType).toBeDefined();
    expect(index.PaymentStatusType.Waiting).toBe(1);
    expect(index.PaymentStatusType.Approved).toBe(2);
    expect(index.PaymentStatusType.Rejected).toBe(3);
    expect(index.PaymentStatusType.Cancelled).toBe(4);
  });

  it('should export EnumStatus enum', () => {
    expect(index.EnumStatus).toBeDefined();
    expect(index.EnumStatus.Passive).toBe('Passive');
    expect(index.EnumStatus.Active).toBe('Active');
  });

  it('should export AccountType enum', () => {
    expect(index.AccountType).toBeDefined();
    expect(index.AccountType.Current).toBe(1);
    expect(index.AccountType.Savings).toBe(2);
  });

  it('should export Gender enum', () => {
    expect(index.Gender).toBeDefined();
    expect(index.Gender.Male).toBe(1);
    expect(index.Gender.Female).toBe(2);
  });
});
