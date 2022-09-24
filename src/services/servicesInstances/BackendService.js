import BaseService from "../BaseService";
import Storage from '../../lib/Storage';
import { STORAGE_TAGS } from "../../constants/Storage";
import {backendDev} from "../../config";



class BackendService extends BaseService{

    constructor(baseUrl, headers, token) {
        super(baseUrl, headers);
        this.token = token; 
        this.initInterceptors(); 
        
    }

    initInterceptors = () => {
        
        this.request.interceptors.request.use(this.interceptorsReq);
        this.request.interceptors.response.use(this.interceptorsRes);
    }; 

    interceptorsReq = (req) => {
        req.headers.Authorization = this.token; 

        return req;

    }; 
    
    interceptorsRes = (res) => {
        return res;

    }; 


    // endpoints 

    getAllPosts = () => ({
        url : '/todos', 
        method : 'GET' , 
    });
}


export default new BackendService(backendDev.baseUrl,backendDev.headers,  Storage.getItem(STORAGE_TAGS.TOKEN) ); 
