import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import StickyMobileBar from './StickyMobileBar';
import FloatingWhatsApp from './FloatingWhatsApp';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen relative overflow-x-hidden flex flex-col">
            <Header />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
            <StickyMobileBar />
            <FloatingWhatsApp />
        </div>
    );
};

export default Layout;
