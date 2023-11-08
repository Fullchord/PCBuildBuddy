import { useSelector } from "react-redux";
import "./Receipt.css"

const Receipt = () => {
    //const selectedComponents = [{"name": "amd", "price":"150"}, {"name":"intel", "price":"25"}];
    const selectedComponents = useSelector(state => state.components.selectedComponents);
    let totalPrice = 0;
    for (const c of selectedComponents) {
        totalPrice += c.price;
    }

    return (
        <div id="content-wrapper-receipt">
            { selectedComponents.map(selectedComponents => {
             return (
                <>
                    <span className="left-side-receipt"><b>{selectedComponents.type}:</b> {selectedComponents.name}</span>
                    <span className="right-side-receipt">${selectedComponents.price}</span>
                </>
            );
            })}

            <hr id="receipt-hr"/>
            <span className="left-side-receipt"><b>Total</b></span>
            <span className="right-side-receipt">${totalPrice}</span>
        </div>
    );
}

export default Receipt;