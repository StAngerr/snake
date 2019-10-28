import Axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

const apiUrl = 'http://www.localhost:3000/';
const apiPrefix = 'api';

class HttpService {
  private axiosInstance: AxiosInstance;
  constructor() {
    this.axiosInstance = Axios.create({
      baseURL: apiUrl + apiPrefix,
      timeout: 10000,
    });
    this.axiosInstance.interceptors.request.use(this.authRequestInterceptor);
  }

  public get = <T>(url: string): Promise<T> => {
    return this.axiosInstance.get<T>(url).then((res: AxiosResponse) => res.data);
  };

  public put = <T>(url: string, body: T) => {
    return this.axiosInstance.put<T>(url, body).then((res: AxiosResponse) => res.data);
  };

  public delete = (url: string) => {
    return this.axiosInstance.delete(url).then((res: AxiosResponse) => res.data);
  };

  public post = <T>(url: string, body: T, conf?: AxiosRequestConfig): Promise<AxiosResponse<T>> => {
    return this.axiosInstance.post<T>(url, body, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
  };

  private authRequestInterceptor(config: any) {
    const authToken = localStorage.getItem('token');
    config.headers.Authorization = authToken;
    return config;
  }
}

export const httpService = new HttpService();
