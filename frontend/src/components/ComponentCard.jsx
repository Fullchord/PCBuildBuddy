import "./ComponentCard.css";
import "../../util/ComponentType.js"
import { ComponentType } from "../../util/ComponentType.js";

const ComponentCard = () => {
    return (
        <div id="components-content">
            <img/>
            <p>Name</p>
            <p>$0.00</p>
            <ComponentCardDetails componentType={ComponentType.CPU}/>
        </div>
    );
}

const ComponentCardDetails = ({componentType}) => {

    switch(componentType) {
        case ComponentType.CPU:
            return (
                <>
                    <p>Speed</p>
                    <p>CoreCount</p>
                    <p>ThreadCount</p>
                    <p>TDP</p>
                    <p>Description</p>
                </>
            );
        case ComponentType.COOLER:
            return (
                <>
                
                </>
            );
        case ComponentType.MEMORY:
            return (
                <>
                
                </>
            );
        case ComponentType.TOWER:
            return (
                <>
                
                </>
            );
        case ComponentType.GPU:
            return (
                <>
                
                </>
            );
        case ComponentType.MOTHERBOARD:
            return (
                <>
                
                </>
            );
        case ComponentType.PSU:
            return (
                <>
                
                </>
            );
        case ComponentType.STORAGE:
            return (
                <>
                
                </>
            );
        case ComponentType.UNDEFINED:
            return (
                <>
                
                </>
            );

    }
}

//CPU attributes
//GPU attributes


export default ComponentCard;