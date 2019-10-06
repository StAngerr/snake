import Axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

class HttpService {
  private defaultConfig = {
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/json',
    },
  };

  public get = <T>(url: string): Promise<AxiosResponse<T>> => {
    return Axios.get<T>(url);
  };

  public post = <T>(url: string, body: T, conf?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return Axios.post<T>(url, body, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  };
}

export const httpService = new HttpService();
