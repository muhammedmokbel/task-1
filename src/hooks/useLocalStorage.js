import {useState, useEffect} from 'react'

export const useLocalStorage = (key, defaultValue = null) => {
    const [value, setValue] = useState(() => {
        try{
        const savedValue = localStorage.getItem(key); 
        if (savedValue)
            return JSON.parse(savedValue) ; 
        return defaultValue; 
        }
        catch(err)
        {
            return defaultValue; 
        }
    }); 

    

    useEffect(() =>{
   
        try{
        if (value === null)
            localStorage.removeItem(key); 
        
        else{
        const rawValue = JSON.stringify(value); 
        localStorage.setItem(key, rawValue); 
        }
      
        }
        catch(err)
        {
            localStorage.setItem(key, defaultValue)
        }
    }, [value])

    return [value , setValue]

}