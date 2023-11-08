import "./about.css";

import Nav from "../components/nav";
import Footer from "../components/footer";

import { useResetComponentStore } from "../../hooks/ComponentStoreUtil";

const About = () => {
    useResetComponentStore();

    return (
        <main>
            <Nav/>
            <Footer/>
        </main>
    );
}

export default About;