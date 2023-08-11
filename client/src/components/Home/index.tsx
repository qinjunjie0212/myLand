import React from 'react'
import './index.css'
import Waterfall from '../Waterfall'
import '../Card/index.css'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Home: React.FC = () => {
    const { isLoading, error, data } = useQuery(['posts'], () =>
        makeRequest.get("/posts").then(res=>{
            console.log(isLoading, error, data);
            return res.data
            
            
        })
    )

    return (
        <div className='home-box'>
            <ul className='select'>
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
            </ul>
            <div>
                <Waterfall cardMessage={data} isloading={isLoading} error={error}/>
            </div>
            {/* <div style={{width:'200px',height:'200px',backgroundColor:'black',position:'absolute',top:'207px',left:'550px'}}></div> */}
        </div>
        
    )
}

export default Home