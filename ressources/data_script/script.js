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
  { score: 900, name: "Competitor 3" },
  { score: 800, name: "Competitor 2" },
  { score: 700, name: "Competitor 1" },
  { score: 600, name: "Contender 3" },
  { score: 500, name: "Contender 2" },
  { score: 400, name: "Contender 1" },
  { score: 300, name: "Prospect 3" },
  { score: 200, name: "Prospect 2" },
  { score: 100, name: "Prospect 1" },
  { score: 0, name: "Unranked" }
];

const tables = {
  pushups: [
    [133, 3400], [129, 3300], [125, 3200], [121, 3100], [117, 3000],
    [113, 2900], [109, 2800], [105, 2700], [101, 2600], [97, 2500],
    [93, 2400], [89, 2300], [85, 2200], [81, 2100], [77, 2000],
    [73, 1900], [69, 1800], [65, 1700], [61, 1600], [57, 1500],
    [53, 1400], [49, 1300], [45, 1200], [41, 1100], [37, 1000],
    [33, 900], [29, 800], [25, 700], [21, 600], [17, 500],
    [13, 400], [9, 300], [5, 200], [1, 100]
  ],

  abs: [
    [199, 3400], [193, 3300], [187, 3200], [181, 3100], [175, 3000],
    [169, 2900], [163, 2800], [157, 2700], [151, 2600], [145, 2500],
    [139, 2400], [133, 2300], [127, 2200], [121, 2100], [115, 2000],
    [109, 1900], [103, 1800], [97, 1700], [91, 1600], [85, 1500],
    [79, 1400], [73, 1300], [67, 1200], [61, 1100], [55, 1000],
    [49, 900], [43, 800], [37, 700], [31, 600], [25, 500],
    [19, 400], [13, 300], [7, 200], [1, 100]
  ],

  pullups: [
    [67, 3400], [65, 3300], [63, 3200], [61, 3100], [59, 3000],
    [57, 2900], [55, 2800], [53, 2700], [51, 2600], [49, 2500],
    [47, 2400], [45, 2300], [43, 2200], [41, 2100], [39, 2000],
    [37, 1900], [35, 1800], [33, 1700], [31, 1600], [29, 1500],
    [27, 1400], [25, 1300], [23, 1200], [21, 1100], [19, 1000],
    [17, 900], [15, 800], [13, 700], [11, 600], [9, 500],
    [7, 400], [5, 300], [3, 200], [1, 100]
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
  [809, 3400], [785, 3300], [761, 3200], [737, 3100], [713, 3000],
  [689, 2900], [665, 2800], [641, 2700], [617, 2600], [593, 2500],
  [569, 2400], [545, 2300], [521, 2200], [497, 2100], [473, 2000],
  [449, 1900], [425, 1800], [401, 1700], [377, 1600], [353, 1500],
  [329, 1400], [305, 1300], [281, 1200], [257, 1100], [233, 1000],
  [209, 900], [185, 800], [161, 700], [137, 600], [113, 500],
  [89, 400], [65, 300], [41, 200], [17, 100]
],

  run400: [
    [43, 3400], [45, 3300], [47, 3200], [49, 3100], [51, 3000],
    [53, 2900], [55, 2800], [57, 2700], [59, 2600], [61, 2500],
    [63, 2400], [65, 2300], [67, 2200], [69, 2100], [71, 2000],
    [73, 1900], [75, 1800], [77, 1700], [79, 1600], [81, 1500],
    [83, 1400], [85, 1300], [87, 1200], [89, 1100], [91, 1000],
    [93, 900], [95, 800], [97, 700], [105, 600], [113, 500],
    [121, 400], [129, 300], [137, 200], [145, 100]
  ],

  run1k: [
    [140, 3400], [146, 3300], [152, 3200], [158, 3100], [164, 3000],
    [170, 2900], [176, 2800], [182, 2700], [188, 2600], [194, 2500],
    [200, 2400], [206, 2300], [212, 2200], [218, 2100], [224, 2000],
    [230, 1900], [236, 1800], [242, 1700], [248, 1600], [254, 1500],
    [260, 1400], [266, 1300], [272, 1200], [278, 1100], [284, 1000],
    [290, 900], [296, 800], [302, 700], [308, 600], [314, 500],
    [320, 400], [326, 300], [332, 200], [338, 100]
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

function downloadUserFile(username, globalScore, forceScore, cardioScore, session) {
  const safeUsername = username
    .trim()
    .replaceAll(" ", "_")
    .replace(/[^a-zA-Z0-9_-]/g, "");

  const dateParts = session.date.split("/");
  const day = dateParts[0];
  const month = dateParts[1];

  const line =
`{ username: "${username}", globalScore: ${globalScore}, forceScore: ${forceScore}, cardioScore: ${cardioScore},

history: [

  ${JSON.stringify(session)},

] },`;

  const blob = new Blob([line], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = `${safeUsername || "user"}_${day}_${month}.tju`;

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














const session = {
  date: new Date().toLocaleDateString("fr-FR"),
  pushups: pushups,
  abs: abs,
  pullups: pullups,
  squats: squats,
  bodyWeight: skipBench ? null : bodyWeight,
  benchWeight: skipBench ? null : benchWeight,
  benchPercent: skipBench ? null : Math.round((benchWeight / bodyWeight) * 100),
  time400: document.getElementById("time400").value,
  time1k: document.getElementById("time1k").value,
  forceScore: forceScore,
  cardioScore: cardioScore,
  globalScore: globalScore
};
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
      Télécharger le fichier (à envoyer a Arthur pour l'upload)
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
  session
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