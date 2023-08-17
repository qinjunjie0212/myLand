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
    userId?:number;
    onClick?:()=>void
  }

const Card: React.FC<card> = ({cardSrc,cardMessage,userName,userPic,likeNum,userId}) => {
    let [like,setLike] = useState(false)
    // console.log(key);
    const navigate = useNavigate()
    
    const handleClick = (userId:any) => {
        console.log(cardMessage,userId);
        navigate(`/detail?id=${userId}`)
    }
    // console.log('card',{cardSrc,cardMessage,userName,userPic,likeNum,userId});
    // console.log(cardSrc === null);
    

    return (
        <div className='card-wai' onClick={()=>handleClick(userId)}>
            <div className='card-box'>
                <img src={"./upload/"+cardSrc} alt=""  className='cardSrc' style={cardSrc === null ? {display:'none'} : {display:'block'}}/>
                <div className='cardMessage'>{cardMessage}</div>
                <div className='cardBotton'>
                    <div className='left'>
                        <img src={"./upload/"+userPic} alt="" className='userPic'/>
                        <div>
                            <span className='userName'>{userName}</span>
                            {/* <span>1 min ago</span> */}
                        </div>
                    </div>
                    {/* <div className='right'>
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
                    </div> */}
                </div>
            </div>
            {/* <hr style={{marginTop:'50px',backgroundColor:'black'}}/> */}
        </div>
        
    )
}

export default Card