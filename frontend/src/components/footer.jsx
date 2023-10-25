import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link className="footer-link" to={`/`}>Home</Link> 
            <Link className="footer-link" to={`/about`}>About</Link> 
            <Link className="footer-link" to={`/build`}>Build</Link> 
            <Link className="footer-link" to={`/contact`}>Contact</Link> 
            <p className="p">@2023 PCBuildBuddy</p>
        </footer>
    );
}

export default Footer;