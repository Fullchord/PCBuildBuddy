import "./ComponentCard.css";
import "../../util/ComponentType.js"

const ComponentCard = ({component}) => {
    return (
        <div id="components-content">
            <img/>
            <p>{component.name}</p>
            <p>{component.price}</p>
            <ComponentCardDetails specs={component.specs}/>
        </div>
    );
}

const ComponentCardDetails = ({specs}) => {
    let details = [];
    for (let [spec, value] of Object.entries(specs)) {
        details.push(
            <div key={spec}>
                <span>{spec}</span>
                <span>{value}</span>
            </div>
        );
    }
    return <>{...details}</>
}

export default ComponentCard;