import React,{useState,useContext,useEffect} from 'react'
import './index.css'
import {ManOutlined, WomanOutlined} from '@ant-design/icons';
import MyNote from '../MyNote'
import {NavLink,useRoutes,Outlet} from 'react-router-dom'
import routes from '../../routes'
import axios from 'axios'
// import {UserContext} from '../UserContext.js'
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
import Update from '../Update'

 interface userInfo  {
    id:string;
    username:string;
    email:string;
    userpic:string;
 }


const HomePage: React.FC = () => {
    const element = useRoutes(routes)    
    let [liItem,setLiItem] = useState<number | null>(null)
    let userInfomation = JSON.parse(localStorage.getItem('user')!)
    // 关注数
    const [followedNum,setFollowedNum] = useState(0)
    // 我的关注
    const [followerNum,setFollowerNum] = useState(0)
    const [openUpdate,setOpenUpdate] = useState(false)
    const [data,setData] = useState({
        userpic:'',
        gender:'',
        username:'',
        id:null
    })
    

    function handleChange(index:number):any{
        setLiItem(index)
    }

    const userId = userInfomation.id
    let pic = ''
    let gender = ''
    // const { isLoading, error, data } = useQuery(['user'], () =>
    //     makeRequest.get("/users/find/" + userId).then(res=>{
    //         return res.data  
    //     })
    // )
    useEffect(() => {
        const fetchData = async () => {
            const response = await makeRequest.get("/users/find/" + userId)
            // console.log(response);
            
            setData(response.data)
        };
        if (openUpdate!==null) {
            fetchData();
        }
      }, [openUpdate]);
    if(data.userpic===''||data.userpic===null){
        pic = '	https://img0.baidu.com/it/u=3121974779,1726178990&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    }else {
        pic = data?.userpic
    }
    if(data.gender===null){
        gender = 'man'
    }else {
        gender = data?.gender
    }
    
    const { data:followed } = useQuery(['followed'], () =>
        makeRequest.get("/relationship/followed?followedUserid=" + userId).then(res=>{
            setFollowedNum(res.data.length);
            return res.data  
        })
    )
    const { data:follower } = useQuery(['follower'], () =>
        makeRequest.get("/relationship/follower?followerUserid=" + userId).then(res=>{
            setFollowerNum(res.data.length);
            return res.data  
        })
    )
    

    return (
        <div className='HomePage-box'>
            <div className='information-box'>
                <div className='userPic' style={{backgroundImage:`url(${pic})`,backgroundSize:'cover'}}>
                    <img src={"/upload/"+pic} alt="" className='userPic'/>
                </div>
                <div className='information'>
                    <h2 className='userName'>{data?.username}</h2>
                    <div className='id-ip'>MID：{`${data?.id}`.padStart(8, "0")}</div>
                    <div className='sex'>
                        {gender==='man' ? (< ManOutlined style={{fontSize:'12px',marginLeft:'6px',marginRight:'3px',color:'rgb(103, 125, 250)'}}/>) : (<WomanOutlined style={{fontSize:'12px',marginLeft:'6px',marginRight:'3px',color:'rgb(255, 128, 149)'}}/>)}
                        {gender==='man' ? '男' : '女'}
                    </div>
                    <div className='fans-number'>
                        <span className='attention'>{followedNum}关注</span>
                        <span className='fans'>{followerNum} 粉丝</span>
                    </div>
                    <button className='update-btn' onClick={()=>setOpenUpdate(true)}>更新个人信息</button>
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
                onClick={()=>handleChange(2)} 
                className={liItem === 2 ? 'li-active' : ''}
                >
                    <NavLink to='like'>点赞</NavLink>
                </li>
            </ul>
            <hr style={{color:'black'}}/>
            <div>
                <Outlet></Outlet>
            </div>
            {openUpdate && <Update setOpenUpdate={setOpenUpdate}/>}
            {/* {openUpdate && <Update />} */}
        </div>
        
    )
}

export default HomePage