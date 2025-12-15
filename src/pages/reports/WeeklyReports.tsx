import { VerticalReportCard } from '../../components/reports/VerticalReportCard';
import { HorizontalReportCard } from '../../components/reports/HorizontalReportCard';
import car1 from '../../assets/car1.jpg';
import car2 from '../../assets/car2.jpg';
import car3 from '../../assets/car3.jpg';
import car4 from '../../assets/car4.jpg';

export const WeeklyReports = () => {
    const mainReport = {
        image: car1,
        author: "שלי בן זאב זוס",
        date: "4.3.2023",
        title: "כך הזבל של עיריית תל-אביב הפך לאוצר",
        description: "כשקיימות ואמנות נפגשים: פרויקט חדש וראשון מסוגו בארץ יצא לדרך בשבוע שעבר ומזמין אמנים ליהנות ממחסן עצום של חומרי גלם שכולם היו בדרכם אל הפח"
    };

    const sideReports = [
        {
            image: car2,
            author: "אורן ויינברג",
            date: "17.11.2017",
            title: "אומנות פח: היוצר שמחטט בזבל של ירושלים",
            description: "הוא מטייל ברחבי העולם, עסוק בשני עניינים: אשפה ואנשים. האמן המקסיקני רודריגו אימז מתרגש מפחיות ריקות ומלחם שהעלה עובש, ובעיקר לומד מהם הרבה על תרבות וחברה."
        },
        {
            image: car3,
            author: "יהודה אלמוג",
            date: "09.11.2021",
            title: "החיות שמוצרות מזבל",
            description: 'הסדרה "ביג טראש אנימלס" של אמן הרחוב בורדאלו מכילה חיות המורכבות משאריות אשפה, המוסוות בצבעים עזים ושמחים.'
        },
        {
            image: car4,
            author: "דפנה לוי",
            date: "07.10.2021",
            title: "צל של אשפה",
            description: "טים נובל וסו וובסטר הם אמנים העוסקים בצלליות מסוג אחר: צלליות שנולדות מתוך איסוף קפדני ועיצוב קפדני עוד יותר של ערימות אשפה."
        }
    ];

    return (
        <section className="max-w-7xl mx-auto px-4 py-16" dir="rtl">
            <h2 className="text-4xl font-bold text-[#1B2236] mb-12 border-b-2 border-gray-200 pb-4 inline-block">
                כתבות השבוע
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Right Column - Vertical Report (User requested Vertical on Right) */}
                <div className="lg:col-span-5">
                    <VerticalReportCard {...mainReport} />
                </div>

                {/* Left Column - 3 Horizontal Reports */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    {sideReports.map((report, index) => (
                        <HorizontalReportCard key={index} {...report} />
                    ))}
                </div>
            </div>
        </section>
    );
};
