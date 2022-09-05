import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreditCard1 from "./credit-card/sample1/CreditCard1";
import CreditCard2 from "./credit-card/sample2/CreditCard2";
import CreditCard3 from "./credit-card/sample3/CreditCard3";
import Home from "./Home";
import Sample1 from "./pricing/sample1/Pricing";
import Sample2 from "./pricing/sample2/Pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing/sample1/Pricing" element={<Sample1 />} />
        <Route path="/pricing/sample2/Pricing" element={<Sample2 />} />
        <Route path="/credit-card/sample1" element={<CreditCard1 />} />
        <Route path="/credit-card/sample2" element={<CreditCard2 />} />
        <Route path="/credit-card/sample3" element={<CreditCard3 />} />
      </Routes>
    </div>
  );
}

export default App;
