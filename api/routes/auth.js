import express from "express";
import {login,register,logout} from '../controllers/auth.js'

const router = express.Router()

// 登录
router.post("/login",login)

// 注册
router.post("/register",register)

// 退出登录
router.post("/logout",logout)

export default router