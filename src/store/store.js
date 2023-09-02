import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, toggle: true}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers:{
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + state.action;
        },
        toggle(state){
            state.toggle = !state.toggle;
        }
    }
})

const store = configureStore({
    reducer: {counter: counterSlice.reducer}
})

export default store;