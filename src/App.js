import CreateCustomer from "./CreateCustomer";
import AccountOperations from "./AccountOperations";
import Customer from "./Customer";

function App() {
  return (
    <div>
      <h1>🏦 The React-Redux Bank ⚛️</h1>
      <CreateCustomer />
      <Customer />
      <AccountOperations />
    </div>
  );
}

export default App;
