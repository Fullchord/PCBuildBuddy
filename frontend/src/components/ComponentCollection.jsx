import "./ComponentCollection.css";
import { ComponentType } from "../../util/ComponentType.js";

import ComponentCard from "./ComponentCard.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useGetCategoryType } from "../../hooks/ComponentStoreUtil.js";

import { incrementCategory, addAvailable, clearAvailable } from "../../redux/componentSlice.js";

const ComponentCollection = () => {
    const currentCategory = useGetCategoryType();
    const currentComponent = useSelector((state) => state.components.currentSelected);
    const currentComponentsList = useSelector(state => state.components.selectedComponents);
    const availableComponents = useSelector(state => state.components.availableComponents);

    const dispatch = useDispatch();

    const loadNextCategory = async () => {
        dispatch(clearAvailable());
        const url = `http://localhost:5000/api/retrieve-verified/${ComponentType.getStringRep(currentCategory)}`;
        const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: "cors",
                body: JSON.stringify(currentComponentsList) 
            }
        );

        if (!response.ok) {
            console.error(`Could not retrieve components from API (${response.status})`)
            return;
        }

        const componentsJson = await response.json();
        for (const c of componentsJson) {
            dispatch(addAvailable(c));
        }
    };

    useEffect(() => {loadNextCategory();}, [currentCategory]);

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