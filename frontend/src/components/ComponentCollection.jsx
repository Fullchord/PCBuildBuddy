import "./ComponentCollection.css";
import { ComponentType } from "../../util/ComponentType.js";

import CPUData from "../../testdata/cpu.json";
import DDRData from "../../testdata/DDR.json";
import COOLERData from "../../testdata/cooler.json";
import FormFactor from "../../testdata/formfactor.json";
import GPUData from "../../testdata/gpu.json";
import MEMORYData from "../../testdata/memory.json";
import MOTHERBOARDData from "../../testdata/motherboard.json";
import PSUData from "../../testdata/psu.json";
import SOCKETData from "../../testdata/socket.json";
import STORAGEData from "../../testdata/storage.json";
import TOWERData from "../../testdata/tower.json";
import ComponentCard from "./ComponentCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil.js";

const ComponentCollection = () => {
    const currentCategory = useGetCategoryType();
    const currentComponent = useSelector((state) => state.components.currentSelected);

    const [data, setData] = useState(CPUData);

    useEffect(() => setData(getTestData(currentCategory)), 
        [currentCategory]
    );


    return (
        <div id="components-list">
            {data.map(component => {
                    let isSelected = false;
                    if (currentComponent != undefined)  {
                        isSelected = currentComponent.id == component.id;
                    }
                    return <ComponentCard 
                            component={component} 
                            isSelected={isSelected} 
                            key={component.id}
                            />;
                }
            )
            }
        </div>
    );
}

function getTestData(category) {
    switch(category) {
        case ComponentType.CPU:
            return CPUData;
        case ComponentType.COOLER:
            return COOLERData;
        case ComponentType.GPU:
            return GPUData;
        case ComponentType.MEMORY:
            return MEMORYData;
        case ComponentType.MOTHERBOARD:
            return MOTHERBOARDData;
        case ComponentType.TOWER:
            return TOWERData;
        case ComponentType.PSU:
            return PSUData;
        case ComponentType.STORAGE:
            return STORAGEData;
        case ComponentType.UNDEFINED:
        default:
            return undefined;
    }
}

export default ComponentCollection;