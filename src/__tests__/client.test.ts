import { BankPaymentServiceClient } from '../client';
import { ClientConfig } from '../types';

describe('BankPaymentServiceClient', () => {
  let client: BankPaymentServiceClient;
  let config: ClientConfig;

  beforeEach(() => {
    config = {
      userName: 'test-user',
      password: 'test-pass',
      firmAPICode: 'TEST123',
      debug: false,
    };
    client = new BankPaymentServiceClient(config);
  });

  describe('Bank Payment Operations', () => {
    beforeEach(() => {
      jest.spyOn(client as any, 'call').mockResolvedValue({});
    });

    it('should call getBankPaymentList', async () => {
      const params = { firmCode: 'FIRM123' };
      await client.getBankPaymentList(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentList',
        expect.objectContaining({ firmCode: 'FIRM123' })
      );
    });

    it('should fall back to default firmCode in getBankPaymentList', async () => {
      const clientWithFirmCode = new BankPaymentServiceClient({
        ...config,
        firmCode: 'DEFAULT_FIRM',
      });
      jest.spyOn(clientWithFirmCode as any, 'call').mockResolvedValue({});
      await clientWithFirmCode.getBankPaymentList({} as any);
      expect((clientWithFirmCode as any).call).toHaveBeenCalledWith(
        'BankPaymentList',
        expect.objectContaining({ firmCode: 'DEFAULT_FIRM' })
      );
    });

    it('should call getBankPaymentListAll', async () => {
      const params = { firmCode: 'FIRM123' };
      await client.getBankPaymentListAll(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentListAll',
        expect.objectContaining({ firmCode: 'FIRM123' })
      );
    });

    it('should fall back to default firmCode in getBankPaymentListAll', async () => {
      const clientWithFirmCode = new BankPaymentServiceClient({
        ...config,
        firmCode: 'DEFAULT_FIRM',
      });
      jest.spyOn(clientWithFirmCode as any, 'call').mockResolvedValue({});
      await clientWithFirmCode.getBankPaymentListAll({} as any);
      expect((clientWithFirmCode as any).call).toHaveBeenCalledWith(
        'BankPaymentListAll',
        expect.objectContaining({ firmCode: 'DEFAULT_FIRM' })
      );
    });

    it('should call getBankPaymentListAllSubFirm', async () => {
      const params = {};
      await client.getBankPaymentListAllSubFirm(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentListAllSubFirm',
        expect.any(Object)
      );
    });

    it('should call getBankPaymentListAllSubFirmWithKey', async () => {
      const params = { firmCode: 'FIRM123' };
      await client.getBankPaymentListAllSubFirmWithKey(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentListAllSubFirmWithKey',
        expect.objectContaining({ firmCode: 'FIRM123' })
      );
    });

    it('should fall back to default firmCode in getBankPaymentListAllSubFirmWithKey', async () => {
      const clientWithFirmCode = new BankPaymentServiceClient({
        ...config,
        firmCode: 'DEFAULT_FIRM',
      });
      jest.spyOn(clientWithFirmCode as any, 'call').mockResolvedValue({});
      await clientWithFirmCode.getBankPaymentListAllSubFirmWithKey({} as any);
      expect((clientWithFirmCode as any).call).toHaveBeenCalledWith(
        'BankPaymentListAllSubFirmWithKey',
        expect.objectContaining({ firmCode: 'DEFAULT_FIRM' })
      );
    });

    it('should call getBankPaymentListAllWithFeature', async () => {
      const params = {};
      await client.getBankPaymentListAllWithFeature(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentListAllWithFeature',
        expect.any(Object)
      );
    });

    it('should call getBankPaymentListDebit', async () => {
      const params = { firmCode: 'FIRM123' };
      await client.getBankPaymentListDebit(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentListDebit',
        expect.objectContaining({ firmCode: 'FIRM123' })
      );
    });

    it('should fall back to default firmCode in getBankPaymentListDebit', async () => {
      const clientWithFirmCode = new BankPaymentServiceClient({
        ...config,
        firmCode: 'DEFAULT_FIRM',
      });
      jest.spyOn(clientWithFirmCode as any, 'call').mockResolvedValue({});
      await clientWithFirmCode.getBankPaymentListDebit({} as any);
      expect((clientWithFirmCode as any).call).toHaveBeenCalledWith(
        'BankPaymentListDebit',
        expect.objectContaining({ firmCode: 'DEFAULT_FIRM' })
      );
    });

    it('should call getBankPaymentListForCustomFields', async () => {
      const params = {};
      await client.getBankPaymentListForCustomFields(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'BankPaymentListForCustomFields',
        expect.any(Object)
      );
    });

    it('should call getPaymentCategoryList', async () => {
      await client.getPaymentCategoryList();
      expect((client as any).call).toHaveBeenCalledWith(
        'GetPaymentCategoryList',
        expect.any(Object)
      );
    });
  });

  describe('SubFirm Operations', () => {
    beforeEach(() => {
      jest.spyOn(client as any, 'call').mockResolvedValue({});
    });

    it('should call deleteAllMatchingCriteria', async () => {
      await client.deleteAllMatchingCriteria('test');
      expect((client as any).call).toHaveBeenCalledWith(
        'DeleteAllMatchingCriteria',
        expect.any(Object)
      );
    });

    it('should call getSubFirmInfo', async () => {
      await client.getSubFirmInfo('test');
      expect((client as any).call).toHaveBeenCalledWith('GetSubFirmInfo', expect.any(Object));
    });

    it('should call addSubFirm', async () => {
      const params = {};
      await client.addSubFirm(params as any);
      expect((client as any).call).toHaveBeenCalledWith('SubFirmAddNew', expect.any(Object));
    });

    it('should call getSubFirmPaymentChannel', async () => {
      await client.getSubFirmPaymentChannel('test');
      expect((client as any).call).toHaveBeenCalledWith(
        'SubFirmGetPaymentChannel',
        expect.any(Object)
      );
    });

    it('should call addSubFirmIBAN', async () => {
      const params = {};
      await client.addSubFirmIBAN(params as any);
      expect((client as any).call).toHaveBeenCalledWith('SubFirmIBANAddNew', expect.any(Object));
    });

    it('should call deleteSubFirmIBAN', async () => {
      const params = {};
      await client.deleteSubFirmIBAN(params as any);
      expect((client as any).call).toHaveBeenCalledWith('SubFirmIBANDelete', expect.any(Object));
    });

    it('should call getSubFirmList', async () => {
      await client.getSubFirmList();
      expect((client as any).call).toHaveBeenCalledWith('SubFirmList', expect.any(Object));
    });

    it('should call updateSubFirm', async () => {
      const params = {};
      await client.updateSubFirm(params as any);
      expect((client as any).call).toHaveBeenCalledWith('SubFirmUpdate', expect.any(Object));
    });

    it('should call addSubFirmVKN', async () => {
      const params = {};
      await client.addSubFirmVKN(params as any);
      expect((client as any).call).toHaveBeenCalledWith('SubFirmVKNAddNew', expect.any(Object));
    });

    it('should call deleteSubFirmVKN', async () => {
      const params = {};
      await client.deleteSubFirmVKN(params as any);
      expect((client as any).call).toHaveBeenCalledWith('SubFirmVKNDelete', expect.any(Object));
    });
  });

  describe('Other Operations', () => {
    beforeEach(() => {
      jest.spyOn(client as any, 'call').mockResolvedValue({});
    });

    it('should call addFirmManager', async () => {
      const params = {};
      await client.addFirmManager(params as any);
      expect((client as any).call).toHaveBeenCalledWith('FirmManagerAddNew', expect.any(Object));
    });

    it('should call deleteFirmManager', async () => {
      const params = {};
      await client.deleteFirmManager(params as any);
      expect((client as any).call).toHaveBeenCalledWith('FirmManagerDelete', expect.any(Object));
    });

    it('should call getFirmDebtInfo', async () => {
      await client.getFirmDebtInfo();
      expect((client as any).call).toHaveBeenCalledWith('GetFirmDebtInfo', expect.any(Object));
    });

    it('should call getFirmManagerList', async () => {
      await client.getFirmManagerList('test');
      expect((client as any).call).toHaveBeenCalledWith('GetFirmManagerList', expect.any(Object));
    });

    it('should call getVPosTransactionList', async () => {
      const params = {};
      await client.getVPosTransactionList(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'GetVPosTransactionList',
        expect.any(Object)
      );
    });
  });

  describe('Bank Balance Operations', () => {
    beforeEach(() => {
      jest.spyOn(client as any, 'call').mockResolvedValue({});
    });

    it('should call getFirmBankBalance', async () => {
      await client.getFirmBankBalance('test');
      expect((client as any).call).toHaveBeenCalledWith('GetFirmBankBalance', expect.any(Object));
    });

    it('should call getFirmBankBalanceSubFirm', async () => {
      const params = {};
      await client.getFirmBankBalanceSubFirm(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'GetFirmBankBalanceSubFirm',
        expect.any(Object)
      );
    });

    it('should call getFirmBankDailyBalance', async () => {
      const params = {};
      await client.getFirmBankDailyBalance(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'GetFirmBankDailyBalance',
        expect.any(Object)
      );
    });
  });

  describe('POS Payment Operations', () => {
    beforeEach(() => {
      jest.spyOn(client as any, 'call').mockResolvedValue({});
    });

    it('should call getPosPaymentList', async () => {
      const params = {};
      await client.getPosPaymentList(params as any);
      expect((client as any).call).toHaveBeenCalledWith('PosPaymentList', expect.any(Object));
    });

    it('should call getPosPaymentListGreaterThanID', async () => {
      await client.getPosPaymentListGreaterThanID(123);
      expect((client as any).call).toHaveBeenCalledWith(
        'PosPaymentListGreaterThanPosPaymentID',
        expect.any(Object)
      );
    });

    it('should call getPosPaymentListSubFirm', async () => {
      const params = {};
      await client.getPosPaymentListSubFirm(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'PosPaymentListSubFirm',
        expect.any(Object)
      );
    });

    it('should call getPosPaymentListWithEndOfDay', async () => {
      const params = {};
      await client.getPosPaymentListWithEndOfDay(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'PosPaymentListWithEndOfDay',
        expect.any(Object)
      );
    });

    it('should call getPosPaymentListWithValorDate', async () => {
      const params = {};
      await client.getPosPaymentListWithValorDate(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'PosPaymentListWithValorDate',
        expect.any(Object)
      );
    });

    it('should call getPosPaymentSUM', async () => {
      const params = {};
      await client.getPosPaymentSUM(params as any);
      expect((client as any).call).toHaveBeenCalledWith('PosPaymentSUM', expect.any(Object));
    });

    it('should call getPosReturnList', async () => {
      const params = {};
      await client.getPosReturnList(params as any);
      expect((client as any).call).toHaveBeenCalledWith('PosReturnList', expect.any(Object));
    });

    it('should call getPosReturnListGreaterThanID', async () => {
      await client.getPosReturnListGreaterThanID(123);
      expect((client as any).call).toHaveBeenCalledWith(
        'PosReturnListGreaterThanValorPaymentID',
        expect.any(Object)
      );
    });

    it('should call getPosReturnListSubFirm', async () => {
      const params = {};
      await client.getPosReturnListSubFirm(params as any);
      expect((client as any).call).toHaveBeenCalledWith('PosReturnListSubFirm', expect.any(Object));
    });

    it('should call getValorPaymentSUM', async () => {
      const params = {};
      await client.getValorPaymentSUM(params as any);
      expect((client as any).call).toHaveBeenCalledWith('ValorPaymentSUM', expect.any(Object));
    });
  });

  describe('Payment Status Operations', () => {
    beforeEach(() => {
      jest.spyOn(client as any, 'call').mockResolvedValue({});
    });

    it('should call updatePaymentStatus', async () => {
      const params = {};
      await client.updatePaymentStatus(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'UpdatePaymentStatusInfo',
        expect.any(Object)
      );
    });

    it('should call updatePaymentStatusWithERPRefNo', async () => {
      const params = {};
      await client.updatePaymentStatusWithERPRefNo(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'UpdatePaymentStatusInfoWithERPRefNo',
        expect.any(Object)
      );
    });

    it('should call updatePaymentStatusWithExpCode', async () => {
      const params = {};
      await client.updatePaymentStatusWithExpCode(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'UpdatePaymentStatusInfoWithPaymentExpCode',
        expect.any(Object)
      );
    });

    it('should call updatePaymentStatusWithIDList', async () => {
      const params = {};
      await client.updatePaymentStatusWithIDList(params as any);
      expect((client as any).call).toHaveBeenCalledWith(
        'UpdatePaymentStatusInfoWithPaymentIDList',
        expect.any(Object)
      );
    });
  });
});
