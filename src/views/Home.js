import React from 'react';
import Layout from '../common/Layout';
import Features from '../views/Features';
import Pricing from '../views/Pricing';
import Testimonials from '../views/Testimonials';
import Contacto from '../views/Contacto';


function Home() {
    return (
        <>
        <Layout title="Home" />
        <Features />
        <Pricing />
        <Testimonials />
        <Contacto />
        </>
    );
}

export default Home;