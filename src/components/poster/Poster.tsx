import React from 'react';

interface PosterProps {
    src: string;
}

export const Poster: React.FC<PosterProps> = ({ src }) => {
    return (
        <div className="w-full">
            <img 
                src={src} 
                alt="Poster" 
                className="w-full h-auto object-cover"
            />
        </div>
    );
};
