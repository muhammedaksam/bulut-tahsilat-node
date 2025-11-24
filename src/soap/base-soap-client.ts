/**
 * Base SOAP client using Axios
 */

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { buildSOAP11Envelope, getSOAPAction } from './soap-builder';
import { extractSOAPBody } from '../utils/xml-parser';

/**
 * Base SOAP client configuration
 */
export interface SOAPClientConfig {
  baseURL: string;
  timeout?: number;
  debug?: boolean;
}

/**
 * Base SOAP client class
 */
export class BaseSOAPClient {
  protected axiosInstance: AxiosInstance;
  protected debug: boolean;

  constructor(config: SOAPClientConfig) {
    this.debug = config.debug || false;

    this.axiosInstance = axios.create({
      baseURL: config.baseURL,
      timeout: config.timeout || 30000,
      headers: {
        'Content-Type': 'text/xml; charset=utf-8',
      },
    });

    // Request interceptor for debugging
    if (this.debug) {
      this.axiosInstance.interceptors.request.use((request) => {
        console.log('SOAP Request:', {
          url: request.url,
          headers: request.headers,
          data: request.data,
        });
        return request;
      });
    }

    // Response interceptor for debugging
    if (this.debug) {
      this.axiosInstance.interceptors.response.use(
        (response) => {
          console.log('SOAP Response:', {
            status: response.status,
            data: response.data,
          });
          return response;
        },
        (error) => {
          console.error('SOAP Error:', {
            message: error.message,
            response: error.response?.data,
          });
          return Promise.reject(error);
        }
      );
    }
  }

  /**
   * Execute a SOAP operation
   * @param operation - SOAP operation name
   * @param params - Operation parameters
   * @returns Parsed response
   */
  protected async call<T>(operation: string, params: Record<string, unknown>): Promise<T> {
    try {
      const envelope = buildSOAP11Envelope(operation, params);
      const soapAction = getSOAPAction(operation);

      const config: AxiosRequestConfig = {
        headers: {
          SOAPAction: soapAction,
        },
      };

      const response: AxiosResponse<string> = await this.axiosInstance.post('', envelope, config);

      // Extract and parse SOAP body
      const body = extractSOAPBody<Record<string, Record<string, T>>>(response.data);

      // Get the response wrapper (operation name + "Response")
      const responseKey = `${operation}Response`;
      const responseWrapper = body[responseKey];

      if (!responseWrapper) {
        throw new Error(`Invalid response structure: ${responseKey} not found`);
      }

      // Get the result (operation name + "Result")
      const resultKey = `${operation}Result`;
      const result = responseWrapper[resultKey];

      return result as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          // Try to extract SOAP fault information
          extractSOAPBody(error.response.data);
        }
        throw new Error(`HTTP Error: ${error.message}`);
      }
      throw error;
    }
  }

  /**
   * Execute a SOAP operation and return the full response wrapper
   * @param operation - SOAP operation name
   * @param params - Operation parameters
   * @returns Full response wrapper
   */
  protected async callRaw<T>(operation: string, params: Record<string, unknown>): Promise<T> {
    try {
      const envelope = buildSOAP11Envelope(operation, params);
      const soapAction = getSOAPAction(operation);

      const config: AxiosRequestConfig = {
        headers: {
          SOAPAction: soapAction,
        },
      };

      const response: AxiosResponse<string> = await this.axiosInstance.post('', envelope, config);

      // Extract and parse SOAP body
      const body = extractSOAPBody(response.data) as Record<string, unknown>;

      // Get the response wrapper
      const responseKey = `${operation}Response`;
      const responseWrapper = body[responseKey] as Record<string, unknown>;

      if (!responseWrapper) {
        throw new Error(`Invalid response structure: ${responseKey} not found`);
      }

      return responseWrapper as T;
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          extractSOAPBody(error.response.data);
        }
        throw new Error(`HTTP Error: ${error.message}`);
      }
      throw error;
    }
  }
}
