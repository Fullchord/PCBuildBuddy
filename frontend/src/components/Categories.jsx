import "./Categories.css";
import { BsFillCpuFill, BsFan, BsMotherboardFill, BsMemory, BsFillDeviceHddFill, BsGpuCard } from 'react-icons/bs';
import { PiComputerTowerFill } from 'react-icons/pi';
import { FaPlug } from 'react-icons/fa6';

const Categories = () => {
    return (
        <div id="categories-content">
            <CPUCategory/>
            <CoolerCategory/>
            <MotherboardCategory/>
            <MemoryCategory/>
            <StorageCategory/>
            <GPUCategory/>
            <TowerCategory/>
            <PSUCategory/>
            
        </div>
    );
}

const CPUCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <BsFillCpuFill size={'auto'}/>
                <p class="text-center">CPU</p> 
            </div>
        </div>
    );
}

const CoolerCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <BsFan size={'auto'}/>
                <p class="text-center">Cooler</p> 
            </div>
        </div>
    );
}

const MotherboardCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <BsMotherboardFill size={'auto'}/>
                <p class="text-center">Motherboard</p> 
            </div>
        </div>
    );
}


const MemoryCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <BsMemory size={'auto'}/>
                <p class="text-center">Memory</p> 
            </div>
        </div>
    );
}


const StorageCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <BsFillDeviceHddFill size={'auto'}/>
                <p class="text-center">Storage</p> 
            </div>
        </div>
    );
}

const GPUCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <BsGpuCard size={'auto'}/>
                <p class="text-center">GPU</p> 
            </div>
        </div>
    );
}

const TowerCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <PiComputerTowerFill size={'auto'}/>
                <p class="text-center">Tower</p> 
            </div>
        </div>
    );
}

const PSUCategory = () => {
    return (
        <div id="category-content">
            <div id="center">
               <FaPlug size={'auto'}/>
                <p class="text-center">PSU</p> 
            </div>
        </div>
    );
}


export default Categories;