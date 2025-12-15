import { Step } from "./Step";
import logo1 from '../../assets/small-think1.png';
import logo2 from '../../assets/small-think2.png';
import logo3 from '../../assets/small-think3.png';
import logo4 from '../../assets/small-think4.png';

export const Steps = () => {
    const steps = [
        { number: 1, title: "בוחרים מה למחזר", description: "צלמו או העלו תמונה של חומר,חפץ או פסולת שתרצו להפוך ליצירהבקבוקים, פחיות, קרטונים או כל דבר שמסקרן אתכם.", icon: logo1 },
        { number: 2, title: "מקבלים השראה", description: "המערכת החכמה שלנו תציע לכם רעיונות, סקיצות וסגנונות עיצוביים שמתאימים בדיוק למה שבחרתם.", icon: logo2 },
        { number: 3, title: "מתחילים ליצור", description: "התחילו ליצור בעצמכם!השתמשו בהדרכות, בטיפים ובחומרים מהאתר כדי להפוך את הרעיון למציאות.", icon: logo3 },
        { number: 4, title: "משתפים בקהילה", description: "שתפו את היצירה שלכם בגלריית הקהילה, קבלו השראה מאחרים, והראו שגם ממיחזור קטן מתחיל שינוי גדול.", icon: logo4 },
    ];
    return (
        <>
        <div className="flex flex-row md:flex-row justify-center items-center md:space-x-6 space-y-6 md:space-y-0 my-12 py-12">
            {steps.map((step) => (
                <div 
                    key={step.number}
                    className={`
                        ${step.number === 1 ? 'pt-8' : ''}
                        ${step.number === 2 ? 'pb-8' : ''}
                        ${step.number === 3 ? 'pt-8' : ''}
                        ${step.number === 4 ? 'pb-8' : ''}
                    `}
                >
                    <Step 
                        number={step.number}
                        title={step.title}
                        description={step.description}
                        icon={step.icon}
                    />
                </div>
            ))}

  
        </div>
        
        {/* Start Create Button - Centered */}
        <div className="flex justify-center mt-12 mb-24">
            <button className="bg-blue-500 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors duration-200 shadow-lg">
                התחל ליצור
            </button>
        </div>
        </>
    );
}

