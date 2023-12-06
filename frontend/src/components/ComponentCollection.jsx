import "./ComponentCollection.css";
import { ComponentType } from "../../util/ComponentType.js";
import { useDispatch } from "react-redux";
import ComponentCard from "./ComponentCard";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil.js";
import { getVerifiedComponents } from "../../api/apiHandler.js";
import { addAvailable, clearAvailable } from "../../redux/componentSlice.js";

const ComponentCollection = () => {
    const dispatch = useDispatch();
    const currentCategory = useGetCategoryType();
    const currentComponent = useSelector((state) => state.components.currentSelected);
    const selectedComponents = useSelector(state => state.components.selectedComponents);
    const availableComponents = useSelector(state => state.components.availableComponents);

    useEffect(() => {
        dispatch(clearAvailable());
        (async() => {
            const newComponents = await getVerifiedComponents(selectedComponents, currentCategory);
            dispatch(clearAvailable());
            for (const nC of newComponents) {
                dispatch(addAvailable(nC));
            }
        })();
        }, [currentCategory]);


    return (
        <div id="components-list">
            {availableComponents.map(component => {
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

export default ComponentCollection;