import moment from 'moment/moment.js'
import {db} from '../connect.js'
import jwt from 'jsonwebtoken'

export const getPosts = (req,res) => {

    // 把数据库中所有的帖子都展示出来
    const q = 'SELECT p.*, u.id AS userid, username, userpic FROM posts AS p JOIN users AS u ON (u.id = p.userid)'
    
    db.query(q,(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data)
    })
}

export const addPost = (req,res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("还没有登录哦，请先登录！")
    
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("登录已过期，请重新登录！")

        // 把数据库中所有的帖子都展示出来
        const q = "INSERT INTO posts (`desc`,`img`,`userid`,`createdAt`) VALUES (?)"

        const values = [
            req.body.desc,
            req.body.img,
            userInfo.id,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            
        ]
        
        db.query(q,[values],(err,data)=>{
            
            if(err) return res.status(500).json(err)
            // console.log(userInfo.id,data);
            return res.status(200).json("发送帖子成功")
            
        })
    })
}