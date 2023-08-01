import React from 'react'
import './index.css'
import Carousel from '../Carousel'
import Comment from '../Comment'
import {ArrowLeftOutlined} from '@ant-design/icons'

const Detail: React.FC = () => {
    const query = new URLSearchParams(window.location.search)
    console.log('123',query);
    
    const pics = [
                'http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
                'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
                ]

    function handleBack (){
        window.history.back()
    }

    return (
        <div className='detail-wai'>
            <div className='back' onClick={handleBack}><ArrowLeftOutlined /></div>
            <div className='detail-box'>
                {/* 图片轮播图 */}
                <div className='detail-left'>
                    <Carousel></Carousel>
                </div>
                {/* 评论等 */}
                <div className='detail-right'>
                    <Comment />
                </div>
            </div>
        </div>
        
    )
}

export default Detail