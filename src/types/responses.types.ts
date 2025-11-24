/**
 * Response types for various operations
 */

import {
  ArrayOfBankPaymentListItem,
  ArrayOfBankPaymentListItemWithFeature,
} from './bank-payment.types';

/**
 * Base response with status
 */
export interface BaseResponse {
  StatusCode: number;
  StatusMessage?: string;
}

/**
 * Response for update payment status operations
 */
export type ResponseUpdatePaymentStatus = BaseResponse;

/**
 * Response for delete matching criteria
 */
export interface ResponseDeleteMatchingCriteria extends BaseResponse {
  DeleteCountIBANMatch: number;
  DeleteCountTCTaxMatch: number;
  DeleteCountRuleSet: number;
  DeleteCountFormula: number;
}

/**
 * Bank balance information
 */
export interface BankBalance {
  FirmBankCode?: string;
  FirmBankName?: string;
  FirmName?: string;
  FirmBankBranchName?: string;
  FirmBankNickName?: string;
  FirmBankAccountType?: string;
  FirmBankIBAN?: string;
  FirmBankCurrencyUnit?: string;
  LastTimeStamp?: Date;
  Balance?: number;
  BlockedBalance?: number;
}

/**
 * Array of bank balances
 */
export interface ArrayOfBankBalance {
  BankBalance: BankBalance[];
}

/**
 * Firm bank balance response
 */
export interface FirmBankBalance extends BaseResponse {
  BankList?: ArrayOfBankBalance;
}

/**
 * Bank payment list response
 */
export interface BankPaymentListResponse {
  BankPaymentListResult?: ArrayOfBankPaymentListItem;
}

/**
 * Bank payment list with feature response
 */
export interface BankPaymentListAllWithFeatureResponse {
  BankPaymentListAllWithFeatureResult?: ArrayOfBankPaymentListItemWithFeature;
}

/**
 * Update payment status info response
 */
export interface UpdatePaymentStatusInfoResponse {
  UpdatePaymentStatusInfoResult?: string;
}

/**
 * Update payment status with exp code response
 */
export interface UpdatePaymentStatusInfoWithPaymentExpCodeResponse {
  UpdatePaymentStatusInfoWithPaymentExpCodeResult?: ResponseUpdatePaymentStatus;
}

/**
 * Update payment status with ID list response
 */
export interface UpdatePaymentStatusInfoWithPaymentIDListResponse {
  UpdatePaymentStatusInfoWithPaymentIDListResult?: ResponseUpdatePaymentStatus;
}

/**
 * Update payment status with ERP ref no response
 */
export interface UpdatePaymentStatusInfoWithERPRefNoResponse {
  UpdatePaymentStatusInfoWithERPRefNoResult?: ResponseUpdatePaymentStatus;
}
