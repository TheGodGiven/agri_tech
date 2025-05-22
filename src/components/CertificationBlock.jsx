import CertificationBLockBG from "../assets/CertificationBLockBG.png"
import CertificationImage from "../assets/CertificationImage.png"
import CheckIcon from '../assets/CheckIcon.png'
import HaccpLogo from '../assets/HaccpLogo.png'
import GmpLogo from '../assets/GmpLogo.png'
import IsoLogo from '../assets/IsoLogo.png'

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
            <div className="container mx-auto px-4 lg:px-[95px] flex flex-col lg:flex-row items-center gap-y-8 lg:gap-y-0 lg:gap-x-[113px] py-[40px] lg:py-[69px]">
                <div className="bg-[#252D30] rounded-2xl w-full lg:w-[75%] p-6 lg:p-[42px]">
                    <div className="bg-[#C7FF1D] rounded-[12px] px-4 py-2 text-[18px] lg:text-[24px] font-semibold text-[#484C52] max-w-max flex items-center">
                        Сертификация
                    </div>
                    
                    <div className="mt-8 lg:mt-[66px] flex flex-col lg:flex-row gap-y-4 lg:gap-y-0 lg:gap-x-[40px] text-white text-[16px] lg:text-[20px]"> 
                        <div className="flex items-center gap-x-[8px]">
                            <img src={CheckIcon} alt="CheckIcon" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"/>
                            <span>HACCP</span>
                        </div>
                        <div className="flex items-center gap-x-[8px]">
                            <img src={CheckIcon} alt="CheckIcon" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"/>
                            <span>ISO 22000</span>
                        </div>
                        <div className="flex items-center gap-x-[8px]">
                            <img src={CheckIcon} alt="CheckIcon" className="w-[20px] h-[20px] lg:w-[24px] lg:h-[24px]"/>
                            <span>GMP</span>
                        </div>
                    </div>

                    <div className="mt-[40px]">
                        <p className="text-white text-[14px] lg:text-[16px] mb-[24px] max-w-[380px]">
                            Свяжитесь с нами для получения дополнительной информации
                        </p>
                        <button className="bg-white text-[#252D30] px-6 py-3 rounded-[8px] hover:bg-[#C7FF1D] transition-colors text-[14px] lg:text-[16px] font-medium">
                            Связаться
                        </button>
                    </div>
                </div>
                <div className="bg-[#F5F7FB] rounded-2xl w-full lg:w-1/4 flex lg:flex-col items-center justify-around p-6 lg:p-8 gap-y-6 lg:gap-y-0">
                    <img src={HaccpLogo} alt="HACCP Logo" className="w-[100px] lg:w-[120px] h-auto"/>
                    <img src={GmpLogo} alt="GMP Logo" className="w-[100px] lg:w-[120px] h-auto"/>
                    <img src={IsoLogo} alt="ISO 22000 Logo" className="w-[100px] lg:w-[120px] h-auto"/>
                </div>
            </div>
        </div>
    )
}