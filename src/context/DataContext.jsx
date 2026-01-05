import React, { useState, useEffect } from 'react';

const DataContext = React.createContext();

export const useData = () => {
    const context = React.useContext(DataContext);
    if (!context) {
        throw new Error('useData must be used within DataProvider');
    }
    return context;
};

export const DataProvider = ({ children }) => {
    const [profile, setProfile] = useState({
        name: 'Utku Sen',
        title: 'Full Stack Developer',
        bio: 'A passionate software developer specialized in modern web technologies. I build aesthetic and functional web applications that prioritize user experience. I love working with Python, Node.js, PHP, and React.',
        email: 'utkusen9@gmail.com',
        github: 'https://github.com/utkyfact',
        linkedin: 'https://linkedin.com/in/utkyfact',
        twitter: 'https://twitter.com/utkyfact'
    });

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'E-Commerce Platform',
            description: 'A comprehensive e-commerce solution with a user-friendly interface following modern design principles. Includes shopping cart management, payment integration, and admin panel.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            link: 'https://example.com',
            github: 'https://github.com/utkyfact/ecommerce-platform',
            image: ''
        },
        {
            id: 2,
            title: 'Project Management System',
            description: 'An enterprise solution for teams to easily manage their projects, featuring kanban boards and time tracking. Includes real-time updates and notification system.',
            technologies: ['Vue.js', 'Firebase', 'Vuex', 'Socket.io', 'Bootstrap'],
            link: 'https://example.com',
            github: 'https://github.com/utkyfact/project-management',
            image: ''
        },
        {
            id: 3,
            title: 'Blog & Portfolio CMS',
            description: 'A content management system developed for those who want to create personal blog and portfolio sites. Comes with SEO optimization and responsive design.',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
            link: 'https://example.com',
            github: 'https://github.com/utkyfact/blog-portfolio-cms',
            image: ''
        }
    ]);

    // Load data from localStorage on mount
    useEffect(() => {
        const savedProfile = localStorage.getItem('portfolio_profile');
        const savedProjects = localStorage.getItem('portfolio_projects');

        if (savedProfile) {
            setProfile(JSON.parse(savedProfile));
        }

        if (savedProjects) {
            setProjects(JSON.parse(savedProjects));
        }
    }, []);

    // Save data to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem('portfolio_profile', JSON.stringify(profile));
    }, [profile]);

    useEffect(() => {
        localStorage.setItem('portfolio_projects', JSON.stringify(projects));
    }, [projects]);

    const updateProfile = (newProfile) => {
        setProfile(newProfile);
    };

    const addProject = (project) => {
        const newProject = {
            ...project,
            id: Date.now()
        };
        setProjects([...projects, newProject]);
    };

    const updateProject = (id, updatedProject) => {
        setProjects(projects.map(p => p.id === id ? { ...p, ...updatedProject } : p));
    };

    const deleteProject = (id) => {
        setProjects(projects.filter(p => p.id !== id));
    };

    return (
        <DataContext.Provider value={{
            profile,
            projects,
            updateProfile,
            addProject,
            updateProject,
            deleteProject
        }}>
            {children}
        </DataContext.Provider>
    );
};
