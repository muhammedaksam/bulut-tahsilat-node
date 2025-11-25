import { BaseResponse } from './index';
import { BankPaymentListItem, PaymentCategoryListItem } from './bank-payment.types';
import { BankBalance } from './responses.types';
import { VPosTransactionListItem, POSPaymentListItem } from './pos-payment.types';
import { SubFirmReturn } from './subfirm.types';

/**
 * Response for BankPaymentList
 */
export interface ResponseBankPaymentList extends BaseResponse {
  BankPaymentList?: BankPaymentListItem[];
}

/**
 * Request parameters for BankPaymentListAll
 */
export interface BankPaymentListAllParams extends BaseResponse {
  paymentStatusTypeID?: number;
  startDate: string; // Required
  endDate: string; // Required
}

/**
 * Response for BankPaymentListAll
 */
export interface ResponseBankPaymentListAll extends BaseResponse {
  BankPaymentList?: BankPaymentListItem[];
}

/**
 * Response for BankPaymentListAllSubFirm
 */
export interface ResponseBankPaymentListAllSubFirm extends BaseResponse {
  BankPaymentList?: BankPaymentListItem[];
}

/**
 * Request parameters for BankPaymentListAllWithFeature
 */
export interface BankPaymentListAllWithFeatureParams extends BaseResponse {
  paymentStatusTypeID?: number;
  startDate: string; // Required
  endDate: string; // Required
}

/**
 * Response for BankPaymentListAllWithFeature
 */
export interface ResponseBankPaymentListAllWithFeature extends BaseResponse {
  BankPaymentList?: BankPaymentListItem[];
}

/**
 * Request parameters for BankPaymentListDebit
 */
export interface BankPaymentListDebitParams extends BaseResponse {
  paymentStatusTypeID?: number;
  startDate: string; // Required
  endDate: string; // Required
}

/**
 * Response for BankPaymentListDebit
 */
export interface ResponseBankPaymentListDebit extends BaseResponse {
  BankPaymentList?: BankPaymentListItem[];
}

/**
 * Request parameters for BankPaymentListForCustomFields
 */
export interface BankPaymentListForCustomFieldsParams extends BaseResponse {
  paymentStatusTypeID?: number;
  startDate: string; // Required
  endDate: string; // Required
}

/**
 * Response for BankPaymentListForCustomFields
 */
export interface ResponseBankPaymentListForCustomFields extends BaseResponse {
  BankPaymentList?: BankPaymentListItem[];
}

/**
 * Request parameters for DeleteAllMatchingCriteria
 */
export interface DeleteAllMatchingCriteriaParams extends BaseResponse {
  paymentExpCode?: string;
}

/**
 * Response for DeleteAllMatchingCriteria
 */
export interface ResponseDeleteAllMatchingCriteria extends BaseResponse {
  DeleteCountIBANMatch?: number;
  DeleteCountTCTaxMatch?: number;
  DeleteCountRuleSet?: number;
  DeleteCountFormula?: number;
}

/**
 * Request parameters for FirmManagerAddNew
 */
export interface FirmManagerAddNewParams extends BaseResponse {
  paymentExpCode?: string;
  managerUserName?: string;
}

/**
 * Response for FirmManagerAddNew
 */
export type ResponseFirmManagerAddNew = BaseResponse;

/**
 * Request parameters for FirmManagerDelete
 */
export interface FirmManagerDeleteParams extends BaseResponse {
  paymentExpCode?: string;
  managerUserName?: string;
}

/**
 * Response for FirmManagerDelete
 */
export type ResponseFirmManagerDelete = BaseResponse;

/**
 * Request parameters for GetFirmBankBalance
 */
export interface GetFirmBankBalanceParams extends BaseResponse {
  iban?: string;
}

/**
 * Response for GetFirmBankBalance
 */
export interface ResponseFirmBankBalance extends BaseResponse {
  BankList?: BankBalance[];
}

/**
 * Request parameters for GetFirmBankBalanceSubFirm
 */
export interface GetFirmBankBalanceSubFirmParams extends BaseResponse {
  iban?: string;
  taxNumber?: string;
}

/**
 * Response for GetFirmBankBalanceSubFirm
 */
export interface ResponseFirmBankBalanceSubFirm extends BaseResponse {
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmName?: string;
  FirmBankBranchName?: string;
  FirmBankNickName?: string;
  FirmBankAccountType?: string;
  FirmBankIBAN?: string;
  FirmBankCurrencyUnit?: string;
  LastTimeStamp?: string;
  Balance?: number;
  BlockedBalance?: number;
}

/**
 * Request parameters for GetFirmBankDailyBalance
 */
export interface GetFirmBankDailyBalanceParams extends BaseResponse {
  iban?: string;
  date?: string;
}

/**
 * Response for GetFirmBankDailyBalance
 */
export interface ResponseFirmBankDailyBalance extends BaseResponse {
  BankList?: BankBalance[];
}

/**
 * Response for GetFirmDebtInfo
 */
export interface ResponseFirmDebtInfo extends BaseResponse {
  IsInDebt?: boolean;
  DebtDate?: string;
  TotalAmount?: number;
  RemainedDays?: number;
  LastPaymentDate?: string;
  PaymentURL?: string;
  CustomerMessage?: string;
  EFTCompanyName?: string;
  EFTBankName?: string;
  EFTBankBranchName?: string;
  EFTBankBranchCode?: string;
  EFTAccountNumber?: string;
  EFTIBAN?: string;
}

/**
 * Request parameters for GetFirmManagerList
 */
export interface GetFirmManagerListParams extends BaseResponse {
  paymentExpCode?: string;
}

/**
 * Response for GetFirmManagerList
 */
export interface ResponseFirmManagerList extends BaseResponse {
  FirmManagerList?: string[];
}

/**
 * Response for GetPaymentCategoryList
 */
export interface ResponsePaymentCategoryList extends BaseResponse {
  PaymentCategoryList?: PaymentCategoryListItem[];
}

/**
 * Response for GetSubFirmInfo
 */
export interface ResponseSubFirmInfo extends BaseResponse {
  FirmName?: string;
  Address?: string;
  County?: string;
  CityID?: number;
  Phone?: string;
  TaxOffice?: string;
  TaxNumber?: string;
  AuthPersName?: string;
  AuthPersSurname?: string;
  AuthPersGSM?: string;
  AuthPersGenderID?: number;
  DealerCode?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  ReservedField?: string;
}

/**
 * Response for GetVPosTransactionList
 */
export interface ResponseVPosTransactionList extends BaseResponse {
  VPosTransactionList?: VPosTransactionListItem[];
}

// ResponsePosPaymentList already exists in pos-payment.types.ts - skipping

/**
 * Response for PosPaymentListGreaterThanPosPaymentID
 */
export interface ResponsePosPaymentListGreaterThanPosPaymentID extends BaseResponse {
  PosPaymentList?: POSPaymentListItem[];
}

/**
 * Response for PosPaymentListSubFirm
 */
export interface ResponsePosPaymentListSubFirm extends BaseResponse {
  PosPaymentList?: POSPaymentListItem[];
}

/**
 * Response for PosPaymentListWithEndOfDay
 */
export interface ResponsePosPaymentListWithEndOfDay extends BaseResponse {
  PosPaymentList?: POSPaymentListItem[];
}

/**
 * Response for PosPaymentListWithValorDate
 */
export interface ResponsePosPaymentListWithValorDate extends BaseResponse {
  PosPaymentList?: POSPaymentListItem[];
}

/**
 * PosPaymentSUM - item in PosPaymentSUMList
 */
export interface PosPaymentSUM {
  BankCode?: string;
  BankName?: string;
  BusinessNo?: string;
  MemberBranchName?: string;
  MemberBranchIBAN?: string;
  SUMGrossAmount?: number;
  SUMNetAmount?: number;
  SUMTotalCommission?: number;
  SUMBankServiceCommission?: number;
  SUMOtherCommission?: number;
  RowCount?: number;
  Currency?: string;
}

/**
 * Response for PosPaymentSUM
 */
export interface ResponsePosPaymentSUM extends BaseResponse {
  PosPaymentSUMList?: PosPaymentSUM[];
}

/**
 * PosReturnListItem - item in PosReturnList
 */
export interface PosReturnListItem {
  PosReturnID?: number;
  BankCode?: string;
  BankName?: string;
  SubFirmID?: number;
  SubFirmName?: string;
  SubFirmVKN?: string;
  PaymentDate?: string;
  ValorDate?: string;
  GrossAmount?: number;
  TotalCommission?: number;
  CommissionRate?: number;
  Amount?: number;
  BankServiceCommission?: number;
  OtherCommission?: number;
  BusinessNo?: string;
  TerminalID?: string;
  AuthCode?: string;
  InstallmentNumber?: number;
  ProcessType?: string;
  ReturnIBAN?: string;
  PosReservedField?: string;
  EndOfDay?: string;
  Currency?: string;
  CardBankCode?: string;
  CardBankName?: string;
  CardNumber?: string;
  MemberBranchName?: string;
  TerminalName?: string;
  PosCardTypeName?: string;
  PosTypeName?: string;
  BatchNumber?: string;
  InstallmentOrderNo?: number;
  OrderBankCode?: string;
  PaymentExpCode?: string;
  CardType?: string;
  AccountNumber?: string;
  ProcessTypeCustom?: string;
}

/**
 * Response for PosReturnList
 */
export interface ResponsePosReturnList extends BaseResponse {
  PosReturnList?: PosReturnListItem[];
}

/**
 * Response for PosReturnListGreaterThanValorPaymentID
 */
export interface ResponsePosReturnListGreaterThanValorPaymentID extends BaseResponse {
  PosReturnList?: PosReturnListItem[];
}

/**
 * Response for PosReturnListSubFirm
 */
export interface ResponsePosReturnListSubFirm extends BaseResponse {
  PosReturnList?: PosReturnListItem[];
}

/**
 * Response for SubFirmAddNew
 */
export interface ResponseSubFirmAddNew extends BaseResponse {
  FirmID?: number;
  FirmCode?: string;
  FirmName?: string;
  PaymentExpCode?: string;
  TaxNumber?: string;
  TaxOffice?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  ReservedField?: string;
  StatusID?: number;
  FirmGSM?: string;
  FirmEmail?: string;
  AuthPersName?: string;
  AuthPersSurname?: string;
}

/**
 * Response for SubFirmGetPaymentChannel
 */
export interface ResponseSubFirmGetPaymentChannel extends BaseResponse {
  PaymentExpCode?: string;
  string?: string;
  FormulaName?: string;
  TargetPaymentStatus?: string;
  PaymentType?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  Currency?: string;
  Explanation?: string;
  PaymentDirectionType?: string;
  SenderFirmBankName?: string;
  SenderFirmIBAN?: string;
  TCNumber?: string;
  TaxNumber?: string;
  BranchFirmName?: string;
}

/**
 * Request parameters for SubFirmIBANAddNew
 */
export interface SubFirmIBANAddNewParams extends BaseResponse {
  paymentExpCode?: string;
  iban?: string;
  bankCode?: string;
}

/**
 * Response for SubFirmIBANAddNew
 */
export type ResponseSubFirmIBANAddNew = BaseResponse;

/**
 * Request parameters for SubFirmIBANDelete
 */
export interface SubFirmIBANDeleteParams extends BaseResponse {
  paymentExpCode?: string;
  iban?: string;
  bankCode?: string;
}

/**
 * Response for SubFirmIBANDelete
 */
export type ResponseSubFirmIBANDelete = BaseResponse;

/**
 * Response for SubFirmList
 */
export interface ResponseSubFirmList extends BaseResponse {
  SubFirmList?: SubFirmReturn[];
}

/**
 * Response for SubFirmUpdate
 */
export interface ResponseSubFirmUpdate extends BaseResponse {
  FirmID?: number;
  FirmCode?: string;
  FirmName?: string;
  PaymentExpCode?: string;
  TaxNumber?: string;
  TaxOffice?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  ReservedField?: string;
  StatusID?: number;
  FirmGSM?: string;
  FirmEmail?: string;
  AuthPersName?: string;
  AuthPersSurname?: string;
}

/**
 * Request parameters for SubFirmVKNAddNew
 */
export interface SubFirmVKNAddNewParams extends BaseResponse {
  paymentExpCode?: string;
  vkn?: string;
  name?: string;
  surname?: string;
}

/**
 * Response for SubFirmVKNAddNew
 */
export interface ResponseSubFirmVKNAddNew extends BaseResponse {
  SubFirmVKNID?: number;
}

/**
 * Response for SubFirmVKNDelete
 */
export interface ResponseSubFirmVKNDelete extends BaseResponse {
  SubFirmVKNID?: number;
}

/**
 * Request parameters for UpdatePaymentStatusInfoWithERPRefNo
 */
export interface UpdatePaymentStatusInfoWithERPRefNoParams extends BaseResponse {
  paymentID?: number;
  paymentStatusTypeID?: number;
  eRPRefNo?: string;
}

/**
 * Response for UpdatePaymentStatusInfoWithERPRefNo
 */
export type ResponseUpdatePaymentStatusInfoWithERPRefNo = BaseResponse;

/**
 * Request parameters for UpdatePaymentStatusInfoWithPaymentExpCode
 */
export interface UpdatePaymentStatusInfoWithPaymentExpCodeParams extends BaseResponse {
  paymentID?: number;
  paymentExpCode?: string;
  paymentStatusTypeID?: number;
}

/**
 * Response for UpdatePaymentStatusInfoWithPaymentExpCode
 */
export type ResponseUpdatePaymentStatusInfoWithPaymentExpCode = BaseResponse;

/**
 * Request parameters for UpdatePaymentStatusInfoWithPaymentIDList
 */
export interface UpdatePaymentStatusInfoWithPaymentIDListParams extends BaseResponse {
  int?: number;
  paymentStatusTypeID?: number;
}

/**
 * Response for UpdatePaymentStatusInfoWithPaymentIDList
 */
export type ResponseUpdatePaymentStatusInfoWithPaymentIDList = BaseResponse;

/**
 * ValorPaymentSUM - item in ValorPaymentSUMList
 */
export interface ValorPaymentSUM {
  BankCode?: string;
  BankName?: string;
  BusinessNo?: string;
  MemberBranchName?: string;
  MemberBranchIBAN?: string;
  SUMGrossAmount?: number;
  SUMNetAmount?: number;
  SUMTotalCommission?: number;
  SUMBankServiceCommission?: number;
  SUMOtherCommission?: number;
  RowCount?: number;
  Currency?: string;
}

/**
 * Response for ValorPaymentSUM
 */
export interface ResponseValorPaymentSUM extends BaseResponse {
  ValorPaymentSUMList?: ValorPaymentSUM[];
}
