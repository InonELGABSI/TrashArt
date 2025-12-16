import React from 'react';

export interface ReportCardProps {
    image: string;
    author: string;
    avatar?: string;
    date: string;
    title: string;
    description: string | React.ReactNode;
    className?: string;
    imageClassName?: string;
    descriptionClassName?: string;
}

export const VerticalReportCard: React.FC<ReportCardProps> = ({ 
    image, 
    author, 
    avatar,
    date, 
    title, 
    description,
    className = '',
    imageClassName = 'w-full aspect-[4/3]',
    descriptionClassName = 'w-[450px]'
}) => {
    return (
        <div className={`flex flex-col gap-4 ${className}`} dir="rtl">
            <div className={`${imageClassName} overflow-hidden`}>
                <img 
                    src={image} 
                    alt={title} 
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3">
                    {avatar && (
                        <img src={avatar} alt={author} className="w-8 h-8 rounded-full object-cover" />
                    )}
                    <div className="text-sm font-medium text-gray-500">
                        {author} /// {date}
                    </div>
                </div>
                <h3 className="text-[36px] font-bold text-[var(--color-blue)] leading-tight">
                    {title}
                </h3>
                <p className={`text-[24px] leading-relaxed ${descriptionClassName}`}>
                    {description}
                </p>
            </div>
        </div>
    );
};
