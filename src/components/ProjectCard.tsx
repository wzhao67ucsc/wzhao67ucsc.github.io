import React from 'react';

interface ProjectCardProps {
    href?: string;
    onClick?: () => void;
    lightImage: string;
    darkImage: string;
    title: string;
    role: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ href, onClick, lightImage, darkImage, title, role }) => {
    const Component = href ? 'a' : 'div';
    const props = href ? { href } : { onClick };

    return (
        <Component {...props} className="group cursor-pointer block w-[160px]">
            <div className="relative w-full aspect-[3/4] bg-gray-100 overflow-hidden mb-3">
                <img
                    src={lightImage}
                    alt={`${title} Project`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 group-hover:opacity-0"
                />
                <img
                    src={darkImage}
                    alt={`${title} Project Dark`}
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-700 opacity-0 group-hover:opacity-100"
                />
            </div>
            <div className="flex flex-col gap-0.5 text-left">
                <h2 className="font-medium text-sm group-hover:underline underline-offset-4 decoration-1 decoration-gray-300">
                    {title}
                </h2>
                <p className="text-subtle text-[11px] uppercase tracking-wide">{role}</p>
            </div>
        </Component>
    );
};
