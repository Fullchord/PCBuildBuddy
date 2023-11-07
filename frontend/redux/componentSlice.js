import { createSlice } from '@reduxjs/toolkit';

import { PcComponent } from '../util/pcComponent';
import { Component } from 'react';
import { ComponentType } from '../util/ComponentType';

const categoryOrder = [
    ComponentType.CPU,
    ComponentType.COOLER,
    ComponentType.MOTHERBOARD,
    ComponentType.MEMORY,
    ComponentType.STORAGE,
    ComponentType.GPU,
    ComponentType.TOWER,
    ComponentType.PSU,
];

const componentSlice = createSlice({
    name: 'components',
    initialState: {
        selectedComponents: [],
        availableComponents: [],
        currentSelected: undefined,
        currentCategory: "CPU"
    },
    reducers: {
        clearAvailable: (state) => {
            state.availableComponents = [];
        },

        clearSelected: (state) => {
            state.selectedComponents = [];
        },

        addAvailable: (state, action) => {
            state.availableComponents.push(action.payload);
        },

        addSelected: (state, action) => {
            state.selectedComponents.push(action.payload);
        },

        setCurrentSelected: (state, action) => {
            state.currentSelected = action.payload;
        },

        incrementCategory: (state) => {
            const currIdx = categoryOrder.indexOf(ComponentType.fromStr(state.currentCategory));
            if (currIdx == -1 || currIdx == (categoryOrder.length - 1)) {
                console.error(`Error incrementing the current category in state for category ${ComponentType.getStringRep(state.currentCategory)}`);
                state.currentCategory = ComponentType.UNDEFINED;
                return;
            }

            state.currentCategory = ComponentType.getStringRep(categoryOrder[currIdx+1]);
            state.currentSelected = undefined;
        },

        /**
         * 
         * @param {state} state 
         * @param {action} action 
         * @description This reducer resets the component state to the requested category.
         * THIS WILL DESTROY DATA IN THE STORE
         * @returns 
         */
        resetCurrentCategory: (state, action) => {
            const targetCat = action.payload || categoryOrder[0];
            const targetCatIdx = categoryOrder.find(targetCat);

            if(targetCatIdx == -1) { // Check for invalid index
                console.error("targetCatIdx was -1. Target category to reset to is invalid.");
                return;
            }

            state.currentCategory = targetCat;
            
            for (const [index, c] of state.selectedComponents.entries()) {
                // If the type on the component is undefined, then we will assume it needs removed
                // Ideally we wouldn't need this, but just in case :)
                if (c.type == undefined) {
                    console.warn("Component type was undefined! Please ensure that all components have a \"type\" field!");
                    state.selectedComponents.splice(index, 1);
                    continue;
                }

                const componentOrderIndex = categoryOrder.find(c);
                if (componentOrderIndex == -1) { // Check for invalid index
                    console.error(`Component type was defined, but was not included in the categoryOrder. 
                        Please ensure that the category order is correctly defined. Category Type ${ComponentType.getStringRep(c)}`)
                    
                    state.selectedComponents.splice(index, 1);
                    continue;
                }
                
                if(componentOrderIndex >= targetCatIdx) {
                    state.selectedComponents.splice(index, 1);
                }
            }
        }
    }
});

export const { 
    clearAvailable, 
    clearSelected, 
    addAvailable,
    addSelected, 
    incrementCategory, 
    resetCurrentCategory,
    setCurrentSelected
} = componentSlice.actions;

export default componentSlice.reducer;