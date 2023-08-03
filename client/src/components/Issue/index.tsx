import React,{useRef,useState,useEffect} from 'react'
import './index.css'
import {SendOutlined} from '@ant-design/icons'
import { makeRequest } from '../../axios'
import axios,{ AxiosResponse } from 'axios'


const Header: React.FC = () => {
    let fileRef = useRef<HTMLInputElement>(null)
    function handleFile(){
        fileRef.current?.click()
    }
    const [desc,setDesc] = useState('')
    const [file,setFile] = useState<File | null>(null)
    const handlePutBlog = (e:any) => {
        setDesc(e.target.value)      
    }

    const handlePutPic = (e:any) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        } 
    }
    useEffect(() => {
        console.log(file);
    }, [file]);
    console.log('555',file);
    

    const handleClick = async (e: any) => {
        e.preventDefault();
        // console.log(mutation.mutate({desc}));
        // 获取选择的图片的名称
        let imgUrl;
        if(file) imgUrl = await upload(file)
        console.log('imgUrl',imgUrl);

        // 发送帖子文案
        makeRequest.post("/posts",{desc,img:imgUrl})
        .then(response => {
            if(response.status === 200) {
                console.log(response); 
            }
        })
        .catch(error => {
            console.log('发布失败！');
            
        })
      };

      //调用后台写好的函数
      const upload = async (file:any)=> {
        try{
            const formData = new FormData()
            formData.append("file",file)
            console.log('123',file);
            
            const res = await makeRequest.post('/upload', formData)
            return res.data
        }catch(err){
            console.log(err);
            
        }
      }
    
    // const [desc,setDesc] = useState("")

    // const queryClient = useQueryClient()

    // const mutation = useMutation(
    //     (newPost)=>{
    //         return makeRequest.post("/posts",newPost)
    //     },{
    //     onSuccess: () => {
    //       // Invalidate and refetch
    //       queryClient.invalidateQueries({ queryKey: ['posts'] })
    //     },
    //   })

      

    return (
        <div className='issueBox'>
            
            <form action="" className='form'>
                <div className='title'>发布我的瞬间</div>
                <textarea name="desc" id="" cols={30} rows={10} placeholder='写点什么吧...' onChange={handlePutBlog}></textarea>
                <div>
                <input 
                    type="file" 
                    className='file' 
                    ref={fileRef} 
                    name='fileSrc'
                    onChange={handlePutPic}
                />
                <div></div>
                <div onClick={handleFile} className='addPic'><span>+</span></div>
                <div className="chosed" style={{height:'200px'}}>
                    <div  style={{width:'100px',height:'100px',position:'absolute',top:'20px',left:'200px',zIndex:'999'}}   >
                    {file && <img className='file' alt='' src={URL.createObjectURL(file)}  style={{width:'100px',height:'100px',position:'absolute',top:'20px',left:'200px',zIndex:'999'}}/>}
                    {/* <img src="blob:http://localhost:3000/7b3d03bf-0517-4b88-8d52-3f053346bfd9" alt="" /> */}
                    </div>
                </div>
                </div>
                <button className='send' onClick={handleClick}>发布<SendOutlined className='SendOutlined'/></button>
            </form>
        </div>
    )
}   

export default Header