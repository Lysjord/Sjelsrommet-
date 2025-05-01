import { useState } from "react";
import "./style.css";

export default function App() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [scope, setScope] = useState("day");
  const [feeling, setFeeling] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit() {
    if (feeling.trim() && name.trim() && dob) {
      setSubmitted(true);
    }
  }

  return (
    <div className="container">
      <h1>SOUL MIRROR</h1>
      {!submitted ? (
        <div className="form">
          <h2>1. What do you feel in stillness?</h2>
          <textarea
            className="input"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            placeholder="Describe your inner feeling..."
          />
          <h2>2. Who are you?</h2>
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your full name"
            type="text"
          />
          <label className="label">Date of Birth</label>
          <input
            className="input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            type="date"
          />
          <h2>3. What would you like to receive?</h2>
          <select className="input" value={scope} onChange={(e) => setScope(e.target.value)}>
            <option value="day">Today's Insight</option>
            <option value="week">This Week</option>
            <option value="month">This Month</option>
            <option value="year">This Year</option>
          </select>
          <button className="button" onClick={handleSubmit}>Reveal My Soul Mirror</button>
        </div>
      ) : (
        <div className="result-card" id="result">
          <div className="frame">
            <div className="aura-glow"></div>
            <div className="symbol">✶</div>
            <div className="message">∴ Ka'loren thaya'mir ∴</div>
            <div className="translation">You are becoming light in stillness.</div>
            <div className="numerology">
              {name}, your {scope} message:<br />
              Your soul is moving through a portal of transformation.<br />
              Align with your inner rhythm.<br />
              Your birth path reflects strength and insight.
            </div>
          </div>
          <button className="button" onClick={() => {
            html2canvas(document.getElementById("result")).then(canvas => {
              const link = document.createElement("a");
              link.download = "soul-mirror.png";
              link.href = canvas.toDataURL();
              link.click();
            });
          }}>Download My Soul Mirror</button>
        </div>
      )}
    </div>
  );
}
