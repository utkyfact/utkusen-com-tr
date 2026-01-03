import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useData } from '../../context/DataContext';

const AdminProjects = () => {
    const { projects, addProject, updateProject, deleteProject } = useData();
    const [isAdding, setIsAdding] = useState(false);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        technologies: '',
        link: '',
        github: '',
        image: ''
    });

    const resetForm = () => {
        setFormData({
            title: '',
            description: '',
            technologies: '',
            link: '',
            github: '',
            image: ''
        });
        setIsAdding(false);
        setEditingId(null);
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const projectData = {
            ...formData,
            technologies: formData.technologies.split(',').map(t => t.trim())
        };

        if (editingId) {
            updateProject(editingId, projectData);
        } else {
            addProject(projectData);
        }

        resetForm();
    };

    const handleEdit = (project) => {
        setFormData({
            title: project.title,
            description: project.description,
            technologies: project.technologies.join(', '),
            link: project.link || '',
            github: project.github || '',
            image: project.image || ''
        });
        setEditingId(project.id);
        setIsAdding(true);
    };

    const handleDelete = (id) => {
        if (confirm('Bu projeyi silmek istediğinizden emin misiniz?')) {
            deleteProject(id);
        }
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container-custom pt-40 pb-12">
                <div className="slide-up mb-8 flex items-center justify-between">
                    <div>
                        <h1 className="mb-2 text-4xl md:text-5xl font-bold" style={{ color: 'var(--space-cyan)' }}>Proje Yönetimi</h1>
                        <p className="text-white/70 text-lg">Projelerinizi buradan yönetebilirsiniz</p>
                    </div>
                    <button
                        onClick={() => setIsAdding(!isAdding)}
                        className="btn-space flex items-center gap-2 px-6 py-3 rounded-xl"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                        Yeni Proje Ekle
                    </button>
                </div>

                {isAdding && (
                    <div className="glass-space p-8 mb-8 slide-up rounded-2xl">
                        <h2 className="text-2xl font-bold text-white mb-6">
                            {editingId ? 'Projeyi Düzenle' : 'Yeni Proje Ekle'}
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Proje Adı
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Açıklama
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    rows="3"
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Teknolojiler <span className="text-white/50 font-normal">(virgülle ayırın)</span>
                                </label>
                                <input
                                    type="text"
                                    name="technologies"
                                    value={formData.technologies}
                                    onChange={handleChange}
                                    className="w-full"
                                    placeholder="React, Node.js, MongoDB"
                                    required
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        Demo URL
                                    </label>
                                    <input
                                        type="url"
                                        name="link"
                                        value={formData.link}
                                        onChange={handleChange}
                                        className="w-full"
                                        placeholder="https://example.com"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        GitHub URL
                                    </label>
                                    <input
                                        type="url"
                                        name="github"
                                        value={formData.github}
                                        onChange={handleChange}
                                        className="w-full"
                                        placeholder="https://github.com/username/project"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Görsel URL
                                </label>
                                <input
                                    type="url"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                    className="w-full"
                                    placeholder="https://example.com/image.jpg"
                                />
                            </div>

                            <div className="flex gap-4">
                                <button type="submit" className="btn-space flex-1 px-6 py-3 rounded-xl">
                                    {editingId ? 'Güncelle' : 'Ekle'}
                                </button>
                                <button
                                    type="button"
                                    onClick={resetForm}
                                    className="glass-space px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all"
                                >
                                    İptal
                                </button>
                            </div>
                        </form>
                    </div>
                )}

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <div key={project.id} className={`glass-space p-6 slide-up delay-${(index % 3 + 1) * 100} rounded-2xl`}>
                            <div
                                className="w-full h-40 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 overflow-hidden"
                                style={{
                                    backgroundImage: project.image ? `url(${project.image})` : 'none',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                                {!project.image && (
                                    <div className="w-full h-full flex items-center justify-center">
                                        <svg className="w-12 h-12 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                )}
                            </div>

                            <h3 className="text-xl font-bold mb-2 text-white">{project.title}</h3>
                            <p className="text-white/70 mb-4 line-clamp-2">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.slice(0, 3).map((tech, i) => (
                                    <span
                                        key={i}
                                        className="px-2 py-1 bg-white/5 rounded text-xs text-white/80 border border-white/10"
                                    >
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 3 && (
                                    <span className="px-2 py-1 bg-white/5 rounded text-xs text-white/80 border border-white/10">
                                        +{project.technologies.length - 3}
                                    </span>
                                )}
                            </div>

                            <div className="flex gap-2">
                                <button
                                    onClick={() => handleEdit(project)}
                                    className="flex-1 glass-space px-4 py-2 rounded-lg text-sm font-semibold hover:bg-white/10 transition-all"
                                >
                                    Düzenle
                                </button>
                                <button
                                    onClick={() => handleDelete(project.id)}
                                    className="glass-space px-4 py-2 rounded-lg text-sm font-semibold hover:bg-red-500/20 transition-all text-red-400"
                                >
                                    Sil
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {projects.length === 0 && !isAdding && (
                    <div className="text-center py-16 glass-space rounded-2xl">
                        <svg className="w-16 h-16 text-white/20 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                        <p className="text-white/60 text-lg mb-4">Henüz proje eklenmemiş</p>
                        <button
                            onClick={() => setIsAdding(true)}
                            className="btn-space px-6 py-3 rounded-xl"
                        >
                            İlk Projeyi Ekle
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdminProjects;
