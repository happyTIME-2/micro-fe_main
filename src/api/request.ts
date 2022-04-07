import axios, { AxiosInstance, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

interface MyAxiosInstance extends AxiosInstance {
  (config: AxiosRequestConfig): Promise<any>;
  (url: string, config?: AxiosRequestConfig): Promise<any>;
}

export class Request {
  public static axiosInstance: MyAxiosInstance;

  public static init(baseURL: string) {
    this.axiosInstance = axios.create({
      baseURL,
      timeout: 10000,
    });

    this.initInterceptors();
  }

  public static initInterceptors() {
    // this.axiosInstance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

    this.axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
      const token = localStorage.getItem('ACCESS_TOKEN');
      if (token) {
        // eslint-disable-next-line no-param-reassign
        config.headers!.Authorization = `Bearer ${token}`;
      }
      return config;
    }, (error: AxiosError) => Promise.reject(error));

    this.axiosInstance.interceptors.response.use(
      (response: AxiosResponse) => {
        // const { data: { code, message, data } } = response;
        // if (response.status !== 200 || code !== 0) {
        //   Request.errorHandle(response, message);
        // }
        
        return response;
      },
      // 请求失败
      (error: AxiosError): Promise<any> => {
        const { response } = error;
        if (response) {
          // 请求已发出，但是不在2xx的范围
          Request.errorHandle(response);
        } else {
          console.log('网络连接异常,请稍后再试!');
        }
        return Promise.reject(response?.data);
      },
    );
  }

  private static errorHandle(res: AxiosResponse, message?: string) {
    // 状态码判断
    switch (res.status) {
      case 401:
        console.log('401哦');
        break;
      case 403:
        break;
      case 404:
        console.log('请求的资源不存在');
        break;
      default:
        // 错误信息判断
        message && console.log(message);
    }
  }
}

Request.init('');