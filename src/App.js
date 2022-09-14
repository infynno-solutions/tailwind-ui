import { Route, Routes } from "react-router-dom";
import "./App.css";
import Sample1 from "./credit-card/sample1/CreditCard";
import Sample2 from "./credit-card/sample2/CreditCard";
import Sample3 from "./credit-card/sample3/CreditCard";
import Home from "./Home";
import Pricing1 from "./pricing/sample1/Pricing";
import Pricing2 from "./pricing/sample2/Pricing";
import Pricing3 from "./pricing/sample3/Pricing";
import Pricing4 from "./pricing/sample4/Pricing";
import PreviewTemplate from "./PreviewTemplate";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/credit-card/sample1" element={<Sample1 />} />
        <Route path="/credit-card/sample2" element={<Sample2 />} />
        <Route path="/credit-card/sample3" element={<Sample3 />} />
        <Route path="/pricing/sample1" element={<Pricing1 />} />
        <Route path="/pricing/sample2" element={<Pricing2 />} />
        <Route path="/pricing/sample3" element={<Pricing3 />} />
        <Route path="/pricing/sample4" element={<Pricing4 />} />
        <Route path="/preview" element={<PreviewTemplate />} />
      </Routes>
    </div>
  );
}

export default App;
