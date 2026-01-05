import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const location = useLocation();
    const isAdmin = location.pathname.startsWith('/admin');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setMobileMenuOpen(false);
    };

    return (
        <nav className="glass-space fixed top-0 left-0 right-0 z-50">
            <div className="container-custom">
                <div className="flex items-center justify-between h-16 px-4 md:px-0">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-bold" style={{ color: 'var(--space-cyan)' }} onClick={closeMobileMenu}>
                        Portfolio
                    </Link>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-button text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
                        onClick={toggleMobileMenu}
                        aria-label="Toggle menu"
                    >
                        {mobileMenuOpen ? (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        )}
                    </button>

                    {/* Desktop Navigation Links */}
                    <div className="desktop-menu items-center gap-8">
                        {!isAdmin ? (
                            <>
                                <a
                                    href="#home"
                                    className="text-white/80 hover:text-white hover:scale-105 transition-all text-base font-medium"
                                >
                                    Home
                                </a>
                                <a
                                    href="#about"
                                    className="text-white/80 hover:text-white hover:scale-105 transition-all text-base font-medium"
                                >
                                    About
                                </a>
                                <a
                                    href="#projects"
                                    className="text-white/80 hover:text-white hover:scale-105 transition-all text-base font-medium"
                                >
                                    Projects
                                </a>
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
                                    Profile
                                </Link>
                                <Link
                                    to="/admin/projects"
                                    className={`text-base font-medium transition-all hover:scale-105 ${location.pathname === '/admin/projects' ? 'text-white' : 'text-white/80 hover:text-white'}`}
                                >
                                    Projects
                                </Link>
                                <Link
                                    to="/"
                                    className="btn-space text-sm px-6 py-2 rounded-lg"
                                >
                                    View Site
                                </Link>
                            </>
                        )}
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`mobile-menu ${mobileMenuOpen ? '' : 'hidden'}`}>
                    {!isAdmin ? (
                        <>
                            <a
                                href="#home"
                                className="text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all text-base font-medium"
                                onClick={closeMobileMenu}
                            >
                                Home
                            </a>
                            <a
                                href="#about"
                                className="text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all text-base font-medium"
                                onClick={closeMobileMenu}
                            >
                                About
                            </a>
                            <a
                                href="#projects"
                                className="text-white/80 hover:text-white hover:bg-white/5 px-4 py-3 rounded-lg transition-all text-base font-medium"
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </a>
                        </>
                    ) : (
                        <>
                            <Link
                                to="/admin"
                                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === '/admin' ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                onClick={closeMobileMenu}
                            >
                                Dashboard
                            </Link>
                            <Link
                                to="/admin/profile"
                                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === '/admin/profile' ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                onClick={closeMobileMenu}
                            >
                                Profile
                            </Link>
                            <Link
                                to="/admin/projects"
                                className={`px-4 py-3 rounded-lg text-base font-medium transition-all ${location.pathname === '/admin/projects' ? 'text-white bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/5'}`}
                                onClick={closeMobileMenu}
                            >
                                Projects
                            </Link>
                            <Link
                                to="/"
                                className="btn-space text-sm px-6 py-3 rounded-lg text-center"
                                onClick={closeMobileMenu}
                            >
                                View Site
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
