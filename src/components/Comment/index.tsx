import React,{useState} from 'react'
import './index.css'
import {HeartOutlined,HeartFilled,MessageOutlined,EditOutlined} from '@ant-design/icons'
import Discuss from '../Discuss'

interface comment{
    userPic:string;
    userIp:string;
    comment:string;
  }

const comments : comment[] = [
    {
        userPic:'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
        userIp:'陕西',
        comment:'关于这件事我的评论111'
    },
    {
        userPic:'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
        userIp:'陕西',
        comment:'关于这件事我的评论222'
    },
    {
        userPic:'http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg',
        userIp:'陕西',
        comment:'关于这件事我的评论333'
    },
]

const Comment: React.FC = () => {
    let [like,setLike] = useState(false)
    return (
        <div className='comment-box'>
            {/* 评论头像，用户名，关注按钮 */}
            <div className='comment-header'>
                <div className='user'>
                    <img className='userPic' src='http://localhost:3000/static/media/cat.14a0caec35324158349a.jpg'></img>
                    <span className='userName'>用户名</span>
                </div>
                <div className='attention'>关注</div>
            </div>
            {/* 文案 */}
            <div className='comment-message'>
                <div className='message-box'>
                    <div className='title'>高中两年买的鞋子</div>
                    <div className='message'>
                        高一还在穿aj1和dunk当热血男高<br></br>
                        高二开始买asics salomon变成钓鱼老头 谁懂      
                    </div>
                    <div className='time'>发布时间 IP地址</div>
                </div>

            </div>
            {/* 评论 */}
            <div className='comment-body'>
                <Discuss />
            </div>
            {/* 评论页下方 */}
            <div className='comment-bottom'>
                <div className='bottom-box'>
                    <span onClick={()=>{
                        setLike(!like) 
                    }}
                    className='liked'
                    >
                        {
                        like ? 
                        <HeartFilled style={{color:'red'}}/> : 
                        <HeartOutlined />
                        }
                        <span className='likeNum'>781</span>
                    </span>
                    <span className='discuss'>
                        <MessageOutlined />
                        <span className='discussNum'>781</span>
                    </span>
                    <div className='pinglun-box'>
                        <EditOutlined className='pen'/>
                        <input type="text" className='pinglun' placeholder='我有话要说' />
                        <button className='send'>发送</button>
                    </div>
                    
                </div>
            </div>
        </div>       
    )
}

export default Comment