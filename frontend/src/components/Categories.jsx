import "./Categories.css";
import { BsFillCpuFill, BsFan, BsMotherboardFill, BsMemory, BsFillDeviceHddFill, BsGpuCard, BsCpuFill, Bs0Circle } from 'react-icons/bs';
import { PiComputerTowerFill } from 'react-icons/pi';
import { FaPlug } from 'react-icons/fa6';
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
        </div>
    );
}

const getCategories = (categoryType) => {
    const categories = [
        ComponentType.CPU, // 0
        ComponentType.COOLER, // 1
        ComponentType.MOTHERBOARD, // 2
        ComponentType.MEMORY, // 3
        ComponentType.STORAGE, // 4
        ComponentType.GPU, // 5
        ComponentType.TOWER, // 6
        ComponentType.PSU, // 7
    ];
    const index = categories.indexOf(categoryType);
    return categories.slice(index, categories.length);
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