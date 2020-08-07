import React from 'react';
import Header from '../../components/Main/Header'
import Footer from '../../components/Main/Footer'
import Navbar from '../../components/Main/NavBar';
export default ({ children }) => {

    console.log('render Main')

    return (
        <div>
            <Header />
            <section>
		    <div class="container">
            <Navbar />
                {children}
            </div>
            </section>
            <Footer />
        </div>
    )
}
