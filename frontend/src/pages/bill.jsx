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
                    <div><AnchorButton onclick="window.print();">Print</AnchorButton></div>
                    <div><AnchorButton to="/">New Build?</AnchorButton></div>
                </div>
                <div id="right-side">

                </div>
            </div>
            <Footer/>
        </main>
    );
}

export default Bill;