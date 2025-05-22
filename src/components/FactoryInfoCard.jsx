import { useState } from "react";
import FactoryInfoCardImage from "../assets/FactoryInfoCardImage.png";
import BillIcon from "../assets/BillIcon.png";
import FlowerIcon from "../assets/FlowerIcon.png";
import LampChargeIcon from "../assets/LampChargeIcon.png";
import MessageIcon from "../assets/MessageIcon.png";
import LampChargeIconLight from "../assets/LampChargeIconLight.png";
import FlowerIconLight from "../assets/FlowerIconLight.png";
import BillIconLight from "../assets/BillIconLight.png";
import MessageIconLight from "../assets/MessageIconLight.png";

export default function FactoryInfoCard(props) {

    const [activeCard, setActiveCard] = useState(1);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const cards = {
        ru:[
            {
                id: 1,
                title: "Наше производство",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                sectionId: "main",
                icon: LampChargeIcon,
                iconLight: LampChargeIconLight
            },
            {
                id: 2,
                title: "Наша продукция",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                sectionId: "products",
                icon: FlowerIcon,
                iconLight: FlowerIconLight
            },
            {
                id: 3,
                title: "Сертификация",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                sectionId: "certification",
                icon: BillIcon,
                iconLight: BillIconLight
            },
            {
                id: 4,
                title: "Свяжитесь с нами",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                sectionId: "contacts",
                icon: MessageIcon,
                iconLight: MessageIconLight
            },
        ],
        en:[
            {
                id: 1,
                title: "Our production",
                description: "Using the experience of leading world professional consultants and the best equipment, we managed to create a modern production in one of the most environmentally friendly regions of Kazakhstan.",
                link: "Learn more...",
                icon: LampChargeIcon
            },
            {
                id: 2,
                title: "Our products",
                description: "Using the experience of leading world professional consultants and the best equipment, we managed to create a modern production in one of the most environmentally friendly regions of Kazakhstan.",
                link: "Learn more...",
                icon: FlowerIcon
            },
            {
                id: 3,
                title: "Certification",
                description: "Using the experience of leading world professional consultants and the best equipment, we managed to create a modern production in one of the most environmentally friendly regions of Kazakhstan.",
                link: "Learn more...",
                icon: BillIcon
            },
            {
                id: 4,
                title: "Contact us",
                description: "Using the experience of leading world professional consultants and the best equipment, we managed to create a modern production in one of the most environmentally friendly regions of Kazakhstan.",
                link: "Learn more...",
                icon: MessageIcon
            },
        ],
        kz:[
            {
                id: 1,
                title: "Біздің өндіріс",
                description: "Басқа әлемдік кәсіби кеңесшілердің тәжірибесін және ең жақсы жабдықтарды пайдалана отырып, біз Қазақстанның ең экологиялық таза аймақтарының бірінде заманауи өндіріс құруға қол жеткіздік.",
                link: "Толығырақ...",
                icon: LampChargeIcon
            },
            {
                id: 2,
                title: "Біздің өнімдер",
                description: "Басқа әлемдік кәсіби кеңесшілердің тәжірибесін және ең жақсы жабдықтарды пайдалана отырып, біз Қазақстанның ең экологиялық таза аймақтарының бірінде заманауи өндіріс құруға қол жеткіздік.",
                link: "Толығырақ...",
                icon: FlowerIcon
            },
            {
                id: 3,
                title: "Сертификация",
                description: "Басқа әлемдік кәсіби кеңесшілердің тәжірибесін және ең жақсы жабдықтарды пайдалана отырып, біз Қазақстанның ең экологиялық таза аймақтарының бірінде заманауи өндіріс құруға қол жеткіздік.",
                link: "Толығырақ...",
                icon: BillIcon
            },
            {
                id: 4,
                title: "Бізбен хабарласыңыз",
                description: "Басқа әлемдік кәсіби кеңесшілердің тәжірибесін және ең жақсы жабдықтарды пайдалана отырып, біз Қазақстанның ең экологиялық таза аймақтарының бірінде заманауи өндіріс құруға қол жеткіздік.",
                link: "Толығырақ...",
                icon: MessageIcon
            },
        ]
    };

    const card = cards[props.lg] || cards["ru"];

    return (
        <>
            <div className="container lg:mx-auto flex flex-col lg:flex-row items-center justify-between mt-10 lg:mt-[60px] px-4 lg:px-[95px] gap-y-8 lg:gap-y-0 lg:gap-x-[42px]">
                <div className="flex flex-col gap-4 w-full lg:w-1/2">
                    {card.map((item) => (
                        <div
                            key={item.id}
                            className={`p-4 rounded-lg shadow-2xl ${
                                activeCard === item.id ? "bg-black text-white" : "bg-white text-black"
                            }`}
                            onClick={() => setActiveCard(item.id)}
                        >
                            <div className="flex items-center gap-2">
                                <img src={activeCard === item.id ? item.iconLight : item.icon} alt={item.title} className="w-[24px] h-[24px] lg:w-[30px] lg:h-[30px]"/>
                                <h2 className="text-[18px] lg:text-[24px] font-semibold">{item.title}</h2>
                            </div>
                            {activeCard === item.id && (
                                <>
                                    <p className="mt-2 text-[16px] lg:text-[18px] font-normal">{item.description}</p>
                                    <button 
                                        onClick={() => scrollToSection(item.sectionId)} 
                                        className="text-green-400 mt-4 inline-block text-[16px] lg:text-[18px] font-normal hover:text-green-500 transition-colors"
                                    >
                                        {item.link}
                                    </button>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-1/2 max-h-max"> 
                    <img src={FactoryInfoCardImage} alt="Image" className="w-full h-auto"/>
                </div>
            </div>
        </>
    )
}