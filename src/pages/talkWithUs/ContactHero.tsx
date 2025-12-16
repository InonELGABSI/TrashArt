import contactHeroBg from '../../assets/contactHero.png';
import con1 from '../../assets/icons/con1.png'; // Whatsapp
import con2 from '../../assets/icons/con2.png'; // Email
import con3 from '../../assets/icons/con3.png'; // Instagram

export const ContactHero = () => {
    const contactMethods = [
        {
            icon: con2,
            title: "אינסטגרם",
            description: "בואו להגיד היי באינסטגרם",
            detail: <span className="font-alumni text-xl tracking-wide">@ArtrashIL</span>
        },
        {
            icon: con3,
            title: "אימייל",
            description: "לשאלות, בקשות ושיתופי פעולה",
            detail: <span className="font-alumni text-xl tracking-wide">Artrash@gmail.com</span>
        },
        {
            icon: con1,
            title: "וואטצאפ",
            description: "זמינים לשאלות קצרות והתייעצויות",
            detail: <span className="font-alumni text-xl tracking-wide">054-8009998</span>
        }
    ];

    return (
        <div className="w-full min-h-screen flex flex-col ">
            {/* Hero Section with Background Image */}
            <div className="w-full h-[90vh] relative flex items-center justify-center bg-[#EDE8DE]">
                <div 
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{ backgroundImage: `url(${contactHeroBg})` }}
                />

                <div className="relative z-10 text-center px-4">
                    <h1 className="text-[96px] mb-6">דברו איתנו</h1>
                    <div className="text-[40px] space-y-2 dir-rtl">
                        <p>אנחנו כאן לכל שאלה, רעיון, השראה או שיתוף יצירה חדשה</p>
                        <p>הקהילה שלנו חיה ונושמת בזכותכם</p>
                    </div>
                    <p className="text-[40px] font-bold  mt-8">אל תהססו לפנות</p>
                </div>
            </div>

            {/* Contact Cards Section - Overlapping the hero */}
            <div className="w-full pb-20 relative">
                <div className="max-w-6xl mx-auto px-4 -mt-24 relative z-20">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                        {contactMethods.map((method, index) => (
                            <div 
                                key={index} 
                                className="bg-[#EDE8DE] rounded-[2.5rem] flex flex-col items-center text-center shadow-lg hover:shadow-xl transition-shadow h-70 w-70 justify-center"
                            >
                                <div className="mb-6">
                                    <img src={method.icon} alt={method.title} className="w-20 h-20 object-contain" />
                                </div>
                                <h3 className="text-[32px] font-bold text-[#2A3B8F] mb-2">{method.title}</h3>
                                <p className="text-[24px] mb-4 ">{method.description}</p>
                                <p className="text-[24px] dir-ltr">{method.detail}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
