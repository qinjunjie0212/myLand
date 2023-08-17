import express from "express";
import { getLikePosts } from '../controllers/likeposts.js'

const router = express.Router()

router.get("/",getLikePosts)

export default router