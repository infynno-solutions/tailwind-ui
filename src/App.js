import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sample1 from "./credit-card/sample1/CreditCard";
import Sample2 from "./credit-card/sample2/CreditCard";
import Sample3 from "./credit-card/sample3/CreditCard";
import Home from "./Home";
import Pricing from "./pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credit-card/sample1" element={<Sample1 />} />
        <Route path="/credit-card/sample2" element={<Sample2 />} />
        <Route path="/credit-card/sample3" element={<Sample3 />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </div>
  );
}

export default App;
