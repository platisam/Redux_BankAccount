import CreateCustomer from "./CreateCustomer";
import AccountOperations from "./AccountOperations";
import Customer from "./Customer";
import BalanceDisplay from "./BalanceDisplay";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
      <BalanceDisplay />
    </div>
  );
}

export default App;
