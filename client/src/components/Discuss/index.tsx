import React from 'react'
import './index.css'



const Discuss: React.FC = () => {
    return (
        <div className='discussCard'>
            <div className='left'>
                <img className='userPic' src="http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg" alt="" />
            </div>
            <div className='right'>
                <span className='userName'>用户名111</span>
                <div className='commentBox'>高一还在穿aj1和dunk当热血男高，高二开始买asics salomon变成钓鱼老头 谁懂，漂亮漂亮漂亮</div>
                <div className='date'>7-20 江苏</div>
            </div>
            
        </div>
        
    )
}

export default Discuss