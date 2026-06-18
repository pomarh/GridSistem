import React from "react";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import Services from "../components/sections/Services";
import Portfolio from "../components/sections/Portfolio";
import Contact from "../components/sections/Contact";
import WhatsAppButton from "../components/layout/WhatsAppButton";

function Home() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Services />
                <Portfolio />
                <Contact />
                <WhatsAppButton />
            </main>
            <Footer />
        </>
    );
}

export default Home;
