import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <header>
        <h1>🚀 DevOps CI/CD Live</h1>
        <p>Déploiement automatisé avec GitHub Actions & Netlify</p>
      </header>

      {/* Section des Badges */}
      <section className="badges">
        <h2>📊 Statut des Builds</h2>
        <div className="badges-container">
          <div className="badge">
            <h3>Statut des Tests GitHub</h3>
            <img
              src="https://github.com/theblackhat17/CC1-DEVOPS-3INFO/actions/workflows/test.yml/badge.svg"
              alt="Statut des tests GitHub Actions"
            />
          </div>
          <div className="badge">
            <h3>Statut du Déploiement Netlify</h3>
            <img
              src="https://api.netlify.com/api/v1/badges/402823d7-d00b-4b48-909e-ed07606182eb/deploy-status"
              alt="Statut du déploiement Netlify"
            />
          </div>
        </div>
      </section>

      {/* Section des fonctionnalités */}
      <section className="features">
        <h2>🌟 Pourquoi ce projet est impressionnant ?</h2>
        <ul>
          <li>✅ Intégration Continue avec GitHub Actions</li>
          <li>✅ Déploiement Continu avec Netlify</li>
          <li>✅ Design épuré et performant</li>
        </ul>
      </section>

      {/* Footer */}
      <footer>
        <p>Développé avec ❤️ par <strong>theblackhat17</strong></p>
      </footer>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
