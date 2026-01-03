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
        name: 'Utku Şen',
        title: 'Full Stack Developer & Web Tasarımcı',
        bio: 'Modern web teknolojileri konusunda uzmanlaşmış, tutkulu bir yazılım geliştiriciyim. Kullanıcı deneyimini ön planda tutan, estetik ve işlevsel web uygulamaları geliştiriyorum. React, Node.js ve modern JavaScript ekosistemi ile çalışmayı seviyorum.',
        email: 'iletisim@utkusen.com.tr',
        github: 'https://github.com/utkusen',
        linkedin: 'https://linkedin.com/in/utkusen',
        twitter: 'https://twitter.com/utkusen'
    });

    const [projects, setProjects] = useState([
        {
            id: 1,
            title: 'E-Ticaret Platformu',
            description: 'Modern tasarım prensiplerine uygun, kullanıcı dostu arayüze sahip tam kapsamlı bir e-ticaret çözümü. Sepet yönetimi, ödeme entegrasyonu ve admin paneli ile birlikte gelir.',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe', 'Tailwind CSS'],
            link: 'https://example.com',
            github: 'https://github.com/utkusen/ecommerce-platform',
            image: ''
        },
        {
            id: 2,
            title: 'Proje Yönetim Sistemı',
            description: 'Ekiplerin projelerini kolayca yönetebileceği, kanban board ve zaman takibi özellikleri içeren kurumsal çözüm. Real-time güncellemeler ve bildirim sistemi mevcuttur.',
            technologies: ['Vue.js', 'Firebase', 'Vuex', 'Socket.io', 'Bootstrap'],
            link: 'https://example.com',
            github: 'https://github.com/utkusen/project-management',
            image: ''
        },
        {
            id: 3,
            title: 'Blog & Portfolio CMS',
            description: 'Kişisel blog ve portfolio sitesi oluşturmak isteyenler için geliştirilmiş içerik yönetim sistemi. SEO optimizasyonu ve responsive tasarım ile birlikte gelir.',
            technologies: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'TailwindCSS'],
            link: 'https://example.com',
            github: 'https://github.com/utkusen/blog-portfolio-cms',
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
