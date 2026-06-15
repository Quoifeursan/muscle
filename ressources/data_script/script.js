const ranks = [
  { score: 3400, name: "Surhumain" },
  { score: 3300, name: "GigaChad 3" },
  { score: 3200, name: "GigaChad 2" },
  { score: 3100, name: "GigaChad 1" },
  { score: 3000, name: "Chad 3" },
  { score: 2900, name: "Chad 2" },
  { score: 2800, name: "Chad 1" },
  { score: 2700, name: "Diamant 3" },
  { score: 2600, name: "Diamant 2" },
  { score: 2500, name: "Diamant 1" },
  { score: 2400, name: "Emeraude 3" },
  { score: 2300, name: "Emeraude 2" },
  { score: 2200, name: "Emeraude 1" },
  { score: 2100, name: "Platine 3" },
  { score: 2000, name: "Platine 2" },
  { score: 1900, name: "Platine 1" },
  { score: 1800, name: "Or 3" },
  { score: 1700, name: "Or 2" },
  { score: 1600, name: "Or 1" },
  { score: 1500, name: "Argent 3" },
  { score: 1400, name: "Argent 2" },
  { score: 1300, name: "Argent 1" },
  { score: 1200, name: "Bronze 3" },
  { score: 1100, name: "Bronze 2" },
  { score: 1000, name: "Bronze 1" },
  { score: 900, name: "Fer 3" },
  { score: 800, name: "Fer 2" },
  { score: 700, name: "Fer 1" },
  { score: 600, name: "aubergine" },
  { score: 500, name: "radis" },
  { score: 400, name: "Broccoli" },
  { score: 300, name: "mais" },
  { score: 200, name: "oignon" },
  { score: 100, name: "patate" }
];

const tables = {


  pushups: [
    [67, 3400], [65, 3300], [63, 3200], [61, 3100], [59, 3000],
    [57, 2900], [55, 2800], [53, 2700], [51, 2600], [49, 2500],
    [47, 2400], [45, 2300], [43, 2200], [41, 2100], [39, 2000],
    [37, 1900], [35, 1800], [33, 1700], [31, 1600], [29, 1500],
    [27, 1400], [25, 1300], [23, 1200], [21, 1100], [19, 1000],
    [17, 900], [15, 800], [13, 700], [11, 600], [9, 500],
    [7, 400], [5, 300], [3, 200], [1, 100]
  ],

  abs: [
    [135, 3400], [131, 3300], [127, 3200], [123, 3100], [119, 3000],
    [115, 2900], [111, 2800], [107, 2700], [103, 2600], [99, 2500],
    [95, 2400], [91, 2300], [87, 2200], [83, 2100], [79, 2000],
    [75, 1900], [71, 1800], [67, 1700], [63, 1600], [59, 1500],
    [55, 1400], [51, 1300], [47, 1200], [43, 1100], [39, 1000],
    [35, 900], [31, 800], [27, 700], [23, 600], [19, 500],
    [15, 400], [11, 300], [7, 200], [3, 100]
  ],

  pullups: [
    [34, 3400], [33, 3300], [32, 3200], [31, 3100], [30, 3000],
    [29, 2900], [28, 2800], [27, 2700], [26, 2600], [25, 2500],
    [24, 2400], [23, 2300], [22, 2200], [21, 2100], [20, 2000],
    [19, 1900], [18, 1800], [17, 1700], [16, 1600], [15, 1500],
    [14, 1400], [13, 1300], [12, 1200], [11, 1100], [10, 1000],
    [9, 900], [8, 800], [7, 700], [6, 600], [5, 500],
    [4, 400], [3, 300], [2, 200], [1, 100]
  ],

  bench: [
    [142, 3400], [138, 3300], [134, 3200], [130, 3100], [126, 3000],
    [122, 2900], [118, 2800], [114, 2700], [110, 2600], [106, 2500],
    [102, 2400], [98, 2300], [94, 2200], [90, 2100], [86, 2000],
    [82, 1900], [78, 1800], [74, 1700], [70, 1600], [66, 1500],
    [62, 1400], [58, 1300], [54, 1200], [50, 1100], [46, 1000],
    [42, 900], [38, 800], [34, 700], [30, 600], [26, 500],
    [22, 400], [18, 300], [14, 200], [10, 100]
  ],

  squats: [
    [170, 3400], [165, 3300], [160, 3200], [155, 3100], [150, 3000],
    [145, 2900], [140, 2800], [135, 2700], [130, 2600], [125, 2500],
    [120, 2400], [115, 2300], [110, 2200], [105, 2100], [100, 2000],
    [95, 1900], [90, 1800], [85, 1700], [80, 1600], [75, 1500],
    [70, 1400], [65, 1300], [60, 1200], [55, 1100], [50, 1000],
    [45, 900], [40, 800], [35, 700], [30, 600], [25, 500],
    [20, 400], [15, 300], [10, 200], [5, 100]
  ],

  run400: [
    [45, 3400], [50, 3300], [55, 3200], [60, 3100], [63, 3000],
    [66, 2900], [69, 2800], [72, 2700], [75, 2600], [78, 2500],
    [81, 2400], [84, 2300], [87, 2200], [90, 2100], [93, 2000],
    [96, 1900], [99, 1800], [102, 1700], [105, 1600], [108, 1500],
    [111, 1400], [114, 1300], [117, 1200], [120, 1100], [123, 1000],
    [126, 900], [129, 800], [132, 700], [135, 600], [138, 500],
    [141, 400], [144, 300], [147, 200], [150, 100]
  ],

  run1k: [
    [140, 3400], [150, 3300], [160, 3200], [170, 3100], [180, 3000],
    [190, 2900], [200, 2800], [210, 2700], [220, 2600], [230, 2500],
    [240, 2400], [250, 2300], [260, 2200], [270, 2100], [280, 2000],
    [290, 1900], [300, 1800], [310, 1700], [320, 1600], [330, 1500],
    [340, 1400], [350, 1300], [360, 1200], [370, 1100], [380, 1000],
    [390, 900], [400, 800], [410, 700], [420, 600], [430, 500],
    [440, 400], [450, 300], [460, 200], [470, 100]
  ]
};

function scoreHigherIsBetter(value, table) {
  if (!value || value <= 0) return null;

  for (const [threshold, score] of table) {
    if (value >= threshold) return score;
  }

  return 0;
}

function scoreLowerIsBetter(value, table) {
  if (!value || value <= 0) return null;

  for (const [threshold, score] of table) {
    if (value <= threshold) return score;
  }

  return 0;
}

function average(scores) {
  const validScores = scores.filter(score => score !== null);

  if (validScores.length === 0) return null;

  return Math.round(validScores.reduce((a, b) => a + b, 0) / validScores.length);
}

function parseTimeToSeconds(value) {
  if (!value) return null;

  const parts = value.split(":").map(Number);

  if (parts.length === 2) return parts[0] * 60 + parts[1];
  if (parts.length === 1) return Number(value);

  return null;
}

function getRankName(score) {
  if (score === null) return null;

  const rank = ranks.find(rank => score >= rank.score);

  return rank ? rank.name : "Unranked";
}

function getRankImageName(score) {
  const rankName = getRankName(score);

  if (!rankName) return "";

  return rankName
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replaceAll(" ", "")
    .replaceAll("-", "");
}

function rankHTML(title, score, global = false) {
  const rankName = getRankName(score);
  const imageName = getRankImageName(score);

  if (!rankName) return "";

  return `
    <div class="rank-box">
      <h3>${title}</h3>
      <img
        src="../ui_assets/ranks/${imageName}.png"
        class="${global ? "global-rank" : "rank-img"}"
        alt="${rankName}"
      >
      <p>${rankName}</p>
    </div>
  `;
}

function downloadUserFile(username, globalScore, forceScore, cardioScore) {
  const safeUsername = username
    .trim()
    .replaceAll(" ", "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");

  const line = `{ username: "${username}", globalScore: ${globalScore}, forceScore: ${forceScore}, cardioScore: ${cardioScore} },`;

  const blob = new Blob([line], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeUsername || "user"}.tju`;

  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);

  URL.revokeObjectURL(url);
}

document.getElementById("rankForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();

  if (!username) {
    showError("Renseigne ton pseudo.");
    return;
  }

  const pushups = Number(document.getElementById("pushups").value);
  const abs = Number(document.getElementById("abs").value);
  const pullups = Number(document.getElementById("pullups").value);
  const squats = Number(document.getElementById("squats").value);

  const skipBench = document.getElementById("skipBench").checked;
  const bodyWeight = Number(document.getElementById("bodyWeight").value);
  const benchWeight = Number(document.getElementById("benchWeight").value);

  const time400 = parseTimeToSeconds(document.getElementById("time400").value);
  const time1k = parseTimeToSeconds(document.getElementById("time1k").value);


  const pushupsScore = scoreHigherIsBetter(pushups, tables.pushups);
  const absScore = scoreHigherIsBetter(abs, tables.abs);
  const pullupsScore = scoreHigherIsBetter(pullups, tables.pullups);
  const squatsScore = scoreHigherIsBetter(squats, tables.squats);

  let benchScore = null;

  if (!skipBench) {
    if (!bodyWeight || !benchWeight) {
      showError("Pour le développé couché, renseigne ton poids corporel et le poids soulevé, ou coche la case pour l'ignorer.");
      return;
    }

    const benchPercent = (benchWeight / bodyWeight) * 100;
    benchScore = scoreHigherIsBetter(benchPercent, tables.bench);
  }

  const forceScore = average([
    pushupsScore,
    absScore,
    pullupsScore,
    squatsScore,
    benchScore
  ]);

  const cardio400Score = scoreLowerIsBetter(time400, tables.run400);
  const cardio1kScore = scoreLowerIsBetter(time1k, tables.run1k);

  const cardioScore = average([
    cardio400Score,
    cardio1kScore
  ]);



const globalScore = average([
  forceScore,
  cardioScore
]);

  let html = `<div class="result-card">`;

  if (globalScore !== null) {
    html += `
      <h2>Rank Global</h2>
      <img
        src="../ui_assets/ranks/${getRankImageName(globalScore)}.png"
        class="global-rank"
        alt="${getRankName(globalScore)}"
      >
      <h3>${getRankName(globalScore)}</h3>
    `;
  } else {
    html += `
      <h2>Rank global non calculé</h2>
      <p>Pour calculer le rang global il faut avoir Force et Cardio.</p>
    `;
  }

  html += `
    <div class="rank-grid">
      ${rankHTML("Force", forceScore)}
      ${rankHTML("Cardio", cardioScore)}
    </div>

    <button type="button" id="downloadRankFile">
      Télécharger le fichier .tju
    </button>
  `;

  html += `</div>`;

  document.getElementById("results").innerHTML = html;

  document.getElementById("downloadRankFile").addEventListener("click", function() {
    downloadUserFile(
      username,
      globalScore,
      forceScore,
      cardioScore,
    );
  });
});

function showError(message) {
  document.getElementById("results").innerHTML = `
    <div class="error">
      ${message}
    </div>
  `;
}