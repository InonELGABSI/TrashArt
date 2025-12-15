import { CommunityHero } from './CommunityHero';
import { OurCommunity } from './OurCommunity';

export const CommunityPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            <CommunityHero />
            <OurCommunity />
        </div>
    );
}