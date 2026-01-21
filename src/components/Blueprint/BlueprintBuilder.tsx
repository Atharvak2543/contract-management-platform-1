import { useState } from "react";

export default function BlueprintBuilder() {
  const [name, setName] = useState("");

  const saveBlueprint = () => {
    if (!name.trim()) return;
    alert(`Blueprint "${name}" saved (demo mode)`);
    setName("");
  };

  return (
    <div style={{ marginTop: 24 }}>
      <h3>Create Blueprint</h3>
      <input
        placeholder="Blueprint name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8, width: "100%" }}
      />
      <button onClick={saveBlueprint} style={{ marginTop: 8 }}>
        Save Blueprint
      </button>
    </div>
  );
}
