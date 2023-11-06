import "./bill.css";

import Header from "../components/header";
import Footer from "../components/footer";
import AnchorButton from "../components/AnchorButton";

const Bill = () => {

    return (
        <main>
            <Header enableStickyHeader />
            <div id="main-content">
                <div id="left-side">
                    <h1 id="title">Bill of Materials</h1>
                    <div id="main-content">
                        <AnchorButton onclick="window.print();return false;">Print</AnchorButton>
                        <AnchorButton>Save</AnchorButton>
                        <div id="temp"><AnchorButton to="/">New Build?</AnchorButton></div>
                    </div>
                </div>
                <div id="right-side">
                    <div id="receipt">Bill of Materials Receipt</div>
                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Bill;