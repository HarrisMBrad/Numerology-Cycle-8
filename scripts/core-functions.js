// scripts/core-functions.js
// ⚙️ Core Utilities for Numerology Cycle Engine (TITAN Framework)

export const getNumerology = (dateStr) => {
  // Accepts date in YYYY-MM-DD, returns single-digit numerology (1–9)
  const digits = dateStr.replace(/-/g, '').split('').map(Number);
  let total = digits.reduce((a, b) => a + b, 0);
  while (total > 9) {
    total = total.toString().split('').reduce((a, b) => a + Number(b), 0);
  }
  return total;
};

export const logPhaseStatus = (numerology) => {
  const phases = {
    1: "Initiate leadership and presence.",
    2: "Balance partnerships and duality.",
    3: "Express creativity and communication.",
    4: "Build structure and foundation.",
    5: "Adapt, change, and explore.",
    6: "Harmonize responsibility and care.",
    7: "Reflect and seek inner wisdom.",
    8: "Execute power, ambition, manifestation.",
    9: "Integrate and complete the cycle."
  };
  return phases[numerology] || "Unknown phase.";
};

export const getCycleTag = (dateStr, numerology) => {
  const date = new Date(dateStr);
  const day = date.toLocaleDateString('en-US', { weekday: 'long' });
  return `EOD_${dateStr.replace(/-/g, '')}_${day.toUpperCase()}(${numerology})`;
};

export const syncToMAL = (cycleData) => {
  console.log(`🧠 MAL SYNC → Numerology ${cycleData.numerology}: ${cycleData.phase}`);
  // Simulate memory writing action
  return {
    synced: true,
    timestamp: new Date().toISOString(),
    agent: "Voro8",
    payload: cycleData
  };
};

export const summarizeCycle = ({ timeline }) => {
  return {
    yesterday: `🔍 Yesterday (${timeline.yesterday.numerology}): ${timeline.yesterday.status}`,
    today: `⚡ Today (${timeline.today.numerology}): ${timeline.today.status}`,
    tomorrow: `🌀 Tomorrow (${timeline.tomorrow.numerology}): ${timeline.tomorrow.status}`
  };
};

console.log("⚡ Numerology-Cycle-8 Runtime Initiated (Voro8 Active)");
