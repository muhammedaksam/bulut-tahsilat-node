/**
 * BulutTahsilat Bank Payment Service Client
 */

import { BaseSOAPClient } from './soap/base-soap-client';
import {
  ClientConfig,
  BankPaymentListAllParams,
  BankPaymentListAllSubFirmParams,
  BankPaymentListAllWithFeatureParams,
  BankPaymentListDebitParams,
  BankPaymentListForCustomFieldsParams,
  BankPaymentListParams,
  FirmManagerAddNewParams,
  FirmManagerDeleteParams,
  GetFirmBankBalanceSubFirmParams,
  GetFirmBankDailyBalanceParams,
  GetVPosTransactionListParams,
  PosPaymentListParams,
  PosPaymentListSubFirmParams,
  PosPaymentListWithEndOfDayParams,
  PosPaymentListWithValorDateParams,
  PosPaymentSUMParams,
  PosReturnListParams,
  PosReturnListSubFirmParams,
  ResponseBankPaymentList,
  ResponseBankPaymentListAll,
  ResponseBankPaymentListAllSubFirm,
  ResponseBankPaymentListAllWithFeature,
  ResponseBankPaymentListDebit,
  ResponseBankPaymentListForCustomFields,
  ResponseDeleteAllMatchingCriteria,
  ResponseFirmBankBalance,
  ResponseFirmBankBalanceSubFirm,
  ResponseFirmBankDailyBalance,
  ResponseFirmDebtInfo,
  ResponseFirmManagerAddNew,
  ResponseFirmManagerDelete,
  ResponseFirmManagerList,
  ResponsePaymentCategoryList,
  ResponsePosPaymentList,
  ResponsePosPaymentListGreaterThanPosPaymentID,
  ResponsePosPaymentListSubFirm,
  ResponsePosPaymentListWithEndOfDay,
  ResponsePosPaymentListWithValorDate,
  ResponsePosPaymentSUM,
  ResponsePosReturnList,
  ResponsePosReturnListGreaterThanValorPaymentID,
  ResponsePosReturnListSubFirm,
  ResponseSubFirmAddNew,
  ResponseSubFirmGetPaymentChannel,
  ResponseSubFirmIBANAddNew,
  ResponseSubFirmIBANDelete,
  ResponseSubFirmInfo,
  ResponseSubFirmList,
  ResponseSubFirmUpdate,
  ResponseSubFirmVKNAddNew,
  ResponseSubFirmVKNDelete,
  ResponseUpdatePaymentStatusInfoWithERPRefNo,
  ResponseUpdatePaymentStatusInfoWithPaymentExpCode,
  ResponseUpdatePaymentStatusInfoWithPaymentIDList,
  ResponseVPosTransactionList,
  ResponseValorPaymentSUM,
  SubFirmAddNewParams,
  SubFirmIBANAddNewParams,
  SubFirmIBANDeleteParams,
  SubFirmUpdateParams,
  SubFirmVKNAddNewParams,
  SubFirmVKNDeleteParams,
  UpdatePaymentStatusInfoParams,
  UpdatePaymentStatusInfoWithERPRefNoParams,
  UpdatePaymentStatusInfoWithPaymentExpCodeParams,
  UpdatePaymentStatusInfoWithPaymentIDListParams,
  ValorPaymentSUMParams,
} from './types';

const DEFAULT_BASE_URL = 'https://ws.buluttahsilat.com/WebService/WSBankPaymentService.asmx';

/**
 * Main BankPaymentService client
 */
export class BankPaymentServiceClient extends BaseSOAPClient {
  private userName: string;
  private password: string;
  private firmCode?: string;
  private firmAPICode?: string;

  constructor(config: ClientConfig) {
    super({
      baseURL: config.baseURL || DEFAULT_BASE_URL,
      timeout: config.timeout,
      debug: config.debug,
    });

    this.userName = config.userName;
    this.password = config.password;
    this.firmCode = config.firmCode;
    this.firmAPICode = config.firmAPICode;
  }

  // ==================== Bank Payment Operations ====================

  /**
   * Bank Payment List
   */
  async getBankPaymentList(
    params: Omit<BankPaymentListParams, 'userName' | 'password' | 'firmCode'> & {
      firmCode?: string;
    }
  ): Promise<ResponseBankPaymentList> {
    const { firmCode, ...rest } = params;
    return this.call('BankPaymentList', {
      userName: this.userName,
      password: this.password,
      firmCode: firmCode || this.firmCode,
      ...rest,
    });
  }

  /**
   * Bank Payment List All
   */
  async getBankPaymentListAll(
    params: Omit<BankPaymentListAllParams, 'userName' | 'password' | 'firmCode'> & {
      firmCode?: string;
    }
  ): Promise<ResponseBankPaymentListAll> {
    const { firmCode, ...rest } = params;
    return this.call('BankPaymentListAll', {
      userName: this.userName,
      password: this.password,
      firmCode: firmCode || this.firmCode,
      ...rest,
    });
  }

  /**
   * Bank Payment List All Sub Firm
   */
  async getBankPaymentListAllSubFirm(
    params: Omit<BankPaymentListAllSubFirmParams, 'userName' | 'password'> & { firmCode?: string }
  ): Promise<ResponseBankPaymentListAllSubFirm> {
    const { firmCode, ...rest } = params;
    return this.call('BankPaymentListAllSubFirm', {
      userName: this.userName,
      password: this.password,
      ...rest,
    });
  }

  /**
   * Bank Payment List All With Feature
   */
  async getBankPaymentListAllWithFeature(
    params: Omit<BankPaymentListAllWithFeatureParams, 'userName' | 'password'> & {
      firmCode?: string;
    }
  ): Promise<ResponseBankPaymentListAllWithFeature> {
    const { firmCode, ...rest } = params;
    return this.call('BankPaymentListAllWithFeature', {
      userName: this.userName,
      password: this.password,
      ...rest,
    });
  }

  /**
   * Bank Payment List Debit
   */
  async getBankPaymentListDebit(
    params: Omit<BankPaymentListDebitParams, 'userName' | 'password' | 'firmCode'> & {
      firmCode?: string;
    }
  ): Promise<ResponseBankPaymentListDebit> {
    const { firmCode, ...rest } = params;
    return this.call('BankPaymentListDebit', {
      userName: this.userName,
      password: this.password,
      firmCode: firmCode || this.firmCode,
      ...rest,
    });
  }

  /**
   * Bank Payment List For Custom Fields
   */
  async getBankPaymentListForCustomFields(
    params: Omit<BankPaymentListForCustomFieldsParams, 'userName' | 'password'> & {
      firmCode?: string;
    }
  ): Promise<ResponseBankPaymentListForCustomFields> {
    const { firmCode, ...rest } = params;
    return this.call('BankPaymentListForCustomFields', {
      userName: this.userName,
      password: this.password,
      ...rest,
    });
  }

  /**
   * Get Payment Category List
   */
  async getPaymentCategoryList(): Promise<ResponsePaymentCategoryList> {
    return this.call('GetPaymentCategoryList', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
    });
  }

  // ==================== SubFirm Operations ====================

  /**
   * Delete All Matching Criteria
   */
  async deleteAllMatchingCriteria(
    paymentExpCode: string
  ): Promise<ResponseDeleteAllMatchingCriteria> {
    return this.call('DeleteAllMatchingCriteria', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      paymentExpCode: paymentExpCode,
    });
  }

  /**
   * Get Sub Firm Info
   */
  async getSubFirmInfo(paymentExpCode: string): Promise<ResponseSubFirmInfo> {
    return this.call('GetSubFirmInfo', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      paymentExpCode: paymentExpCode,
    });
  }

  /**
   * Sub Firm Add New
   */
  async addSubFirm(
    params: Omit<SubFirmAddNewParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseSubFirmAddNew> {
    return this.call('SubFirmAddNew', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Sub Firm Get Payment Channel
   */
  async getSubFirmPaymentChannel(
    paymentExpCode: string
  ): Promise<ResponseSubFirmGetPaymentChannel> {
    return this.call('SubFirmGetPaymentChannel', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      paymentExpCode: paymentExpCode,
    });
  }

  /**
   * Sub Firm I B A N Add New
   */
  async addSubFirmIBAN(
    params: Omit<SubFirmIBANAddNewParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseSubFirmIBANAddNew> {
    return this.call('SubFirmIBANAddNew', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Sub Firm I B A N Delete
   */
  async deleteSubFirmIBAN(
    params: Omit<SubFirmIBANDeleteParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseSubFirmIBANDelete> {
    return this.call('SubFirmIBANDelete', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Sub Firm List
   */
  async getSubFirmList(): Promise<ResponseSubFirmList> {
    return this.call('SubFirmList', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
    });
  }

  /**
   * Sub Firm Update
   */
  async updateSubFirm(
    params: Omit<SubFirmUpdateParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseSubFirmUpdate> {
    return this.call('SubFirmUpdate', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Sub Firm V K N Add New
   */
  async addSubFirmVKN(
    params: Omit<SubFirmVKNAddNewParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseSubFirmVKNAddNew> {
    return this.call('SubFirmVKNAddNew', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Sub Firm V K N Delete
   */
  async deleteSubFirmVKN(
    params: Omit<SubFirmVKNDeleteParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseSubFirmVKNDelete> {
    return this.call('SubFirmVKNDelete', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  // ==================== Other Operations ====================

  /**
   * Firm Manager Add New
   */
  async addFirmManager(
    params: Omit<FirmManagerAddNewParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseFirmManagerAddNew> {
    return this.call('FirmManagerAddNew', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Firm Manager Delete
   */
  async deleteFirmManager(
    params: Omit<FirmManagerDeleteParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseFirmManagerDelete> {
    return this.call('FirmManagerDelete', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Get Firm Debt Info
   */
  async getFirmDebtInfo(): Promise<ResponseFirmDebtInfo> {
    return this.call('GetFirmDebtInfo', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
    });
  }

  /**
   * Get Firm Manager List
   */
  async getFirmManagerList(paymentExpCode: string): Promise<ResponseFirmManagerList> {
    return this.call('GetFirmManagerList', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      paymentExpCode: paymentExpCode,
    });
  }

  /**
   * Get V Pos Transaction List
   */
  async getVPosTransactionList(
    params: Omit<GetVPosTransactionListParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseVPosTransactionList> {
    return this.call('GetVPosTransactionList', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  // ==================== Bank Balance Operations ====================

  /**
   * Get Firm Bank Balance
   */
  async getFirmBankBalance(iban: string): Promise<ResponseFirmBankBalance> {
    return this.call('GetFirmBankBalance', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      iban: iban,
    });
  }

  /**
   * Get Firm Bank Balance Sub Firm
   */
  async getFirmBankBalanceSubFirm(
    params: Omit<GetFirmBankBalanceSubFirmParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseFirmBankBalanceSubFirm> {
    return this.call('GetFirmBankBalanceSubFirm', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Get Firm Bank Daily Balance
   */
  async getFirmBankDailyBalance(
    params: Omit<GetFirmBankDailyBalanceParams, 'userName' | 'password' | 'firmAPICode'>
  ): Promise<ResponseFirmBankDailyBalance> {
    return this.call('GetFirmBankDailyBalance', {
      userName: this.userName,
      password: this.password,
      firmAPICode: this.firmAPICode,
      ...params,
    });
  }

  // ==================== POS Payment Operations ====================

  /**
   * Pos Payment List
   */
  async getPosPaymentList(
    params: Omit<PosPaymentListParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosPaymentList> {
    return this.call('PosPaymentList', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Pos Payment List Greater Than Pos Payment I D
   */
  async getPosPaymentListGreaterThanID(
    posPaymentID: number
  ): Promise<ResponsePosPaymentListGreaterThanPosPaymentID> {
    return this.call('PosPaymentListGreaterThanPosPaymentID', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      posPaymentID: posPaymentID,
    });
  }

  /**
   * Pos Payment List Sub Firm
   */
  async getPosPaymentListSubFirm(
    params: Omit<PosPaymentListSubFirmParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosPaymentListSubFirm> {
    return this.call('PosPaymentListSubFirm', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Pos Payment List With End Of Day
   */
  async getPosPaymentListWithEndOfDay(
    params: Omit<PosPaymentListWithEndOfDayParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosPaymentListWithEndOfDay> {
    return this.call('PosPaymentListWithEndOfDay', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Pos Payment List With Valor Date
   */
  async getPosPaymentListWithValorDate(
    params: Omit<PosPaymentListWithValorDateParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosPaymentListWithValorDate> {
    return this.call('PosPaymentListWithValorDate', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Pos Payment S U M
   */
  async getPosPaymentSUM(
    params: Omit<PosPaymentSUMParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosPaymentSUM> {
    return this.call('PosPaymentSUM', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Pos Return List
   */
  async getPosReturnList(
    params: Omit<PosReturnListParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosReturnList> {
    return this.call('PosReturnList', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Pos Return List Greater Than Valor Payment I D
   */
  async getPosReturnListGreaterThanID(
    valorPaymentID: number
  ): Promise<ResponsePosReturnListGreaterThanValorPaymentID> {
    return this.call('PosReturnListGreaterThanValorPaymentID', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      valorPaymentID: valorPaymentID,
    });
  }

  /**
   * Pos Return List Sub Firm
   */
  async getPosReturnListSubFirm(
    params: Omit<PosReturnListSubFirmParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponsePosReturnListSubFirm> {
    return this.call('PosReturnListSubFirm', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  /**
   * Valor Payment S U M
   */
  async getValorPaymentSUM(
    params: Omit<ValorPaymentSUMParams, 'userName' | 'password' | 'firmApiCode'>
  ): Promise<ResponseValorPaymentSUM> {
    return this.call('ValorPaymentSUM', {
      userName: this.userName,
      password: this.password,
      firmApiCode: this.firmAPICode,
      ...params,
    });
  }

  // ==================== Payment Status Operations ====================

  /**
   * Update Payment Status Info
   */
  async updatePaymentStatus(
    params: Omit<UpdatePaymentStatusInfoParams, 'userName' | 'password'> & { firmCode?: string }
  ): Promise<unknown> {
    const { firmCode, ...rest } = params;
    return this.call('UpdatePaymentStatusInfo', {
      userName: this.userName,
      password: this.password,
      ...rest,
    });
  }

  /**
   * Update Payment Status Info With E R P Ref No
   */
  async updatePaymentStatusWithERPRefNo(
    params: Omit<UpdatePaymentStatusInfoWithERPRefNoParams, 'userName' | 'password'>
  ): Promise<ResponseUpdatePaymentStatusInfoWithERPRefNo> {
    return this.call('UpdatePaymentStatusInfoWithERPRefNo', {
      userName: this.userName,
      password: this.password,
      ...params,
    });
  }

  /**
   * Update Payment Status Info With Payment Exp Code
   */
  async updatePaymentStatusWithExpCode(
    params: Omit<UpdatePaymentStatusInfoWithPaymentExpCodeParams, 'userName' | 'password'>
  ): Promise<ResponseUpdatePaymentStatusInfoWithPaymentExpCode> {
    return this.call('UpdatePaymentStatusInfoWithPaymentExpCode', {
      userName: this.userName,
      password: this.password,
      ...params,
    });
  }

  /**
   * Update Payment Status Info With Payment I D List
   */
  async updatePaymentStatusWithIDList(
    params: Omit<UpdatePaymentStatusInfoWithPaymentIDListParams, 'userName' | 'password'> & {
      firmCode?: string;
    }
  ): Promise<ResponseUpdatePaymentStatusInfoWithPaymentIDList> {
    const { firmCode, ...rest } = params;
    return this.call('UpdatePaymentStatusInfoWithPaymentIDList', {
      userName: this.userName,
      password: this.password,
      ...rest,
    });
  }
}
