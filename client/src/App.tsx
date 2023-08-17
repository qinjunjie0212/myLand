import React from 'react';
import HomePage from "./components/HomePage";
import Navigation from './components/Navigation'
import routes from './routes'
import {useRoutes} from 'react-router-dom'
import './App.css'
// import {UserProvider} from '../src/components/UserContext.js'
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query'

function App() {
  const element = useRoutes(routes)!

  const queryClient = new QueryClient()
  
  // console.log(element);
  console.log('距离',window.onscroll);
  window.onbeforeunload = function() {
    // 将滚动距离重置为零
    window.scrollTo(0, 0);
  }
  
  return (
    <QueryClientProvider client={queryClient}>
      {/* <UserProvider> */}
        {/* 侧边导航栏 */}
        <Navigation />
        <div className='content'>
          {}  
          {element}
        </div>
      {/* </UserProvider> */}
    </QueryClientProvider>
  );
}

export default App;
