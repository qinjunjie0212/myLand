import React,{useState,useRef,useEffect} from 'react'
import './index.css'
import {HeartOutlined,HeartFilled,MessageOutlined,EditOutlined} from '@ant-design/icons'
import Discuss from '../Discuss'
import { makeRequest } from '../../axios'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import moment from 'moment'

interface commentProps {
    userData:any,
    picData:any,
    postId:any
}

interface comment {
    id:number;
    username:string;
    userpic:string;
    message:string;
    time:string
}

const Comment: React.FC<commentProps> = ({userData,picData,postId}) => {
    let [like,setLike] = useState(false)
    let scrollTableRef = useRef<HTMLDivElement>(null)
    const [desc,setDesc] = useState('')
    const [isloading,setIsloading] = useState(true)
    const [comments, setComments] = useState([]);
    const [send,setSend] = useState(0)
    const [likeNum,setLikeNum] = useState(0)
    const [likePeople,setLikePeople] = useState([])
    let userInfomation = JSON.parse(localStorage.getItem('user')!)

    useEffect(()=>{
        const scrollTable = scrollTableRef.current;
        if(scrollTable) {
            scrollTable.addEventListener('wheel',handleWheel);
        }

        return () => {
            if(scrollTable) {
                scrollTable.removeEventListener('wheel',handleWheel);
            }
        }
    },[])

    const handleWheel = (e:WheelEvent) => {
        e.stopPropagation()
    }
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await makeRequest.get("/comments?postId=" + postId);
            setIsloading(false)
            setComments(response.data)
        };
        if (postId) {
            fetchData();
        }
      }, [postId,send]);

      useEffect(() => {
        const fetchData = async () => {
            const response = await makeRequest.get("/likes?postId=" + postId);
            setLikeNum(response.data.length)
            setLikePeople(response.data)
            console.log('135225',response.data);
        };
        if (postId) {
            fetchData();
        }
      }, [postId]);
    
    const handleClick = async (e: any) => {
        e.preventDefault();
        setSend(send+1)
        // 发送帖子文案
        desc==='' ? alert('不能为空') 
        :makeRequest.post("/comments",{desc,postId:postId})
        .then(response => {
            if(response.status === 200) {
                console.log('成功',response);
                setDesc('')
            }
        })
        .catch(error => {
            console.log('发送失败！',error);        
        })
      };
      
      
    return (
        <div className='comment-box'>
            {/* 评论头像，用户名，关注按钮 */}
            <div className='comment-header'>
                <div className='user'>
                    <img className='userPic' src={userData.userpic}></img>
                    <span className='userName'>{userData.username}</span>
                </div>
                <div className='attention'>关注</div>
            </div>
            {/* 文案 */}
            <div className='scrollTable' ref={scrollTableRef}>
                <div className='comment-message'>
                    <div className='message-box'>
                        <div className='title'>{picData.desc}</div>
                        <div className='message'>
                            高一还在穿aj1和dunk当热血男高<br></br>
                            高二开始买asics salomon变成钓鱼老头 谁懂      
                        </div>
                        <div className='time'>{moment(picData.createdAt).fromNow()}</div>
                    </div>

                </div>
                {/* 评论 */}
                <div className='comment-body'>
                    <div className='discuss'>
                        <div className='total'>共 {comments.length} 条评论</div>
                            {isloading
                            ? "loading..."
                            : comments.map((comment,id) => {
                                    return (
                                        <Discuss key={id} comment={comment}/>
                                    )
                                })
                            }
                        </div>
                    <div className='text'>已经到底了~</div>
                </div>
            </div>
            {/* 评论页下方 */}
            <div className='comment-bottom'>
                <div className='bottom-box'>
                    <span onClick={()=>{
                        setLike(!like) 
                    }}
                    className='liked'
                    >
                        {           
                            // likePeople.toA.includes(userInfomation.id) ? 
                            userInfomation ?
                            <HeartFilled style={{color:'red'}}/> : 
                            <HeartOutlined />
                        }
                        <span className='likeNum'> {likeNum} 人喜欢</span>
                    </span>
                    {/* <span className='discussIcon'>
                        <MessageOutlined />
                        <span className='discussNum'>{comments.length}</span>
                    </span> */}
                    <div className='pinglun-box'>
                        <EditOutlined className='pen'/>
                        <input 
                            type="text" 
                            className='pinglun' 
                            placeholder='我有话要说' 
                            value={desc}
                            onChange={e=>setDesc(e.target.value)}
                        />
                        <button className='send' onClick={handleClick}>发送</button>
                    </div>
                    
                </div>
            </div>
        </div>       
    )
}

export default Comment