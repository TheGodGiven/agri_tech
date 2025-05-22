import Logo from "../assets/Logo.png"

export default function Footer (props) {
    return (
        <>
            <div className="bg-[#252D30] py-10 lg:py-[70px]">
                <div className="container px-4 lg:px-0 lg:mx-auto flex flex-col lg:flex-row justify-between">
                    <div>
                        <div className="flex justify-center items-center gap-x-[16px]">
                            <div>
                                <img src={Logo} alt="Logo" className="w-[73px]" />
                            </div>
                            <div className="text-[16px] text-white">
                                <p>ТОО «Agritech»</p>
                                <p>Развитие и качество</p>
                            </div>
                        </div>
                        <div className="flex flex-col lg:flex-row items-center mt-10 gap-y-4 lg:gap-x-[60px] lg:mt-[107px] text-[16px] text-[#FFFFFF]">
                            <a href="#">О проекте</a>
                            <a href="#">Комплекс</a>
                            <a href="#">Продукция</a>
                            <a href="#">Контакты</a>
                        </div>
                    </div>
                    <div className="text-[white] text-[14px] mt-5 lg:mt-0">
                        <div className="flex justify-center items-center gap-x-3 lg:gap-x-[21px]">
                            <div>
                                <p>Адрес:</p>
                                <p className="mt-[28px]">Телефон:</p>
                                <p className="mt-[14px]">Почта:</p>
                                <p className="mt-[19px]">Соц. сети:</p>
                            </div>
                            <div>
                                <p>Республика Казахстан, г.Алатау</p>
                                <p className="mt-[28px]">(727) 38-4356</p>
                                <p className="mt-[14px]">@AlatauMiddleCoridor</p>
                                <p className="mt-[19px]">in</p>
                            </div>
                        </div>
                        <div className="text-white mt-[31px]">
                            © 2025 Все права принадлежат ALATAU Middle Coridor
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}