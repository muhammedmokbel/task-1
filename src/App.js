import {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import AuthMiddleware from './routes/AuthMiddleware';

import {privateRoutes , publicRoutes} from './routes/routes'

import RootModal from './components/Modals/RootModal';
import {useModal} from './hooks'

function App() {
  const [isOpen, actionResponse , setIsOpen] =  useModal('CONFIRM_MODAL', {title : 'hoba' , contant : 'lala '})
 

  return (
    <>
  <RootModal  />
  
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
}

export default App;
