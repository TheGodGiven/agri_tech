import ProductsCharacterImage from '../assets/ProductsCharacterImage.png'
import ProductsPoundImage from '../assets/ProductsPoundImage.png'

export default function ProductBlock(props) {
    return (
        <>
            <div className="container px-4 lg:px-8 lg:mx-auto mt-[60px] mb-[40px]">
                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-12">
                    <div className="w-full lg:w-[50%]">
                        <div className="text-[18px] lg:text-[24px] font-semibold bg-[#C7FF1D] text-[#484C52] rounded-[12px] p-2 max-w-max">
                            {props.lg == 'ru' && 'Наша продукция'}
                            {props.lg == 'en' && 'Our products'}
                            {props.lg == 'kz' && 'Біздің өнімдер'}
                        </div>
                        <div className="mt-[16px] text-[24px] lg:text-[32px] font-bold">
                            {props.lg == 'ru' && 'Высококачественный изолированный соевый белок'}
                            {props.lg == 'en' && 'High quality isolated soy protein'}
                            {props.lg == 'kz' && 'Жоғары сапалы изоляцияланған соя белогы'}
                        </div>
                        <div className="mt-[32px] text-[16px] lg:text-[20px]">
                            {props.lg == 'ru' && 'Изолированный соевый белок, полученный путем ферментативного гидролиза, представляет собой продукт переработки белого лепестка, особого соевого шрота, полученного после экстрагирования масла из соевых бобов. Процесс делится на следующие основные этапы:'}
                            {props.lg == 'en' && 'Isolated soy protein obtained by enzymatic hydrolysis is a product of processing white petals, a special soybean meal obtained after extracting oil from soybeans. The process is divided into the following main stages:'}
                            {props.lg == 'kz' && 'Ферментативті гидролиз арқылы алынған изоляцияланған соя белогы - соя дәндерінен майды экстракциялау арқылы алынған ерекше соя шроты, ақ жапырақтарды өңдеу өнімі. Процесс келесі негізгі кезеңдерге бөлінеді:'}
                        </div>
                    </div>
                    <div className="w-full lg:w-[50%] flex flex-col gap-y-4">
                        <p className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold h-full flex items-center">
                            {props.lg == 'ru' && '1. Два этапа экстракции'}
                            {props.lg == 'en' && '1. Two stages of extraction'}
                            {props.lg == 'kz' && '1. Екі кезеңді экстракция'}
                        </p>
                        <p className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold h-full flex items-center">
                            {props.lg == 'ru' && '2. Кислотное осаждение экстрогированного белка'}
                            {props.lg == 'en' && '2. Acid precipitation of extruded protein'}
                            {props.lg == 'kz' && '2. Экструдталған белоктың қышқылды шөгуі'}
                        </p>
                        <p className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold h-full flex items-center">
                            {props.lg == 'ru' && '3. Нейтрализация и возврат функциональности'}
                            {props.lg == 'en' && '3. Neutralization and return of functionality'}
                            {props.lg == 'kz' && '3. Нейтрализация және функционалдылықты қайтару'}
                        </p>
                        <p className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold h-full flex items-center">
                            {props.lg == 'ru' && '4. Ферментация'}
                            {props.lg == 'en' && '4. Fermentation'}
                            {props.lg == 'kz' && '4. Ферментация'}
                        </p>
                        <p className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold h-full flex items-center">
                            {props.lg == 'ru' && '5. Распылительная сушка'}
                            {props.lg == 'en' && '5. Spray drying'}
                            {props.lg == 'kz' && '5. Спрей кептіру'}
                        </p>
                        <p className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold h-full flex items-center">
                            {props.lg == 'ru' && '6. Упаковка'}
                            {props.lg == 'en' && '6. Packaging'}
                            {props.lg == 'kz' && '6. Қаптама'}
                        </p>
                    </div>
                </div>
                <div className="flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-[66px] mt-[40px]">
                    <div className='w-full lg:w-1/2'>
                        <img src={ProductsPoundImage} alt="ProductsPoundImage" className='rounded-2xl w-full h-auto'/>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='text-[24px] lg:text-[32px] font-bold'>
                            {props.lg == 'ru' && "Изолированный соевый белок"}
                            {props.lg == 'en' && "Isolated Soy Protein"}
                            {props.lg == 'kz' && "Оқшауланған соя протеині"}
                        </div>
                        <div className='mt-[32px] text-[14px] lg:text-[16px]'>
                        {props.lg == 'ru' && 
                            (<>Изолят соевого белка представляет собой высокопитательный порошкообразный продукт светло-кремового цвета. Он сделан из обезжиренной соевой муки и имеет очень высокое содержание белка. Мы производим его с минимальным содержанием белка 92%. Поскольку большая часть жиров и углеводов удалена, изолят имеет нейтральный вкус и запах.
                            <br /> <br />Изолят содержит незаменимые микро- и макроэлементы, витамины, аминокислоты, пищевые волокна (целлюлозу).
                            <br /><br />Наш продукт относится к высшему классу белков и используется в самых требовательных и чувствительных к качеству процессах и продуктах, даже таких как детские смеси, специальные питательные смеси, коктейли, а также высококачественное питание для домашних питомцев.</>)}
                        {props.lg == 'en' && 
                            (<>Soy protein isolate is a highly nutritious powder product of light cream color. It is made from defatted soy flour and has a very high protein content. We produce it with a minimum protein content of 92%. Since most of the fats and carbohydrates are removed, the isolate has a neutral taste and smell.
                            <br /><br /> The isolate contains essential micro- and macroelements, vitamins, amino acids, dietary fiber (cellulose). 
                            <br /><br />Our product belongs to the highest class of proteins and is used in the most demanding and quality-sensitive processes and products, even such as baby formulas, special nutritional mixtures, cocktails, as well as high-quality food for pets</>)}
                        {props.lg == 'kz' && 
                            (<>Соя протеинінің изоляты – жоғары қоректік, ашық кремді түсті ұнтақ өнім. Ол майсыздандырылған соя ұнынан жасалған және ақуыздың мөлшері өте жоғары. Біз оны ең аз ақуыз мөлшері 92% құрайтын шығарамыз. Майлар мен көмірсулардың көп бөлігі жойылғандықтан, изолят бейтарап дәм мен иіске ие.
                            <br /><br /> Изолятта маңызды микро- және макроэлементтер, витаминдер, аминқышқылдары, тағамдық талшықтар (целлюлоза) бар. 
                            <br /><br />Біздің өнім белоктардың ең жоғары класына жатады және ең талап етілетін және сапаға сезімтал процестер мен өнімдерде, тіпті нәресте формулалары, арнайы тағамдық қоспалар, коктейльдер, сондай-ақ үй жануарларына арналған жоғары сапалы азық-түліктерде қолданылады.</>)}
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row gap-y-8 lg:gap-y-0 lg:gap-x-[52px] mt-[40px]'>
                    <div className='w-full lg:w-1/2'>
                        <img src={ProductsCharacterImage} alt="ProductsCharacterImage" className='rounded-2xl w-full h-auto'/>
                    </div>
                    <div className='w-full lg:w-1/2'>
                        <div className='text-[24px] lg:text-[30px] font-semibold'>
                            {props.lg == "ru" && "Характеристики качества"}
                            {props.lg == "en" && "Quality characteristics"}
                            {props.lg == "kz" && "Сапа сипаттамалары"}
                        </div>
                        <div className='flex flex-col gap-y-[16px]'>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Protein (%mfb)</p>
                                <p>92</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Moisture (gr)</p>
                                <p>5.5</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Fat (gr)</p>
                                <p>0.5</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Saturated fats (gr)</p>
                                <p>0.075</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Cholesterol (mg)</p>
                                <p>0</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Calories (kcal)</p>
                                <p>352</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Calories from Fat (kcal)</p>
                                <p>4.5</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Calories from Saturated Fat (kcal)</p>
                                <p>0.675</p>
                            </div>
                            <div className="bg-[#E6EAEE] p-4 rounded-[16px] text-[14px] lg:text-[16px] font-semibold flex justify-between items-center h-[50px]">
                                <p>Ash (gr)</p>
                                <p>5 max</p>
                            </div>
                        </div>
                        <div className='text-[14px] lg:text-[16px] font-semibold flex items-center justify-center mt-[24px] bg-[#252D30] py-4 rounded-[50px] text-white'>
                            <button>Подробнее</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}