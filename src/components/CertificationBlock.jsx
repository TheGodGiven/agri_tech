import CertificationBLockBG from "../assets/CertificationBLockBG.png"
import CertificationImage from "../assets/CertificationImage.png"
import CheckIcon from '../assets/CheckIcon.png'

export default function CertificationBlock() {
    return (
        <div 
            className="mt-[60px] mb-[60px]"
            style={{
                backgroundImage: `url(${CertificationBLockBG})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100%',
            }}
        >
            <div className="container mx-auto flex items-center gap-x-[113px] py-[69px]">
                <div className="bg-[#252D30] rounded-2xl w-[520px]">
                    <div className="px-[42px] py-[45px]">
                        <div className="bg-[#C7FF1D] rounded-[12px] px-4 py-2 text-[24px] font-semibold text-[#484C52] w-[179px] h-[29px] flex items-center">
                            Сертификация
                        </div>
                        
                        <div className="mt-[66px] flex gap-x-[40px] text-white text-[20px]"> 
                            <div className="flex items-center gap-x-[8px]">
                                <img src={CheckIcon} alt="CheckIcon" className="w-[24px] h-[24px]"/>
                                <span>HACCP</span>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src={CheckIcon} alt="CheckIcon" className="w-[24px] h-[24px]"/>
                                <span>ISO 22000</span>
                            </div>
                            <div className="flex items-center gap-x-[8px]">
                                <img src={CheckIcon} alt="CheckIcon" className="w-[24px] h-[24px]"/>
                                <span>GMP</span>
                            </div>
                        </div>

                        <div className="mt-[40px]">
                            <p className="text-white text-[16px] mb-[24px] max-w-[380px]">
                                Свяжитесь с нами для получения дополнительной информации
                            </p>
                            <button className="bg-white text-[#252D30] px-[32px] py-[12px] rounded-[8px] hover:bg-[#C7FF1D] transition-colors text-[16px] font-medium">
                                Связаться
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img 
                        src={CertificationImage} 
                        alt="Certification" 
                        className="w-[120px]"
                    />
                </div>
            </div>
        </div>
    )
}