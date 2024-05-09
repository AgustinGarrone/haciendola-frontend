import axios, { AxiosInstance } from "axios";

export interface IConfig {
  baseURL: string;
}

const userPreferencesKey: string = "@user";

/* export async function getAuthFromCache(): Promise<IAuthUserCache | null> {
  const cacheAuth = await Preferences.get({ key: userPreferencesKey });
  if (cacheAuth && cacheAuth.value) {
    return JSON.parse(cacheAuth.value!) as IAuthUserCache;
  }
  return null;
} */

export default class RESTClient {
  protected axios: AxiosInstance;
  protected baseUrl: string;
  constructor(config: IConfig) {
    const { baseURL } = config;
    this.baseUrl = baseURL;
    this.axios = axios.create({ baseURL });

    this.axios.interceptors.request.use(
      async (config) => {
        if (!config.headers) {
          throw new Error("Config is not defined");
        }

        const auth = 1 //await getAuthFromCache();
        const jwt = auth?.user;
        const allowedDomain = '*' // Secrets.REACT_APP_DOMAIN;
        config.headers["Authorization"] = `${jwt?.token_type.toLowerCase()} ${
          jwt?.access_token
        }`;
        config.headers["X-Frame-Options"] = "SAMEORIGIN";
        config.headers["X-XSS-Protection"] = "1; mode=block";
        config.headers["X-Content-Type-Options"] = "nosniff";
        config.headers["Strict-Transport-Security"] =
          "max-age=31536000; includeSubDomains";
        config.headers[
          "Content-Security-Policy"
        ] = `default-src 'self' ${allowedDomain}`;

        return config;
      },
      (error) => {
        throw error;
      }
    );
  }
}
