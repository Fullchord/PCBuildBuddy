import "./contact.css";

import Nav from "../components/nav";
import Footer from "../components/footer";
import { useResetComponentStore } from "../../hooks/ComponentStoreUtil";

const Contact = () => {
    useResetComponentStore();

    return (
        <main>
            <Nav/>
            <Footer/>
        </main>
    );
}

export default Contact;