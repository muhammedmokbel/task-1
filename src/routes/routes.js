// components 

import Home from "../pages/Home/Home";


const privateRoutes = [
    {path : '/home' , component : Home}
];


const publicRoutes = [
    {path : '/login' , component : () => <>login</>}
];



export {
    privateRoutes , publicRoutes
};