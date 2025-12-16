import hartIcon from '../../assets/icons/hart.png';
import smallLogo from '../../assets/logo-small.png';
import facebookIcon from '../../assets/icons/facebook.png';
import instagramIcon from '../../assets/icons/instagram.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';

export const Footer = () => {
    return (
        <div dir="rtl" className="w-full font-sans">
            {/* CTA Section */}
            <div className=" py-24 flex flex-col items-center justify-center text-center gap-6 px-4">
                <img src={hartIcon} alt="Heart" className="w-8 h-8 object-contain opacity-80" />
                <h2 className="text-[20px] font-light">מוכנים להתחיל ליצור?</h2>
                <p className="text-[24px] max-w-2xl">
                    הצטרפו לאלפי יוצרים שכבר הפכו את הזבל שלהם לאמנות
                </p>
            </div>

            {/* Footer Section */}
            <footer className="bg-[#EFECE6] py-16 text-gray-800 border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-8">
                    
                    {/* Column 1: Main Search */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-right">
                        <h3 className="font-bold text-lg mb-6 text-gray-900">חיפוש ראשי</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">חנות</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">עשה זאת בעצמך</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">קהילה</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">אודות</a></li>
                        </ul>
                    </div>

                    {/* Column 2: Info & Service */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-right">
                        <h3 className="font-bold text-lg mb-6 text-gray-900">מידע ושירות</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">שאלות תשובות</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">הצהרת נגישות</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">תקנון</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Community */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-right">
                        <h3 className="font-bold text-lg mb-6 text-gray-900">קהילה</h3>
                        <ul className="space-y-3 text-gray-600">
                            <li><a href="#" className="hover:text-blue-600 transition-colors">מועדון חברים</a></li>
                            <li><a href="#" className="hover:text-blue-600 transition-colors">פורום חברי המועדון</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact */}
                    <div className="flex flex-col items-center md:items-start text-center md:text-right">
                        <h3 className="font-bold text-lg mb-6 text-gray-900">יצירת קשר</h3>
                        <ul className="space-y-4 text-gray-600">
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <img src={instagramIcon} alt="Instagram" className="w-5 h-5 object-contain" />
                                <span className="font-alumni text-xl tracking-wide">ArtrashIL</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <img src={whatsappIcon} alt="WhatsApp" className="w-5 h-5 object-contain" />
                                <span className="font-alumni text-xl tracking-wide">054-8009998</span>
                            </li>
                            <li className="flex items-center gap-3 justify-center md:justify-start">
                                <img src={facebookIcon} alt="Facebook" className="w-5 h-5 object-contain" />
                                <span>ארטראש ישראל</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 5: Logo/Icon (Leftmost) */}
                    <div className="flex items-start justify-center md:justify-center">
                         <img 
                            src={smallLogo} 
                            alt="ArtTrash" 
                            className="w-10 h-auto opacity-90 mix-blend-multiply hover:scale-105 transition-transform duration-300" 
                        />
                    </div>
                </div>
                
                {/* Copyright / Bottom Bar */}
                <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-300 text-center text-gray-500 text-sm">
                    <p>© {new Date().getFullYear()} <span className="font-alumni text-lg">ArtTrash</span>. כל הזכויות שמורות.</p>
                </div>
            </footer>
        </div>
    );
}