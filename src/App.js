import {Routes, Route} from 'react-router-dom'
import AuthMiddleware from './routes/AuthMiddleware';

import {privateRoutes , publicRoutes} from './routes/routes'

function App() {

 
  return (
    <Routes>
      
    {privateRoutes.map(({component :Component  , path}, index) => (
      <Route path={path} element={
        <AuthMiddleware 
      isAuthProtected={true}/>
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
  );
}

export default App;
