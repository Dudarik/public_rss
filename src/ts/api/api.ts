import { ApiMethod } from '../enums/api';
import { ApiConfig, ApiHeaders, ApiRequestBody, ApiCustomConfig } from '../interfaces/api/index';

const api = async (
  url: string,
  apiConfig: ApiCustomConfig,
): Promise<string | Record<string, string>> => {
  const headers: ApiHeaders = {
    'Content-type': 'application/json',
  };

  const { body, ...customConfig } = apiConfig;

  if (typeof body !== 'object' && typeof body !== 'undefined') {
    throw new Error('Body must be an object {name: string; color: string;} or undefined');
  }

  const config: ApiConfig = {
    method: body ? ApiMethod.Post : ApiMethod.Get,
    ...customConfig,
    headers: {
      ...headers,
    },
  };
  if (typeof customConfig.headers === 'object') Object.assign(config.headers, customConfig.headers);

  if (body) config.body = JSON.stringify(body);

  try {
    const response = await fetch(url, config);

    if (!response.ok) throw new Error('Cant fetch response');

    return await response.json();
  } catch (error) {
    if (error instanceof Error) return Promise.reject(error);
    return Promise.reject(new Error('Cant resolve promise'));
  }
};

api.get = function get(url: string, customConfig = {}) {
  return api(url, customConfig);
};

api.post = function post(url: string, body: ApiRequestBody, customConfig = {}) {
  return api(url, { body, ...customConfig }) as Promise<Record<string, string>>;
};

api.delete = function del(url: string, customConfig = {}) {
  return api(url, { method: ApiMethod.Delete, ...customConfig });
};

api.put = function put(url: string, body: ApiRequestBody, customConfig = {}) {
  return api(url, { body, method: ApiMethod.Put, ...customConfig });
};

// eslint-disable-next-line import/prefer-default-export
export { api };
