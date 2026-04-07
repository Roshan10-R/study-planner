import { generateResponse } from "../services/aiservice.js";

export async function createStudyPlan(syllabus: string, days: number) {
  const prompt = `
  Create a structured day-wise study plan.

  Syllabus:
  ${syllabus}

  Duration: ${days} days

  Make it clear and actionable.
  `;

  return await generateResponse(prompt);
}