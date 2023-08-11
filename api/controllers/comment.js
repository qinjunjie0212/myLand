import {db} from '../connect.js'
import jwt from 'jsonwebtoken';
import moment from 'moment';

export const getComments = (req, res) => {
    // 把数据库中所有的帖子都展示出来
    const q = `SELECT c.*, u.id AS userid, username, userpic FROM comments AS c JOIN users AS u ON (u.id = c.userid) 
          WHERE c.postId = ? ORDER BY c.createdAt DESC`;
  
    db.query(q, [req.query.postId], (err, data) => {
      if (err) return res.status(500).json(err);
        // console.log(1111);
        // console.log('评论', data);
  
      // 在这里将评论数组传递给前端
      return res.status(200).json(data); // 将data作为响应返回给前端
    });
  };

export const addComment = (req,res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if(!token) return res.status(401).json("还没有登录哦，请先登录！")
    
    jwt.verify(token,"secretkey",(err,userInfo)=>{
        if(err) return res.status(403).json("登录已过期，请重新登录！")

        // 把数据库中所有的帖子都展示出来
        const q = "INSERT INTO comments (`desc`,`createdAt`,`userid`,`postid`) VALUES (?)"

        const values = [
            req.body.desc,
            moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
            userInfo.id,
            req.body.postId
        ]
        
        db.query(q,[values],(err,data)=>{
            
            if(err) return res.status(500).json(err)
            // console.log(userInfo.id,data);
            return res.status(200).json("发布评论成功")
            
        })
    })
}