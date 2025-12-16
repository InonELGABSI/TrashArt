import React, { useState } from 'react';

interface HowToProps {
    image: string;
    materials: string[];
    steps: string[];
}

export const HowTo: React.FC<HowToProps> = ({ image, materials, steps }) => {
    const [checkedMaterials, setCheckedMaterials] = useState<boolean[]>(
        new Array(materials.length).fill(false)
    );

    const toggleMaterial = (index: number) => {
        const newChecked = [...checkedMaterials];
        newChecked[index] = !newChecked[index];
        setCheckedMaterials(newChecked);
    };

    return (
        <div className="w-full animate-fade-in">
            <div className="flex flex-col lg:flex-row-reverse gap-0 bg-[#FDFBF7] overflow-hidden border-3 border-[#EAE8E1]">
                
                {/* Right Column - Image */}
                <div className="w-full lg:w-1/3">
                    <div className="h-full w-full py-10 px-12 border border-[#EAE8E1]">
                        <img src={image} alt="Result" className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Middle Column - Materials */}
                <div className="w-full lg:w-1/3 flex flex-col items-center justify-start border-l-3 border-r-3 border-[#EAE8E1] px-10 py-6">
                    <h3 className="text-[32px] font-bold text-[#1A1A2E] mb-8">? מה צריך</h3>
                    <div className="w-full space-y-6 dir-rtl">
                        {materials.map((material, index) => (
                            <div key={index} className="flex items-center gap-2 justify-between border-b border-gray-300 pb-2">
                                <span className="text-[24px] text-right flex-1">{material}</span>
                                <div 
                                    onClick={() => toggleMaterial(index)}
                                    className={`w-6 h-6 border-2 border-[#1A1A2E] cursor-pointer flex items-center justify-center transition-colors ${checkedMaterials[index] ? 'bg-[#4CAF50] border-[#4CAF50]' : 'bg-white'}`}
                                >
                                    {checkedMaterials[index] && (
                                        <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Left Column - Instructions */}
                <div className="w-full lg:w-1/3 flex flex-col items-center justify-start px-10 py-6">
                    <h3 className="text-[32px] font-bold text-[#1A1A2E] mb-8">הוראות הכנה</h3>
                    <div className="w-full space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-center flex-row-reverse">
                                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-dark-blue)] text-white text-[24px] flex items-center justify-center rounded">
                                    {index + 1}
                                </div>
                                <p className="text-right text-[24px] leading-tight flex-1 dir-rtl">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className=" text-[24px] bg-[#1A1A2E] text-white px-6 py-3 rounded-xl text-lg font-medium hover:bg-[#2a2a40] transition-colors shadow-lg">
                    שתף בקהילה
                </button>
            </div>
        </div>
    );
};
