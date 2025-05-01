import { useState } from "react";
import "./style.css";

const chakraColors = {
  healing: "hsl(120, 60%, 70%)",
  awakening: "hsl(280, 70%, 75%)",
  confidence: "hsl(45, 100%, 65%)",
  purpose: "hsl(200, 85%, 70%)"
};

const messages = {
  healing: {
    star: "∴ Elenya shan'tu viorel ∴",
    trans: "You are the breath that restores all forgotten parts."
  },
  awakening: {
    star: "∴ Eshara'tin velya-no ∴",
    trans: "You are awakening from the ancient light within."
  },
  confidence: {
    star: "∴ Karan'del osa ∴",
    trans: "You are strength remembering itself."
  },
  purpose: {
    star: "∴ Tha'mor en vela kai ∴",
    trans: "You are walking exactly where your soul asked to go."
  }
};

function interpretInput(txt) {
  const lower = txt.toLowerCase();
  if (lower.includes("heal") || lower.includes("peace") || lower.includes("rest")) return "healing";
  if (lower.includes("wake") || lower.includes("remember") || lower.includes("light")) return "awakening";
  if (lower.includes("strength") || lower.includes("power") || lower.includes("confident")) return "confidence";
  if (lower.includes("path") || lower.includes("life") || lower.includes("purpose")) return "purpose";
  return "healing";
}

export default function SoulMirror() {
  const [text, setText] = useState("");
  const [show, setShow] = useState(false);
  const [type, setType] = useState("healing");

  function handleReveal() {
    if (!text.trim()) return;
    const t = interpretInput(text);
    setType(t);
    setShow(true);
    const mp3 = document.getElementById("audio-mp3");
    const ogg = document.getElementById("audio-ogg");
    mp3.src = `${t}.mp3`;
    ogg.src = `${t}.ogg`;
    const audio = document.getElementById("sound");
    audio.load();
    audio.play();
  }

  function downloadImage() {
    html2canvas(document.querySelector(".result-card")).then(canvas => {
      const link = document.createElement("a");
      link.download = "soul-mirror.png";
      link.href = canvas.toDataURL();
      link.click();
    });
  }

  const color = chakraColors[type];
  const msg = messages[type];

  return (
    <div className="container" style={{ background: `radial-gradient(circle, ${color}, #ffffff)` }}>
      <h1>SOUL MIRROR</h1>
      <p>Write from your soul. Receive light in return.</p>
      <input
        className="input"
        placeholder="Type a feeling, word or message..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className="button" onClick={handleReveal}>Reveal</button>

      {show && (
        <div className="result-card">
          <div className="aura" style={{ backgroundColor: color }}></div>
          <p className="message">{msg.star}</p>
          <p className="translation">{msg.trans}</p>
          <button className="button" onClick={downloadImage}>Download Soul Mirror</button>
        </div>
      )}
    </div>
  );
}
