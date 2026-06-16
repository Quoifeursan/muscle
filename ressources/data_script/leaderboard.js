const leaderboard = document.getElementById("leaderboard");
const sortMode = document.getElementById("sortMode");

function getModeLabel(mode) {
  if (mode === "cardioScore") return "Cardio";
  if (mode === "forceScore") return "Force";
  return "Global";
}

function renderLeaderboard(mode = "cardioScore") {
  const sortedUsers = [...users].sort((a, b) => b[mode] - a[mode]);

  leaderboard.innerHTML = sortedUsers.map((user, index) => {
    const score = user[mode];
    const rankName = getRankName(score);
    const imageName = getRankImageName(score);
    const modeLabel = getModeLabel(mode);

    return `
      <a class="leaderboard-row" href="ressources/apps/profile.html?user=${encodeURIComponent(user.username)}">
        <span class="leaderboard-position">#${index + 1}</span>
        <span class="leaderboard-user">${user.username}</span>

        <img
          src="ressources/ui_assets/ranks/${imageName}.png"
          class="leaderboard-rank"
          alt="${rankName}"
        >

        <span class="leaderboard-rank-name">${modeLabel} : ${rankName}</span>
      </a>
    `;
  }).join("");
}

sortMode.addEventListener("change", function() {
  renderLeaderboard(sortMode.value);
});

renderLeaderboard("globalScore");










const rankDocumentation = document.getElementById("rankDocumentation");

if (rankDocumentation) {
  rankDocumentation.innerHTML = ranks.map(rank => {
    const imageName = rank.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replaceAll(" ", "")
      .replaceAll("-", "");

    return `
      <div class="rank-doc-row">
        <img
          src="ressources/ui_assets/ranks/${imageName}.png"
          alt="${rank.name}"
        >
        <span>${rank.name}</span>
      </div>
    `;
  }).join("");
}