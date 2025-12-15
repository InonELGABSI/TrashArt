import { useState } from 'react';

export interface CarouselItem {
    icon: string;
    title: string;
    description: string;
}

interface HorizCarProps {
    items: CarouselItem[];
}

export const HorizCar = ({ items }: HorizCarProps) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Ensure we have enough items to display 3
    const displayItems = items.length < 3 ? [...items, ...items, ...items].slice(0, 3) : items;
    
    const getPosition = (index: number) => {
        const count = displayItems.length;
        if (index === activeIndex) return 'center';
        if (index === (activeIndex - 1 + count) % count) return 'left';
        if (index === (activeIndex + 1) % count) return 'right';
        return 'hidden';
    };

    return (
        <div className="relative w-full max-w-5xl mx-auto pb-12">
            <div className="relative h-[450px] flex justify-center items-center perspective-1000">
                {displayItems.map((item, index) => {
                    const position = getPosition(index);
                    const isCenter = position === 'center';
                    const isLeft = position === 'left';
                    const isRight = position === 'right';
                    
                    return (
                    <div
                        key={index}
                        onClick={() => {
                            if (isLeft) setActiveIndex((activeIndex - 1 + displayItems.length) % displayItems.length);
                            if (isRight) setActiveIndex((activeIndex + 1) % displayItems.length);
                        }}
                        className={`
                            absolute top-1/2 left-1/2
                            flex flex-col items-center justify-center p-8 text-center
                            transition-all duration-500 ease-in-out rounded-2xl shadow-xl bg-white
                            aspect-square w-96
                            ${isCenter 
                                ? 'z-20 -translate-x-1/2 -translate-y-1/2 scale-100 opacity-100 ring-4 ring-blue-100 cursor-default' 
                                : isLeft
                                    ? 'z-10 -translate-y-1/2 scale-75 opacity-80 -translate-x-[110%] cursor-pointer hover:opacity-100'
                                    : isRight
                                        ? 'z-10 -translate-y-1/2 scale-75 opacity-80 translate-x-[10%] cursor-pointer hover:opacity-100'
                                        : 'z-0 -translate-y-1/2 -translate-x-1/2 scale-50 opacity-0 pointer-events-none'
                            }
                        `}
                    >
                        {/* White fade overlay for side items */}
                        {!isCenter && (
                            <div className={`absolute inset-0 bg-white/60 rounded-2xl z-20 backdrop-blur-[1px] transition-opacity duration-300 ${position === 'hidden' ? 'opacity-0' : ''}`} />
                        )}

                        <div className="z-10 flex flex-col items-center gap-6 h-full justify-center">
                            <div className="h-24 w-24 flex items-center justify-center">
                                <img 
                                    src={item.icon} 
                                    alt={item.title} 
                                    className="object-contain h-24 w-24 transition-all duration-300"
                                />
                            </div>
                            <h3 className="font-bold text-gray-800 text-2xl transition-all duration-300">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 text-base line-clamp-4 transition-all duration-300">
                                {item.description}
                            </p>
                        </div>
                    </div>
                    );
                })}
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center gap-3 mt-8">
                {items.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index === (activeIndex % items.length)
                                ? 'bg-blue-500 scale-125' 
                                : 'bg-gray-300 hover:bg-gray-400'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};
