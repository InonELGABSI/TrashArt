import { AllProjects } from './AllProjects';

export const OurCommunity = () => {
    return (
        <div className="w-full py-20">
            <div className="max-w-7xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-[64px] font-bold text-[#1A1A2E] mb-6">הקהילה שלנו</h2>
                    <div className="text-[40px] text-gray-600 space-y-2">
                        <p>כאן המקום שלכם ליצור, לשתף ולהיות חלק</p>
                        <p>העלו את היצירות הממוחזרות שלכם והצטרפו לעשרות יוצרים שמשנים את העולם בעזרת אמנות</p>
                    </div>
                </div>

                {/* Projects Grid */}
                <AllProjects />

                {/* Load More Button */}
                <div className="flex justify-center mt-16">
                    <button className="bg-[#1A1A2E] cursor-pointer text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-[#2a2a40] transition-colors shadow-lg">
                        טען עוד פרויקטים
                    </button>
                </div>
            </div>
        </div>
    );
};
