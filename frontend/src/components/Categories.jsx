import "./Categories.css";
import { BsFillCpuFill, BsFan, BsMotherboardFill, BsMemory, BsFillDeviceHddFill, BsGpuCard, BsCpuFill, Bs0Circle } from 'react-icons/bs';
import { PiComputerTowerFill } from 'react-icons/pi';
import { FaPlug } from 'react-icons/fa6';
import { ComponentType } from "../../util/ComponentType";

const Categories = () => {
    
    const categories = [
        ComponentType.CPU,
        ComponentType.COOLER,
        ComponentType.MOTHERBOARD,
        ComponentType.MEMORY,
        ComponentType.STORAGE,
        ComponentType.GPU,
        ComponentType.TOWER,
        ComponentType.PSU,
    ];

    return (
        <div id="categories-content">
            {categories.map((type) => {
                return (
                    <Category categoryType={type} isSelected={type == ComponentType.CPU} key={ComponentType.getStringRep(type)}/>
                );
            })}       
        </div>
    );
}

const Category = ({categoryType, isSelected}) => {
    const categoryString = ComponentType.getStringRep(categoryType); 
    const classes  = ["category-content"];
    if(isSelected) classes.push("category-selected");
    return (
        <div className={classes.reduce( (acc,next)=>acc+=" "+next)}  key={categoryString}>
            <div className="category-icons">
                {getIconForType(categoryType)}
            </div>
            <div className="category-content-title">{categoryString}</div>
        </div>
    );
}

function getIconForType(componentType) {
    switch(componentType) {
        case ComponentType.CPU:
            return <BsCpuFill size='100%'/>;
        case ComponentType.COOLER:
            return <BsFan size='100%'/>;
        case ComponentType.GPU:
            return <BsGpuCard size='100%'/>;
        case ComponentType.MEMORY:
            return <BsMemory size='100%'/>;
        case ComponentType.MOTHERBOARD:
            return <BsMotherboardFill size='100%'/>;
        case ComponentType.TOWER:
            return <PiComputerTowerFill size='100%'/>;
        case ComponentType.PSU:
            return <FaPlug size='100%'/>;
        case ComponentType.STORAGE:
            return <BsFillDeviceHddFill size='100%'/>;
        case ComponentType.UNDEFINED:
        default:
            return <Bs0Circle size='100%'/>;
    }
}

export default Categories;