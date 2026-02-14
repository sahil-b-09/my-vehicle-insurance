import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import InsuranceGuide from '../components/InsuranceGuide';
import WhyUs from '../components/WhyUs';
import About from '../components/About';
import { Helmet } from 'react-helmet-async';

const Home: React.FC = () => {
    const { hash } = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.substring(1));
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [hash]);

    return (
        <>
            <Helmet>
                <title>MV Vehicle Insurance | Best POSP Agent in Maharashtra</title>
                <meta name="description" content="Get the best quotes for Car, Bike, Tractor, and Commercial Vehicle Insurance in Maharashtra. Instant policy renewal and claim assistance by Vidya Bagul." />
                <meta name="keywords" content="vehicle insurance, car insurance, bike insurance, tractor insurance, commercial vehicle insurance, Maharashtra, POSP agent, Vidya Bagul" />
            </Helmet>
            <Hero />
            <Services />
            <InsuranceGuide />
            <WhyUs />
            <About />
        </>
    );
};

export default Home;
