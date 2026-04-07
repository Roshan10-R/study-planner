import { Router } from "express";
import { createStudyPlan } from "../tools/planner.js";
import { savePlan, loadPlan } from "../tools/memory.js";
import { generateResponse } from "../services/aiservice.js";

const router = Router();

// Generate plan
router.post("/plan", async (req, res) => {
  const { syllabus, days } = req.body;

  const plan = await createStudyPlan(syllabus, days);
  savePlan(plan);

  res.json({ plan });
});


router.post("/update", async (req, res) => {
  const { update } = req.body;

  const data = loadPlan();

  const prompt = `
  Current study plan:
  ${data.plan}

  Update:
  ${update}

  Adjust the remaining plan accordingly.
  `;

  const updatedPlan = await generateResponse(prompt);
  savePlan(updatedPlan);

  res.json({ updatedPlan });
});

export default router;