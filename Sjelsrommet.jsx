import { useState } from "react";

export default function Sjelsrommet() {
  const [inputText, setInputText] = useState("");
  const [showResult, setShowResult] = useState(false);

  function getColorFromText(text) {
    const hue = (text.length * 37) % 360;
    return `hsl(${hue}, 70%, 60%)`;
  }

  function getShape(text) {
    const shapes = ["circle", "square", "triangle"];
    return shapes[text.length % shapes.length];
  }

  function getSound(text) {
    const scale = ["C", "D", "E", "F", "G", "A", "B"];
    return scale[text.length % scale.length] + "4";
  }

  const shape = getShape(inputText);
  const color = getColorFromText(inputText);
  const tone = getSound(inputText);

  return (
    <div style={{ minHeight: "100vh", background: "linear-gradient(to bottom, #e0e7ff, #fff)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "1rem", textAlign: "center" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Sjelsrommet</h1>
      <p style={{ marginBottom: "1rem" }}>Skriv en impuls fra hjertet ditt, og se hvordan sjelen din danser i lys og lyd.</p>
      <input
        style={{ maxWidth: "300px", width: "100%", marginBottom: "1rem", padding: "0.5rem" }}
        placeholder="Skriv noe sant fra deg selv..."
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={() => setShowResult(true)} style={{ padding: "0.5rem 1rem", cursor: "pointer" }}>Vis mitt sjelsrom</button>

      {showResult && (
        <div style={{ marginTop: "2rem", padding: "1rem", maxWidth: "400px", width: "100%", background: "#fff", borderRadius: "1rem", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>Ditt energibilde</h2>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: "160px" }}>
            {shape === "circle" && (
              <div style={{ borderRadius: "50%", width: "100px", height: "100px", backgroundColor: color }} />
            )}
            {shape === "square" && (
              <div style={{ width: "100px", height: "100px", backgroundColor: color }} />
            )}
            {shape === "triangle" && (
              <div style={{ width: 0, height: 0, borderLeft: "50px solid transparent", borderRight: "50px solid transparent", borderBottom: `100px solid ${color}` }} />
            )}
          </div>
          <p style={{ marginTop: "1rem" }}>Din tone: <strong>{tone}</strong></p>
        </div>
      )}
    </div>
  );
}
