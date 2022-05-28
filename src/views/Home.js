import React from 'react';
import Layout from '../common/Layout';
import Features from '../views/Features';
import Testimonials from '../views/Testimonials';
import Contacto from '../views/Contacto';
import Desarrollo from '../views/Desarrollo';


function Home() {
    return (
        <>
        <Layout title="Home" />
        <Features />
        <Desarrollo />
        <Testimonials />
        <Contacto />
        </>
    );
}

export default Home;