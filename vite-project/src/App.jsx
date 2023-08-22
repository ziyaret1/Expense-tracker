import AddExpence from "./components/AddExpence";
import Balance from "./components/Balance";
import IncomeExpences from "./components/IncomeExpences";
import HistoryExpence from "./components/HistoryExpence";
import Header from "./components/header";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  

 

  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpences />
        <HistoryExpence />
        <AddExpence/>
      </div>
    </GlobalProvider>
  );
}

export default App;
