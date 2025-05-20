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
            <div className="container mx-[95px]">
                <div className="flex justify-between gap-x-[38px] mt-[60px] mb-[60px]">
                    <div className="w-1/2">
                        <div className="font-bold text-[32px]">
                            {props.lg === "ru" && "Оборудование"}
                            {props.lg === "en" && "Equipment"}
                            {props.lg === "kz" && "Жабдық"}
                        </div>
                        <div className="font-normal text-[20px] mt-[15px]">
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
                    <div className="w-1/2 rounded-[16px]">
                        <img src={EquipmentImage} alt="EquipmentImage" />
                    </div>
                </div>
            </div>
        </>
    )
}