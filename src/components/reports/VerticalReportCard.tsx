import React from 'react';

export interface ReportCardProps {
    image: string;
    author: string;
    date: string;
    title: string;
    description: string;
    className?: string;
}

export const VerticalReportCard: React.FC<ReportCardProps> = ({ 
    image, 
    author, 
    date, 
    title, 
    description,
    className = ''
}) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`} dir="rtl">
            <div className="w-full aspect-[4/3] overflow-hidden rounded-lg">
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-500 font-medium">
                    {author} /// {date}
                </div>
                <h3 className="text-2xl font-bold text-[#1B2236] leading-tight">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                    {description}
                </p>
            </div>
        </div>
    );
};
