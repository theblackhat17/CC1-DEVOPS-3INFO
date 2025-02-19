import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>🚀 Déploiement Automatisé avec GitHub Actions & Netlify</h1>
        <p>Un projet DevOps qui assure un déploiement 100% automatisé !</p>
      </header>

      <section className="intro">
        <h2>Pourquoi ce projet est impressionnant ?</h2>
        <p>✔️ Tests automatisés avec GitHub Actions</p>
        <p>✔️ Déploiement en continu sur Netlify</p>
        <p>✔️ Code optimisé et documenté</p>
      </section>

      <section className="features">
        <div className="feature">
          <h3>📜 Code Qualité</h3>
          <p>Suivi avec GitHub Actions pour garantir la stabilité.</p>
        </div>
        <div className="feature">
          <h3>🚀 Déploiement Automatique</h3>
          <p>Chaque mise à jour est en ligne instantanément.</p>
        </div>
        <div className="feature">
          <h3>✅ Tests Validés</h3>
          <p>Exécution automatique des tests pour éviter les bugs.</p>
        </div>
      </section>

      <footer>
        <p>Développé avec ❤️ par <strong>theblackhat17</strong></p>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
