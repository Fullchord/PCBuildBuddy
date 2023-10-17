import "./nav.css";
import Button from "./button.jsx"

const Nav = () => {

    return (
        <nav className="nav">
            <h1 className="title">PC Build Buddy</h1>
            <Button className="test">Start Building!</Button>
        </nav>
    );
}

export default Nav;