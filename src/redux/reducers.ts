import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from './slices/characters/charactersSlice';


export const rootReducer = combineReducers({
    characters: charactersReducer,
});