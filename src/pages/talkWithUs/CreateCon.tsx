export const CreateCon = () => {
    return (
        <div className="w-full pb-20 flex justify-center px-4">
            <div className="w-full max-w-7xl">
                <h2 className="text-[24px] text-[var(--color-blue)] font-alumni font-normal text-center mb-6">חוזר לכל פנייה ArtTrash צוות</h2>
                
                <div className="bg-[#EDE8DE] rounded-[3rem] p-8 md:p-16 shadow-sm">
                    <form className="flex flex-col gap-10" dir="rtl">
                        {/* Name Input */}
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="שם מלא"
                                className="w-full bg-transparent border-b-2 border-[#1A1A2E] py-2 text-right focus:outline-none placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="relative">
                            <input 
                                type="email" 
                                placeholder="אימייל"
                                className="w-full bg-transparent border-b-2  border-[var(--color-black)] py-2 text-right focus:outline-none placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            />
                        </div>

                        {/* Subject Input */}
                        <div className="relative">
                            <input 
                                type="text" 
                                placeholder="נושא הפנייה"
                                className="w-full bg-transparent border-b-2 border-[#1A1A2E] py-2 text-right focus:outline-none  placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            />
                        </div>

                        {/* Message Textarea */}
                        <div className="mt-6">
                            <textarea 
                                placeholder="איזו מחשבה, רעיון או השראה תרצו לחלוק איתנו?"
                                className="w-full bg-[#FEFAF6] rounded-[2rem] p-8 h-48 text-right resize-none focus:outline-none focus:ring-1  placeholder-[#8A8A8A] text-xl placeholder:text-right"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end mt-2">
                            <button 
                                type="button"
                                className="cursor-pointer bg-[#1A1A2E] text-white px-16 py-3 rounded-full text-xl font-medium hover:bg-opacity-90 transition-all"
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
