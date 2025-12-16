import logoType from '../../assets/logo-type.png';
import { Kolaj } from './Kolaj';

export const AboutHero = () => {
    return (
        <div className="w-full min-h-screen flex items-center py-20">
            <div className="max-w-[1440px] mx-auto px-6 w-full">
                <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
                    
                    {/* Left Side - Text */}
                    <div className="flex flex-col items-center lg:items-end text-right">
                        <img src={logoType} alt="ARTRASH" className="h-32 mb-8" />
                        
                        <div className="space-y-2 text-[40px] text-[#1A1A2E] leading-relaxed" dir="rtl">
                            <p>נולד מהאהבה לאומנות ומהאמונה שאין דבר שהוא באמת זבל.</p>
                            <p>אנחנו קהילה יוצרת שמחברת בין יצירתיות לקיימות, ומראה שכל</p>
                            <p>חפץ שנזרק יכול להפוך ליצירה חדשה, מרגשת ומשמעותית.</p>
                            <p>באתר שלנו תמצאו רעיונות, מדריכי <span className="font-alumni tracking-wide">DIY</span>, השראות, כתבות וגם</p>
                            <p>כלים שמבוססים על <span className="font-alumni tracking-wide">AI</span> שיעזרו לכם להמציא מחדש כל חומר</p>
                            <p>אנחנו כאן כדי לעודד יצירה, שיתוף וגילוי - ולהפוך את העולם</p>
                            <p>ליפה יותר, פריט ממוחזר אחד בכל פעם.</p>
                        </div>
                    </div>

                    {/* Right Side - Collage */}
                    <div>
                        <Kolaj />
                    </div>

                </div>
            </div>
        </div>
    );
};
