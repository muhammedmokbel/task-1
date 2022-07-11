import createAxiosInstance from "../axiosConfig";

export default class BaseService {
    constructor(baseUrl , headers = {} , token = null, interceptors = undefined ) {
      this.baseUrl = baseUrl; 
      this.headers = headers; 
      this.token = token; 
      this.request = createAxiosInstance(this.baseUrl, this.headers , interceptors); 
    }

    


}