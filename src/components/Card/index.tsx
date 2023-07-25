import React,{useState} from 'react'
import { useNavigate} from 'react-router-dom';
import './index.css'
import {HeartOutlined,HeartFilled} from '@ant-design/icons'

interface card{
    cardSrc?:string;
    cardMessage?:string;
    userName?:string;
    userPic?:string;
    likeNum?:number;
    liked?:boolean;
    userId?:number;
    onClick?:()=>void
  }

const Card: React.FC<card> = ({cardSrc,cardMessage,userName,userPic,likeNum,liked,onClick,userId}) => {
    let [like,setLike] = useState(false)
    // console.log(key);
    const navigate = useNavigate()
    
    const handleClick = (userId:any) => {
        console.log(cardMessage,userId);
        navigate(`/detail?id=${userId}`)
    }

    return (
        <div className='card-wai' onClick={()=>handleClick(userId)}>
            <div className='card-box'>
                <img src={cardSrc} alt=""  className='cardSrc'/>
                <div className='cardMessage'>{cardMessage}</div>
                <div className='cardBotton'>
                    <div className='left'>
                        <img src={userPic} alt="" className='userPic'/>
                        <span className='userName'>{userName}</span>
                    </div>
                    <div className='right'>
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
                        </span>
                        <span className='likeNum'>
                            {likeNum}
                        </span>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Card