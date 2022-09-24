import axios from 'axios';

const createAxiosInstance = 
    (baseUrl, 
    headers, ) => { 
    
  const instance =  axios.create({
        baseURL : baseUrl, 
        headers : headers
    });  

    return instance; 

};
export default createAxiosInstance; 