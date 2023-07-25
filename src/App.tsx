import React from 'react';
import HomePage from "./components/HomePage";
import Navigation from './components/Navigation'
import routes from './routes'
import {useRoutes} from 'react-router-dom'
import './App.css'

function App() {
  const element = useRoutes(routes)
  // console.log(element);
  
  return (
    <div>
      {/* 侧边导航栏 */}
      <Navigation />
      <div className='content'>   
        {element}
      </div>
    </div>
  );
}

export default App;
