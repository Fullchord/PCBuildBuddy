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
                body: JSON.stringify(componentsList) 
            }
        );

        if (!response.ok) {
            console.error(`Could not retrieve components from API (${response.status})`)
            return [];
        }

        return await response.json();
}