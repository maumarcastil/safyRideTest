import { combineReducers } from '@reduxjs/toolkit';
import charactersReducer from './slices/characters';


export const rootReducer = combineReducers({
    characters: charactersReducer,
});