import "./bill.css";

import Header from "../components/header";
import Footer from "../components/footer";
import AnchorButton from "../components/AnchorButton";

const Bill = () => {

    return (
        <main>
            <Header enableStickyHeader />
            <div>
                <div id="main-content">
                </div>
            </div>
            <div><AnchorButton onclick="window.print();">Print</AnchorButton></div>
            <div><AnchorButton to="/">New Build?</AnchorButton></div>
            <Footer/>
        </main>
    );
}

export default Bill;