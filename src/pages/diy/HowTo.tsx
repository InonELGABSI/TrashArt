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
            <div className="flex flex-col lg:flex-row-reverse gap-8 bg-[#FDFBF7] rounded-3xl overflow-hidden">
                
                {/* Right Column - Image */}
                <div className="w-full lg:w-1/3">
                    <div className="h-full w-full bg-white p-4 rounded-3xl border border-[#EAE8E1]">
                        <img src={image} alt="Result" className="w-full h-full object-cover rounded-2xl" />
                    </div>
                </div>

                {/* Middle Column - Materials */}
                <div className="w-full lg:w-1/3 flex flex-col items-center border-l border-r border-[#EAE8E1] px-6 py-4">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8">? מה צריך</h3>
                    <div className="w-full space-y-6 dir-rtl">
                        {materials.map((material, index) => (
                            <div key={index} className="flex items-center gap-2 justify-between border-b border-gray-300 pb-2">
                                <span className="text-lg text-gray-800 text-right flex-1">{material}</span>
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
                <div className="w-full lg:w-1/3 flex flex-col items-center px-6 py-4">
                    <h3 className="text-2xl font-bold text-[#1A1A2E] mb-8">הוראות הכנה</h3>
                    <div className="w-full space-y-6">
                        {steps.map((step, index) => (
                            <div key={index} className="flex gap-4 items-start flex-row-reverse">
                                <div className="flex-shrink-0 w-8 h-8 bg-[#1A1A2E] text-white flex items-center justify-center font-bold rounded">
                                    {index + 1}
                                </div>
                                <p className="text-right text-gray-800 text-lg leading-tight flex-1 dir-rtl">
                                    {step}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex justify-center mt-12">
                <button className="bg-[#1A1A2E] text-white px-12 py-3 rounded-xl text-lg font-medium hover:bg-[#2a2a40] transition-colors shadow-lg">
                    שתף בקהילה
                </button>
            </div>
        </div>
    );
};
