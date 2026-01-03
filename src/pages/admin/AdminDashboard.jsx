import React from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';

const AdminDashboard = () => {
    const { profile, projects } = useData();

    return (
        <div className="min-h-screen">
            <Navbar />

            <div className="container-custom pt-40 pb-12">
                <div className="slide-up">
                    <h1 className="mb-8 text-4xl md:text-5xl font-bold" style={{ color: 'var(--space-cyan)' }}>Admin Dashboard</h1>
                </div>

                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="glass-space p-6 slide-up delay-100 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">Toplam Proje</h3>
                            <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-3xl font-bold text-white">{projects.length}</p>
                    </div>

                    <div className="glass-space p-6 slide-up delay-200 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">Profil Durumu</h3>
                            <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-green-400">Aktif</p>
                    </div>

                    <div className="glass-space p-6 slide-up delay-300 rounded-2xl">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-lg font-semibold text-white">Son Güncelleme</h3>
                            <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center">
                                <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </div>
                        <p className="text-lg font-semibold text-white">Bugün</p>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <Link to="/admin/profile" className="glass-space p-8 card-hover slide-up delay-100 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Profil Yönetimi</h3>
                                <p className="text-white/60">Kişisel bilgilerinizi düzenleyin</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-white/70 mb-2">İsim: {profile.name}</p>
                            <p className="text-white/70 mb-2">Unvan: {profile.title}</p>
                            <p className="text-white/70">E-posta: {profile.email}</p>
                        </div>
                    </Link>

                    <Link to="/admin/projects" className="glass-space p-8 card-hover slide-up delay-200 rounded-2xl">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center">
                                <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                </svg>
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">Proje Yönetimi</h3>
                                <p className="text-white/60">Projelerinizi ekleyin ve düzenleyin</p>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-white/70 mb-2">Toplam Proje: {projects.length}</p>
                            <p className="text-white/70">Son proje eklendiğinde gösterilir</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
