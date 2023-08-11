import React from 'react'
import Waterfall  from '../Waterfall'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'

const Friend: React.FC = () => {
    const { isLoading, error, data } = useQuery(['friendposts'], () =>
        makeRequest.get("/friendposts").then(res=>{
        return res.data
        })
    )
    console.log('friend',data);

    return (
        <div className='home-box'>
            <Waterfall cardMessage={data} isloading={isLoading} error={error}/>
        </div>
        
    )
}

export default Friend