import React,{useRef} from 'react'
import './index.css'
import {SendOutlined} from '@ant-design/icons'

const Header: React.FC = () => {
    let fileRef = useRef<HTMLInputElement>(null)
    function handleFile(){
        fileRef.current?.click()
    }

    return (
        <div className='issueBox'>
            
            <form action="" className='form'>
                <div className='title'>发布我的瞬间</div>
                <textarea name="" id="" cols={30} rows={10} placeholder='写点什么吧...'></textarea>
                <input type="file" className='file' ref={fileRef}/>
                <div></div>
                <div onClick={handleFile} className='addPic'><span>+</span></div>
                <button className='send'>发布<SendOutlined className='SendOutlined'/></button>
            </form>
        </div>
    )
}   

export default Header