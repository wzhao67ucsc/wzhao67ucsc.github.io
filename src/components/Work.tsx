import React from 'react';
import { ProjectCard } from './ProjectCard';

export const Work: React.FC = () => {
    return (
        <section className="flex flex-wrap gap-6 w-full animate-fade-in">
            <div className="w-full mb-10 text-left">
                <h1 className="text-3xl font-normal leading-tight mb-3 text-ink">
                    Product designer based in San Francisco.
                </h1>
                <p className="text-subtle text-base leading-relaxed">
                    Specializing in SaaS and AI. Currently a Junior at UC Santa Cruz.<br className="hidden md:block" />
                    Prev. Founder @ CareerLoop (30,000+ users) and Founding Member @ Floot (YC S25).
                </p>
            </div>

            <ProjectCard
                href="projects/careerloop.html"
                lightImage="/media/light/careerloop.png"
                darkImage="/media/dark/dark_careerloop.png"
                title="CareerLoop"
                role="Founder"
            />

            <ProjectCard
                href="projects/floot.html"
                lightImage="/media/light/floot.png"
                darkImage="/media/dark/dark_floot.png"
                title="Floot (YC S25)"
                role="Founding Member"
            />

            <ProjectCard
                href="projects/monotone.html"
                lightImage="/media/light/monotone.png"
                darkImage="/media/dark/dark_monotone.png"
                title="Monotone"
                role="Founding Designer"
            />
        </section>
    );
};
