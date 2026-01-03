import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');

    return (
        <nav className="glass-space fixed top-0 left-0 right-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold" style={{ color: 'var(--space-cyan)' }}>
                        Portfolio
                    </Link>

                    {/* Navigation Links */}
                    <div className="flex items-center gap-8">
                        {!isAdmin ? (
                            <>
                                <a
                                    href="#home"
                                    className="text-white/80 hover:text-white hover:scale-105 transition-all text-base font-medium"
                                >
                                    Ana Sayfa
                                </a>
                                <a
                                    href="#about"
                                    className="text-white/80 hover:text-white hover:scale-105 transition-all text-base font-medium"
                                >
                                    Hakkımda
                                </a>
                                <a
                                    href="#projects"
                                    className="text-white/80 hover:text-white hover:scale-105 transition-all text-base font-medium"
                                >
                                    Projeler
                                </a>
                                <Link
                                    to="/admin"
                                    className="btn-space text-sm px-6 py-2 rounded-lg"
                                >
                                    Admin Panel
                                </Link>
                            </>
                        ) : (
                            <>
                                <Link
                                    to="/admin"
                                    className={`text-base font-medium transition-all hover:scale-105 ${location.pathname === '/admin' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    Dashboard
                                </Link>
                                <Link
                                    to="/admin/profile"
                                    className={`text-base font-medium transition-all hover:scale-105 ${location.pathname === '/admin/profile' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    Profil
                                </Link>
                                <Link
                                    to="/admin/projects"
                                    className={`text-base font-medium transition-all hover:scale-105 ${location.pathname === '/admin/projects' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    Projeler
                                </Link>
                                <Link
                                    to="/"
                                    className="btn-space text-sm px-6 py-2 rounded-lg"
                                >
                                    Siteyi Görüntüle
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
