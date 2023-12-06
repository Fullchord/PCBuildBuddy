import config from "./apiConfig.json";
import { ComponentType } from "../util/ComponentType";

export async function getVerifiedComponents(componentsList, cType) {
     const url = `${config.API_URL}/retrieve-verified/${ComponentType.getStringRep(cType)}`;
        const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: config.API_MODE,
                body: JSON.stringify(stripComponentList(componentsList)) 
            }
        );

        if (!response.ok) {
            console.error(`Could not retrieve components from API (${response.status})`)
            return [];
        }

        return await response.json();
}

export async function getVerifiedComponentsSearch(componentsList, cType, searchQuery) {
     const url = `${config.API_URL}/search/${ComponentType.getStringRep(cType)}?search=${searchQuery}`;
        const response = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                mode: config.API_MODE,
                body: JSON.stringify(stripComponentList(componentsList)) 
            }
        );

        if (!response.ok) {
            console.error(`Could not retrieve components from API (${response.status})`)
            return [];
        }

        return await response.json();
}

function stripComponentList(componentList) {
    if (componentList == undefined) return [];

    let result = [];
    for (const c of componentList) {
        result.push({
            "id": c.id, 
            "type": c.type
        });
    }
    return result;
}