import { useState } from "react";
import "./style.css";


function getColorFromEnergy(text) {
  const lower = text.toLowerCase();
  if (lower.includes("kraft") || lower.includes("trygg") || lower.includes("jord")) return "rot";
  if (lower.includes("glede") || lower.includes("flyt") || lower.includes("følelse")) return "sakral";
  if (lower.includes("vilje") || lower.includes("mot") || lower.includes("handling")) return "solar";
  if (lower.includes("kjærlighet") || lower.includes("fred") || lower.includes("balanse")) return "hjerte";
  if (lower.includes("uttrykk") || lower.includes("sannhet") || lower.includes("tale")) return "hals";
  if (lower.includes("visjon") || lower.includes("se") || lower.includes("intuisjon")) return "panne";
  if (lower.includes("lys") || lower.includes("ånd") || lower.includes("enhet")) return "krone";
  return "hjerte";
}

const chakraColors = {
  rot: "hsl(0, 70%, 50%)",
  sakral: "hsl(30, 80%, 55%)",
  solar: "hsl(50, 90%, 60%)",
  hjerte: "hsl(120, 40%, 55%)",
  hals: "hsl(200, 50%, 60%)",
  panne: "hsl(250, 60%, 65%)",
  krone: "hsl(280, 60%, 80%)"
};


const messages = [
  "∴ Naya'tel uroma kea-shen ∴",
  "∴ Ish-tal en'Shara moran ∴",
  "∴ Elyu'mar setha ∴",
  "∴ Ka'lon triya ∴",
  "∴ Velen-tu, oren-ia ∴"
];

export default function Sjelspeil() {
  const [inputText, setInputText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [message, setMessage] = useState("");

  function handleReveal() {
    setShowResult(true);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
  }

  const energy = getColorFromEnergy(inputText);
  const color = chakraColors[energy];

  return (
    <div className="container" style={ background: `radial-gradient(circle, ${color}, #ffffff)` }>
      <h1>SJELSPEIL</h1>
      <p>Skriv et ord, en følelse, eller et kall – og se hvordan sjelen din taler tilbake.</p>
      <input
        className="input"
        placeholder="Skriv fra hjertet..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="button" onClick={handleReveal}>Se mitt sjelspeil</button>

      {showResult && (
        <div className="result-card">
          <div className="aura" style={ backgroundColor: color }></div>
          <p className="message">"{message}"</p>
        </div>
      )}
    </div>
  );
}
