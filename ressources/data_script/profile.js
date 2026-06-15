const params = new URLSearchParams(window.location.search);
const username = params.get("user");

const profile = document.getElementById("profile");
const user = users.find(u => u.username === username);

if (!user) {
  profile.innerHTML = `
    <div class="result-card">
      <h2>Utilisateur introuvable</h2>
      <a href="../../index.html">Retour au classement</a>
    </div>
  `;
} else {
  profile.innerHTML = `
    <div class="result-card">
      <h1>${user.username}</h1>

      <h2>Rank Global</h2>
      <img src="../ui_assets/ranks/${getRankImageName(user.globalScore)}.png" class="global-rank" alt="${getRankName(user.globalScore)}">
      <h3>${getRankName(user.globalScore)}</h3>

      <div class="rank-grid">
        ${rankHTML("Force", user.forceScore)}
        ${rankHTML("Cardio", user.cardioScore)}
       
      </div>

      <a class="back-link" href="../../index.html">Retour au classement</a>
    </div>
  `;
}
