import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import { useData } from '../../context/DataContext';

const AdminProfile = () => {
    const { profile, updateProfile } = useData();
    const [formData, setFormData] = useState(profile);
    const [saved, setSaved] = useState(false);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile(formData);
        setSaved(true);
        setTimeout(() => setSaved(false), 3000);
    };

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container-custom pt-40 pb-12">
                <div className="max-w-3xl mx-auto">
                    <div className="slide-up mb-8">
                        <h1 className="mb-4 text-4xl md:text-5xl font-bold" style={{ color: 'var(--space-cyan)' }}>Profil Yönetimi</h1>
                        <p className="text-white/70 text-lg">Kişisel bilgilerinizi buradan güncelleyebilirsiniz</p>
                    </div>

                    <form onSubmit={handleSubmit} className="glass-space p-8 slide-up delay-100 rounded-2xl">
                        <div className="space-y-6">
                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Ad Soyad
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Unvan
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
                                    Hakkında
                                </label>
                                <textarea
                                    name="bio"
                                    value={formData.bio}
                                    onChange={handleChange}
                                    rows="4"
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    E-posta
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full"
                                    required
                                />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6">
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
                                        placeholder="https://github.com/username"
                                    />
                                </div>

                                <div>
                                    <label className="block text-white font-semibold mb-2">
                                        LinkedIn URL
                                    </label>
                                    <input
                                        type="url"
                                        name="linkedin"
                                        value={formData.linkedin}
                                        onChange={handleChange}
                                        className="w-full"
                                        placeholder="https://linkedin.com/in/username"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="block text-white font-semibold mb-2">
                                    Twitter URL
                                </label>
                                <input
                                    type="url"
                                    name="twitter"
                                    value={formData.twitter}
                                    onChange={handleChange}
                                    className="w-full"
                                    placeholder="https://twitter.com/username"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex gap-4">
                            <button type="submit" className="btn-space flex-1 px-6 py-3 rounded-xl">
                                Değişiklikleri Kaydet
                            </button>
                            {saved && (
                                <div className="glass-space px-6 py-3 rounded-lg font-semibold text-green-400 flex items-center gap-2">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    Kaydedildi!
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
