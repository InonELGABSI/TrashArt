import React, { useState } from 'react';
import { VerticalReportCard } from '../../components/reports/VerticalReportCard';
import rep1 from '../../assets/reports/all/rep1.jpg';
import rep2 from '../../assets/reports/all/rep2.jpg';
import rep3 from '../../assets/reports/all/rep3.jpg';
import rep4 from '../../assets/reports/all/rep4.jpg';
import rep5 from '../../assets/reports/all/rep5.jpg';
import rep6 from '../../assets/reports/all/rep6.jpg';

export const AllReports = () => {
    const [visibleCount, setVisibleCount] = useState(6);

    const reports = [
        {
            image: rep1,
            author: "רותי קדוש",
            date: "21.03.2023",
            title: "להפוך זבל לזהב: תערוכה חדשה בחולון מוקדשת לשקית האשפה",
            description: '34 אמנים ומעצבים ישראלים, כל אחד בתחומו העניקו לשקית הזבל חיים משלה. העבודות מוצגות בתערוכה "אטומה" בגלריית "החווה" בחולון'
        },
        {
            image: rep2,
            author: "גלעד מלצר",
            date: "13.10.2021",
            title: "היופי שאפשר להפיק מהזבל",
            description: "מצבורי האשפה האנושית לא מפסיקים לייצר חומרים הראויים לעיבוד מחודש. תערוכה ראשונה בפארק חירייה מספקת הצצה לחיים שהיו כאן ותזכורת ליופי שטמון גם בחפצים שאיש לא רוצה"
        },
        {
            image: rep3,
            author: "ליהיא משיח",
            date: "29.05.2023",
            title: "יצירות מבדים, חבלים וצמר",
            description: "מבחר יצירות אמנות אקולוגית מחומרים מגוונים שיצאו מכלל שימוש שהיו בדרכם לפח ועברו מהפך! כמו חבלים, חוטים, בדים, שאריות צמר, שאריות מוצרי עור וכו'. אמנות המיחזור מקדמת מודעות"
        },
        {
            image: rep4,
            author: "אליה מסיאס",
            date: "20.02.2025",
            title: "ראיון אישי עם עדיה רובינזון: להפוך גרוטאות לזהב עיצובי",
            description: "עדיה רובינזון, מעצבת פנים עם אהבה גדולה למיחזור, לקחה את מה שרוכזו היו משאירים על המדרכה והפכה אותו לפריטי עיצוב שגורמים לבית להרגיש חי"
        },
        {
            image: rep5,
            author: "מאקו",
            date: "21.03.2023",
            title: "מחדשים את אוצרות הקניון - פופ-אפ ייחודי בקניון עזריאלי",
            description: "שיתוף פעולה מרגש בין עמותת JUST A SECOND לקניון עזריאלי גבעתיים הציג איך אפשר להפוך חפצים שנזרקו לאוצרות מעוצבים"
        },
        {
            image: rep6,
            author: "איריס ג'רבי",
            date: "21.03.2023",
            title: "האמנות שמחיה את הרחוב: יצירה קהילתית פסולת עירונית",
            description: "יוצרים מקומיים הופכים פסולת עירונית לעבודות רחוב צבעוניות שמחזירות חיים למרחב הציבורי - ומוכיחות שהיופי מתחיל במקום שלא ציפינו."
        },
        // Duplicates for mock data
        {
            image: rep1,
            author: "רותי קדוש",
            date: "21.03.2023",
            title: "להפוך זבל לזהב: תערוכה חדשה בחולון מוקדשת לשקית האשפה",
            description: '34 אמנים ומעצבים ישראלים, כל אחד בתחומו העניקו לשקית הזבל חיים משלה. העבודות מוצגות בתערוכה "אטומה" בגלריית "החווה" בחולון'
        },
        {
            image: rep2,
            author: "גלעד מלצר",
            date: "13.10.2021",
            title: "היופי שאפשר להפיק מהזבל",
            description: "מצבורי האשפה האנושית לא מפסיקים לייצר חומרים הראויים לעיבוד מחודש. תערוכה ראשונה בפארק חירייה מספקת הצצה לחיים שהיו כאן ותזכורת ליופי שטמון גם בחפצים שאיש לא רוצה"
        },
        {
            image: rep3,
            author: "ליהיא משיח",
            date: "29.05.2023",
            title: "יצירות מבדים, חבלים וצמר",
            description: "מבחר יצירות אמנות אקולוגית מחומרים מגוונים שיצאו מכלל שימוש שהיו בדרכם לפח ועברו מהפך! כמו חבלים, חוטים, בדים, שאריות צמר, שאריות מוצרי עור וכו'. אמנות המיחזור מקדמת מודעות"
        },
        {
            image: rep4,
            author: "אליה מסיאס",
            date: "20.02.2025",
            title: "ראיון אישי עם עדיה רובינזון: להפוך גרוטאות לזהב עיצובי",
            description: "עדיה רובינזון, מעצבת פנים עם אהבה גדולה למיחזור, לקחה את מה שרוכזו היו משאירים על המדרכה והפכה אותו לפריטי עיצוב שגורמים לבית להרגיש חי"
        },
        {
            image: rep5,
            author: "מאקו",
            date: "21.03.2023",
            title: "מחדשים את אוצרות הקניון - פופ-אפ ייחודי בקניון עזריאלי",
            description: "שיתוף פעולה מרגש בין עמותת JUST A SECOND לקניון עזריאלי גבעתיים הציג איך אפשר להפוך חפצים שנזרקו לאוצרות מעוצבים"
        },
        {
            image: rep6,
            author: "איריס ג'רבי",
            date: "21.03.2023",
            title: "האמנות שמחיה את הרחוב: יצירה קהילתית פסולת עירונית",
            description: "יוצרים מקומיים הופכים פסולת עירונית לעבודות רחוב צבעוניות שמחזירות חיים למרחב הציבורי - ומוכיחות שהיופי מתחיל במקום שלא ציפינו."
        }
    ];

    const visibleReports = reports.slice(0, visibleCount);

    return (
        <section className="max-w-7xl mx-auto px-4 py-16" dir="rtl">
            <h2 className="text-4xl font-bold text-[#1B2236] mb-12 border-b-2 border-gray-200 pb-4 inline-block">
                כל הכתבות
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                {visibleReports.map((report, index) => (
                    <VerticalReportCard key={index} {...report} />
                ))}
            </div>

            {visibleCount < reports.length && (
                <div className="flex justify-center mt-16">
                    <button 
                        onClick={() => setVisibleCount(prev => prev + 6)}
                        className="bg-[#1B2236] text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-[#2a3450] transition-colors"
                    >
                        טעינת כתבות נוספות
                    </button>
                </div>
            )}
        </section>
    );
};
