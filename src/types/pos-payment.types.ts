/**
 * POS payment related types and interfaces
 */

import { DateRangeParams, AuthWithFirmAPICode } from './common.types';
import { BaseResponse } from './responses.types';

/**
 * POS payment list item
 */
export interface POSPaymentListItem {
  PosPaymentID: number;
  BankCode?: string;
  BankName?: string;
  SubFirmID: number;
  SubFirmName?: string;
  SubFirmVKN?: string;
  PaymentDate: Date;
  ValorDate: Date;
  GrossAmount: number;
  TotalCommission: number;
  CommissionRate: number;
  Amount: number;
  BankServiceCommission: number;
  OtherCommission: number;
  BusinessNo?: string;
  TerminalID?: string;
  AuthCode?: string;
  InstallmentNumber: number;
  ProcessType?: string;
  ReturnIBAN?: string;
  PosReservedField?: string;
  EndOfDay?: Date;
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
 * Array of POS payment list items
 */
export interface ArrayOfPOSPaymentListItem {
  POSPaymentListItem: POSPaymentListItem[];
}

/**
 * Response for POS payment list
 */
export interface ResponsePosPaymentList extends BaseResponse {
  PosPaymentList?: ArrayOfPOSPaymentListItem;
}

/**
 * Parameters for POS payment list
 */
export interface PosPaymentListParams extends AuthWithFirmAPICode, DateRangeParams {}

/**
 * Parameters for POS payment list with valor date
 */
export interface PosPaymentListWithValorDateParams extends AuthWithFirmAPICode {
  valorStartDate: Date;
  valorEndDate: Date;
}

/**
 * Parameters for POS payment list with end of day
 */
export interface PosPaymentListWithEndOfDayParams extends AuthWithFirmAPICode {
  endOfDayStartDate: Date;
  endOfDayEndDate: Date;
}

/**
 * Parameters for POS payment list subfirm
 */
export interface PosPaymentListSubFirmParams extends AuthWithFirmAPICode, DateRangeParams {
  taxNumber: string;
}

/**
 * Parameters for POS payment list greater than ID
 */
export interface PosPaymentListGreaterThanPosPaymentIDParams extends AuthWithFirmAPICode {
  posPaymentID: number;
}

/**
 * Parameters for POS payment SUM
 */
export interface PosPaymentSUMParams extends AuthWithFirmAPICode, DateRangeParams {}

/**
 * Parameters for valor payment SUM
 */
export interface ValorPaymentSUMParams extends AuthWithFirmAPICode {
  valorStartDate: Date;
  valorEndDate: Date;
}

/**
 * Parameters for POS return list
 */
export interface PosReturnListParams extends AuthWithFirmAPICode, DateRangeParams {}

/**
 * Parameters for POS return list subfirm
 */
export interface PosReturnListSubFirmParams extends AuthWithFirmAPICode, DateRangeParams {
  taxNumber: string;
}

/**
 * Parameters for POS return list greater than ID
 */
export interface PosReturnListGreaterThanValorPaymentIDParams extends AuthWithFirmAPICode {
  valorPaymentID: number;
}

/**
 * POS payment list response
 */
export interface PosPaymentListResponse {
  PosPaymentListResult?: ResponsePosPaymentList;
}

/**
 * POS payment SUM response
 */
export interface PosPaymentSUMResponse {
  PosPaymentSUMResult?: number;
}

/**
 * Valor payment SUM response
 */
export interface ValorPaymentSUMResponse {
  ValorPaymentSUMResult?: number;
}

/**
 * Virtual POS transaction list item
 */
export interface VPosTransactionListItem {
  TransactionID: number;
  TransactionDate: Date;
  Amount: number;
  Currency?: string;
  CardNumber?: string;
  OrderID?: string;
  Status?: string;
  PaymentExpCode?: string;
}

/**
 * Array of VPos transaction list items
 */
export interface ArrayOfVPosTransactionListItem {
  VPosTransactionListItem: VPosTransactionListItem[];
}

/**
 * Parameters for getting VPos transaction list
 */
export interface GetVPosTransactionListParams extends AuthWithFirmAPICode, DateRangeParams {}

/**
 * Get VPos transaction list response
 */
export interface GetVPosTransactionListResponse {
  GetVPosTransactionListResult?: ArrayOfVPosTransactionListItem;
}
