import express from "express";
import {detail} from '../controllers/detail.js'

const router = express.Router()

router.get("/",detail)

export default router