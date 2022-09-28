module.exports = {
    backendDev : {
        baseUrl: 'https://jsonplaceholder.typicode.com', 
        headers: {
        "Content-type" : 'application/json', 
        }
       
   
    }, 
    firebaseConfig: {
         apiKey: "AIzaSyDmf458oGBj00e4wyxN4vnJtm__EUDQ8YE",
        authDomain: "task-1-2df0d.firebaseapp.com",
        databaseURL: "https://task-1-2df0d-default-rtdb.firebaseio.com",
        projectId: "task-1-2df0d",
        storageBucket: "task-1-2df0d.appspot.com",
        messagingSenderId: "349161168019",
    }, 
    keySecret: 'make-key-secure-for-clients', 
    valueSecret : 'make-app-secure-for-clients', 
    encodingType : 'aes'
};