import React,{useRef,useState,useEffect} from 'react';
import './index.css';
import { makeRequest } from '../../axios';

interface UpdateProps {
  setOpenUpdate: React.Dispatch<React.SetStateAction<boolean>>;
}

const Update: React.FC<UpdateProps> = ({ setOpenUpdate }) => {
    const [name,setName] = useState('')
    const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (e:any) => {
        setSelectedOption(e.target.value);
    };

    const handleSubmit = (e:any) => {
        e.preventDefault();
        // 在这里处理表单提交和选项的值
        console.log(name,selectedOption);
    };


    let userInfomation = JSON.parse(localStorage.getItem('user')!)
    let fileRef = useRef<HTMLInputElement>(null)
    function handleFile(){
        fileRef.current?.click()
    }
    const [file,setFile] = useState<File | null>(null)

    const handlePutPic = (e:any) => {
        if (e.target.files && e.target.files.length > 0) {
            setFile(e.target.files[0])
        } 
    }

    const [userpic,setUserpic] = useState(null)
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
      const handleClick = async (e: any) => {
        e.preventDefault();
        // 获取选择的图片的名称
        let imgUrl;
        if(file) imgUrl = await upload(file)
        let gender
        gender = selectedOption
        console.log('51515515',name=='');
        if(name==''){
            console.log(userInfomation.username);
            
            setName(userInfomation.username) 
            
        }
        
        

        // 发送帖子文案
        makeRequest.put("/users",{userpic:imgUrl,name,gender})
        .then(response => {
            if(response.status === 200) {
                console.log('245161',response); 
                setOpenUpdate(false)
            }
        })
        .catch(error => {
            console.log(error);
            
            console.log('更新失败！');
            
        })
      };

  return (
    <div className='update'>
        <h2>更新个人信息</h2>
        {/* <div>个人头像</div>
        <div>用户名</div>
        <div>性别</div> */}
        <form action="" onSubmit={handleSubmit}>
            <input 
                type="file" 
                className='file' 
                ref={fileRef} 
                name='fileSrc'
                onChange={handlePutPic}
            />
            <div onClick={handleFile} className='addPic'><span>+</span></div>
            {file && <img className='filepic' alt='' src={URL.createObjectURL(file)}  style={{width:'100px',height:'100px',position:'absolute',left:'250px',top:'50px'}}/>}
            <input 
                type="text" 
                className='name' 
                placeholder={userInfomation.username}
                name='name'
                value={name}
                onChange={(e:any)=>setName(e.target.value)}
            />
            <select name="gender" id="" className='gender' onChange={handleSelectChange}>
                <option selected disabled hidden value=''>保持神秘</option>
                <option value="man">男</option>
                <option value="woman">女</option>
            </select>
            <button type="submit" onClick={handleClick}>提交</button>
            
        </form>
        <button className='close' onClick={()=>setOpenUpdate(false)}>X</button>
    </div>
  );
};

export default Update;