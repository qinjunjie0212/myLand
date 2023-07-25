import React, { ReactNode, useState } from 'react';
import {MenuOutlined ,BellOutlined,SearchOutlined,RocketOutlined,ExportOutlined,RightOutlined, HomeOutlined } from '@ant-design/icons';
import './index.css'
import {NavLink} from 'react-router-dom'

interface item{
  label:string;
  icon:ReactNode;
  key:string;
  path:string;
}

const items: item[] = [
    {
      label: '首页',
      icon: <HomeOutlined />,
      key: 'homepage',
      path:'/home'
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
    let [isOpen,setIsOpen] = useState(true)
    let [count,setCount] = useState(0)
    function handleOpen():any{
      setIsOpen(!isOpen)
      setCount(count+1)
    } 
    return (
      <div> 
        {/* 上方logo和搜索框 */}
        <div className='Header'>
          <div className='logo'></div>
          <div className='search'>
            <input type="text" placeholder='搜索你感兴趣的吧...' className='search-input'/>
            <SearchOutlined className='SearchOutlined'/>
          </div>
          <div className='about'>关于我们</div>
        </div>
        {/* 侧边栏  */}
        <div className={count ? (isOpen ? 'open Navigation-box' : 'noOpen Navigation-box') : 'Navigation-box'}>        
          <div className='Navigation-head'>
            <MenuOutlined className='MenuOutlined' onClick={handleOpen}/>
            <span className={count ? (isOpen ? 'open userName' : 'noOpen userName') : 'userName'}>用户名</span>
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
            <NavLink to='/homepage'>
              <div className='to-homepage'>
                <div className={count ? (isOpen ? 'head-pic open-pic' : 'head-pic noOpen-pic') : 'head-pic'}></div>
                <RightOutlined className={count ? (isOpen ? 'RightOutlined open-other' : 'RightOutlined noOpen-other') : 'RightOutlined'}/>
              </div>
            </NavLink>
            <ExportOutlined className={count ? (isOpen ? 'ExportOutlined open-back' : 'ExportOutlined noOpen-back') : 'ExportOutlined'}/>
          </div>
        </div>
      </div>
    )
};

export default Navigation;