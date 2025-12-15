import { ContactHero } from './ContactHero';
import { CreateCon } from './CreateCon';

export const TalkWithUsPage = () => {
    return (
        <div className="min-h-screen">
            <ContactHero />
            <CreateCon />
        </div>
    );
}