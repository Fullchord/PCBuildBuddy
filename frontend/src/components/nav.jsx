import "./nav.css";
import AnchorButton from "./AnchorButton";

const Nav = () => {

    return (
        <nav className="nav">
            <h1 className="title">PC Build Buddy</h1>
            <AnchorButton to="/build" className="test">Start Building!</AnchorButton>
        </nav>
    );
}

export default Nav;