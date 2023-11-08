import { useSelector } from "react-redux";
import "./Receipt.css"

const Receipt = () => {
    //const selectedComponents = [{"name": "amd", "price":"150"}, {"name":"intel", "price":"25"}];
    const selectedComponents = useSelector(state => state.components.selectedComponents);

    return (
        <div id="content-wrapper-receipt">
            { selectedComponents.map(selectedComponents => {
             return (
                <>
                    <span id="left-side-receipt">{selectedComponents.name}</span>
                    <span id="right-side-receipt">${selectedComponents.price}</span>
                </>
            );
            })}
        </div>
    );
}

export default Receipt;