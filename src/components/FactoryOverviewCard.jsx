import CardHistoryImage from "../assets/CardHistoryImage.png";
import CardLocationImage from "../assets/CardLocationImage.png";

export default function FactoryOverviewCard(props) {
    return (
        <>
            <div className="mb-[60px] px-8">
                <div className="container flex flex-col lg:flex-row items-center gap-y-8 lg:gap-y-0 lg:gap-x-10 justify-between mt-[60px] px-4 lg:px-0 lg:mx-auto">
                    <div className="w-full lg:w-1/2">
                        <h3 className="px-[8px] py-[8px] bg-[#C7FF1D] rounded-[12px] text-[18px] lg:text-[24px] font-semibold">
                            {props.lg == "ru" && "Наша фабрика"}
                            {props.lg == "kz" && "Біздің зауыт"}
                            {props.lg == "en" && "Our factory"}
                        </h3>
                        <h4 className="font-bold text-[24px] lg:text-[32px] mt-4">
                            {props.lg == "ru" && "История"}
                            {props.lg == "kz" && "Тарихы"}
                            {props.lg == "en" && "History"}
                        </h4>
                        <p className="font-normal text-[16px] lg:text-[20px] mt-4 lg:mt-8">
                            {props.lg == "ru" && "Наш завод, был построен в 2021 г. Во время его проектированияи строительства мы использовали опыт лучших израильских специалистов и самые передовые технологические нароботки. Производство, управление и контроль качества организованы в соответствии с международными стандартами."}
                            {props.lg == "kz" && "Біздің зауыт 2021 жылы салынған. Оның жобалануы мен құрылысында біз Израильдің ең жақсы мамандарының тәжірибесін және ең озық технологиялық жетістіктерін қолдандық. Өндіріс, басқару және сапаны бақылау халықаралық стандарттарға сәйкес ұйымдастырылған."}
                            {props.lg == "en" && "Our factory was built in 2021. During its design and construction, we used the experience of the best Israeli specialists and the most advanced technological developments. Production, management and quality control are organized in accordance with international standards."}
                        </p>
                    </div>
                    <div className="rounded-[16px] w-full lg:w-1/2">
                        <img src={CardHistoryImage} alt="CardHistoryImage" className="w-full h-auto"/>
                    </div>
                </div>
                <div className="container px-4 lg:px-0 flex flex-col lg:flex-row items-center gap-y-8 lg:gap-y-0 lg:gap-x-10 justify-between mt-[48px] lg:mx-auto">
                    <div className="rounded-[16px] w-full lg:w-1/2 order-2 lg:order-1">
                        <img src={CardLocationImage} alt="CardLocationImage" className="w-full h-auto"/>
                    </div>
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <h4 className="font-bold text-[24px] lg:text-[32px]">
                            {props.lg == "ru" && "Местоположение"}
                            {props.lg == "kz" && "Орналасқан жері"}
                            {props.lg == "en" && "Location"}
                        </h4>
                        <p className="font-normal text-[16px] lg:text-[20px] mt-4 lg:mt-8">
                            {props.lg == "ru" && (
                                <>
                                    Биобезопасность - это один из важнейших факторов в производцтве белка. Именно поэтому было решено построить завод «Agritech» в Алматинской области, недалеко от поселка Жанаталап, т.к. это экологически чистый район. Кроме того территория завода окружена санитарно-защитной зоной в 250 м.
                                    <br />
                                    <br />
                                    На нашем заводе мы придерживаемся очень строгих процедур контроля качества, чтобы удовлетворить самые строгие требования наших уважаемых клиентов.
                                </>
                            )}
                            {props.lg == "kz" && (
                                <>
                                    Биоқауіпсіздік - ақуыз өндірісіндегі маңызды факторлардың бірі. Сондықтан «Agritech» зауытын экологиялық таза аудан болғандықтан Алматы облысында, Жаңаталап ауылының жанында салу туралы шешім қабылданды. Сонымен қатар, зауыт аумағы 250 м санитарлық-қорғау аймағымен қоршалған.
                                    <br />
                                    <br />
                                    Біздің зауытта біз құрметті клиенттеріміздің қатаң талаптарын қанағаттандыру үшін сапаны бақылаудың өте қатаң рәсімдерін ұстанамыз.
                                </>
                            )}
                            {props.lg == "en" && (
                                <>
                                    Biosafety is one of the most important factors in protein production. That is why it was decided to build the Agritech plant in the Almaty region, near the village of Zhanatalap, as it is an environmentally friendly area. In addition, the territory of the plant is surrounded by a sanitary protection zone of 250 m.
                                    <br />
                                    <br />
                                    At our plant, we adhere to very strict quality control procedures to meet the strictest requirements of our valued customers.
                                </>
                            )}
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}