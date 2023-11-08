import "./bill.css";

import Header from "../components/header";
import Footer from "../components/footer";
import AnchorButton from "../components/AnchorButton";
import Receipt from "../components/Receipt";
import Button from "../components/button";

const Bill = () => {

    const onPrint = () => {
        window.print();
    }

    return (
        <main>
            <Header enableStickyHeader />
            <div className="main-content-bill">
                <div id="left-side">
                    <h1 id="title">Bill of Materials</h1>
                    <div className="main-content-bill">
                        <Button onClick={onPrint}>Print</Button>        
                        <div id="temp"><AnchorButton to="/build">New Build?</AnchorButton></div>
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