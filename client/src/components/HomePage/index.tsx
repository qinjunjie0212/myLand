import React,{useState,useContext} from 'react'
import './index.css'
import {ManOutlined, WomanOutlined} from '@ant-design/icons';
import MyNote from '../MyNote'
import {NavLink,useRoutes,Outlet} from 'react-router-dom'
import routes from '../../routes'
import axios from 'axios'
// import {UserContext} from '../UserContext.js'

interface person{
    username:string;
    url:string;
    sex:string;
    id:number;
    IP:string;
    attebtion:number;
    fans:number;
}

const personInfo: person = {
    username:'拾柒',
    url:'http://localhost:3000/static/media/headPic.bd8c0d3272fed423e847.jpg',
    sex:'man',
    id:1234565,
    IP:'陕西',
    attebtion:5,
    fans:66,
}
 interface userInfo  {
    id:string;
    username:string;
    email:string;
    userpic:string;
 }


const HomePage: React.FC = () => {
    // const {user} = useContext(UserContext)
    const element = useRoutes(routes)    
    let [liItem,setLiItem] = useState<number | null>(null)
    let userInfomation = JSON.parse(localStorage.getItem('user')!)

    function handleChange(index:number):any{
        setLiItem(index)
        console.log(userInfomation);
        
    }


    return (
        <div className='HomePage-box'>
            <div className='information-box'>
                <div className='userPic' style={{backgroundImage:`url(${userInfomation.userpic})`,backgroundSize:'cover'}}></div>
                <div className='information'>
                    <h2 className='userName'>{userInfomation.username}</h2>
                    <div className='id-ip'>小红书号：{`${userInfomation.id}`.padStart(8, "0")} | IP属地：{personInfo.IP}</div>
                    <div className='sex'>
                        {personInfo.sex==='man' ? (< ManOutlined style={{fontSize:'12px',marginLeft:'6px',marginRight:'3px'}}/>) : (<WomanOutlined style={{fontSize:'12px',marginLeft:'5px'}}/>)}
                        {personInfo.sex==='man' ? '男' : '女'}
                    </div>
                    <div className='fans-number'>
                        <span className='attention'>{personInfo.attebtion}关注</span>
                        <span className='fans'>{personInfo.fans} 粉丝</span>
                    </div>
                </div>
            </div>
            <ul className='navigation' >
                <li 
                onClick={()=>handleChange(0)} 
                className={(liItem === 0) || (liItem === null) ? 'li-active' : ''}
                >
                    <NavLink to='/homepage/mynote'>笔记</NavLink>
                </li>
                <li 
                onClick={()=>handleChange(1)} 
                className={liItem === 1 ? 'li-active' : ''}
                >
                    <NavLink to='collect'>收藏</NavLink>
                </li>
                <li 
                onClick={()=>handleChange(2)} 
                className={liItem === 2 ? 'li-active' : ''}
                >
                    <NavLink to='like'>点赞</NavLink>
                </li>
            </ul>
            <hr style={{color:'black'}}/>
            <div className='production'>
                {/* {element} */}
                <Outlet></Outlet>
            </div>
        </div>
        
    )
}

export default HomePage