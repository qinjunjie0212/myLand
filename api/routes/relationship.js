import express from "express";
import {getfollowed,getfollower,addRelationship,deleteRelationship} from '../controllers/relationship.js'

const router = express.Router()

router.get("/followed/",getfollowed)
router.get("/follower/",getfollower)
router.post("/",addRelationship)
router.delete("/",deleteRelationship)

export default router