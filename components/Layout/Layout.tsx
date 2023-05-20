import React from 'react';
import Navbar from '../Navbar/Navbar';


const Layout: React.FC = ({ children }) => {

    return (
        <>
            <Navbar bgColor={"black"} />
            <main>{children}</main>
        </>
    )
}
export default Layout;