import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreditCard from "./credit-card/CreditCard";
import Pricing from "./pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
