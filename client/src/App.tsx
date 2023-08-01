import React from 'react';
import HomePage from "./components/HomePage";
import Navigation from './components/Navigation'
import routes from './routes'
import {useRoutes} from 'react-router-dom'
import './App.css'
import {UserProvider} from '../src/components/UserContext.js'

function App() {
  const element = useRoutes(routes)!
  
  // console.log(element);
  
  return (
    <UserProvider>
      {/* 侧边导航栏 */}
      <Navigation />
      <div className='content'>   
        {element}
      </div>
    </UserProvider>
  );
}

export default App;
