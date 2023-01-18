type Config<S extends string, T extends string | Record<string, string>> = {
  [P in S]: T;
};

type Headers = {
  [s: string]: string;
};

const api = async (
  url: string,
  // eslint-disable-next-line comma-dangle
  { body, ...customConfig }: Config<string, string | Record<string, string>>
): Promise<string> => {
  const headers: Headers = {
    'Content-type': 'application/json',
  };

  const config: Record<string, string | Record<string, string>> = {
    method: body ? 'POST' : 'GET',
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

// eslint-disable-next-line import/prefer-default-export
export { api };
