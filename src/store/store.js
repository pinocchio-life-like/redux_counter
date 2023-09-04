import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = {counter: 0, toggle: true, isAuthenticated: false}

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
            state.counter = state.counter + action.payload;
        },
        toggle(state){
            state.toggle = !state.toggle;
        }
    }
})

const authSlice = createSlice({
    name: "authentication",
    initialState: initialState,
    reducers:{
        login(state){
            state.isAuthenticated = true
        },
        logout(state){
            state.isAuthenticated = false
        }
    }
})

const store = configureStore({reducer: {
    counter: counterSlice.reducer,
    authentication: authSlice.reducer
}})

export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;
export default store;