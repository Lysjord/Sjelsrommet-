import { useState } from "react";
import "./style.css";

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

  function getColor(text) {
    const hue = (text.length * 47) % 360;
    return `hsl(${hue}, 80%, 65%)`;
  }

  function playSound() {
    const audio = document.getElementById("tone");
    audio.play();
  }

  function handleReveal() {
    setShowResult(true);
    setMessage(messages[Math.floor(Math.random() * messages.length)]);
    playSound();
  }

  const color = getColor(inputText);

  return (
    <div className="container" style={{ background: `radial-gradient(circle, ${color}, #ffffff)` }}>
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
          <div className="aura" style={{ backgroundColor: color }}></div>
          <p className="message">"{message}"</p>
        </div>
      )}
    </div>
  );
}
