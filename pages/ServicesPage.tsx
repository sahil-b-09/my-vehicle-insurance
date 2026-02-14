
import React from 'react';
import Services from '../components/Services';
import { Helmet } from 'react-helmet-async';

const ServicesPage: React.FC = () => {
    return (
        <>
            <Helmet>
                <title>Our Services - MV Vehicle Insurance</title>
                <meta name="description" content="Explore our wide range of vehicle insurance services including Car, Bike, Commercial Vehicle, and Policy Renewals." />
            </Helmet>
            <div className="pt-24">
                <Services />
            </div>
        </>
    );
};

export default ServicesPage;
