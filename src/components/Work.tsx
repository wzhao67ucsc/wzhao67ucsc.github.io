import React, { useState } from 'react';
import { ProjectCard } from './ProjectCard';
import { ProjectDetail } from './ProjectDetail';
import { ProjectView } from './ProjectView';
import { projects, getProjectById } from '../data/projectsData';

export const Work: React.FC = () => {
    const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

    const selectedProject = selectedProjectId ? getProjectById(selectedProjectId) : null;

    if (selectedProject) {
        return (
            <ProjectDetail onBack={() => setSelectedProjectId(null)}>
                <ProjectView
                    project={selectedProject}
                    onBack={() => setSelectedProjectId(null)}
                    onNavigate={(id) => setSelectedProjectId(id)}
                />
            </ProjectDetail>
        );
    }

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

            {projects.map((project) => (
                <ProjectCard
                    key={project.id}
                    onClick={() => setSelectedProjectId(project.id)}
                    lightImage={project.cardImage.light}
                    darkImage={project.cardImage.dark}
                    title={project.title}
                    role={project.role}
                />
            ))}
        </section>
    );
};
