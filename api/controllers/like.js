import {db} from '../connect.js'
import jwt from 'jsonwebtoken';

export const getLikes = (req,res) => {
    const q = "SELECT userid from likes WHERE postid=?"
 
    db.query(q,[req.query.postId],(err,data)=>{
        if(err) return res.status(500).json(err)
        return res.status(200).json(data.map(like=>like.userid))
        
    })
}

export const addLike = (req, res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("还没有登录哦，请先登录！");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("登录已过期，请重新登录！");
  
      // 把数据库中所有的帖子都展示出来
      const q = "INSERT INTO likes (userid, postid) VALUES (?, ?)";
  
      const values = [userInfo.id, Number(req.query.postId)];
      console.log(req.query.postId);
  
      db.query(q, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
  
        console.log("点赞");
        return res.status(200).json("点赞成功！");
      });
    });
  };

export const deleteLike = (req,res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("还没有登录哦，请先登录！");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("登录已过期，请重新登录！");
  
      // 把数据库中所有的帖子都展示出来
      const q = "DELETE FROM likes WHERE `userid` = ? AND `postid` = ?"
  
      const values = [userInfo.id, Number(req.query.postId)];
      console.log(req.query.postId);
  
      db.query(q, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
  
        console.log("取消点赞");
        return res.status(200).json("取消点赞成功！");
      });
    });
}