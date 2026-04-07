import fs from "fs";

const FILE = "src/memory/memory.json";

export function savePlan(plan: string) {
  fs.writeFileSync(FILE, JSON.stringify({ plan }, null, 2));
}

export function loadPlan(): any {
  if (!fs.existsSync(FILE)) return {};
  return JSON.parse(fs.readFileSync(FILE, "utf-8"));
}