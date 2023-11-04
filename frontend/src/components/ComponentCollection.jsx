import "./ComponentCollection.css";
import { ComponentType } from "../../util/ComponentType.js";

import CPUData from "../../testdata/cpu.json";
import "../../testdata/DDR.json";
import "../../testdata/cooler.json";
import "../../testdata/formfactor.json";
import "../../testdata/gpu.json";
import "../../testdata/memory.json";
import "../../testdata/memoryspeed.json";
import "../../testdata/motherboard.json";
import "../../testdata/psu.json";
import "../../testdata/socket.json";
import "../../testdata/storage.json";
import "../../testdata/tower.json";
import ComponentCard from "./ComponentCard";

const ComponentCollection = () => {

    return (
        <div id="components-list">
            { CPUData.map(
                (component) => {
                    return <ComponentCard component={component} key={component.name}/>
                }
            )
            }
        </div>
    );
}

export default ComponentCollection;