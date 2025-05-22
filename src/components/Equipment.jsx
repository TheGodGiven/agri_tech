import EquipmentImage from "../assets/EquipmentImage.png";

export default function Equipment(props) {

    const equipmentCards = {
        ru:[
            {
                title:"Комплект распылительной сушки ",
                description:"(камера, двойные циклоны, воздуходувки FD&ID, панель управления (на основе Scada), чиллер, теплообменники, системы охлаждения и упаковки продукта)"
            },
            {
                title: "Паровой котел, обратный осмос, система ультрафильтрации, воздушные компрессоры",
                description: ""
            },
            {
                title: "Декантеры",
                description: "(HAUS DDF 4042)"
            },
            {
                title:"Вертикальные и горизонтальные резервуары",
                description:"(3,5 м3)"
            },
            {
                title:"Датчики:",
                description:"давления, температуры, кислотности, вязкости, расходомеры, радарные уровнемеры."
            }
        ],
        en:[
            {
                title:"Spray drying unit",
                description:"(chamber, double cyclones, FD&ID blowers, control panel (based on Scada), chiller, heat exchangers, product cooling and packaging systems)"
            },
            {
                title: "Steam boiler, reverse osmosis, ultrafiltration system, air compressors",
                description: ""
            },
            {
                title: "Decanters",
                description: "(HAUS DDF 4042)"
            },
            {
                title:"Vertical and horizontal tanks",
                description:"(3.5 m3)"
            },
            {
                title:"Sensors:",
                description:"pressure, temperature, acidity, viscosity, flow meters, radar level meters."
            }
        ],
        kz:[
            {
                title:"Бүріккіш кептіргіш",
                description:"(камера, қос циклондар, FD&ID үрлегіштер, басқару панелі (Scada негізіндегі), салқындатқыштар, жылу алмастырғыштар, салқындату және өнімді орау жүйелері)"
            },
            {
                title: "Бу қазандығы, кері осмос, ультрафильтрация жүйесі, ауа компрессорлары",
                description: ""
            },
            {
                title: "Декантерлер",
                description: "(HAUS DDF 4042)"
            },
            {
                title:"Тік және көлденең резервуарлар",
                description:"(3.5 м3)"
            },
            {
                title:"Сенсорлар:",
                description:"қысым, температура, қышқылдық, тұтқырлық, шығын өлшегіштер, радиолокациялық деңгей өлшегіштер."
            }
        ]
    }

    const equipmentCard = equipmentCards[props.lg] || equipmentCards["ru"];

    return (
        <>
            <div className="container px-4 lg:px-0 lg:mx-auto">
                <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-x-[38px] lg:mt-[60px] lg:mb-[60px] gap-y-8 lg:gap-y-0 mt-[30px] mb-[30px] lg:px-8 xl:px-0">
                    <div className="w-full lg:w-1/2">
                        <div className="font-bold lg:text-[32px]">
                            {props.lg === "ru" && "Оборудование"}
                            {props.lg === "en" && "Equipment"}
                            {props.lg === "kz" && "Жабдық"}
                        </div>
                        <div className="font-normal lg:text-[20px] lg:mt-[15px] mt-[10px]">
                            {props.lg === "ru" && "Инновационная современная технологическая линия полностью оснащена следующими узлами, изготовленными из нержавеющей стали AISI 304/316:"}
                            {props.lg === "en" && "The innovative modern technological line is fully equipped with the following units made of AISI 304/316 stainless steel:"}
                            {props.lg === "kz" && "Инновациялық заманауи технологиялық желі AISI 304/316 тот баспайтын болаттан жасалған келесі құрылғылармен толық жабдықталған:"}
                        </div>
                        <div className="flex flex-col gap-4 mt-4">
                            {equipmentCard.map((item, index) => (
                                <div key={index} className="bg-[#E6EAEE] rounded-[16px] p-4">
                                    <div className="font-semibold">{item.title}</div>
                                    <div className="mt-2">{item.description}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 rounded-[16px]">
                        <img src={EquipmentImage} alt="EquipmentImage"/>
                    </div>
                </div>
            </div>
        </>
    )
}