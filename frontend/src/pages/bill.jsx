import "./bill.css";

import Header from "../components/header";
import Footer from "../components/footer";
import AnchorButton from "../components/AnchorButton";
import Receipt from "../components/Receipt";
import Button from "../components/button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCurrentCategory } from "../../redux/componentSlice";

const Bill = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onPrint = () => {
        window.print();
    }

    const onNewBuild = () => {
        dispatch(resetCurrentCategory());
        navigate("/build");
    }

    return (
        <main>
            <Header enableStickyHeader />
            <div className="main-content-bill">
                <div id="left-side">
                    <h1 id="title">Bill of Materials</h1>
                    <div className="main-content-bill">
                        <Button className="extend-button" onClick={onPrint}>Print</Button>        
                        <Button className="extend-button" onClick={onNewBuild}>New Build?</Button>
                    </div>
                </div>
                <div id="right-side">
                    <div id="receipt"><Receipt/></div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Bill;