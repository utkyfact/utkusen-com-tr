import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import { useData } from '../context/DataContext';
import { useStructuredData } from '../utils/seo';

const Home = () => {
    const [scrollY, setScrollY] = useState(0);
    const { profile } = useData();

    // Add structured data for SEO
    useStructuredData(profile);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Arka plan yıldızları oluştur
    const generateBackgroundStars = (count) => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 200}%`, // Daha uzun sayfa için
            size: ['star-small', 'star-medium'][Math.floor(Math.random() * 2)],
            delay: `${Math.random() * 3}s`
        }));
    };

    const backgroundStars = generateBackgroundStars(150);

    return (
        <div className="min-h-screen relative overflow-x-hidden">
            {/* Sabit Uzay Arka Planı */}
            <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 0 }}>
                {/* Arka Plan Yıldızları */}
                <div
                    className="absolute inset-0"
                    style={{ transform: `translateY(${scrollY * 0.15}px)` }}
                >
                    {backgroundStars.map(star => (
                        <div
                            key={`bg-star-${star.id}`}
                            className={`star ${star.size}`}
                            style={{
                                left: star.left,
                                top: star.top,
                                animationDelay: star.delay,
                                opacity: 0.4
                            }}
                        />
                    ))}
                </div>

                {/* Ek Gezegenler - Sayfanın Alt Kısmı İçin */}
                <div
                    className="absolute inset-0"
                    style={{ transform: `translateY(${scrollY * 0.25}px)` }}
                >
                    <div
                        className="planet"
                        style={{
                            width: '70px',
                            height: '70px',
                            background: 'var(--space-pink)',
                            boxShadow: '0 0 30px rgba(255, 0, 110, 0.4)',
                            top: '120%',
                            left: '15%',
                            animationDuration: '9s'
                        }}
                    ></div>
                    <div
                        className="planet"
                        style={{
                            width: '90px',
                            height: '90px',
                            background: 'var(--space-blue)',
                            boxShadow: '0 0 35px rgba(45, 53, 97, 0.5)',
                            top: '150%',
                            right: '12%',
                            animationDuration: '11s'
                        }}
                    ></div>
                </div>
            </div>

            {/* İçerik */}
            <div className="relative" style={{ zIndex: 1 }}>
                <Navbar />
                <Hero />
                <About />
                <Projects />

                {/* Footer */}
                <footer className="py-8 border-t border-white/10">
                    <div className="container-custom text-center">
                        <p className="text-white/60">
                            © {new Date().getFullYear()} Portfolio. All rights reserved.
                        </p>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Home;
