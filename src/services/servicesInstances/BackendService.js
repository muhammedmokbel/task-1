import BaseService from "../BaseService";
import Storage from '../../lib/Storage'
import { STORAGE_TAGS } from "../../constants/Storage";
import {backendDev} from "../../config";



class BackendService extends BaseService{

    constructor(baseUrl,headers,  token, interceptors) {
        super(baseUrl,   headers  , token,)

    }

    // endpoints 

    getAllPosts = () => ({
        url : '/todos', 
        method : 'GET' , 
    })
}


export default new BackendService(backendDev.baseUrl,backendDev.generateHeaders(Storage.getItem(STORAGE_TAGS.TOKEN)),  Storage.getItem(STORAGE_TAGS.TOKEN) ); 
