import FactoryInfoCardImage from "../assets/FactoryInfoCardImage.png";
import BillIcon from "../assets/BillIcon.png";
import FlowerIcon from "../assets/FlowerIcon.png";
import LampChargeIcon from "../assets/LampChargeIcon.png";
import MessageIcon from "../assets/MessageIcon.png";
import { useState } from "react";

export default function FactoryInfoCard(props) {

    const [activeCard, setActiveCard] = useState(1);

    const cards = {
        ru:[
            {
                id: 1,
                title: "Наше производство",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                icon: LampChargeIcon
            },
            {
                id: 2,
                title: "Наша продукция",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                icon: FlowerIcon
            },
            {
                id: 3,
                title: "Сертификация",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                icon: BillIcon
            },
            {
                id: 4,
                title: "Свяжитесь с нами",
                description: "Используя опыт ведущих мировых профессиональных консультантов и лучшее оборудование, нам удалось создать современное производство в одном из самых экологически чистых регионов Казахстана.",
                link: "Подробнее...",
                icon: MessageIcon
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
    return(
        <>
            <div className="flex items-center justify-between mt-[60px] px-[95px] gap-x-[42px]">
                <div className="flex flex-col gap-4 w-1/2">
                    {card.map((item) => (
                        <div
                            key={item.id}
                            className={`p-4 rounded-lg shadow-2xl ${
                                activeCard === item.id ? "bg-black text-white" : "bg-white text-black"
                            }`}
                            onClick={() => setActiveCard(item.id)}
                        >
                            <div className="flex items-center gap-2">
                                <img src={item.icon} alt={item.title} className="w-[30px] h-[30px]"/>
                                <h2 className="text-[24px] font-semibold">{item.title}</h2>
                            </div>
                            {activeCard === item.id && (
                                <>
                                    <p className="mt-2 text-[18px] font-normal">{item.description}</p>
                                    <a href="#" className="text-green-400 mt-4 inline-block text-[18px] font-normal">
                                        {item.link}
                                    </a>
                                </>
                            )}
                        </div>
                    ))}
                </div>
                <div className="w-1/2 max-h-max"> 
                    <img src={FactoryInfoCardImage} alt="Image"/>
                </div>
            </div>
        </>
    )
}