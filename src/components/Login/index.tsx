import React,{useRef,useEffect} from 'react'
import './index.css'

const Login: React.FC = () => {
    let btnRef = useRef<HTMLDivElement>(null)
    let changeRef = useRef<HTMLDivElement>(null)
    useEffect(() => {
        const handleChange = () => {
            changeRef.current?.classList.toggle('s--signup')
        }

        if(btnRef.current){
            btnRef.current.addEventListener('click',handleChange)
        }

        return () => {
            if(btnRef.current){
                btnRef.current.removeEventListener('click',handleChange)
            }
        }
    })

    return (
        <div className='loginBox'>
            <div className="cont" ref={changeRef}>
                <div className="form sign-in">
                    <h2 className='title'>欢迎回来！</h2>
                    <label className='label'>
                        <span>Email</span>
                        <input type="email"  className='ipt'/>
                    </label>
                    <label className='label'>
                        <span>密码</span>
                        <input type="password" className='ipt'/>
                    </label>
                    <p className="forgot-pass">忘记密码?</p>
                    <button type="button" className="submit btn">登录</button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        <div className="img__text m--up">
                            <h2 className='title'>新用户</h2>
                            <p>注册一个属于自己的账号!</p>
                        </div>
                        <div className="img__text m--in">
                            <h2 className='title'>已有账号</h2>
                            <p>前往登录!</p>
                        </div>
                        <div className="img__btn" ref={btnRef} >
                            <span className="m--up" >注册</span>
                            <span className="m--in">登录</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2 className='title'>注册一个属于你的账户吧</h2>
                        <label className='label'>
                            <span>用户名</span>
                            <input type="text" className='ipt'/>
                        </label>
                        <label className='label'>
                            <span>Email</span>
                            <input type="email" className='ipt'/>
                        </label>
                        <label className='label'>
                            <span>密码</span>
                            <input type="password" className='ipt'/>
                        </label>
                        <button type="button" className="submit btn">注册</button>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Login