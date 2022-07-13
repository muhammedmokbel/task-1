import {useCallback} from 'react'
import {useSelector} from 'react-redux'
import {Routes, Route} from 'react-router-dom'
import AuthMiddleware from './routes/AuthMiddleware';

import {privateRoutes , publicRoutes} from './routes/routes'

import RootModal from './components/Modals/RootModal';
import {useModal} from './hooks'

function App() {
  const modal = useSelector(state => ( {type : state.modal.modalType }))
  const [isOpen , setIsOpen] =  useModal('TEST_MODAL')

  
 

  return (
    <>
  <RootModal  />
  <button onClick={() => setIsOpen(true)}> click Modal </button>
  
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
