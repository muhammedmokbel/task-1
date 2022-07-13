import axios from 'axios';

const createAxiosInstance = 
    (baseUrl, 
    headers, 
    interceptors  = {request : () => {} , response : () =>{}}) => { 
    
  const instance =  axios.create({
        baseURL : baseUrl, 
        headers : headers
    });  

    // instance.interceptors.request.use(interceptors.request); 
    // instance.interceptors.response.use(interceptors.response); 

    return instance; 

};
export default createAxiosInstance; 