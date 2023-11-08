import "./Categories.css";
import { BsFillCpuFill, BsFan, BsMotherboardFill, BsMemory, BsFillDeviceHddFill, BsGpuCard, BsCpuFill, Bs0Circle } from 'react-icons/bs';
import { PiComputerTowerFill } from 'react-icons/pi';
import { FaPlug } from 'react-icons/fa6';
import { GiFinishLine } from 'react-icons/gi';
import { ComponentType } from "../../util/ComponentType";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil"

const Categories = () => {

    const currentCategory = useGetCategoryType();
    const currentCategories = getCategories(currentCategory);

    return (
        <div id="categories-content">
            {currentCategories.map((type) => {
                return (
                    <Category categoryType={type} isSelected={ type == currentCategory } key={ComponentType.getStringRep(type)}/>
                );
            })}  
            <div className="category-content">
                <div className="category-icon">
                    <GiFinishLine size='100%'/>
                </div>
                <div className="category-content-title">Finish</div>
            </div>
        </div>
    );
}

const getCategories = (categoryType) => {
    const index = ComponentType.ORDER.indexOf(categoryType);
    return ComponentType.ORDER.slice(index, ComponentType.ORDER.length);
}

const Category = ({categoryType, isSelected}) => {
    const classes  = ["category-content"];
    if(isSelected) classes.push("category-selected");
    return (
        <div className={classes.reduce( (acc,next)=>acc+=" "+next)}  key={ComponentType.getStringRep(categoryType)}>
            <div className="category-icon">
                {getIconForType(categoryType)}
            </div>
            <div className="category-content-title">{ComponentType.getStringRep(categoryType)}</div>
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