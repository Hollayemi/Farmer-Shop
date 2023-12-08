import React from "react";
import Menu from "./Menu";
import Footer from './FooterPage'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import "../styles.css";

const Layout = ({
    title = "Title",
    description = "Description",
    className,
    children
}) => (
    <div>
        <Menu />
        <div className="jumbotron-me mb-3">
            <h2 className="font-weight-bold">{title}</h2>
            <p className="lead font-weight-bold">{description}</p>
        </div>
        
        <div className={className}>{children}</div>
        <Footer />
    </div>
);

export default Layout;
