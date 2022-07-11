import SecureLS from 'secure-ls'
import {encodingType , keySecret , valueSecret} from '../config';
class Storage  {
    constructor() {
        this.storage = new SecureLS({encodingType : encodingType , encryptionSecret : valueSecret , isCompression : false}) ; 
    } 

    setItem = (key, value) => {
        this.storage.set(btoa(key + keySecret), value)
    }

    getItem = key => this.storage.get(btoa(key + keySecret))

    removeItem = key => {
        this.storage.remove(btoa(key + keySecret)); 
    }
    getAllKeys = () => this.storage.getAllKeys(); 
    removeAllItems = () => this.storage.removeAll(); 
}

export default new Storage()
