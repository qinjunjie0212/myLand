import express from "express";
import authRoutes from './routes/auth.js'
import userRoutes from './routes/users.js'
import postRoutes from './routes/posts.js'
import commentRoutes from './routes/comments.js'
import likeRoutes from './routes/likes.js'
import friendPostRoutes from './routes/friend.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import multer from 'multer'

const app = express()

// 中间件
app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Credentials",true)
    next()
})
app.use(express.json())
app.use(
    cors({
        origin:"http://localhost:3000"
    })
)
app.use(cookieParser())

const storage = multer.diskStorage({
    destination: function (req,file, cb) {
        cb(null, '../client/public/upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({storage: storage})
app.post("/api/upload",upload.single('file'), (req,res)=>{
    const file = req.file
    res.status(200).json(file.filename)
})

app.use('/api/users',userRoutes)
app.use('/api/posts',postRoutes)
app.use('/api/comments',commentRoutes)
app.use('/api/likes',likeRoutes)
app.use('/api/auth',authRoutes)
app.use('/api/friendposts',friendPostRoutes)

app.listen(8800,()=>{
    console.log("API working at 8800");
})