import React,{useRef,useEffect,useState,useContext} from 'react'
import './index.css'
import {useNavigate,useLocation} from 'react-router-dom'
import axios from 'axios'
// import {UserContext} from '../UserContext.js'

const Login: React.FC = () => {
    let btnRef = useRef<HTMLDivElement>(null)
    let changeRef = useRef<HTMLDivElement>(null)
    const navigate = useNavigate()
    let nowUrl = useLocation().pathname
    let [btnState,setBtn] = useState(nowUrl==="/login" ? false : true)
    // const {setUser} = useContext(UserContext)
    const [registerMessage,setRegisterMessage] = useState('')
    const [register,setRegister] = useState({
        username:'',
        email:'',
        password:''
    })

    const [login,setLogin] = useState({
        username:'',
        password:''
    })

    const [rerr,setRerr] = useState(null)

    // 获取input框输入值
    const handleChangeRegister = (e:any) => {
        setRegister(prev=>({...prev,[e.target.name]:e.target.value}))
    }
    const handleChangeLogin = (e:any) => {
        setLogin(prev=>({...prev,[e.target.name]:e.target.value}))        
    }

    const handleClick = async (e:any) => {
        // 防止默认事件
        e.preventDefault()
        axios.post('http://localhost:8800/api/auth/register', register)
        .then(response => {
          // 登录成功
          if (response.status === 200) {
            console.log(response.data);
            // setUser(response.data)
            // 进行页面跳转或其他操作
            console.log('Register Successful!');
            setRegisterMessage("注册成功")
            setTimeout(()=>{
                setBtn(!btnState)
                !btnState ? navigate('/register') : navigate('/login')
            },1000)
          }
        })
        .catch(error => {
          // 登录失败
          console.error('Register Failed: ', error.response.data);
          setRegisterMessage(error.response.data)
          // 在此处可以根据接口返回的错误信息进行具体错误处理
        });
    }

    const handleLogin = async (e:any) => {
        // 防止默认事件
        e.preventDefault()

        axios.post('http://localhost:8800/api/auth/login', login,{
            withCredentials: true
        })
        .then(response => {
          // 登录成功
          if (response.status === 200) {
            console.log(response);
            // setUser(response.data)
            // // console.log(response.cookie);
            // setCurrentUser(response.data)
            // console.log('222',currentUser);
            localStorage.setItem("user",JSON.stringify(response.data))
            // 进行页面跳转或其他操作
            console.log('Login Successful!');
            navigate('/home'); // 示例中使用window.location.href进行页面跳转，你可以根据具体情况调整代码来实现你的需求
          }
        })
        .catch(error => {
          // 登录失败
          console.error('Login Failed: ', error.response.data);
          // 在此处可以根据接口返回的错误信息进行具体错误处理
        });
    }

    // useEffect(() => {
    //     localStorage.setItem("user",JSON.stringify(currentUser))
    // },[currentUser])
    // console.log('111',currentUser);
    

    function changeBtn(){
        setBtn(!btnState)
        console.log(btnState);
        !btnState ? navigate('/register') : navigate('/login')
    }

    // console.log(inputs);
    

    return (
        <div className='loginBox'>
            <div className={btnState ? "cont s--signup" : "cont"} ref={changeRef}>
                {/* 登录 */}
                <div className="form sign-in">
                    <h2 className='title'>欢迎回来！</h2>
                    <label className='label'>
                        <span>用户名</span>
                        <input 
                            type="text"  
                            className='ipt' 
                            name='username'
                            onChange={handleChangeLogin}
                        />
                    </label>
                    <label className='label'>
                        <span>密码</span>
                        <input 
                            type="password" 
                            className='ipt' 
                            name='password'
                            onChange={handleChangeLogin}
                        />
                    </label>
                    <p className="forgot-pass">忘记密码?</p>
                    <button 
                        type="button" 
                        className="submit btn"
                        onClick={handleLogin}
                    >
                        登录
                    </button>
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
                        <div className="img__btn" ref={btnRef}  onClick={changeBtn}>
                            <span className="m--up" >注册</span>
                            <span className="m--in">登录</span>
                        </div>
                    </div>
                    {/* 注册 */}
                    <div className="form sign-up">
                        <h2 className='title'>注册一个属于你的账户吧</h2>
                        <form>
                            <label className='label'>
                                <span>用户名</span>
                                <input 
                                    type="text" 
                                    className='ipt' 
                                    name='username' 
                                    onChange={handleChangeRegister}
                                />
                            </label>
                            <label className='label'>
                                <span>Email</span>
                                <input 
                                    type="email" 
                                    className='ipt' 
                                    name='email' 
                                    onChange={handleChangeRegister}
                                />
                            </label>
                            <label className='label'>
                                <span>密码</span>
                                <input 
                                    type="password" 
                                    className='ipt' 
                                    name='password' 
                                    onChange={handleChangeRegister}
                                />
                            </label>
                            <span 
                                style={{position:'absolute',left:'320px',bottom:'220px',fontSize:'13px',color:'red'}}
                            >
                                {registerMessage}
                            </span>
                            <button 
                                type="button" 
                                className="submit btn"
                                onClick={handleClick}
                            >
                                注册
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Login