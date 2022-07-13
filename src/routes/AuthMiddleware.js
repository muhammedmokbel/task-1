import {Navigate , Outlet} from 'react-router-dom';

import Storage from '../lib/Storage';
import {STORAGE_TAGS} from '../constants/Storage';


const AuthMiddleware = ({
  isAuthProtected,
  ...rest
}) => {


    if (!isAuthProtected || (isAuthProtected && Storage.getItem(STORAGE_TAGS.TOKEN)))
        return <Outlet />; 
    return <Navigate to={{pathname : '/login'}}  />;
};

export default AuthMiddleware; 