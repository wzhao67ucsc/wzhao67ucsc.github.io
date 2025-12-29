import React from 'react';
import { useParams, Link } from 'react-router-dom';

interface ProjectData {
  title: string;
  role: string;
  lightImage: string;
  darkImage: string;
  description?: string;
  images?: string[];
}

const projectData: Record<string, ProjectData> = {
  careerloop: {
    title: 'CareerLoop',
    role: 'Founder',
    lightImage: '/media/light/careerloop.png',
    darkImage: '/media/dark/dark_careerloop.png',
    description: 'A career development platform with 30,000+ users.',
    images: [
      '/media/careerloop/hero.png',
      '/media/careerloop/dashboard.png',
      '/media/careerloop/auth.png',
      '/media/careerloop/builder.png',
    ],
  },
  floot: {
    title: 'Floot (YC S25)',
    role: 'Founding Member',
    lightImage: '/media/light/floot.png',
    darkImage: '/media/dark/dark_floot.png',
    description: 'A Y Combinator S25 startup.',
    images: [
      '/media/floot/hero.png',
    ],
  },
  monotone: {
    title: 'Monotone',
    role: 'Founding Designer',
    lightImage: '/media/light/monotone.png',
    darkImage: '/media/dark/dark_monotone.png',
    description: 'A design project.',
    images: [
      '/media/monotone/hero.png',
    ],
  },
};

export const ProjectDetail: React.FC = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const project = projectId ? projectData[projectId] : null;

  if (!project) {
    return (
      <div className="bg-canvas text-ink font-sans antialiased text-sm h-screen overflow-hidden flex flex-col justify-between selection:bg-gray-200">
        <div className="flex flex-grow overflow-hidden">
          <aside className="w-48 md:w-56 flex-none px-5 md:px-10 py-8 flex flex-col justify-center">
            <Link to="/" className="hover:opacity-60 transition-opacity mb-12">
              <img src="/media/wz.png" alt="William" className="h-8" />
            </Link>
            <nav className="flex flex-col gap-6">
              <Link
                to="/"
                className="text-sm font-medium text-left transition-colors text-ink"
              >
                Work
              </Link>
              <Link
                to="/"
                className="text-sm font-medium text-left transition-colors text-subtle hover:text-ink"
              >
                Component Library
              </Link>
            </nav>
          </aside>

          <main className="flex-1 px-5 md:px-10 py-10 md:pt-24 md:pb-10 flex flex-col overflow-y-auto">
            <div className="w-full max-w-2xl mx-auto">
              <h1 className="text-3xl font-normal mb-4">Project not found</h1>
              <Link to="/" className="text-subtle hover:text-ink transition-colors">
                ← Back to home
              </Link>
            </div>
          </main>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-canvas text-ink font-sans antialiased text-sm h-screen overflow-hidden flex flex-col justify-between selection:bg-gray-200">

      <header className="w-full px-5 py-6 md:px-10 md:py-8 flex-none flex justify-end items-center z-50">
        <nav>
          <ul className="flex gap-10 font-medium">
            <li className="text-xs md:text-sm">williamzhao474 [at] gmail [dot] com</li>
          </ul>
        </nav>
      </header>

      <div className="flex flex-grow overflow-hidden">
        <aside className="w-48 md:w-56 flex-none px-5 md:px-10 py-8 flex flex-col justify-center">
          <Link to="/" className="hover:opacity-60 transition-opacity mb-12">
            <img src="/media/wz.png" alt="William" className="h-8" />
          </Link>
          <nav className="flex flex-col gap-6">
            <Link
              to="/"
              className="text-sm font-medium text-left transition-colors text-ink"
            >
              Work
            </Link>
            <Link
              to="/"
              className="text-sm font-medium text-left transition-colors text-subtle hover:text-ink"
            >
              Component Library
            </Link>
          </nav>
        </aside>

        <main className="flex-1 px-5 md:px-10 py-10 md:pt-24 md:pb-10 flex flex-col overflow-y-auto">
          <div className="w-full max-w-4xl mx-auto animate-fade-in">
            <div className="mb-8">
              <h1 className="text-4xl font-normal leading-tight mb-2 text-ink">
                {project.title}
              </h1>
              <p className="text-subtle text-base uppercase tracking-wide mb-6">
                {project.role}
              </p>
              {project.description && (
                <p className="text-base leading-relaxed text-ink">
                  {project.description}
                </p>
              )}
            </div>

            {project.images && project.images.length > 0 && (
              <div className="space-y-6">
                {project.images.map((image, index) => (
                  <div key={index} className="w-full bg-gray-100 overflow-hidden">
                    <img
                      src={image}
                      alt={`${project.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </main>
      </div>

      <footer className="w-full px-5 py-6 md:px-10 md:py-8 flex-none flex flex-col md:flex-row justify-between items-start md:items-end border-t border-gray-100 text-xs text-subtle gap-4 md:gap-0">
        <div className="flex gap-4">
          <span>© 2025 William</span>
          <span>San Francisco, CA</span>
        </div>

        <ul className="flex gap-6">
          <li><a href="https://github.com/williamzhao7140" target="_blank" className="hover:text-ink transition-colors">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/william-zhao7140/" target="_blank" className="hover:text-ink transition-colors">LinkedIn</a></li>
        </ul>
      </footer>

    </div>
  );
};

