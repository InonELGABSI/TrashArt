import React from 'react';
import logoType from '../../assets/logo-type.png';
import { Kolaj } from './Kolaj';

export const AboutHero = () => {
    return (
        <div className="w-full min-h-screen flex items-center py-20">
            <div className="max-w-7xl mx-auto px-4 w-full">
                <div className="flex flex-col lg:flex-row items-center gap-0">
                    
                    {/* Left Side - Text */}
                    <div className="lg:w-1/2 flex flex-col items-center lg:items-end text-right">
                        <img src={logoType} alt="ARTRASH" className="h-24 mb-8" />
                        
                        <div className="space-y-2 text-xl md:text-2xl font-medium text-[#1A1A2E] leading-relaxed dir-rtl">
                            <p>נולד מהאהבה לאומנות ומהאמונה שאין דבר שהוא באמת זבל.</p>
                            <p>אנחנו קהילה יוצרת שמחברת בין יצירתיות לקיימות, ומראה שכל</p>
                            <p>חפץ שנזרק יכול להפוך ליצירה חדשה, מרגשת ומשמעותית.</p>
                            <p>באתר שלנו תמצאו רעיונות, מדריכי DIY, השראות, כתבות וגם</p>
                            <p>כלים שמבוססים על AI שיעזרו לכם להמציא מחדש כל חומר</p>
                            <p>אנחנו כאן כדי לעודד יצירה, שיתוף וגילוי - ולהפוך את העולם</p>
                            <p>ליפה יותר, פריט ממוחזר אחד בכל פעם.</p>
                        </div>
                    </div>

                    {/* Right Side - Collage */}
                    <div className=" lg:w-1/2">
                        <Kolaj />
                    </div>

                </div>
            </div>
        </div>
    );
};
