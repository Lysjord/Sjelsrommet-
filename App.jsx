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
          <input
            className="input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Date of birth"
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
        <div className="result-card">
          <div className="aura"></div>
          <h2>∴ Ka'loren thaya'mir ∴</h2>
          <p className="translation">You are becoming light in stillness.</p>
          <p className="numerology">
            {name}, your {scope} message: Your soul is moving through a portal of transformation.
            Align with your inner rhythm. Your birth path reflects strength and insight.
          </p>
          <button className="button" onClick={() => window.location.reload()}>Try Again</button>
        </div>
      )}
    </div>
  );
}
