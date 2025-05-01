import { useState } from "react";
import "./style.css";

export default function Sjelspeil() {
  const [inputText, setInputText] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [message] = useState("∴ Arelum-tai ∴");
  const [translation] = useState("You are the breath that restores. The light that returns.");

  function getColor(text) {
    const hue = (text.length * 47) % 360;
    return `hsl(${hue}, 80%, 65%)`;
  }

  function playSound() {
    const audio = document.getElementById("tone");
    if (audio) audio.play();
  }

  function handleReveal() {
    setShowResult(true);
    playSound();
  }

  const color = getColor(inputText);

  return (
    <div className="container" style={{ background: `radial-gradient(circle, ${color}, #ffffff)` }}>
      <h1>SJELSPEIL</h1>
      <p>Skriv fra hjertet – og se hvordan sjelen taler tilbake i lys og lyd.</p>
      <input
        className="input"
        placeholder="Skriv et ord, følelse eller intensjon..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className="button" onClick={handleReveal}>Se mitt sjelspeil</button>

      {showResult && (
        <div className="result-card">
          <div className="aura" style={{ backgroundColor: color }}></div>
          <p className="message">{message}</p>
          <p className="translation">{translation}</p>
        </div>
      )}
    </div>
  );
}
