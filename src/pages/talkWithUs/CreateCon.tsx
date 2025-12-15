import React from 'react';

export const CreateCon = () => {
    return (
        <div className="w-full pb-20 flex justify-center px-4">
            <div className="w-full max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold text-[#2A3B8F] text-center mb-10">צוות ArtTrash חוזר לכל פנייה</h2>
                
                <div className="bg-[#EAE8E1] rounded-[3rem] p-8 md:p-16 shadow-sm">
                    <form className="flex flex-col gap-10" dir="rtl">
                        {/* Name Input */}
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="שם מלא"
                                className="w-full bg-transparent border-b border-[#1A1A2E] py-2 text-right focus:outline-none focus:border-[#2A3B8F] placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="אימייל"
                                className="w-full bg-transparent border-b border-[#1A1A2E] py-2 text-right focus:outline-none focus:border-[#2A3B8F] placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            />
                        </div>

                        {/* Subject Input */}
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="נושא הפנייה"
                                className="w-full bg-transparent border-b border-[#1A1A2E] py-2 text-right focus:outline-none focus:border-[#2A3B8F] placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="mt-6">
                            <textarea 
                                placeholder="איזו מחשבה, רעיון או השראה תרצו לחלוק איתנו?"
                                className="w-full bg-[#FDFBF7] rounded-[2rem] p-8 h-48 text-right resize-none focus:outline-none focus:ring-1 focus:ring-[#2A3B8F] placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-2">
                            <button 
                                type="button"
                                className="bg-[#1A1A2E] text-white px-16 py-3 rounded-full text-xl font-medium hover:bg-opacity-90 transition-all"
                            >
                                שליחה
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};
