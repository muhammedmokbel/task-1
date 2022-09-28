import {initializeApp} from 'firebase/app'; 
import {get, getDatabase, ref , set, child, remove} from 'firebase/database'; 

import { firebaseConfig } from '../config';

class Firebase {
    constructor() {
        this.app = initializeApp(firebaseConfig); 
        this.database = getDatabase(this.app); 
    }

    writeData = async (data, path) => {
        try{
            const res = await set(ref(this.database, path), data);
            return {
                status: 200
            };
        }
        catch (error)
        {
            throw error; 
        }
        
    }; 
    readData = async (path) => {

        try {
            const dbRef = ref(this.database);
            const snapshot = await get(child(dbRef, path)); 
            if (snapshot.exists())
                return snapshot.val(); 
            return []; 
        }
        catch (error)
        {
            throw error; 
        }

    }; 
    deleteData = async (data, path) => {
        try {
            const res = await set(ref(this.database, path), data);
            return {
                status: 200
            };
        }
        catch (error) {
            throw error;
        }
    }; 
}

export default new Firebase() ; 


