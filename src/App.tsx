import BlueprintBuilder from './components/Blueprint/BlueprintBuilder';
import BlueprintList from './components/Blueprint/BlueprintList';
import CreateContract from './components/Contract/CreateContract';
import ContractList from './components/Contract/ContractList';

export default function App() {
  return (
    <div style={{ padding: 24, maxWidth: 600 }}>
      <h1>Contract Management Platform</h1>

      <BlueprintBuilder />
      <BlueprintList />

      <CreateContract />
      <ContractList />
    </div>
  );
}
