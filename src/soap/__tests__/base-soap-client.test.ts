import { BaseSOAPClient, SOAPClientConfig } from '../base-soap-client';
import axios from 'axios';

// Mock axios
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('BaseSOAPClient', () => {
  let client: BaseSOAPClient;
  let config: SOAPClientConfig;
  let mockAxiosInstance: jest.Mocked<ReturnType<typeof axios.create>>;

  beforeEach(() => {
    mockAxiosInstance = {
      post: jest.fn(),
      interceptors: {
        request: { use: jest.fn(), eject: jest.fn(), clear: jest.fn() },
        response: { use: jest.fn(), eject: jest.fn(), clear: jest.fn() },
      },
    } as unknown as jest.Mocked<ReturnType<typeof axios.create>>;

    mockedAxios.create.mockReturnValue(mockAxiosInstance);

    config = {
      baseURL: 'https://test.example.com/service',
      timeout: 10000,
      debug: false,
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('constructor', () => {
    it('should create axios instance with correct config', () => {
      client = new BaseSOAPClient(config);

      expect(mockedAxios.create).toHaveBeenCalledWith({
        baseURL: config.baseURL,
        timeout: config.timeout,
        headers: {
          'Content-Type': 'text/xml; charset=utf-8',
        },
      });
    });

    it('should use default timeout if not provided', () => {
      const configWithoutTimeout = { baseURL: 'https://test.com' };
      client = new BaseSOAPClient(configWithoutTimeout);

      expect(mockedAxios.create).toHaveBeenCalledWith(
        expect.objectContaining({
          timeout: 30000,
        })
      );
    });

    it('should setup debug interceptors when debug is true', () => {
      config.debug = true;
      client = new BaseSOAPClient(config);

      expect(mockAxiosInstance.interceptors.request.use).toHaveBeenCalled();
      expect(mockAxiosInstance.interceptors.response.use).toHaveBeenCalled();
    });

    it('should not setup interceptors when debug is false', () => {
      config.debug = false;
      client = new BaseSOAPClient(config);

      expect(mockAxiosInstance.interceptors.request.use).not.toHaveBeenCalled();
      expect(mockAxiosInstance.interceptors.response.use).not.toHaveBeenCalled();
    });
  });

  describe('call method', () => {
    beforeEach(() => {
      client = new BaseSOAPClient(config);
    });

    it('should make successful SOAP call and return result', async () => {
      const mockResponse = {
        data: `<?xml version="1.0"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <TestOperationResponse>
                <TestOperationResult>
                  <StatusCode>0</StatusCode>
                  <StatusMessage>Success</StatusMessage>
                  <Data>test data</Data>
                </TestOperationResult>
              </TestOperationResponse>
            </soap:Body>
          </soap:Envelope>`,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      mockAxiosInstance.post.mockResolvedValue(mockResponse);

      const result = await (client as any).call('TestOperation', {
        userName: 'test',
        password: 'pass',
      });

      expect(mockAxiosInstance.post).toHaveBeenCalledWith(
        '',
        expect.stringContaining('<TestOperation'),
        expect.objectContaining({
          headers: {
            SOAPAction: 'http://tempuri.org/TestOperation',
          },
        })
      );

      expect(result).toEqual({
        StatusCode: 0,
        StatusMessage: 'Success',
        Data: 'test data',
      });
    });

    it('should throw error if response structure is invalid', async () => {
      const mockResponse = {
        data: `<?xml version="1.0"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <InvalidResponse>
                <Data>test</Data>
              </InvalidResponse>
            </soap:Body>
          </soap:Envelope>`,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      mockAxiosInstance.post.mockResolvedValue(mockResponse);

      await expect((client as any).call('TestOperation', {})).rejects.toThrow(
        'Invalid response structure'
      );
    });

    it('should handle axios errors', async () => {
      const error = new Error('Network error');
      (error as any).isAxiosError = true;

      mockAxiosInstance.post.mockRejectedValue(error);
      mockedAxios.isAxiosError.mockReturnValue(true);

      await expect((client as any).call('TestOperation', {})).rejects.toThrow(
        'HTTP Error: Network error'
      );
    });

    it('should extract SOAP fault from error response', async () => {
      const error: any = new Error('Server error');
      error.isAxiosError = true;
      error.response = {
        data: `<?xml version="1.0"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <soap:Fault>
                <faultstring>Authentication failed</faultstring>
              </soap:Fault>
            </soap:Body>
          </soap:Envelope>`,
      };

      mockAxiosInstance.post.mockRejectedValue(error);
      mockedAxios.isAxiosError.mockReturnValue(true);

      await expect((client as any).call('TestOperation', {})).rejects.toThrow();
    });
  });

  describe('callRaw method', () => {
    beforeEach(() => {
      client = new BaseSOAPClient(config);
    });

    it('should return full response wrapper', async () => {
      const mockResponse = {
        data: `<?xml version="1.0"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <TestOperationResponse>
                <TestOperationResult>
                  <StatusCode>0</StatusCode>
                </TestOperationResult>
                <MetaData>extra info</MetaData>
              </TestOperationResponse>
            </soap:Body>
          </soap:Envelope>`,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      mockAxiosInstance.post.mockResolvedValue(mockResponse);

      const result = await (client as any).callRaw('TestOperation', {});

      expect(result).toHaveProperty('TestOperationResult');
      expect(result).toHaveProperty('MetaData');
    });

    it('should throw error if response wrapper not found', async () => {
      const mockResponse = {
        data: `<?xml version="1.0"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <WrongResponse>
                <Data>test</Data>
              </WrongResponse>
            </soap:Body>
          </soap:Envelope>`,
        status: 200,
        statusText: 'OK',
        headers: {},
        config: {} as any,
      };

      mockAxiosInstance.post.mockResolvedValue(mockResponse);

      await expect((client as any).callRaw('TestOperation', {})).rejects.toThrow(
        'Invalid response structure'
      );
    });

    it('should handle axios error with response in callRaw', async () => {
      const axiosError = new Error('Request failed');
      (axiosError as any).isAxiosError = true;
      (axiosError as any).response = {
        data: `<?xml version="1.0"?>
          <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
            <soap:Body>
              <soap:Fault>
                <faultstring>Server Error</faultstring>
              </soap:Fault>
            </soap:Body>
          </soap:Envelope>`,
      };

      mockAxiosInstance.post.mockRejectedValue(axiosError);

      await expect((client as any).callRaw('TestOperation', {})).rejects.toThrow('SOAP Fault');
    });

    it('should throw HTTP Error when axios error has no response', async () => {
      const axiosError = new Error('Network timeout');
      (axiosError as any).isAxiosError = true;
      (axiosError as any).response = null;

      mockAxiosInstance.post.mockRejectedValueOnce(axiosError);

      await expect((client as any).callRaw('TestOperation', {})).rejects.toThrow('HTTP Error');
    });
  });

  describe('debug mode', () => {
    it('should enable request/response interceptors in debug mode', () => {
      const debugClient = new BaseSOAPClient({
        baseURL: 'http://test.com',
        debug: true,
      });

      // Verify interceptors were added (request interceptor)
      expect(mockAxiosInstance.interceptors.request.use).toHaveBeenCalled();
      // Verify response interceptor
      expect(mockAxiosInstance.interceptors.response.use).toHaveBeenCalled();
    });

    it('should log requests and responses when debug is enabled', async () => {
      const consoleLogSpy = jest.spyOn(console, 'log').mockImplementation();
      const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

      // Create a real axios instance mock that will capture interceptors
      const realRequestInterceptor = jest.fn((config) => config);
      const realResponseInterceptor = jest.fn((response) => response);
      const realErrorInterceptor = jest.fn((error) => Promise.reject(error));

      (mockAxiosInstance.interceptors.request.use as jest.Mock).mockImplementation(
        (onFulfilled) => {
          realRequestInterceptor.mockImplementation(onFulfilled);
          return 0;
        }
      );

      (mockAxiosInstance.interceptors.response.use as jest.Mock).mockImplementation(
        (onFulfilled, onRejected) => {
          realResponseInterceptor.mockImplementation(onFulfilled);
          realErrorInterceptor.mockImplementation(onRejected);
          return 0;
        }
      );

      const debugClient = new BaseSOAPClient({
        baseURL: 'http://test.com',
        debug: true,
      });

      // Simulate request interception
      const mockRequest = {
        url: '/test',
        headers: { 'Content-Type': 'text/xml' },
        data: '<soap>test</soap>',
      };
      realRequestInterceptor(mockRequest);
      expect(consoleLogSpy).toHaveBeenCalledWith('SOAP Request:', expect.any(Object));

      // Simulate response interception
      const mockResponse = {
        status: 200,
        data: '<soap>response</soap>',
      };
      realResponseInterceptor(mockResponse);
      expect(consoleLogSpy).toHaveBeenCalledWith('SOAP Response:', expect.any(Object));

      // Simulate error interception
      const mockError = {
        message: 'Network Error',
        response: { data: 'Error data' },
      };
      await expect(realErrorInterceptor(mockError)).rejects.toEqual(mockError);
      expect(consoleErrorSpy).toHaveBeenCalledWith('SOAP Error:', expect.any(Object));

      consoleLogSpy.mockRestore();
      consoleErrorSpy.mockRestore();
    });

    it('should rethrow non-axios errors in callRaw', async () => {
      // Create a non-axios error
      const customError = new Error('Custom error');

      // Mock axios.isAxiosError to return false for this specific error
      const originalIsAxiosError = axios.isAxiosError;
      (axios as any).isAxiosError = jest.fn().mockReturnValue(false);

      // Create a fresh mock for this test
      const testMockInstance = {
        post: jest.fn().mockRejectedValue(customError),
        interceptors: {
          request: { use: jest.fn(), eject: jest.fn(), clear: jest.fn() },
          response: { use: jest.fn(), eject: jest.fn(), clear: jest.fn() },
        },
      } as unknown as jest.Mocked<ReturnType<typeof axios.create>>;

      mockedAxios.create.mockReturnValueOnce(testMockInstance);

      const testClient = new BaseSOAPClient(config);

      await expect((testClient as any).callRaw('TestOperation', {})).rejects.toThrow(
        'Custom error'
      );

      // Restore original function
      (axios as any).isAxiosError = originalIsAxiosError;
    });
  });
});
