import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import SliderEnergyImage from '../assets/SliderEnergyImage.png';
import SliderRawImage from '../assets/SliderRawImage.png';
import SliderSystemImage from '../assets/SliderSystemImage.png';
import SliderPersonalImage from '../assets/SliderPersonalImage.png';

export default function SliderBlock(props) {
    const slides = {
        ru: [
            {
                image: SliderEnergyImage,
                title: "ЭНЕРГИЯ",
                description: "Завод обеспечен газом, электричеством, водой, системами связи и интернета."
            },
            {
                image: SliderSystemImage,
                title: "СИСТЕМА АВТОМАТИЗАЦИИ",
                description: "Технологический процесс полностью автоматизирован и опционально может управляться также вручную. Процесс автоматизации управляется программой SCADA, которая позволяет интегрировать сухой и мокрый процессы в одну систему и контролировать их все на одном экране."
            },
            {
                image: SliderPersonalImage,
                title: "СОТРУДНИКИ",
                description: "Наши сотрудники являются обученными и высококвалифицированными профессионалами, которые имеют местный и международный опыт в пищевой промышленности, инженерии и управлении. Общая численность сотрудников составляет 58 человек, включая административный персонал."
            },
            {
                image: SliderRawImage,
                title: "ОСНОВНОЕ СЫРЬЕ",
                description: "• Белый лепесток - не тостированый соевый шрот. (основное сырье) • Вода артезианская с многоступенчатой очисткой • Пар сухой насыщенный • Фермент  • Сода  • Соляная кислота"
            }
        ],
        en: [
            {
                image: SliderEnergyImage,
                title: "ENERGY",
                description: "The plant is provided with gas, electricity, water, communication systems and internet."
            },
            {
                image: SliderSystemImage,
                title: "AUTOMATION SYSTEM",
                description: "The technological process is fully automated and can optionally be controlled manually as well. The automation process is controlled by the SCADA program, which allows you to integrate dry and wet processes into one system and monitor them all on one screen."
            },
            {
                image: SliderPersonalImage,
                title: "EMPLOYEES",
                description: "Our employees are trained and highly qualified professionals who have local and international experience in the food industry, engineering and management. The total number of employees is 58 people, including administrative staff."
            },
            {
                image: SliderRawImage,
                title: "MAIN RAW MATERIALS",
                description: "• White petal - non-toasted soybean meal. (main raw material) • Artesian water with multi-stage purification • Dry saturated steam • Enzyme • Soda • Hydrochloric acid"
            }
        ],
        kz: [
            {
                image: SliderEnergyImage,
                title: "ЭНЕРГИЯ",
                description: "Зауыт газбен, электр энергиясымен, сумен, байланыс және интернет жүйелерімен қамтамасыз етілген."
            },
            {
                image: SliderSystemImage,
                title: "АВТОМАТТАНДЫРУ ЖҮЙЕСІ",
                description: "Технологиялық процесс толығымен автоматтандырылған және қолмен де басқаруға болады. Автоматтандыру процесі SCADA бағдарламасымен басқарылады, ол құрғақ және дымқыл процестерді бір жүйеге біріктіруге және оларды бір экранда бақылауға мүмкіндік береді."
            },
            {
                image: SliderPersonalImage,
                title: "ҚЫЗМЕТКЕРЛЕР",
                description: "Біздің қызметкерлеріміз тағам өнеркәсібі, инженерия және басқару саласында жергілікті және халықаралық тәжірибесі бар білікті және жоғары білікті мамандар болып табылады. Қызметкерлердің жалпы саны әкімшілік персоналды қоса алғанда 58 адамды құрайды."
            },
            {
                image: SliderRawImage,
                title: "НЕГІЗГІ ШИКІЗАТ",
                description: "• Ақ жапырақ - қуырылмаған соя шроты. (негізгі шикізат) • Көп сатылы тазартумен артезиан суы • Құрғақ қаныққан бу • Энзим • Сода • Тұз қышқылы"
            }
        ]
    };

    const currentSlides = slides[props.lg] || slides["ru"];

    return (
        <>
            <div className="container mx-auto lg:px-8 px-4 py-8">
                <h2 className="text-center text-xl lg:text-3xl font-bold mb-2">
                    {props.lg === "ru" && "Услуги и персонал"}
                    {props.lg === "en" && "Services and personnel"}
                    {props.lg === "kz" && "Қызметтер және персонал"}
                </h2>
                <h3 className="text-center text-lg lg:text-xl mb-8">
                    {props.lg === "ru" && "Лучший из лучших"}
                    {props.lg === "en" && "Best of the best"}
                    {props.lg === "kz" && "Үздіктердің үздігі"}
                </h3>

                <div className='flex flex-col lg:flex-row gap-y-3 lg:gap-y-0 lg:gap-x-3'>
                    {currentSlides.map((slide, index) => (
                        <div key={index} className='basis-1/4'>
                            <div className="bg-gray-100 rounded-lg p-6 h-full flex flex-col">
                                <img src={slide.image} alt="SliderImage" className='h-[170px] lg:h-[250px] object-cover w-full'/>
                                <h4 className="font-bold text-lg lg:text-xl mb-4 mt-3">{slide.title}</h4>
                                <p className="text-gray-700 text-sm lg:text-base flex-grow">{slide.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}