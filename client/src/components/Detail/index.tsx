import React,{useState,useEffect} from 'react'
import './index.css'
import Carousel from '../Carousel'
import Comment from '../Comment'
import {ArrowLeftOutlined} from '@ant-design/icons'
import { makeRequest } from '../../axios'

const Detail: React.FC = () => {
    const query = new URLSearchParams(window.location.search);
    // 拿到访问博客id
    const path = window.location.href;
    const id = path.substring(path.lastIndexOf('=') + 1);
    let [data, setData] = useState({});
    const [userData, setUserData] = useState<{ id: number | null }>({ id: null });
    const [postid,setPostid] = useState(null)

    useEffect(() => {
      const fetchData = async () => {
          const response = await makeRequest.get("/detail", { params: { id: id } });
          setData(response.data.data[0]);
          setPostid(response.data.data[0].id)
          if (response.data.userData && response.data.userData.length > 0) {
            setUserData(response.data.userData[0]);
            
          }
      };
      fetchData();
    }, []);
  
    function handleBack() {
      window.history.back();
    }
    window.addEventListener('wheel', (event) => {
        event.preventDefault();
    });
    return (
      <div className='detail-wai'>
        <div className='back' onClick={handleBack}><ArrowLeftOutlined /></div>
        <div className='detail-box'>
          {/* 图片轮播图 */}
          <div className='detail-left'>
            <Carousel detail={data}></Carousel>
          </div>
          {/* 评论等 */}
          <div className='detail-right'>
            {/* 将userData传递给Comment组件 */}
            {userData && <Comment userData={userData} picData={data} postId={postid}/>}
          </div>
        </div>
      </div>
    );
  };
  
  export default Detail;