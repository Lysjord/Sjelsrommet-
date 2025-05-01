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
      <h1>SOUL MIRROR V3</h1>
      {!submitted ? (
        <>
          <p>What do you feel inside when you sit in silence?</p>
          <textarea
            className="input"
            value={feeling}
            onChange={(e) => setFeeling(e.target.value)}
            placeholder="Write your inner feeling..."
          />
          <input
            className="input"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            type="text"
          />
          <input
            className="input"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            placeholder="Date of birth (YYYY-MM-DD)"
            type="date"
          />
          <select className="input" value={scope} onChange={(e) => setScope(e.target.value)}>
            <option value="day">Today</option>
            <option value="week">This week</option>
            <option value="month">This month</option>
            <option value="year">This year</option>
          </select>
          <button className="button" onClick={handleSubmit}>Reveal Soul Mirror</button>
        </>
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
