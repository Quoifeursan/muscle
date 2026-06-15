const leaderboard = document.getElementById("leaderboard");

const sortedUsers = [...users].sort((a, b) => b.globalScore - a.globalScore);

leaderboard.innerHTML = sortedUsers.map((user, index) => {
  const rankName = getRankName(user.globalScore);
  const imageName = getRankImageName(user.globalScore);

  return `
    <a class="leaderboard-row" href="ressources/apps/profile.html?user=${encodeURIComponent(user.username)}">
      <span class="leaderboard-position">#${index + 1}</span>
      <span class="leaderboard-user">${user.username}</span>
      <img src="ressources/ui_assets/ranks/${imageName}.png" class="leaderboard-rank" alt="${rankName}">
      <span class="leaderboard-rank-name">${rankName}</span>
    </a>
  `;
}).join("");
