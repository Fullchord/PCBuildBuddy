import { createSlice } from '@reduxjs/toolkit';

import { PcComponent } from '../util/pcComponent';

const componentSlice = createSlice({
    name: 'components',
    initialState: {
        components: []
    },
    reducers: {

    }
});

export default componentSlice.reducer;