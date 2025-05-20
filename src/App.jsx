import { useEffect, useState } from "react";
import './index.css'
import Header from './components/Header'
import FactoryInfoCard from './components/FactoryInfoCard'
import FactoryOverviewCard from './components/FactoryOverviewCard'
import Equipment from "./components/Equipment";
import SliderBlock from "./components/SliderBLock";
import ProductBlock from "./components/ProductBlock";
import CertificationBlock from "./components/CertificationBlock";
import FormBlock from './components/FormBlock';
import Footer from "./components/Footer";

function App() {
  const [lang, changeLang] = useState("ru");

  const handleChange = (value) => {
      changeLang(value);
  };
  
  return (
    <>
      <div>
        <Header lg={lang} change={handleChange} />
        <FactoryInfoCard lg={lang}/>
        <FactoryOverviewCard lg={lang}/>
        <Equipment lg={lang}/>
        <SliderBlock lg={lang}/>
        <ProductBlock lg={lang}/>
        <CertificationBlock lg={lang}/>
        <FormBlock lg={lang}/>
        <Footer lg={lang}/>
      </div>
    </>
  )
}

export default App
