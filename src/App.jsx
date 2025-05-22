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
    const [modal, setModal] = useState(false);

    const handleChange = (value) => {
        changeLang(value);
    };
    
    return (
        <>
            <div className="relative">
                {modal && <>
                    <div className={`fixed inset-0 bg-black/50 z-10 transition-opacity duration-300 ${modal ? 'opacity-100' : 'opacity-0'}`} onClick={() => setModal(false)}>
                        <div onClick={(e) => e.stopPropagation()} className={`fixed top-0 bottom-0 right-0 w-[70%] bg-white z-20 py-4 px-6 transition-transform duration-300 ${modal ? 'translate-x-0' : 'translate-x-full'}`}>
                            <div className="w-full flex justify-end">
                                <button 
                                    onClick={() => setModal(false)}
                                    className="bg-black rounded-full w-[40px] h-[40px] px-3 py-2 relative"
                                >
                                    <div className="w-[20px] h-[2px] bg-white rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                    <div className="w-[20px] h-[2px] bg-white -rotate-45 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
                                </button>
                            </div>
                            <div className="flex flex-col items-center justify-center mt-6 gap-y-3">
                                
                                <button className="px-[16px] py-[8px] bg-black rounded-full text-white font-medium w-full">
                                    {lang =="ru" && "Главная"}
                                    {lang =="en" && "Main"}
                                    {lang =="kz" && "Басты бет"}
                                </button>
                                <button className="px-[16px] py-[8px] bg-black rounded-full text-white font-medium w-full">
                                    {lang == "ru" && "Комплекс"}
                                    {lang == "en" && "Complex"}
                                    {lang == "kz" && "Кешен"}
                                </button>
                                <button className="px-[16px] py-[8px] bg-black rounded-full text-white font-medium w-full">
                                    {lang == "ru" && "Продукция"}
                                    {lang == "en" && "Products"}
                                    {lang == "kz" && "Өнімдер"}
                                </button>
                                <button className="px-[16px] py-[8px] bg-black rounded-full text-white font-medium w-full">
                                    {lang == "ru" && "Контакты"}
                                    {lang == "en" && "Contacts"}
                                    {lang == "kz" && "Байланыстар"}
                                </button>

                                <div className="w-full flex justify-center gap-x-4 mb-4">
                                    <button 
                                        onClick={() => handleChange("ru")} 
                                        className={`px-4 py-2 rounded-full ${lang === "ru" ? "bg-black text-white" : "bg-gray-200"}`}
                                    >
                                        RU
                                    </button>
                                    <button 
                                        onClick={() => handleChange("en")} 
                                        className={`px-4 py-2 rounded-full ${lang === "en" ? "bg-black text-white" : "bg-gray-200"}`}
                                    >
                                        EN
                                    </button>
                                    <button 
                                        onClick={() => handleChange("kz")} 
                                        className={`px-4 py-2 rounded-full ${lang === "kz" ? "bg-black text-white" : "bg-gray-200"}`}
                                    >
                                        KZ
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>}
                {!modal && <>
                    <div className="md:hidden fixed top-4 right-4 z-10">
                        <button 
                            onClick={() => setModal(true)}
                            className="bg-black rounded-full w-[50px] h-[50px] px-3 py-2 flex flex-col items-center justify-center gap-y-2"
                        >
                            <div className="w-full h-[2px] bg-white"></div>
                            <div className="w-full h-[2px] bg-white"></div>
                            <div className="w-full h-[2px] bg-white"></div>
                        </button>
                    </div>
                </>}
                <Header lg={lang} change={handleChange} />
                <div id="main">
                    <FactoryInfoCard lg={lang}/>
                </div>
                <div id="complex">
                    <FactoryOverviewCard lg={lang}/>
                </div>
                <div id="products">
                    <Equipment lg={lang}/>
                    <SliderBlock lg={lang}/>
                    <ProductBlock lg={lang}/>
                </div>
                <div id="certification">
                    <CertificationBlock lg={lang}/>
                </div>
                <div id="contacts">
                    <FormBlock lg={lang}/>
                    <Footer lg={lang}/>
                </div>
            </div>
        </>
    )
}

export default App
