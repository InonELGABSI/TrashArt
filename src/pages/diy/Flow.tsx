export const Flow = () => {
    const steps = [
        {
            number: 1,
            text: "מעלים תמונה של הפריט אותו רוצים למחזר"
        },
        {
            number: 2,
            text: <>מנתח את התמונה <span className="font-alumni tracking-wide">AI</span>-ה</>
        },
        {
            number: 3,
            text: "מקבלים רעיון יצירתי"
        },
        {
            number: 4,
            text: "יוצרים וממחזרים"
        }
    ];

    return (
        <div className="w-full py-12 my-10 px-4">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse justify-between items-center gap-12">
                {steps.map((step) => (
                    <div key={step.number} className="relative flex flex-col items-center w-full md:w-1/4">
                        {/* Number */}
                        <div className="absolute -top-6 z-10">
                            <span className="text-6xl font-abril font-bold text-black">
                                {step.number}
                            </span>
                        </div>
                        
                        {/* Card */}
                        <div className="bg-[#EDE8DE] rounded-3xl p-8 w-full aspect-square flex items-center justify-center text-center mt-4 shadow-sm">
                            <p className="text-[24px] font-medium text-gray-800 dir-rtl">
                                {step.text}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
