import express from "express";
import { verifyToken } from "../middleware/jwt.js";
import {
  createConversation,
  getConversationCount,
  getConversations,
  getSingleConversation,
  updateConversation,
} from "../controllers/conversation.controller.js";

const router = express.Router();

router.get("/", verifyToken, getConversations);
router.get("/single/:id", verifyToken, getSingleConversation);
router.get("/count", verifyToken, getConversationCount);
router.post("/", verifyToken, createConversation);
router.put("/:id", verifyToken, updateConversation);

export default router;
