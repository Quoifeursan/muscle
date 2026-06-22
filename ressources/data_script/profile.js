const params = new URLSearchParams(window.location.search);
const username = params.get("user");

const profile = document.getElementById("profile");
const user = users.find(u => u.username === username);

function historyHTML(user) {
  if (!user.history || user.history.length === 0) {
    return `
      <h2>Historique des séances</h2>
      <p>Aucune séance enregistrée.</p>
    `;
  }

  return `
    <h2>Historique des séances</h2>

    <div class="history-list">
      ${user.history.map(session => `
        <div class="session-card">
          <div class="session-left">
            <strong>${session.date}</strong>
            <span>Rank global</span>
            <img src="../ui_assets/ranks/${getRankImageName(session.globalScore)}.png" class="history-rank-img">
            <p>${getRankName(session.globalScore)}</p>
          </div>

          <div class="session-right">
            <div class="session-section">
              <h3>Cardio</h3>
              <div class="session-stats cardio-stats">
                <span>400m<br><b>${session.time400 || "-"}</b></span>
                <span>1km<br><b>${session.time1k || "-"}</b></span>
                <span>
  Rank cardio<br>
  <img
    src="../ui_assets/ranks/${getRankImageName(session.cardioScore)}.png"
    class="mini-rank-img"
    alt="${getRankName(session.cardioScore)}"
  >
</span>
              </div>
            </div>

            <div class="session-section">
              <h3>Force</h3>
              <div class="session-stats force-stats">
                <span>Pompes<br><b>${session.pushups}</b></span>
                <span>Abdos<br><b>${session.abs}</b></span>
                <span>Squats<br><b>${session.squats}</b></span>
                <span>Tractions<br><b>${session.pullups}</b></span>
                <span>Dev-C<br><b>${session.benchWeight !== null ? session.benchWeight + "kg" : "-"}</b></span>
                <span>
  Rank force<br>
  <img
    src="../ui_assets/ranks/${getRankImageName(session.forceScore)}.png"
    class="mini-rank-img"
    alt="${getRankName(session.forceScore)}"
  >
</span>
              </div>
            </div>
          </div>
        </div>
      `).join("")}
    </div>
  `;
}

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

      ${historyHTML(user)}

      <a class="back-link" href="../../index.html">Retour au classement</a>
    </div>
  `;
}