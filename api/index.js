import express from "express";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'
import likeRoutes from './routes/likes.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app = express()

// 中间件
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)
app.use('/api/comments',commentRoutes)
app.use('/api/likes',likeRoutes)
app.use('/api/auth',authRoutes)

app.listen(8800,()=>{
    console.log("API working at 8800");
})