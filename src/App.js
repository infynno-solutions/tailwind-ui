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
import PreviewTemplate from "./preview-template/PreviewTemplate";
import Undefined from "./pages/undefined";
import Button from "./Form/Button";
import Input from "./Form/Input";
import DatePicker from "./Form/DatePicker";
import RadioButton from "./Form/RadioButton";
import Switch from "./Form/Switch";
import Select from "./Form/Select";
import FormPreview from "./preview-template/FormPreview";
import Carousel1 from "./carousel/sample1/Carousel";
import Carousel2 from "./carousel/sample2/Carousel";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:module" element={<Home />} />
        <Route path="/credit-card/sample1" element={<Sample1 />} />
        <Route path="/credit-card/sample2" element={<Sample2 />} />
        <Route path="/credit-card/sample3" element={<Sample3 />} />
        <Route path="/pricing/sample1" element={<Pricing1 />} />
        <Route path="/pricing/sample2" element={<Pricing2 />} />
        <Route path="/pricing/sample3" element={<Pricing3 />} />
        <Route path="/pricing/sample4" element={<Pricing4 />} />
        <Route path="/application-ui/:module" element={<PreviewTemplate />} />
        <Route path="/form-elements/:module" element={<FormPreview />} />
        <Route path="/buttons" element={<Button />} />
        <Route path="/inputs" element={<Input />} />
        <Route path="/date-picker" element={<DatePicker />} />
        <Route path="/radio-button" element={<RadioButton />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/select" element={<Select />} />
        <Route path="/undefined" element={<Undefined />} />
        <Route path="/carousel/sample1" element={<Carousel1 />} />
        <Route path="/carousel/sample2" element={<Carousel2 />} />
      </Routes>
    </div>
  );
}

export default App;
