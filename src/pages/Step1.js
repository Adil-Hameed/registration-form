import React from 'react'
import PreNavbar from '../components/common/PreNavbar'
import Navbar from '../components/common/Navbar'
import Footer from '../components/common/Footer'
import Header1 from '../components/step1/Header1'
import StepBar from '../components/common/StepBar'
import ContactInfo from '../components/step1/ContactInfo'

export default function Step1() {
    return (
        <>
            <PreNavbar />
            <Navbar />
            <Header1 />
            <StepBar step1 />
            <ContactInfo />
            <Footer />
        </>
    )
}
