import createAxiosInstance from "../axiosConfig";

export default class BaseService {
    constructor(baseUrl , headers = {}  ) {
      this.baseUrl = baseUrl; 
      this.headers = headers; 
      this.request = createAxiosInstance(this.baseUrl, this.headers ); 
  }
  



}