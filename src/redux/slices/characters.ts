import { createSlice } from '@reduxjs/toolkit';

interface CharacterState {
    characters: unknown[];
}

const initialState: CharacterState = {
    characters: []
}

export const charactersSlice = createSlice({
    name: 'characters',
    initialState,
    reducers: {
        addCharacters: (state, action) => {
            state.characters.push(action.payload);
        },
    }
});

export const { addCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;