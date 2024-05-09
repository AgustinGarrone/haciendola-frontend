import RESTClient from "./RESTClient";
import IJwt from "@/types/models";

interface IConfig {
  baseURL: string;
}

class ApiClient extends RESTClient {
  constructor(config: IConfig) {
    super({ baseURL: config.baseURL });
  }
  async boot() {}

  async createCWTask(data: any, jwt: IJwt): Promise<boolean> {
    const allowedDomain = process.env.REACT_APP_DOMAIN;
    const response = await this.axios.post(
      `/commercial-walk/create-commercial-walk`,
      data,
      {
        headers: {
          Authorization: `${jwt.token_type.toLowerCase()} ${jwt.access_token}`,
          "X-Frame-Options": "SAMEORIGIN",
          "X-XSS-Protection": "1; mode=block",
          "X-Content-Type-Options": "nosniff",
          "Strict-Transport-Security": "max-age=31536000; includeSubDomains",
          "Content-Security-Policy": `default-src 'self' ${allowedDomain}`,
        },
      }
    );
    return response.data;
  }
}

export default new ApiClient({
  baseURL: process.env.API_BASE_URL! ,
});

