/**
 * Common types and interfaces used across the BulutTahsilat client
 */

/**
 * Client configuration options
 */
export interface ClientConfig {
  /** Base URL of the SOAP service */
  baseURL?: string;
  /** Username for authentication */
  userName: string;
  /** Password for authentication */
  password: string;
  /** Firm code for operations */
  firmCode?: string;
  /** Firm API code for operations */
  firmAPICode?: string;
  /** Request timeout in milliseconds */
  timeout?: number;
  /** Enable request/response logging */
  debug?: boolean;
}

/**
 * Status enumeration for entities
 */
export enum EnumStatus {
  Active = 'Active',
  Passive = 'Passive',
}

/**
 * Array of integers wrapper
 */
export interface ArrayOfInt {
  int: number[];
}

/**
 * Array of strings wrapper
 */
export interface ArrayOfString {
  string: string[];
}

/**
 * Base authentication parameters
 */
export interface AuthParams {
  userName: string;
  password: string;
}

/**
 * Authentication with firm code
 */
export interface AuthWithFirmCode extends AuthParams {
  firmCode?: string;
}

/**
 * Authentication with firm API code
 */
export interface AuthWithFirmAPICode extends AuthParams {
  firmAPICode?: string;
}

/**
 * Date range parameters
 */
export interface DateRangeParams {
  startDate: Date;
  endDate: Date;
}

/**
 * Payment status type enumeration
 */
export enum PaymentStatusType {
  /** Waiting */
  Waiting = 1,
  /** Approved */
  Approved = 2,
  /** Rejected */
  Rejected = 3,
  /** Cancelled */
  Cancelled = 4,
}

/**
 * Account type enumeration
 */
export enum AccountType {
  /** Current account */
  Current = 1,
  /** Savings account */
  Savings = 2,
}

/**
 * Gender enumeration
 */
export enum Gender {
  /** Male */
  Male = 1,
  /** Female */
  Female = 2,
}
