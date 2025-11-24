/**
 * Bank payment related types and interfaces
 */

import { DateRangeParams, AuthWithFirmCode, AuthWithFirmAPICode } from './common.types';

/**
 * Bank payment list item
 */
export interface BankPaymentListItem {
  PaymentID: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate: Date;
  Amount: number;
  Explanation?: string;
  PaymentTypeID: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID: number;
  PaymentStatusTypeExplantion?: string;
  ReferenceNumber?: string;
  VoucherNumber?: string;
  TaxNumber?: string;
  PaymentExpCode?: string;
  BranchFirmID: number;
  BranchFirmName?: string;
  BranchFirmTaxNumber?: string;
  AccountTypeID: number;
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
 * Bank payment list item with additional features
 */
export interface BankPaymentListItemWithFeature {
  PaymentID: number;
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmBankIBAN?: string;
  SenderFirmID?: number;
  SenderFirmCode?: string;
  SenderFirmName?: string;
  SenderFirmBankCode?: string;
  SenderFirmBankName?: string;
  SenderFirmBankIBAN?: string;
  PaymentDate: Date;
  Amount: number;
  Explanation?: string;
  PaymentTypeID: number;
  PaymentTypeExplantion?: string;
  TCNumber?: string;
  FullName?: string;
  PaymentStatusTypeID: number;
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
 * Array of bank payment list items
 */
export interface ArrayOfBankPaymentListItem {
  BankPaymentListItem: BankPaymentListItem[];
}

/**
 * Array of bank payment list items with features
 */
export interface ArrayOfBankPaymentListItemWithFeature {
  BankPaymentListItemWithFeature: BankPaymentListItemWithFeature[];
}

/**
 * Parameters for bank payment list request
 */
export interface BankPaymentListParams extends AuthWithFirmCode, DateRangeParams {
  firmCode?: string;
  paymentStatusTypeID: number;
}

/**
 * Parameters for bank payment list all sub firm
 */
export interface BankPaymentListAllSubFirmParams extends BankPaymentListParams {
  taxNumber?: string;
}

/**
 * Payment category list item
 */
export interface PaymentCategoryListItem {
  PaymentCategoryID: number;
  CategoryName?: string;
  ParentCategoryID?: number;
  ParentCategoryName?: string;
}

/**
 * Array of payment category list items
 */
export interface ArrayOfPaymentCategoryListItem {
  PaymentCategoryListItem: PaymentCategoryListItem[];
}

/**
 * Parameters for getting payment category list
 */
export type GetPaymentCategoryListParams = AuthWithFirmAPICode;

/**
 * Parameters for update payment status info
 */
export interface UpdatePaymentStatusInfoParams extends AuthWithFirmCode {
  paymentID: number;
  paymentStatusTypeID: number;
}
