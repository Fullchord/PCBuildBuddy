import "./index.css";
import "../components/nav";
import Nav from "../components/nav.jsx";
import Button from "../components/button.jsx";
import Footer from "../components/footer.jsx";

const Index = () => {

    return (
        <>
            <Nav/>
            <Button/>
            <h1>Title</h1>
            <p>What is PC Build Buddy</p>
            <Button/>
        </>
    );
}

export default Index;