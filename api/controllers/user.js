import {db} from '../connect.js'
import jwt from 'jsonwebtoken';

export const getUser = (req,res) => {
    //TODO
    const userId = req.params.userId;
    const q = "SELECT * FROM users WHERE id = ?"

    db.query(q,[userId],(err,data)=>{
        if(err) return res.status(500).json(err)
        const {password,...info} = data[0]
        return res.json(info) 
    })
}

export const updateUser = (req,res) => {
    // 查看用户token，如果没有，不能访问该页
    const token = req.cookies.accessToken;
    if (!token) return res.status(401).json("还没有登录哦，请先登录！");
  
    jwt.verify(token, "secretkey", (err, userInfo) => {
        if (err) return res.status(403).json("登录已过期，请重新登录！");

        const q = "UPDATE users SET `username`=?,`userpic`=?,`gender`=? WHERE id=?"

        db.query(q,[req.body.name,req.body.userpic,req.body.gender,userInfo.id],(err,data)=>{
            console.log(req.body);
            if(err) {
                console.log(err);
                return res.status(500).json(err)
            }
            
            return res.status(200).json('Updated!') 
        })
    })
}