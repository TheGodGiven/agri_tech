import { useEffect } from "react";
import BGHeader from "../assets/BGHeader.png";
import Logo from "../assets/Logo.png";


export default function Header(props) {


    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };
   
    return (
        <>
            <div 
                className="hidden lg:block"
                style={{
                    backgroundImage: `url(${BGHeader})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                }}
            >
               <div>
                    <div className="flex items-center justify-between px-[95px] py-[18px]">
                        <div>
                            <img src={Logo} alt="Logo" className="w-[73px]" />
                        </div>
                        <div className="flex items-center justify-between gap-x-[53px] bg-[#252D30] rounded-[100px] p-2 text-white text-[16px]">
                            <button onClick={() => scrollToSection('main')} className="px-[16px] py-[8px] rounded-[50px] hover:bg-white hover:text-[#252D30]">
                                {props.lg =="ru" && "Главная"}
                                {props.lg =="en" && "Main"}
                                {props.lg =="kz" && "Басты бет"}
                            </button>
                            <button onClick={() => scrollToSection('complex')} className="px-[16px] py-[8px] rounded-[50px] hover:bg-white hover:text-[#252D30]">
                                {props.lg == "ru" && "Комплекс"}
                                {props.lg == "en" && "Complex"}
                                {props.lg == "kz" && "Кешен"}
                            </button>
                            <button onClick={() => scrollToSection('products')} className="px-[16px] py-[8px] rounded-[50px] hover:bg-white hover:text-[#252D30]">
                                {props.lg == "ru" && "Продукция"}
                                {props.lg == "en" && "Products"}
                                {props.lg == "kz" && "Өнімдер"}
                            </button>
                            <button onClick={() => scrollToSection('contacts')} className="px-[16px] py-[8px] rounded-[50px] hover:bg-white hover:text-[#252D30]">
                                {props.lg == "ru" && "Контакты"}
                                {props.lg == "en" && "Contacts"}
                                {props.lg == "kz" && "Байланыстар"}
                            </button>
                        </div>
                        <div>
                        <select
                            name="lang"
                            className="bg-[#252D30] rounded-[100px] px-[23px] py-[16px] text-white text-[16px] appearance-none pr-10" // добавлен appearance-none и pr-10 для стрелки
                            style={{
                                backgroundImage: `url("data:image/svg+xml,%3Csvg fill='white' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' d='M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.27a.75.75 0 01.02-1.06z' clip-rule='evenodd'/%3E%3C/svg%3E")`,
                                backgroundRepeat: "no-repeat",
                                backgroundPosition: "right 1.2rem center", // регулируйте отступ стрелки
                                backgroundSize: "1.5em 1.5em", // размер стрелки
                            }}
                            onChange={(event) => {
                                props.change(event.target.value)
                            }}
                        >
                            <option value="ru">ru</option>
                            <option value="en">en</option>
                            <option value="kz">kz</option>
                        </select>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center text-[#252D30] items-center px-[188px] text-center mt-[40px]">
                        <div className="font-semibold text-[24px] height-[40px]">
                            {props.lg =="ru" && "Изолированный соевый белок"}
                            {props.lg =="en" && "Isolated soy protein"}
                            {props.lg =="kz" && "Оқшауланған соя протеині"}
                        </div>
                        <div className="font-bold text-[48px] height-[60px] mt-2.5">
                            {props.lg =="ru" && "Уникальная технология - высокое качество"}
                            {props.lg =="en" && "Unique technology - high quality"}
                            {props.lg =="kz" && "Бірегей технология – жоғары сапа"}
                        </div>
                        <div className="font-medium text-[18px] height-[100%] mt-4 mb-[398px] text-shadow-2xl">
                            {props.lg == "ru" && "Agritech производит изолированный соевый белок, не содержащий ГМО, исключительно высокого качества. На нашем заводе мы придерживаемся очень строгих процедур контроля качества, чтобы обеспечить самые жесткие требования наших уважаемых клиентов."}
                            {props.lg == "en" && "Agritech produces non-GMO isolated soy protein of exceptionally high quality. In our factory we adhere to very strict quality control procedures to ensure the most stringent requirements of our valued customers."}
                            {props.lg == "kz" && "Agritech өте жоғары сапалы ГМО емес оқшауланған соя протеинін шығарады. Біздің зауытта біз қымбатты тұтынушыларымыздың ең қатаң талаптарын қанағаттандыру үшін сапаны бақылаудың өте қатаң процедураларын ұстанамыз."}
                        </div>
                    </div>
                </div>
            </div>

            <div 
                className="lg:hidden"
                style={{
                    backgroundImage: `url(${BGHeader})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '100%',
                }}
            >
                <div className="flex items-center justify-between px-[16px] py-[8px]">
                    <img src={Logo} alt="Logo" className="w-[73px]" />
                    
                </div>

                <div className="flex flex-col justify-center text-[#252D30] items-center text-center mt-5 pb-14">
                    <div className="font-semibold">
                        {props.lg =="ru" && "Изолированный соевый белок"}
                        {props.lg =="en" && "Isolated soy protein"}
                        {props.lg =="kz" && "Оқшауланған соя протеині"}
                    </div>
                    <div className="font-bold mt-2.5">
                        {props.lg =="ru" && "Уникальная технология - высокое качество"}
                        {props.lg =="en" && "Unique technology - high quality"}
                        {props.lg =="kz" && "Бірегей технология – жоғары сапа"}
                    </div>
                    <div className="font-medium mt-4 text-white">
                        {props.lg == "ru" && "Agritech производит изолированный соевый белок, не содержащий ГМО, исключительно высокого качества. На нашем заводе мы придерживаемся очень строгих процедур контроля качества, чтобы обеспечить самые жесткие требования наших уважаемых клиентов."}
                        {props.lg == "en" && "Agritech produces non-GMO isolated soy protein of exceptionally high quality. In our factory we adhere to very strict quality control procedures to ensure the most stringent requirements of our valued customers."}
                        {props.lg == "kz" && "Agritech өте жоғары сапалы ГМО емес оқшауланған соя протеинін шығарады. Біздің зауытта біз қымбатты тұтынушыларымыздың ең қатаң талаптарын қанағаттандыру үшін сапаны бақылаудың өте қатаң процедураларын ұстанамыз."}
                    </div>
                </div>
            </div>
        </>
    )
}
