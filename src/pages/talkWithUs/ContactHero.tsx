import React from 'react';
import contactHeroBg from '../../assets/contactHero.png';
import con1 from '../../assets/icons/con1.png'; // Whatsapp
import con2 from '../../assets/icons/con2.png'; // Email
import con3 from '../../assets/icons/con3.png'; // Instagram

export const ContactHero = () => {
    const contactMethods = [
        {
            icon: con3,
            title: "אינסטגרם",
            description: "בואו להגיד היי באינסטגרם",
            detail: "@ArtrashIL"
        },
        {
            icon: con2,
            title: "אימייל",
            description: "לשאלות, בקשות ושיתופי פעולה",
            detail: "Artrash@gmail.com"
        },
        {
            icon: con1,
            title: "וואטצאפ",
            description: "זמינים לשאלות קצרות והתייעצויות",
            detail: "054-8009998"
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col">
            {/* Hero Section with Background Image */}
            <div className="w-full h-[60vh] relative flex items-center justify-center bg-[#FDFBF7]">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${contactHeroBg})` }}
                />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-6xl font-bold text-[#1A1A2E] mb-6">דברו איתנו</h1>
                    <div className="text-xl md:text-2xl font-medium text-[#1A1A2E] space-y-2 dir-rtl">
                        <p>אנחנו כאן לכל שאלה, רעיון, השראה או שיתוף יצירה חדשה</p>
                        <p>הקהילה שלנו חיה ונושמת בזכותכם</p>
                    </div>
                    <p className="text-2xl font-bold text-[#1A1A2E] mt-8">אל תהססו לפנות</p>
                </div>
            </div>

            {/* Contact Cards Section - Overlapping the hero */}
            <div className="w-full pb-20 relative">
                <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {contactMethods.map((method, index) => (
                            <div 
                                key={index} 
                                className="bg-[#EAE8E1] rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow h-80 justify-center"
                            >
                                <div className="mb-6">
                                    <img src={method.icon} alt={method.title} className="w-20 h-20 object-contain" />
                                </div>
                                <h3 className="text-2xl font-bold text-[#2A3B8F] mb-2">{method.title}</h3>
                                <p className="text-gray-700 mb-4 text-lg">{method.description}</p>
                                <p className="text-gray-900 font-bold text-lg dir-ltr">{method.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
