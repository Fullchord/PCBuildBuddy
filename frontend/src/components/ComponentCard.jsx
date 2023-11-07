import "./ComponentCard.css";
import { ComponentType } from "../../util/ComponentType";
import { BsFillCpuFill, BsFan, BsMotherboardFill, BsMemory, BsFillDeviceHddFill, BsGpuCard, BsCpuFill, Bs0Circle } from 'react-icons/bs';
import { PiComputerTowerFill } from 'react-icons/pi';
import { FaPlug } from 'react-icons/fa6';

import { useDispatch } from "react-redux";
import { setCurrentSelected } from "../../redux/componentSlice";

import * as changeCase from "change-case";

const ComponentCard = ({component, isSelected}) => {
    const dispatch = useDispatch();

    const onClick = () => { 
        dispatch(setCurrentSelected(component));
    }

    return (
        <div className={`component-wrapper ${isSelected ? "component-selected" : ""}`.trim()}>
            <div className="component-content" onClick={onClick}>
                <div className="component-content-image">
                    {getDefaultImage(ComponentType.fromStr(component.type))}
                </div>
                <span className="component-detail">
                    <span className="component-detail-spec">Name: </span>
                    <span className="component-detail-value">{changeCase.capitalCase(component.name)}</span>
                </span>
                <br/>
                <span className="component-detail">
                    <span className="component-detail-spec">Price: </span>
                    <span className="component-detail-value">{component.price}</span>
                </span>
                <ComponentCardDetails specs={component.specs}/>
            </div>
        </div>
    );
}

const ComponentCardDetails = ({specs}) => {
    let details = [];
    for (let [spec, value] of Object.entries(specs)) {
        if (value == undefined || value == null || value == "") continue;
        if (typeof(value) != number) 
        details.push(
            <div className="component-detail" key={spec}>
                <span className="component-detail-spec">{changeCase.capitalCase(spec.toString())}: </span>
                <span className="component-detail-value">{value}</span>
            </div>
        );
    }
    return <>{...details}</>
}

function getDefaultImage(type) {
    const size = "100%";
    switch(type) {
        case ComponentType.CPU:
            return <BsCpuFill size={size}/>;
        case ComponentType.COOLER:
            return <BsFan size={size}/>;
        case ComponentType.GPU:
            return <BsGpuCard size={size}/>;
        case ComponentType.MEMORY:
            return <BsMemory size={size}/>;
        case ComponentType.MOTHERBOARD:
            return <BsMotherboardFill size={size}/>;
        case ComponentType.TOWER:
            return <PiComputerTowerFill size={size}/>;
        case ComponentType.PSU:
            return <FaPlug size={size}/>;
        case ComponentType.STORAGE:
            return <BsFillDeviceHddFill size={size}/>;
        case ComponentType.UNDEFINED:
        default:
            return <Bs0Circle size={size}/>;
    }
}

export default ComponentCard;