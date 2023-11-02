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
                    <Category categoryType={type} key={ComponentType.getStringRep(type)}/>
                );
            })}       
        </div>
    );
}

const Category = ({categoryType}) => {
    const categoryString = ComponentType.getStringRep(categoryType); 
    return (
        <div className="category-content" key={categoryString}>
            {getIconForType(categoryType)}
            <div className="category-content-title">{categoryString}</div>
        </div>
    );
}

function getIconForType(componentType) {
    switch(componentType) {
        case ComponentType.CPU:
            return <BsCpuFill size='auto'/>;
        case ComponentType.COOLER:
            return <BsFan size='auto'/>;
        case ComponentType.GPU:
            return <BsGpuCard size='auto'/>;
        case ComponentType.MEMORY:
            return <BsMemory size='auto'/>;
        case ComponentType.MOTHERBOARD:
            return <BsMotherboardFill size='auto'/>;
        case ComponentType.TOWER:
            return <PiComputerTowerFill size='auto'/>;
        case ComponentType.PSU:
            return <FaPlug size='auto'/>;
        case ComponentType.STORAGE:
            return <BsFillDeviceHddFill size='auto'/>;
        case ComponentType.UNDEFINED:
        default:
            return <Bs0Circle size='auto'/>;
    }
}

export default Categories;