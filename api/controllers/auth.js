import {db} from '../connect.js'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'

// 注册
export const register = (req,res)=>{
    // 检查是否有该用户
    const q = "SELECT * FROM users WHERE username = ?"

    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length) return res.status(409).json('用户已注册')
        
        // 创建新用户
        // 密码哈希
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(req.body.password,salt)

        const q = "INSERT INTO users (`username`,`email`,`password`) VALUE (?)"

        const values = [req.body.username,req.body.email,hashedPassword]

        db.query(q,[values],(err,data)=>{
            if(err) return res.status(500).json(err)
            // 没有错误
            return res.status(200).json("注册成功！")
        })
    })

    


}

// 登录
export const login = (req,res)=>{
    const q = "SELECT * FROM users WHERE username = ?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err) return res.status(500).json(err)
        if(data.length === 0) return res.status(404).json("你还没有注册...")

        // 对比密码
        const checkPassword = bcrypt.compareSync(req.body.password,data[0].password)
        if(!checkPassword) return res.status(400).json("用户名或密码有误！")

        const token = jwt.sign({id:data[0].id},"secretkey")

        const {password,...others} = data[0]

        res.cookie("accessToken",token,{
            httpOnly:true,
        }).status(200).json(others)
    }) 
}

// 退出登录
export const logout = (req,res)=>{
    res.clearCookie("accessToken",{
        secure:true,
        sameSite:"none"
    }).status(200).json("User has been logged out.")
}