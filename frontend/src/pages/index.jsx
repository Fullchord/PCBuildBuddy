import "./index.css";
import "../components/nav";
import Nav from "../components/nav.jsx";
import Button from "../components/button.jsx";
import Footer from "../components/footer.jsx";

const Index = () => {

    return (
        <>
            <Nav/>
            <h1 className="textHome">Title</h1>
            <p className="textHome">What is PC Build Buddy</p>
            <div className="centButton"><Button/></div>
        </>
    );
}

export default Index;