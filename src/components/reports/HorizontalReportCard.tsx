import React from 'react';
import type { ReportCardProps } from './VerticalReportCard';

export const HorizontalReportCard: React.FC<ReportCardProps & { imageClassName?: string }> = ({  
    image, 
    author, 
    date, 
    title, 
    description,
    className = '',
    imageClassName = 'w-48 aspect-[3/4]'
}) => {
    return (
        <div className={`flex w-full flex-row gap-6 items-start ${className}`} dir="rtl">
            <div className={`${imageClassName} overflow-hidden flex-shrink-0`}>
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
                <h3 className="text-[36px] font-bold text-[var(--color-blue)] leading-tight">
                    {title}
                </h3>
                <p className=" text-[24px] w-[450px] leading-relaxed line-clamp-3">
                    {description}
                </p>
            </div>
        </div>
    );
};
