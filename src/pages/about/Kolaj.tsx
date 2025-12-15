import blue from '../../assets/kolaj/blue.jpg';
import green from '../../assets/kolaj/green.png';
import red from '../../assets/kolaj/red.png';
import yellow from '../../assets/kolaj/yellow.png';
import mid from '../../assets/kolaj/kolajmid.png';

export const Kolaj = () => {
    return (
        <div className="flex justify-center gap-6 py-0">
            {/* Left Column - Yellow, Red */}
            {/* Starts at mt-16 (Middle Top) */}
            {/* Ends Lowest (Longest effective path) */}
            <div className="flex flex-col gap-6 w-32 mt-16">
                <div className="w-full h-[450px]">
                    <img src={yellow} alt="Thinker Yellow" className="w-full h-full object-cover" />
                </div>
                <div className="w-full h-[450px]">
                    <img src={red} alt="Thinker Red" className="w-full h-full object-cover" />
                </div>
            </div>

            {/* Middle Column - Trash */}
            {/* Starts at mt-32 (Lowest Top) */}
            {/* Ends Highest (Shortest effective path) */}
            <div className="w-32 mt-32 h-[750px]">
                <img src={mid} alt="Trash Art" className="w-full h-full object-cover" />
            </div>

            {/* Right Column - Blue, Green */}
            {/* Starts at mt-0 (Highest Top) */}
            {/* Ends Middle */}
            <div className="flex flex-col gap-6 w-32 mt-0">
                <div className="w-full h-[450px]">
                    <img src={blue} alt="Thinker Blue" className="w-full h-full object-cover scale-x-[-1]" />
                </div>
                <div className="w-full h-[450px]">
                    <img src={green} alt="Thinker Green" className="w-full h-full object-cover scale-x-[-1]" />
                </div>
            </div>
        </div>
    );
};
