export const ImgCard = ({ imageSrc, logo, text }: { imageSrc: string; logo: string; text: string }) => {
    return (
        <div className="relative w-full flex h-[600px] rounded-[16px] shadow-lg bg-[#E4DFD3]">
            {/* Left side - Image with 140% size that overflows */}
            <div className="w-1/2 relative">
                <img 
                    src={imageSrc} 
                    className="h-[130%] object-cover absolute -top-1/4 left-1/2 transform -translate-x-1/2" 
                />
            </div>
            
            {/* Right side - Logo and text */}
            <div className="w-1/2 flex flex-col justify-center items-end p-6">
                <img src={logo} alt="Logo" className="h-16 mb-4" />
                <p className="text-gray-700 text-right leading-relaxed">{text}</p>
            </div>
        </div>
    );
}