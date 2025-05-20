export default function FormBlock (props) {
    return (
        <>
            <div className="bg-[#F5F7FB] px-[95px] py-[65px] mb-[60px]">
                <div>
                    <div className="text-[32px] text-[#252D30] font-bold">
                        Свяжитесь с нами <br /> или отправьте нам запрос
                    </div>
                    <div className="mt-[12px] text-[#252D30] text-[20px]">
                        Мы свяжемся с вами в рабочее время!
                    </div>
                </div>
                <div className="mt-[56px] flex gap-x-[72px] justify-between">
                    <div className="bg-[#252D30] rounded-2xl text-center text-white w-1/2">
                        <p className="mt-[30px] text-[20px]">
                            Наш адрес:
                        </p>
                        <p className="mt-4 font-medium text-[20px]">
                            Поселок Жана Талап, Алматинская область, <br /> Республика Казахстан
                        </p>
                        <hr class="border border-[#B3B3B3] w-1/2 mx-auto mt-[50px]"/>
                        <p className="mt-[56px] text-[20px]">
                            Наша почта:
                        </p>
                        <p className="mt-[16px]">
                            <a href="#" className="underline">guy@agritech.kz</a>
                        </p>
                        <p className="mt-[5px] underline">
                            <a href="#">info@agritech.kz</a>
                        </p>
                        <hr class="border border-[#B3B3B3] w-1/2 mx-auto mt-[50px]"/>
                        <p className="mt-[50px] text-[20px]">
                            Международный отдел:
                        </p>
                        <div className="mt-[16px] mb-[30px]">   
                            <a href="tel:+972 545 558170" className="bg-white rounded-[50px] px-11 py-4 text-[20px] text-[#252D30]">
                                +972 545 558170
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-2xl text-center text- w-1/2">
                        <div className="mx-[52px] mt-[30px] text-[16px]">
                            <input type="text" placeholder="Имя" className="w-full border-1 border-[#AEAEAE] pl-4 py-[19px] rounded-[5px]"/>
                            <input type="text" placeholder="Фамилия" className="w-full border-1 border-[#AEAEAE] pl-4 py-[19px] mt-4 rounded-[5px]"/>
                            <input type="text" placeholder="E-mail" className="w-full border-1 border-[#AEAEAE] pl-4 py-[19px] mt-4 rounded-[5px]"/>
                            <input type="text" placeholder="Телефон" className="w-full border-1 border-[#AEAEAE] pl-4 py-[19px] mt-4 rounded-[5px]"/>
                            <input type="text" placeholder="Mansaje" className="w-full border-1 border-[#AEAEAE] pl-4 py-[52px] mt-4 rounded-[5px]"/>
                            <div className="mt-[16px] mb-[30px]">   
                                <button className="bg-[#252D30] rounded-[50px] px-[83px] py-[18px] text-[16px] text-white font-semibold">
                                    Отправить
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}