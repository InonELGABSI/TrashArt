import React from 'react';
import searchIcon from '../../assets/icons/search.png';

interface HeroSearchProps {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

export const HeroSearch: React.FC<HeroSearchProps> = ({ title, subtitle, backgroundImage }) => {
    return (
        <div className="relative h-[700px] w-full flex flex-col justify-center items-center text-center px-4 bg-[#FDFBF7]">
            <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />

            <div className="relative z-10 max-w-3xl w-full flex flex-col items-center gap-6">
                <h1 className="text-[48px] font-bold text-[#1A1A2E]" dir="rtl">
                    {title}
                </h1>
                <p className="text-[32px] font-light text-[#1A1A2E]" dir="rtl">
                    {subtitle}
                </p>
                
                <div className="w-[80%] max-w-3xl mt-8 relative">
                    {/* Search Icon (Right) */}
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none z-10">
                        <img src={searchIcon} alt="Search" className="w-12 h-12 object-contain" />
                    </div>

                    <input 
                        type="text" 
                        placeholder="חפשו נושאים, רעיונות ויוצרים" 
                        className="w-full py-4 pr-20 pl-40 rounded-full bg-white text-gray-500 text-[24px] shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all text-right placeholder-gray-400"
                        dir="rtl"
                    />
                    
                    {/* Button (Left) */}
                    <button className="absolute cursor-pointer left-0 top-0 bottom-0 bg-[var(--color-dark-blue)] text-white rounded-full px-8 flex items-center gap-3 hover:bg-[var(--color-blue)] transition-colors group">
                        <div className="bg-white rounded-full p-1.5 transition-transform group-hover:-translate-x-1">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#1B2236]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </div>
                        <span className="font-bold text-[24px] tracking-wide">חיפוש</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
