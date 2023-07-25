import React from 'react'
import './index.css'
import Waterfall from '../Waterfall'
import '../Card/index.css'

const Home: React.FC = () => {
    
    return (
        <div className='home-box'>
            <ul className='select'>
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
                <li>标签</li>
            </ul>
            <div className='home-body'>
                <Waterfall />
            </div>
            {/* <div style={{width:'200px',height:'200px',backgroundColor:'black',position:'absolute',top:'207px',left:'550px'}}></div> */}
        </div>
        
    )
}

export default Home