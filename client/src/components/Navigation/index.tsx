import React, { ReactNode, useState ,useContext} from 'react';
import {MenuOutlined ,BellOutlined,SearchOutlined,RocketOutlined,ExportOutlined,RightOutlined, HomeOutlined,UserOutlined } from '@ant-design/icons';
import './index.css'
import {NavLink} from 'react-router-dom'
import { Button} from 'antd';
import { useQuery } from '@tanstack/react-query'
import { makeRequest } from '../../axios'
// import {UserContext} from '../UserContext.js'

interface item{
  label:string;
  icon:ReactNode;
  key:string;
  path:string;
}

const items: item[] = [
    {
      label: '发现',
      icon: <HomeOutlined />,
      key: 'homepage',
      path:'/home'
    },
    {
      label: '朋友',
      icon: <UserOutlined />,
      key: 'friend',
      path:'/friend'
    },
    {
      label: '发布',
      icon: <RocketOutlined />,
      key: 'issue',
      path:'/issue'
    },{
      label: '通知',
      icon: <BellOutlined />,
      key: 'inform',
      path:'/inform'
    }
]

const Navigation: React.FC = () => {
    // const {user} = useContext(UserContext)
    let [isOpen,setIsOpen] = useState(true)
    let [count,setCount] = useState(0)
    let userInfomation = JSON.parse(localStorage.getItem('user')!)
    function handleOpen():any{
      setIsOpen(!isOpen)
      setCount(count+1)
    } 

    const userId = userInfomation.id
    let pic = ''
    const { isLoading, error, data } = useQuery(['user'], () =>
        makeRequest.get("/users/find/" + userId).then(res=>{
            return res.data  
        })
    )
    // console.log(data?.username);
    if(data?.userpic===''){
        pic = '	https://img0.baidu.com/it/u=3121974779,1726178990&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=500'
    }else {
        pic = data?.userpic
    }

    return (
      <div> 
        {/* 上方logo和搜索框 */}
        <div className='Header'>
          <div className='logo'>{data?data.username+"'s":'MY'} <br/><span style={{marginLeft:'50px',marginTop:'30px'}}>Land</span></div>
          <div className='search'>
            <input type="text" placeholder='搜索你感兴趣的吧...' className='search-input'/>
            <SearchOutlined className='SearchOutlined'/>
          </div>
          <div className='about'></div>
        </div>
        {/* 侧边栏  */}
        <div className={count ? (isOpen ? 'open Navigation-box' : 'noOpen Navigation-box') : 'Navigation-box'}>        
          <div className='Navigation-head'>
            <MenuOutlined className='MenuOutlined' onClick={handleOpen}/>
            <span className={count ? (isOpen ? 'open userName' : 'noOpen userName') : 'userName'}>{data?data?.username:'请登录'}</span>
          </div>
          {/* 列表区 */}
          <ul className='Navigation-body'>
            {
              items.map((item) => {
                return ( 
                        <li key={item.key} className='item'>
                          <NavLink to={item.path}>
                          <span className='item-icon'>{item.icon}</span>
                          <span className='item-label'>{item.label}</span>
                          </NavLink> 
                        </li>
                )
              })
            }
          </ul>
          {/* 下方区域 */}
          <div className='Navigation-foot'>
            {
              userInfomation ? 
              <div>
                <NavLink to='/homepage'>
                  <div className='to-homepage'>
                    <div style={{backgroundImage:`url(${pic})`,backgroundSize:'cover'}}>
                      <img src={"/upload/"+pic} alt="" className={count ? (isOpen ? 'head-pic open-pic' : 'head-pic noOpen-pic') : 'head-pic' }/>
                    </div>
                    <RightOutlined className={count ? (isOpen ? 'RightOutlined open-other' : 'RightOutlined noOpen-other') : 'RightOutlined'}/>
                  </div>
                </NavLink>
                <ExportOutlined className={count ? (isOpen ? 'ExportOutlined open-back' : 'ExportOutlined noOpen-back') : 'ExportOutlined'}/>
              </div>
              : 
              <div className='toLogin'>
                  <NavLink to='/login'>
                    <span>前往登录</span>
                    <RightOutlined />
                  </NavLink>
              </div>
            }
          </div>
        </div>
      </div>
    )
};

export default Navigation;