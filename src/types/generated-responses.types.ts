import { BaseResponse } from './index';

/**
 * Response types from SOAP documentation
 *
 * Note: Some types are defined in manual files and are skipped here to avoid duplicates.
 */

/**
 * Response for BankPaymentList
 */
export interface ResponseBankPaymentList extends BaseResponse {
  PaymentID?: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate?: string;
  Amount?: number;
  Explanation?: string;
  PaymentTypeID?: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID?: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BranchFirmID?: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  AccountTypeID?: number;
  AccountCurrencyCode?: string;
  AccountRelationCode?: string;
  SenderFirmBusinessArea?: string;
  SenderFirmAccountingCode?: string;
  SenderFirmReservedField?: string;
  CheckNumber?: string;
  CustomField1?: string;
  CustomField2?: string;
  FunctionCode1?: string;
  FunctionCode2?: string;
  BalanceAfterTransaction?: number;
  PaymentCategoryID?: number;
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
  PaymentID?: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate?: string;
  Amount?: number;
  Explanation?: string;
  PaymentTypeID?: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID?: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BranchFirmID?: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  AccountTypeID?: number;
  AccountCurrencyCode?: string;
  AccountRelationCode?: string;
  SenderFirmBusinessArea?: string;
  SenderFirmAccountingCode?: string;
  SenderFirmReservedField?: string;
  CheckNumber?: string;
  CustomField1?: string;
  CustomField2?: string;
  FunctionCode1?: string;
  FunctionCode2?: string;
  BalanceAfterTransaction?: number;
  PaymentCategoryID?: number;
}

/**
 * Response for BankPaymentListAllSubFirm
 */
export interface ResponseBankPaymentListAllSubFirm extends BaseResponse {
  PaymentID?: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate?: string;
  Amount?: number;
  Explanation?: string;
  PaymentTypeID?: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID?: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BranchFirmID?: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  AccountTypeID?: number;
  AccountCurrencyCode?: string;
  AccountRelationCode?: string;
  SenderFirmBusinessArea?: string;
  SenderFirmAccountingCode?: string;
  SenderFirmReservedField?: string;
  CheckNumber?: string;
  CustomField1?: string;
  CustomField2?: string;
  FunctionCode1?: string;
  FunctionCode2?: string;
  BalanceAfterTransaction?: number;
  PaymentCategoryID?: number;
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
  PaymentID?: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate?: string;
  Amount?: number;
  Explanation?: string;
  PaymentTypeID?: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID?: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  ReservedField?: string;
  CheckNumber?: string;
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
  PaymentID?: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate?: string;
  Amount?: number;
  Explanation?: string;
  PaymentTypeID?: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID?: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BranchFirmID?: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  AccountTypeID?: number;
  AccountCurrencyCode?: string;
  AccountRelationCode?: string;
  SenderFirmBusinessArea?: string;
  SenderFirmAccountingCode?: string;
  SenderFirmReservedField?: string;
  CheckNumber?: string;
  CustomField1?: string;
  CustomField2?: string;
  FunctionCode1?: string;
  FunctionCode2?: string;
  BalanceAfterTransaction?: number;
  PaymentCategoryID?: number;
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
  PaymentID?: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate?: string;
  Amount?: number;
  Explanation?: string;
  PaymentTypeID?: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID?: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BranchFirmID?: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  AccountTypeID?: number;
  AccountCurrencyCode?: string;
  AccountRelationCode?: string;
  SenderFirmBusinessArea?: string;
  SenderFirmAccountingCode?: string;
  SenderFirmReservedField?: string;
  CheckNumber?: string;
  CustomField1?: string;
  CustomField2?: string;
  FunctionCode1?: string;
  FunctionCode2?: string;
  BalanceAfterTransaction?: number;
  PaymentCategoryID?: number;
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
  string?: string;
}

/**
 * Response for GetPaymentCategoryList
 */
export interface ResponsePaymentCategoryList extends BaseResponse {
  PaymentCategoryID?: number;
  CategoryName?: string;
  ParentCategoryID?: number;
  ParentCategoryName?: string;
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
  TransactionID?: number;
  TotalPaymentAmount?: number;
  CurrencyCode?: string;
  InstallmentNumber?: number;
  AdditionalInstallmentNumber?: number;
  TransactionDate?: string;
  TransactionStatusID?: number;
  TransactionStatus?: string;
  PaymentExpCode?: string;
  FirmName?: string;
  CreditCardHoldersFullName?: string;
  MaskedCreditCardNumber?: string;
  PosBankCode?: string;
  PosBankName?: string;
  CardBankCode?: string;
  CardBankName?: string;
  AuthCode?: string;
  SubFirmProgressPayment?: number;
  ServiceProviderCommissionRate?: number;
  FirmCommissionRate?: number;
  UserFullName?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  FirmReservedField?: string;
  Explanation?: string;
  TransactionReservedField?: string;
  IsTransactionCancel?: boolean;
  ParentVPosTransactionID?: number;
  VPosProductTypeID?: number;
  VPosProductTypeName?: string;
  BranchFirmID?: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  VPosBankMerchantID?: string;
  OrderRefNo?: string;
  OrderGuidCode?: string;
  OrderBankNo?: string;
  SubPaymentExpCode?: string;
  SubFirmName?: string;
  VPosTransactionDekontUrl?: string;
  BankMessage?: string;
  BusinessCard?: string;
  PosCardTypeID?: number;
}

// ResponsePosPaymentList already exists in pos-payment.types.ts - skipping

/**
 * Response for PosPaymentListGreaterThanPosPaymentID
 */
export interface ResponsePosPaymentListGreaterThanPosPaymentID extends BaseResponse {
  PosPaymentID?: number;
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
 * Response for PosPaymentListSubFirm
 */
export interface ResponsePosPaymentListSubFirm extends BaseResponse {
  PosPaymentID?: number;
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
 * Response for PosPaymentListWithEndOfDay
 */
export interface ResponsePosPaymentListWithEndOfDay extends BaseResponse {
  PosPaymentID?: number;
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
 * Response for PosPaymentListWithValorDate
 */
export interface ResponsePosPaymentListWithValorDate extends BaseResponse {
  PosPaymentID?: number;
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
 * Response for PosPaymentSUM
 */
export interface ResponsePosPaymentSUM extends BaseResponse {
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
 * Response for PosReturnList
 */
export interface ResponsePosReturnList extends BaseResponse {
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
 * Response for PosReturnListGreaterThanValorPaymentID
 */
export interface ResponsePosReturnListGreaterThanValorPaymentID extends BaseResponse {
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
 * Response for PosReturnListSubFirm
 */
export interface ResponsePosReturnListSubFirm extends BaseResponse {
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
 * Response for ValorPaymentSUM
 */
export interface ResponseValorPaymentSUM extends BaseResponse {
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
