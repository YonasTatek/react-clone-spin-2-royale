import React from 'react'
import About from '../components/About'
import Client from '../components/Client'
import Footer from '../components/Footer'
import Gallery from '../components/Gallery'
import Graphic from '../components/Graphic'
import Header from '../components/Header'
import Services from '../components/Services'
export default function LandingPage() {
    return (
        <>
           <Header/> 
           <About/>
           <Services />
           <Graphic/>
           <Client/>
           <Gallery/>
           <Footer/>
        </>
    )
}
