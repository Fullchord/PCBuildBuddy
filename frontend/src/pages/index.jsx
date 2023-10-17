import "./index.css";
import "../components/nav";

import Nav from "../components/nav.jsx";
import Button from "../components/button.jsx";
import ContentCard from "../components/ContentCard";

const Index = () => {

    return (
        <>
            <Nav/>
            <div id="index-content">
                <div className="index-content-item">
                    <h1>Here is your PC Build Buddy!</h1>
                    <div className="index-content-cards">
                        <div className="index-content-cards-card">
                            <ContentCard>
                                <h2>Who are we?</h2>
                                <p>
                                    Started in our senior year of college, PC Build Buddy was mean't from the start
                                    to help people. As computer science students, we loved building and assembling
                                    new PC's. We wanted to bring that joy to everyone, including those who are not
                                    as versed in computers.
                                </p>
                            </ContentCard>
                        </div>
                        <div className="index-content-cards-card">
                            <ContentCard>
                                <h2>What do we do?</h2>
                                <p>
                                    To put it simply, we help people build the computer that suites them. Custom 
                                    PCs are great to get the best performance for your needs at the lowest price.
                                    Our goal is to give that ability to everyone, including those who are not as 
                                    versed in computers. We believe that everyone should get the most bang for their 
                                    buck, which is what we are here to help you with. Through our guided tour you
                                    will confidently be able to choose the parts you need for your pc, compatibility
                                    guaranteed.
                                </p>
                            </ContentCard>
                        </div>
                    </div>
                </div>
                <div id="index-content-item">
                    <h1>Unsure how to build a PC?</h1>
                    <ContentCard>
                        <p>
                            We are here to help! PC build buddy has in-house built tools that help those with less
                            experience choose the components that go into their PC. The process starts with a guided tour 
                            through each component. We provide useful and concise information about each component. The
                            guided tour will automatically show PC components that are compatible with your current 
                            configuration.
                        </p>
                    </ContentCard>
                </div>
                <div id="index-content-item">
                    <h1>How to use</h1>
                    <ContentCard>
                        <p>
                            Welcome to our user-friendly PC component selection tool, designed to assist even the 
                            most inexperienced users in building their own custom PCs. Building a computer can be a 
                            daunting task, but with our guided tour, you'll be able to navigate the process with ease
                            and confidence.
                        </p>
                        <br/>
                        <p>
                            Begin by specifying how you intend to use your PC. 
                            Are you a gamer, content creator, or simply looking for a workhorse for everyday tasks?
                            Our tool tailors recommendations based on your specific needs, ensuring your PC is 
                            perfectly suited to its intended purpose.
                         </p>
                         <br/>
                         <p>
                            The heart of our tool is the guided selection process. We'll walk you through the core
                            components of your PC one by one: CPU, GPU, RAM, storage, motherboard, and more. At each
                            step, we provide detailed explanations about the role of each component, its importance, 
                            and how it affects your PC's overall performance.
                        </p>
                    </ContentCard>
                </div>
                <div id="index-content-item">
                    <h1>Lets Get Started!</h1>
                    <div><Button>Get Started!</Button></div>
                </div>
            </div>
        </>
    );
}

export default Index;