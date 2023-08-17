import React from 'react'
import './index.css'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import Waterfall  from '../Waterfall'

const Header: React.FC = () => {
    const { isLoading, error, data } = useQuery(['likeposts'], () =>
        makeRequest.get("/likeposts").then(res=>{
        return res.data
        })
    )
    console.log('like',data);

    return (
        <div className='home-box'>
            <Waterfall cardMessage={data} isloading={isLoading} error={error}/>
        </div>
        
    )
}

export default Header