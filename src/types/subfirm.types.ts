/**
 * SubFirm related types and interfaces
 */

import { EnumStatus, AuthWithFirmAPICode, ArrayOfString } from './common.types';
import { BaseResponse } from './responses.types';

/**
 * SubFirm entity
 */
export interface SubFirm {
  FirmName?: string;
  Address?: string;
  County?: string;
  CityID: number;
  Phone?: string;
  TaxOffice?: string;
  TaxNumber?: string;
  AuthPersName?: string;
  AuthPersSurname?: string;
  AuthPersGSM?: string;
  AuthPersGenderID: number;
  Status: EnumStatus;
  DealerCode?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  ReservedField?: string;
}

/**
 * SubFirm return data
 */
export interface SubFirmReturn {
  FirmID: number;
  FirmCode?: string;
  FirmName?: string;
  PaymentExpCode?: string;
  TaxNumber?: string;
  TaxOffice?: string;
  BusinessArea?: string;
  AccountingCode?: string;
  ReservedField?: string;
  StatusID: number;
  Status?: EnumStatus;
  FirmGSM?: string;
  FirmEmail?: string;
  AuthPersName?: string;
  AuthPersSurname?: string;
}

/**
 * Array of SubFirm returns
 */
export interface ArrayOfSubFirmReturn {
  SubFirmReturn: SubFirmReturn[];
}

/**
 * Response for SubFirm operations
 */
export interface ResponseSubFirm extends BaseResponse {
  SubFirmReturn?: SubFirmReturn;
}

/**
 * Response for get SubFirm info
 */
export interface ResponseGetSubFirmInfo extends BaseResponse {
  SubFirm?: SubFirm;
}

/**
 * Response for SubFirm IBAN operations
 */
export type ResponseSubFirmIBAN = BaseResponse;

/**
 * Response for SubFirm VKN operations
 */
export interface ResponseSubFirmVKN extends BaseResponse {
  SubFirmVKNID?: number;
}

/**
 * Formula for payment channel
 */
export interface Formula {
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
 * Array of formulas
 */
export interface ArrayOfFormula {
  Formula: Formula[];
}

/**
 * Response for get payment channel
 */
export interface ResponseGetPaymentChannel extends BaseResponse {
  PaymentExpCode?: string;
  IBANList?: ArrayOfString;
  VKNList?: ArrayOfString;
  TCKNList?: ArrayOfString;
  RuleSETList?: ArrayOfString;
  FormulaList?: ArrayOfFormula;
}

/**
 * Parameters for adding a new SubFirm
 */
export interface SubFirmAddNewParams extends AuthWithFirmAPICode {
  subFirm: SubFirm;
}

/**
 * Parameters for getting SubFirm info
 */
export interface GetSubFirmInfoParams extends AuthWithFirmAPICode {
  paymentExpCode: string;
}

/**
 * Parameters for updating SubFirm
 */
export interface SubFirmUpdateParams extends AuthWithFirmAPICode {
  paymentExpCode: string;
  subFirm: SubFirm;
}

/**
 * Parameters for SubFirm IBAN operations
 */
export interface SubFirmIBANParams extends AuthWithFirmAPICode {
  paymentExpCode: string;
  iban: string;
  bankCode: string;
}

/**
 * Parameters for SubFirm VKN add
 */
export interface SubFirmVKNAddParams extends AuthWithFirmAPICode {
  paymentExpCode: string;
  vkn: string;
  name?: string;
  surname?: string;
}

/**
 * Parameters for SubFirm VKN delete
 */
export interface SubFirmVKNDeleteParams extends AuthWithFirmAPICode {
  paymentExpCode: string;
  vkn: string;
}

/**
 * Parameters for getting payment channel
 */
export interface SubFirmGetPaymentChannelParams extends AuthWithFirmAPICode {
  paymentExpCode: string;
}

/**
 * SubFirm list response
 */
export interface SubFirmListResponse {
  SubFirmListResult?: ArrayOfSubFirmReturn;
}

/**
 * SubFirm add new response
 */
export interface SubFirmAddNewResponse {
  SubFirmAddNewResult?: ResponseSubFirm;
}

/**
 * Get SubFirm info response
 */
export interface GetSubFirmInfoResponse {
  GetSubFirmInfoResult?: ResponseGetSubFirmInfo;
}

/**
 * SubFirm update response
 */
export interface SubFirmUpdateResponse {
  SubFirmUpdateResult?: ResponseSubFirm;
}

/**
 * SubFirm IBAN add response
 */
export interface SubFirmIBANAddNewResponse {
  SubFirmIBANAddNewResult?: ResponseSubFirmIBAN;
}

/**
 * SubFirm IBAN delete response
 */
export interface SubFirmIBANDeleteResponse {
  SubFirmIBANDeleteResult?: ResponseSubFirmIBAN;
}

/**
 * SubFirm VKN add response
 */
export interface SubFirmVKNAddNewResponse {
  SubFirmVKNAddNewResult?: ResponseSubFirmVKN;
}

/**
 * SubFirm VKN delete response
 */
export interface SubFirmVKNDeleteResponse {
  SubFirmVKNDeleteResult?: ResponseSubFirmVKN;
}

/**
 * Get payment channel response
 */
export interface SubFirmGetPaymentChannelResponse {
  SubFirmGetPaymentChannelResult?: ResponseGetPaymentChannel;
}
