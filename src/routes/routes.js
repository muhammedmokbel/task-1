// components 

import Home from "../pages/Home/Home";


const privateRoutes = [
    { path: '/', component: Home },
    {path : '/home' , component : Home}
];


const publicRoutes = [
    {path : '/login' , component : () => <>login</>}
];



export {
    privateRoutes , publicRoutes
};