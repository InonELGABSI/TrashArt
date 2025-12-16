import logo from '../../assets/logo-type.png';
import canMan from '../../assets/can-man.png';
import bottleMan from '../../assets/bottle-man.png';
import { Link } from 'react-router-dom';

export const Hero = () => {
    return (
        <div className=" text-center h-screen flex flex-col justify-center items-center px-4 py-0 gap-20 relative overflow-hidden">
                {/* section 1 */}

            <div> 
                {/* Logo-type at the top center */}
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="ArtTrash Logo" className="h-24" />
                </div>
                <div>
                {/* First Hebrew sentence */}
                <div className="text-[36px] font-semibold mb-0 w-[300px] leading-relaxed break-words mx-auto" dir="rtl">
                    הצטרפו לקהילה שמוכיחה
                </div>
                <div className="text-[36px] font-semibold mb-6 w-[500px] leading-relaxed break-words mx-auto" dir="rtl">
                   שמה שנזרק יכול לשנות עולם
                </div>
                </div>

            </div>
                {/* section 2 */}
            <div> 
                {/* Second Hebrew sentence */}
                <p className="text-[24px] mb-10 max-w-[150px] md:max-w-[300px] leading-relaxed opacity-90 break-words mx-auto" dir="rtl">
                    היצירה הבאה שלכם מתחילה בקהילה כאן יוצרים, ממחזרים, ומשאירים חותם
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-col gap-6 justify-center items-center">
                    <Link to="/CommunityPage" className="bg-[#C0E3EF] w-[150px] px-[8px] py-[16px] text-[24px] rounded-[16px] font-bold text-lg cursor-pointer flex justify-center items-center">
                        הצטרפו לקהילה
                    </Link>
                    <Link to="/AboutPage" className="bg-[#D45C2B] w-[150px] text-white border-2 border-white px-[8px] py-[16px] text-[24px] cursor-pointer rounded-[16px] flex justify-center items-center">
                        עוד עלינו
                    </Link>
                </div>
            </div>

            {/* Fixed positioned characters */}
            <img 
                src={canMan} 
                alt="Can Man" 
                className="absolute -bottom-50 -left-25 h-[100%] w-auto z-10"
            />
            <img 
                src={bottleMan} 
                alt="Bottle Man" 
                className="absolute -bottom-50 -right-25 h-[100%] w-auto z-10 scale-x-[-1]"
            />

        </div>
    );
}