import { HeroSearch } from './HeroSearch';
import { WeeklyReports } from './WeeklyReports';
import { AllReports } from './AllReports';
import searchHero from '../../assets/searchHero.jpg';

export const ReportsPage = () => {
    return (
        <>
            <HeroSearch 
                title="כשפסולת הופכת לסיפור"
                subtitle="השראות וכתבות על יוצרים שמשנים מציאות, פרויקט אחר פרויקט"
                backgroundImage={searchHero}
            />
            <WeeklyReports />
            <AllReports />
        </>
    );
}