import Axios, { AxiosResponse } from 'axios';

class HttpService {
    public get = <T>(url: string): Promise<AxiosResponse<T>> => {
        return Axios.get<T>(url);
    }

    public post = <T>(url: string, body: T): Promise<AxiosResponse<T>> => {
        return Axios.post<T>(url, body);
    }
}

export const httpService = new HttpService();
