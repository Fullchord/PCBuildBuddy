import "./about.css";

import Nav from "../components/nav";
import Footer from "../components/footer";

import { useResetComponentStore } from "../../hooks/ComponentStoreUtil";

const About = () => {
    useResetComponentStore();

    return (
        <main>
            <Nav/>
            <div id="about-grid">
                <div id="about-left-grid">
                    <h1 id="about-title">About</h1>
                    <p id="about-p">
                        &emsp;&emsp;We help people build the computer that suites them. Custom 
                        PCs are great to get the best performance for your needs at the lowest price.
                        Our goal is to give that ability to everyone, including those who are not as 
                        versed in computers. We believe that everyone should get the most bang for their 
                        buck, which is what we are here to help you with. Through our guided tour you
                        will confidently be able to choose the parts you need for your pc, compatibility
                        guaranteed.
                    </p>
                </div>
                <div id="about-right-grid">
                    <img src="images/pc_0.png" width="80%"></img>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default About;