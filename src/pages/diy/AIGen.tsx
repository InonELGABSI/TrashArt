import React, { useState, useRef } from 'react';
import opt1 from '../../assets/genopt/opt1.png';
import opt2 from '../../assets/genopt/opt2.jpg';
import opt3 from '../../assets/genopt/opt3.jpg';
import plusIcon from '../../assets/icons/plus.png';
import { HowTo } from './HowTo';

const OPTIONS_DATA: Record<string, { materials: string[], steps: string[] }> = {
    "אופציה א": {
        materials: [
            "2 בקבוקי יין ריקים",
            "נייר עיתון",
            "מספריים",
            "4 ברגים",
            "דבק חם"
        ],
        steps: [
            "קרעי נייר עיתון לרצועות רחבות וקמטי אותו מעט כדי לרכך את הנייר",
            "מרחי דבק חם בחלקים קטנים על הבקבוקים ולעטוף אותם ברצועות נייר",
            "הניחי את שני הבקבוקים זה לצד זה והדביקי אותם יחד עם דבק חם",
            "הדביקי את 4 הברגים על שכבת העיתון שניים על כל בקבוק, ליצירת יופי",
            "תנו לדבק להתייבש, הניחו נרות על פתחי הבקבוק, ויש לך מעמד נרות!"
        ]
    },
    "אופציה ב": {
        materials: ["בקבוק זכוכית", "צבעים", "מכחול"],
        steps: ["נקה את הבקבוק", "צבע את הבקבוק", "המתן לייבוש"]
    },
    "אופציה ג": {
        materials: ["בקבוק פלסטיק", "סכין יפנית", "אדמה", "שתיל"],
        steps: ["חתוך את הבקבוק", "מלא באדמה", "שתול את השתיל"]
    }
};

export const AIGen = () => {
    const [file, setFile] = useState<File | null>(null);
    const [generated, setGenerated] = useState(false);
    const [isGenerating, setIsGenerating] = useState(false);
    const [selectedOption, setSelectedOption] = useState<{ img: string, label: string } | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
            setGenerated(false);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
            setGenerated(false);
        }
    };

    const handleGenerate = () => {
        setIsGenerating(true);
        // Simulate processing
        setTimeout(() => {
            setIsGenerating(false);
            setGenerated(true);
        }, 1500);
    };

    const handleReset = () => {
        setFile(null);
        setGenerated(false);
        setSelectedOption(null);
    };

    return (
        <div className="w-full px-4 pb-12">
            <div className="max-w-5xl mx-auto bg-[#FDFBF7] rounded-[3rem] p-8 md:p-12 shadow-sm border border-[#EAE8E1]">
                
                {/* Upload Area */}
                <div 
                    className={`w-full bg-[#EAE8E1] rounded-[2rem] h-80 flex flex-col items-center justify-center cursor-pointer transition-all relative overflow-hidden ${!file ? 'hover:bg-[#e4e2db]' : ''}`}
                    onDragOver={handleDragOver}
                    onDrop={handleDrop}
                    onClick={() => !generated && fileInputRef.current?.click()}
                >
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        className="hidden" 
                        accept=".jpg,.png,.jpeg"
                        onChange={handleFileSelect}
                    />
                    
                    {file ? (
                        <img 
                            src={URL.createObjectURL(file)} 
                            alt="Uploaded" 
                            className="h-full w-full object-contain p-4" 
                        />
                    ) : (
                        <>
                            <div className="mb-4">
                                <img src={plusIcon} alt="Add" className="w-20 h-20" />
                            </div>
                            <p className="text-xl font-medium text-gray-800 mb-2">גררו תמונה לכאן</p>
                            <p className="text-base text-gray-600 uppercase tracking-wider">JPG, PNG</p>
                        </>
                    )}
                </div>

                {/* Actions / Results */}
                <div className="mt-10 flex flex-col items-center min-h-[100px]">
                    {file && !generated && !isGenerating && (
                        <button 
                            onClick={(e) => { e.stopPropagation(); handleGenerate(); }}
                            className="bg-[#1A1A2E] text-white px-10 py-3 rounded-xl text-xl font-medium hover:bg-[#2a2a40] transition-colors shadow-lg"
                        >
                            צור רעיון
                        </button>
                    )}

                    {isGenerating && (
                        <div className="flex flex-col items-center">
                            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#1A1A2E] mb-4"></div>
                            <p className="text-lg text-gray-600">מעבד תמונה...</p>
                        </div>
                    )}

                    {generated && (
                        <div className="w-full animate-fade-in">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
                                {[
                                    { img: opt3, label: "אופציה ג" },
                                    { img: opt2, label: "אופציה ב" },
                                    { img: opt1, label: "אופציה א" }
                                ].map((opt, idx) => (
                                    <div 
                                        key={idx} 
                                        className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ${selectedOption?.label === opt.label ? 'scale-105' : 'hover:scale-105'}`}
                                        onClick={() => setSelectedOption(opt)}
                                    >
                                        <div className={`w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-md mb-4 border-4 transition-all ${selectedOption?.label === opt.label ? 'border-[#1A1A2E]' : 'border-transparent group-hover:border-[#EAE8E1]'}`}>
                                            <img src={opt.img} alt={opt.label} className="w-full h-full object-cover" />
                                        </div>
                                        <span className={`text-2xl font-bold ${selectedOption?.label === opt.label ? 'text-[#1A1A2E]' : 'text-[#1A1A2E]'}`}>{opt.label}</span>
                                    </div>
                                ))}
                            </div>
                            
                            <div className="flex justify-center">
                                <button 
                                    onClick={handleReset}
                                    className="bg-[#1A1A2E] text-white px-10 py-3 rounded-xl text-lg font-medium hover:bg-[#2a2a40] transition-colors shadow-lg"
                                >
                                    טעינה מחדש
                                </button>
                            </div>
                        </div>
                    )}

                    {selectedOption && (
                        <div className="w-full mt-16 border-t border-[#EAE8E1] pt-16">
                            <HowTo 
                                image={selectedOption.img}
                                materials={OPTIONS_DATA[selectedOption.label]?.materials || []}
                                steps={OPTIONS_DATA[selectedOption.label]?.steps || []}
                            />
                            <div className="flex justify-center mt-8">
                                <button 
                                    onClick={() => setSelectedOption(null)}
                                    className="text-gray-500 hover:text-gray-800 underline"
                                >
                                    סגור הוראות
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};
