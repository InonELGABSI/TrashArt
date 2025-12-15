import React, { useState, useRef, useEffect } from 'react';

interface ProjectCardProps {
    beforeImage: string;
    afterImage: string;
    title: string;
    description: string;
    authorName: string;
    authorAvatar?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
    beforeImage,
    afterImage,
    title,
    description,
    authorName,
    authorAvatar
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const handleMove = (event: React.MouseEvent | React.TouchEvent | MouseEvent | TouchEvent) => {
        if (!containerRef.current) return;

        const containerRect = containerRef.current.getBoundingClientRect();
        const clientX = 'touches' in event ? event.touches[0].clientX : (event as MouseEvent).clientX;
        
        const position = ((clientX - containerRect.left) / containerRect.width) * 100;
        setSliderPosition(Math.min(Math.max(position, 0), 100));
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleTouchStart = () => setIsDragging(true);

    const handleMouseUp = () => setIsDragging(false);
    const handleTouchEnd = () => setIsDragging(false);

    useEffect(() => {
        const handleGlobalMove = (e: MouseEvent | TouchEvent) => {
            if (isDragging) {
                handleMove(e);
            }
        };

        const handleGlobalUp = () => {
            setIsDragging(false);
        };

        if (isDragging) {
            window.addEventListener('mousemove', handleGlobalMove);
            window.addEventListener('touchmove', handleGlobalMove);
            window.addEventListener('mouseup', handleGlobalUp);
            window.addEventListener('touchend', handleGlobalUp);
        }

        return () => {
            window.removeEventListener('mousemove', handleGlobalMove);
            window.removeEventListener('touchmove', handleGlobalMove);
            window.removeEventListener('mouseup', handleGlobalUp);
            window.removeEventListener('touchend', handleGlobalUp);
        };
    }, [isDragging]);

    return (
        <div className="flex flex-col w-full">
            {/* Image Comparison Slider */}
            <div 
                ref={containerRef}
                className="relative w-full aspect-square overflow-hidden rounded-2xl cursor-ew-resize select-none"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
            >
                {/* After Image (Background) */}
                <img 
                    src={afterImage} 
                    alt="After" 
                    className="absolute top-0 left-0 w-full h-full object-cover"
                />

                {/* Before Image (Foreground - Clipped) */}
                <div 
                    className="absolute top-0 left-0 w-full h-full overflow-hidden"
                    style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                    <img 
                        src={beforeImage} 
                        alt="Before" 
                        className="absolute top-0 left-0 w-full h-full object-cover max-w-none"
                        style={{ width: '100%', height: '100%' }} 
                    />
                </div>

                {/* Slider Handle */}
                <div 
                    className="absolute top-0 bottom-0 w-1 bg-black cursor-ew-resize z-10"
                    style={{ left: `${sliderPosition}%` }}
                >
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 rounded-full flex items-center justify-center border-2 border-white">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="mt-4 text-right dir-rtl">
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-2">{title}</h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                    {description}
                </p>
                
                {/* Author */}
                <div className="flex items-center gap-3 flex-row-reverse justify-start">
                    <div className="w-8 h-8 rounded-full bg-gray-300 overflow-hidden">
                        {authorAvatar ? (
                            <img src={authorAvatar} alt={authorName} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center bg-[#EAE8E1] text-gray-600 text-xs">
                                {authorName.charAt(0)}
                            </div>
                        )}
                    </div>
                    <span className="text-sm font-medium text-gray-800">{authorName}</span>
                </div>
            </div>
        </div>
    );
};
