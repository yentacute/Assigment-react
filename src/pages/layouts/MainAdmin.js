import React from 'react'
import Sidebar from '../../components/Admin/Sidebar'
import Topbar from '../../components/Admin/TopBar'
import Footer from '../../components/Admin/Footer'


export default ({ children }) => {
    return (
        <div>
            <div id="wrapper">
            <Sidebar />
            <div id="right-panel" className="right-panel">
            <Topbar />
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <div className="container-fluid">
                            {children}
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer />
        </div>
        </div>
    )
}

