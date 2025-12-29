import React, { useState, useEffect, useRef } from 'react';
import type { Project } from '../data/projectsData';
import { getNextProject, getPrevProject } from '../data/projectsData';

interface ProjectViewProps {
    project: Project;
    onBack: () => void;
    onNavigate: (projectId: string) => void;
}

export const ProjectView: React.FC<ProjectViewProps> = ({ project, onBack, onNavigate }) => {
    const [activeImage, setActiveImage] = useState(project.heroImage);
    const [activeCaption, setActiveCaption] = useState(project.heroCaption);
    const containerRef = useRef<HTMLDivElement>(null);

    const nextProject = getNextProject(project.id);
    const prevProject = getPrevProject(project.id);

    // Reset image state and scroll to top when project changes
    useEffect(() => {
        setActiveImage(project.heroImage);
        setActiveCaption(project.heroCaption);

        const mainContainer = document.querySelector('main');
        if (mainContainer) {
            mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [project.id, project.heroImage, project.heroCaption]);

    const handleNavigate = (projectId: string) => {
        const mainContainer = document.querySelector('main');
        if (mainContainer) {
            mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Small delay to let scroll start before switching content
        setTimeout(() => {
            onNavigate(projectId);
        }, 50);
    };

    const handleBack = () => {
        const mainContainer = document.querySelector('main');
        if (mainContainer) {
            mainContainer.scrollTo({ top: 0, behavior: 'smooth' });
        }
        setTimeout(() => {
            onBack();
        }, 50);
    };

    return (
        <div ref={containerRef} className="animate-fade-in">
            <header className="mb-12">
                <h1 className="text-3xl font-normal tracking-tight mb-4 text-ink">{project.title}</h1>
                <p className="text-ink text-lg leading-relaxed max-w-xl">{project.description}</p>
            </header>

            {/* Meta info */}
            <div className={`grid grid-cols-2 md:grid-cols-${Math.min(project.meta.length, 4)} gap-8 mb-12 pb-8 border-b border-gray-100`}>
                {project.meta.map((m) => (
                    <div key={m.label}>
                        <h4 className="text-subtle text-[10px] uppercase tracking-[0.1em] mb-2">{m.label}</h4>
                        {m.links ? (
                            <p className="text-[13px] text-ink">
                                {m.links.map((link, i) => (
                                    <span key={link.url}>
                                        <a href={link.url} target="_blank" rel="noopener noreferrer" className="hover:underline">{link.text}</a>
                                        {i < m.links!.length - 1 && ', '}
                                    </span>
                                ))}
                            </p>
                        ) : (
                            <p className="text-[13px] text-ink">{m.value}</p>
                        )}
                    </div>
                ))}
            </div>

            {/* Hero / Gallery */}
            <section className="mb-20">
                <div className="bg-gray-100 mb-4 overflow-hidden border border-gray-100 rounded-sm">
                    <img src={activeImage} alt={`${project.title} Interface`} className="w-full h-auto object-cover transition-opacity duration-300" />
                </div>

                {project.gallery && project.gallery.length > 1 && (
                    <div className="flex gap-3 mb-4 overflow-x-auto pb-2">
                        {project.gallery.map((img) => (
                            <button
                                key={img.label}
                                onClick={() => { setActiveImage(img.src); setActiveCaption(img.caption); }}
                                className={`flex-none w-24 md:w-32 aspect-[4/3] bg-gray-100 overflow-hidden border-2 cursor-pointer transition-all ${activeImage === img.src ? 'border-gray-300 opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                            >
                                <img src={img.src} alt={img.label} className="w-full h-full object-cover" />
                            </button>
                        ))}
                    </div>
                )}
                <p className="text-subtle text-[11px] italic tracking-tight">{activeCaption}</p>
            </section>

            {/* Challenge */}
            <section className="mb-20">
                <h3 className="text-xs uppercase tracking-widest text-subtle mb-6">The Challenge</h3>
                <div className="text-ink text-base leading-relaxed">
                    <p>{project.challenge}</p>
                </div>
            </section>

            {/* Features */}
            <section className="mb-20">
                <h3 className="text-xs uppercase tracking-widest text-subtle mb-8">{project.featuresTitle}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {project.features.map((f) => (
                        <div key={f.title}>
                            <h4 className="font-medium text-sm mb-2 text-ink">{f.title}</h4>
                            <p className="text-subtle text-sm leading-relaxed">{f.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* End-of-page navigation */}
            <div className="pt-12 border-t border-gray-100 flex justify-between items-center">
                {prevProject ? (
                    <button onClick={() => handleNavigate(prevProject.id)} className="group">
                        <span className="text-subtle text-[10px] uppercase tracking-widest block mb-1">Previous</span>
                        <span className="text-sm group-hover:underline underline-offset-4 decoration-gray-300">← {prevProject.title}</span>
                    </button>
                ) : (
                    <button onClick={handleBack} className="group">
                        <span className="text-subtle text-[10px] uppercase tracking-widest block mb-1">Back</span>
                        <span className="text-sm group-hover:underline underline-offset-4 decoration-gray-300">← All Work</span>
                    </button>
                )}

                {nextProject ? (
                    <button onClick={() => handleNavigate(nextProject.id)} className="group text-right">
                        <span className="text-subtle text-[10px] uppercase tracking-widest block mb-1">Next</span>
                        <span className="text-sm group-hover:underline underline-offset-4 decoration-gray-300">{nextProject.title} →</span>
                    </button>
                ) : (
                    <button onClick={handleBack} className="group text-right">
                        <span className="text-subtle text-[10px] uppercase tracking-widest block mb-1">Back</span>
                        <span className="text-sm group-hover:underline underline-offset-4 decoration-gray-300">All Work →</span>
                    </button>
                )}
            </div>
        </div>
    );
};
