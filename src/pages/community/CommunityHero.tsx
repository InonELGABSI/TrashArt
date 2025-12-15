import React from 'react';
import vcar1 from '../../assets/vcar1.png';
import vcar2 from '../../assets/vcar2.png';
import vcar3 from '../../assets/vcar3.png';

export const CommunityHero = () => {
    const items = [
        { id: 1, img: vcar3, title: "הידעת?" },
        { id: 2, img: vcar2, title: "שומעים ירוק" },
        { id: 3, img: vcar1, title: "חנויות יד 2" },
    ];

    return (
        <div className="w-full py-20">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
                    {items.map((item, index) => (
                        <div 
                            key={item.id} 
                            className={`relative group cursor-pointer transition-transform duration-300 hover:scale-105 ${index === 1 ? 'md:mt-24' : ''}`}
                        >
                            <div className="w-64 h-64 bg-[#EAE8E1] rounded-[2.5rem] overflow-hidden shadow-lg flex flex-col items-center justify-center gap-4">
                                <img 
                                    src={item.img} 
                                    alt={item.title} 
                                    className="w-24 h-24 object-contain"
                                />
                                <h3 className="text-2xl font-bold text-[#1A1A2E] text-center">
                                    {item.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
