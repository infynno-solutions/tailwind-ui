import { Route, Routes } from "react-router-dom";
import "./App.css";
import CreditCard from "./credit-card/CreditCard";
import Sample1 from "./pricing/sample1/Pricing";
import Sample2 from "./pricing/sample2/Pricing";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/credit-card" element={<CreditCard />} />
        <Route path="/" element={<Home />} />
        <Route path="/pricing/sample1/Pricing" element={<Sample1 />} />
        <Route path="/pricing/sample2/Pricing" element={<Sample2 />} />
      </Routes>
    </div>
  );
}

export default App;
