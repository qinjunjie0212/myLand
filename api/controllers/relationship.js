import {db} from '../connect.js'
import jwt from 'jsonwebtoken';

// 我的关注
export const getfollowed = (req,res) => {
    const q = "SELECT followedUserid from relationships WHERE followerUserid=?"
 
    db.query(q,[req.query.followedUserid],(err,data)=>{
        if(err) {
          console.log(err);
          return res.status(500).json(err)
        }
        return res.status(200).json(data.map(relationship=>relationship.followedUserid))
        
    })
}

// 关注我的
export const getfollower = (req,res) => {
  const q = "SELECT followerUserid from relationships WHERE followedUserid=?"
  db.query(q,[req.query.followerUserid],(err,data)=>{
      if(err) {
        console.log(err);
        return res.status(500).json(err)
      }
      return res.status(200).json(data.map(relationship=>relationship.followerUserid))
      
  })
}

export const addRelationship = (req, res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("还没有登录哦，请先登录！");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("登录已过期，请重新登录！");
  
      // 把数据库中所有的帖子都展示出来
      const q = "INSERT INTO relationships (`followerUserid`,`followedUserid`) VALUES (?, ?)";
  
      const values = [userInfo.id, Number(req.query.userId)];
      console.log(values);
  
      db.query(q, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
  
        return res.status(200).json("关注成功！");
      });
    });
  };

export const deleteRelationship= (req,res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("还没有登录哦，请先登录！");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
      if (err) return res.status(403).json("登录已过期，请重新登录！");
  
      // 把数据库中所有的帖子都展示出来
      const q = "DELETE FROM relationships WHERE `followerUserid` = ? AND `followedUserid` = ?"
  
      const values = [userInfo.id, Number(req.query.userId)];
  
      db.query(q, values, (err, data) => {
        if (err) {
          console.log(err);
          return res.status(500).json(err);
        }
  
        console.log("取消关注");
        return res.status(200).json("取消关注成功！");
      });
    });
}