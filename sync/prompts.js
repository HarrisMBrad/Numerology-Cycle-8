// sync/prompts.js
// 🧠 Custom Prompt Generator Library for Cycle-8

export const promptStartCycle = (numerology, date, role = "agent") => {
  return `🟢 onStart START: Initiating Numerology-Cycle-${numerology} on ${date}. Role: ${role}`;
};

export const promptUpdateCycle = (numerology, tasks = []) => {
  const taskList = tasks.length ? tasks.map(t => `- ${t}`).join('\n') : "- No tasks defined.";
  return `🔄 onUpdate UPDATE: Numerology-Cycle-${numerology} in progress.\nTasks:\n${taskList}`;
};

export const promptEndCycle = (numerology, reflection = "Cycle complete.") => {
  return `🔴 onStop STOP: Cycle-${numerology} concluded. Reflection: ${reflection}`;
};

// DEMO: Simple usage
console.log(promptStartCycle(8, "2025-05-21", "Voro8"));
console.log(promptUpdateCycle(8, ["Submit Upwork proposal", "Email Intagio"]));
console.log(promptEndCycle(8, "EOD logged and synced."));
