import React from 'react';

export const ImgCard = ({ imageSrc, logo, text }: { imageSrc: string; logo: string; text: string | React.ReactNode }) => {
    return (
        <div className="relative p-2 w-full flex h-[650px] rounded-[16px] shadow-lg bg-[#EDE8DE]">
            {/* Left side - Image with 140% size that overflows */}
            <div className="w-1/2 relative">
                <img 
                    src={imageSrc} 
                    className="h-[130%] object-cover absolute -top-1/4 left-[35%] transform -translate-x-1/2" 
                />
            </div>
            
            {/* Right side - Logo and text */}
            <div className="w-1/2 flex flex-col justify-center items-end p-6">
                <img src={logo} alt="Logo" className="h-[100px] mb-4" />
                <p className="text-[24px] text-right leading-relaxed whitespace-pre-line">{text}</p>
            </div>
        </div>
    );
}