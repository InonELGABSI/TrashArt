import React from 'react';
import type { ReportCardProps } from './VerticalReportCard';

export const HorizontalReportCard: React.FC<ReportCardProps> = ({  
    image, 
    author, 
    date, 
    title, 
    description,
    className = ''
}) => {
    return (
        <div className={`flex flex-row gap-6 items-start ${className}`} dir="rtl">
            <div className="w-48 aspect-[4/3] overflow-hidden rounded-lg flex-shrink-0">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <div className="text-sm text-gray-500 font-medium">
                    {author} /// {date}
                </div>
                <h3 className="text-xl font-bold text-[#1B2236] leading-tight">
                    {title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};
