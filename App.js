import "./App.css";
import Header from "./components/Header/Header";
import Balance from "./components/Balance/Balance";
import IncomeExpenses from "./components/IncomeExpenses/IncomeExpenses";
import TransactionList from "./components/TransactionList.js/TransactionList";
import AddTransaction from "./components/AddTransaction/AddTransaction";

import { GlobalProvider } from "../src/context/GlobalState";

function App() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
      </div>
      <div className="inc-exp-container">
        <IncomeExpenses />
      </div>
      <TransactionList />
      <AddTransaction />
    </GlobalProvider>
  );
}

export default App;
