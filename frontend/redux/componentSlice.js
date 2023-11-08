import { createSlice } from '@reduxjs/toolkit';

import { PcComponent } from '../util/pcComponent';
import { Component } from 'react';
import { ComponentType } from '../util/ComponentType';

const componentSlice = createSlice({
    name: 'components',
    initialState: {
        selectedComponents: [],
        availableComponents: [],
        currentSelected: undefined,
        currentCategory: ComponentType.getStringRep(ComponentType.FIRST)
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
            const currIdx = ComponentType.ORDER.indexOf(ComponentType.fromStr(state.currentCategory));
            if (currIdx == -1 || currIdx == (ComponentType.ORDER.length - 1)) {
                console.error(`Error incrementing the current category in state for category ${ComponentType.getStringRep(state.currentCategory)}`);
                state.currentCategory = ComponentType.UNDEFINED;
                return;
            }

            state.currentCategory = ComponentType.getStringRep(ComponentType.ORDER[currIdx+1]);
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
            state.currentSelected = undefined;

            const targetCat = action.payload || ComponentType.ORDER[0];
            const targetCatIdx = ComponentType.ORDER.indexOf(targetCat);

            if(targetCatIdx == -1) { // Check for invalid index
                console.error("targetCatIdx was -1. Target category to reset to is invalid.");
                return;
            }

            state.currentCategory = ComponentType.getStringRep(targetCat);
            
            for (const [index, c] of state.selectedComponents.entries()) {
                // If the type on the component is undefined, then we will assume it needs removed
                // Ideally we wouldn't need this, but just in case :)
                if (c.type == undefined) {
                    console.warn("Component type was undefined! Please ensure that all components have a \"type\" field!");
                    state.selectedComponents.splice(index, 1);
                    continue;
                }

                const componentOrderIndex = ComponentType.ORDER.indexOf(ComponentType.fromStr(c.type));
                if (componentOrderIndex == -1) { // Check for invalid index
                    console.error(`Component type was defined, but was not included in the ComponentType.ORDER. 
                        Please ensure that the category order is correctly defined.\nValue: ${c.type}\nCategory Type: ${ComponentType.fromStr(c.type)}`)
                    
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