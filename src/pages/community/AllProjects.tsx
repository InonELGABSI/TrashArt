import { ProjectCard } from '../../components/card/projectCard';

// Import images
import before1 from '../../assets/projects/before1.jpg';
import after1 from '../../assets/projects/after1.png';
import before2 from '../../assets/projects/before2.jpg';
import after2 from '../../assets/projects/after2.png';
import before3 from '../../assets/projects/before3.jpg';
import after3 from '../../assets/projects/after3.jpg';
import before4 from '../../assets/projects/before4.jpg';
import after4 from '../../assets/projects/after4.png';
import before5 from '../../assets/projects/before5.jpg';
import after5 from '../../assets/projects/after5.jpg';
import before6 from '../../assets/projects/before6.jpg';
import after6 from '../../assets/projects/after6.jpg';

// Dummy avatars (using some existing assets or placeholders if needed, but ProjectCard handles missing avatars)
// For now I'll leave avatars undefined to use the initials fallback, or I could import some random small images.

const projects = [
    {
        id: 1,
        before: before1,
        after: after1,
        title: "מעמד נרות ייחודי מבקבוקי זכוכית ישנים",
        description: "במקום לזרוק את הבקבוקים שנשארו מארוחת שבת, הפכתי אותם למעמד נרות. זה היה ממש קל וכיפי, ואפילו הפתיע אותי כמה יפה זה יצא",
        author: "ירדנה לוי"
    },
    {
        id: 2,
        before: before2,
        after: after2,
        title: "שולחן צד מצמיג קרוע של רכב",
        description: "מי היה מאמין שצמיג ישן שמצאתי ליד המדרכה יהפוך לשולחן צד? קצת צבע, קצת ניקוי, וקיבלתי פריט שמוסיף אופי לבית. גאה בטירוף איך שזה יצא",
        author: "איריס לוי"
    },
    {
        id: 3,
        before: before3,
        after: after3,
        title: "אהיל חדש מכוסות חד פעמיות שנאספו",
        description: "במקום לזרוק את כוסות היוגורט שנאספו לאורך החודש, חיברתי אותן אחת לשנייה ויצרתי אהיל חדש ומלא אור. זה היה פשוט ומפתיע לראות",
        author: "ליאור אביגדור"
    },
    {
        id: 4,
        before: before4,
        after: after4,
        title: "מראה ייחודית ממגשי ביצים ממוחזרים",
        description: "הפכתי מגשי ביצים פשוטים למסגרת פיסולית שיש לה טקסטורה, עומק ואופי. קצת צבע, קצת גזירה - ומראה אחת קיבלה חיים חדשים",
        author: "חגית אלול"
    },
    {
        id: 5,
        before: before5,
        after: after5,
        title: "אדנית צמחים מבקבוקי פלסטיק חתוכים",
        description: "במקום לזרוק את בקבוקי הפלסטיק, חתכתי, צבעתי והרכבתי אותם לאדניות מהממות שמשדרגות את הגינה. פשוט, צבעוני ועם טאץ' אישי",
        author: "נעמי גביזון"
    },
    {
        id: 6,
        before: before6,
        after: after6,
        title: "מובייל נוצץ מדיסקים ישנים",
        description: "במקום להשאיר את הדיסקים מעלים אבק במגירה, חתכתי, קישרתי והוספתי קצת ניצוץ - ופתאום נולד מובייל נוצץ שחופס אור ומכניס חיים לפינה בבית.",
        author: "סמדר ירוני"
    }
];

export const AllProjects = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    beforeImage={project.before}
                    afterImage={project.after}
                    title={project.title}
                    description={project.description}
                    authorName={project.author}
                />
            ))}
        </div>
    );
};
