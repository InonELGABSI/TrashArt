import { CommunityHero } from './CommunityHero';
import { OurCommunity } from './OurCommunity';

export const CommunityPage = () => {
    return (
        <div className="pt-24 min-h-screen">
            <CommunityHero />
            <div className="w-[70%] mx-auto border-1 border-[#161616] opacity-20"></div>
            <OurCommunity />
        </div>
    );
}