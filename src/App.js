
import {Routes, Route} from 'react-router-dom';
import AuthMiddleware from './routes/AuthMiddleware';

import {privateRoutes , publicRoutes} from './routes/routes';

import RootModal from './components/Modals/RootModal';
import Alert from './components/Alerts/Alert';
import {useModal, useAlert} from './hooks';

const App = ()=> {
  const [isOpen, actionResponse , setIsOpen] =  useModal('CONFIRM_MODAL', {title : 'hoba' , contant : 'lala '});
  const [isOpenTwo , setAlertIsOpen] = useAlert('info');
  const [isOpenThree , setAlertIsOpenTwo] = useAlert('success' , {message : 'lolo' , duration : 2000});

  return (
    <>
   
  <RootModal  />
  <Alert />
  
    <Routes>
 
    {privateRoutes.map(({component :Component  , path}, index) => (
      <Route path={path} element={
        <AuthMiddleware 
      isAuthProtected={false}/>
      }
      key={index}
      >
        <Route  path={path} element={<Component/>} />
  
      </Route>
    ))}

    {publicRoutes.map(({component :Component, path}, index) => (
      <Route path={path} element={
        <AuthMiddleware 
        isAuthProtected={false}
        />
      }
      key={index}
      >
          <Route  path={path} element={<Component/>} />
 
      </Route>

    ))}
   
    </Routes>
        </>
  );
};

export default App;
