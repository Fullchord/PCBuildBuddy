import "./AnchorButton.css";
import Button from "./button";

import { useNavigate } from "react-router-dom";

const AnchorButton = ({to, children}) => {
    const navigate = useNavigate();

    const onClick = () => {
        console.log("here");
        navigate(to);
    }

    return (
        <div className="anchor-button">
            <Button onClick={onClick}>{children}</Button>
        </div>
    );
}

export default AnchorButton;