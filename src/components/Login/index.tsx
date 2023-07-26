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
                    <h2>Welcome back</h2>
                    <label>
            <span>Email</span>
            <input type="email" />
            </label>
                    <label>
            <span>Password</span>
            <input type="password" />
            </label>
                    <p className="forgot-pass">Forgot password?</p>
                    <button type="button" className="submit">Sign In</button>
                </div>
                <div className="sub-cont">
                    <div className="img">
                        
                        <div className="img__btn" ref={btnRef} >
                            <span className="m--up" >Sign Up</span>
                            <span className="m--in">Sign In</span>
                        </div>
                    </div>
                    <div className="form sign-up">
                        <h2>Time to feel like home,</h2>
                        <label>
                <span>Name</span>
                <input type="text" />
            </label>
                        <label>
                <span>Email</span>
                <input type="email" />
            </label>
                        <label>
                <span>Password</span>
                <input type="password" />
            </label>
                        <button type="button" className="submit">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Login