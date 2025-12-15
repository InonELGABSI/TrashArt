import logo from '../../assets/logo-type.png';
import canMan from '../../assets/can-man.png';
import bottleMan from '../../assets/bottle-man.png';

export const Hero = () => {
    return (
        <div className=" text-center h-screen flex flex-col justify-center items-center px-4 py-0 gap-20 relative overflow-hidden">
                {/* section 1 */}

            <div> 
                {/* Logo-type at the top center */}
                <div className="flex justify-center mb-8">
                    <img src={logo} alt="ArtTrash Logo" className="h-24" />
                </div>
                
                {/* First Hebrew sentence */}
                <p className="text-2xl font-semibold mb-6 max-w-[150px] md:max-w-[300px] leading-relaxed break-words mx-auto" dir="rtl">
                    הצטרפו לקהילה שמוכיחה שמה שנזרק יכול לשנות עולם
                </p>
            </div>
                {/* section 2 */}
            <div> 
                {/* Second Hebrew sentence */}
                <p className="text-xl mb-10 max-w-[150px] md:max-w-[300px] leading-relaxed opacity-90 break-words mx-auto" dir="rtl">
                    היצירה הבאה שלכם מתחילה בקהילה כאן יוצרים, ממחזרים, ומשאירים חותם
                </p>
                
                {/* Action buttons */}
                <div className="flex flex-col gap-6 justify-center items-center">
                    <button className="bg-[#D45C2B] w-[180px] text-white border-2 border-white px-4 py-2 cursor-pointer rounded-[16px] text-lg transition-colors duration-200">
                        עוד עלינו
                    </button>
                    <button className=" bg-[#C0E3EF] w-[180px] px-4 py-2 rounded-[16px] font-bold text-lg cursor-pointer hover:bg-gray-100 transition-colors duration-200 shadow-lg">
                        הצטרפו לקהילה
                    </button>
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