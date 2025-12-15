import { ImgCard } from "../../components/card/ImgCard";
import { Steps } from "../../components/steps/Steps";
import { CommunityShowcase } from "../../components/sections/CommunityShowcase";
import { Hero } from "./Hero";
import { HorizCar } from "../../components/carousel/HorizCar";
import { Poster } from "../../components/poster/Poster";
import cardTrash from "../../assets/card-trash.png";
import logoType from "../../assets/logo-type.png";
import icon1 from "../../assets/vcar1.png";
import icon2 from "../../assets/vcar2.png";
import icon3 from "../../assets/vcar3.png";
import poster1 from "../../assets/poster1.png";

export const HomePage = () => {
    const aboutText = `היא קהילה יצירתית שמוכיחה שמה שנזרק יכול להפוך ליצירת אמנות.
כאן נפגשים אמנים, מעצבים, ויוצרים מכל תחום כדי להעניק חיים חדשים לחומרים ישנים.
אנחנו מאמינים שמהפכה סביבתית מתחילה ביצירתיות, ובאמנות שמחברת בין אדם לסביבה.

באתר שלנו תמצאו השראה, מדריכים, ותוכן שיפתח לכם את הראש וגם מערכת AI חכמה שתעזור לכם לגלות רעיונות חדשים, להפוך סקיצה ליצירה,
ולמצוא דרכים חדשות למיחדוש, עיצוב וחשיבה ירוקה.

כאן ממחזרים, יוצרים, ומשנים מציאות - בכל פעם מחדש.`;

    const carouselItems = [
        {
            icon: icon1,
            title: "שומעים ירוק",
            description: "פודקאסטים, ראיונות ותכנים מעוררי השראה על קיימות, איכות הסביבה והאנשים שעושים שינוי."
        },
        {
            icon: icon2,
            title: "הקהילה",
            description: "המקום שלכם לשתף יצירות, להכיר יוצרים אחרים, לקבל פידבקים ולהיות חלק מתנועה ירוקה ויצירתית."
        },
        {
            icon: icon3,
            title: "עשה זאת בעצמך",
            description: "מאגר מדריכים, טיפים ורעיונות ליצירה מחומרים שיש בכל בית. בואו ללמוד איך להפוך זבל לזהב."
        }
    ];

    return (
        <>
        <Hero/>
        <Steps/>
        <div className="flex justify-center mx-12">
        <ImgCard imageSrc={cardTrash} logo={logoType} text={aboutText} />
        </div>
        <CommunityShowcase />
        <HorizCar items={carouselItems} />
        <Poster src={poster1} />

        </>
    );
}