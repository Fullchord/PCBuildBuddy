import "./index.css";
import "../components/nav";

import Nav from "../components/nav.jsx";
import ContentCard from "../components/ContentCard";
import AnchorButton from "../components/AnchorButton";
import Footer from "../components/footer";
//import Carousal from "../components/Carousal.jsx";
import { useResetComponentStore } from "../../hooks/ComponentStoreUtil";

const Index = () => {
    useResetComponentStore();

    return (
        <main>
            <Nav/>
            <div id="index-content">
                <div id="intro">
                    <h1 id="index-content-item">Unsure how to build a PC?</h1>
                    <p id="index-content-p">
                        Welcome to our user-friendly PC component selection tool, designed to assist even the 
                        most inexperienced users in building their own custom PCs. Building a computer can be a 
                        daunting task, but with our guided tour, you'll be able to navigate the process with ease
                        and confidence. We provide useful and concise information about each component. The
                        guided tour will automatically show PC components that are compatible with your current 
                        configuration. All that is required of you is to go step by step. At the end we will supply you
                            with a bill of materials that will have the components you selected as well as the prices.
                    </p>
                </div>
                <div id="index-grid">
                    <div id="index-grid-item1"><img id="index-img1" src="images/gsmarena_001.jpg"></img></div>
                    <div id="index-grid-item2"><img id="index-img2" src="images/intel-13th-gen-desktop-800x450.jpg"></img></div>
                    <div id="index-grid-item3"><img id="index-img3" src="images/x570refresh-feature.jpg"></img></div>
                </div>
                <div>
                    <h1 id="index-content-item">Lets Get Started!</h1>
                    <div id="bottom-page"><AnchorButton to="/build">Start Building!</AnchorButton></div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Index;