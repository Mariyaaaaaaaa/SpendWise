import express from "express";
import { supabase } from "../db.js";
import { auth } from "../middleware/auth.js";

const router = express.Router();

// Add expense
router.post("/", auth, async (req, res) => {
  const { category, amount, date } = req.body;
  const { data, error } = await supabase
    .from("expenses")
    .insert([{ user_id: req.user.id, category, amount, date }]);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

// Get expenses
router.get("/", auth, async (req, res) => {
  const { data, error } = await supabase
    .from("expenses")
    .select("*")
    .eq("user_id", req.user.id);

  if (error) return res.status(400).json({ error: error.message });
  res.json(data);
});

export default router;
