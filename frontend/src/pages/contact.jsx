import "./contact.css";

import Nav from "../components/nav";
import Footer from "../components/footer";
import { useResetComponentStore } from "../../hooks/ComponentStoreUtil";

const Contact = () => {
    useResetComponentStore();

    return (
        <main>
            <Nav/>
            <div id="center-contact-page">
                <h1 id="contact-title">Contact Us</h1>
                <p id="contact-p">
                    The PC Build Buddy team makes great effort to ensure a quality experience. 
                    We welcome you to send us any problems or concerns that you may be experiencing with our product. 
                    We also welcome you to send us any business inqueries and proposals.
                </p>
                <div id="contact-grid">
                    <div id="contact-customer">
                        <h2 className="contact-customer-business-titles">Customer Support</h2>
                        <span><a href="mailto:someone@example.com">support@pcbuildbuddy.com</a></span>
                    </div>
                    <div id="contact-business">
                        <h2 className="contact-customer-business-titles">Business Inqueries</h2>
                        <span><a href="mailto:someone@example.com">business@pcbuildbuddy.com</a></span>
                    </div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Contact;