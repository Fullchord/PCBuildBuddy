import "./footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <Link class="footer-link" to={`/`}>Home</Link> 
            <Link class="footer-link" to={`/about`}>About</Link> 
            <Link class="footer-link" to={`/build`}>Build</Link> 
            <Link class="footer-link" to={`/contact`}>Contact</Link> 
            <p className="p">@2023 PCBuildBuddy</p>
        </footer>
    );
}

export default Footer;