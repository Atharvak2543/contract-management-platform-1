import { useState } from 'react';

export default function CreateContract() {
  const [name, setName] = useState('');

  const createContract = () => {
    if (!name.trim()) return;
    alert(`Contract "${name}" created (demo mode)`);
    setName('');
  };

  return (
    <div style={{ marginTop: 32 }}>
      <h3>Create Contract</h3>
      <input
        placeholder="Contract name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8, width: '100%' }}
      />
      <button onClick={createContract} style={{ marginTop: 8 }}>
        Create Contract
      </button>
    </div>
  );
}
