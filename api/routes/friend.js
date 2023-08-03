import express from "express";
import { getFriendPosts } from '../controllers/friend.js'

const router = express.Router()

router.get("/",getFriendPosts)

export default router