import { createSlice } from "@reduxjs/toolkit";
import { fetchCharacters } from "./charactersActions";
import { Character, InfoCharacter } from "@/types/characters";

interface CharacterState {
  characters: {
    info: InfoCharacter;
    results: Character[];
  } | null;
  currentCharacter: Character | null;
  currentPage: number;
}

const initialState: CharacterState = {
  characters: null,
  currentCharacter: null,
  currentPage: 1,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    loadCharacters: (state, action) => {
      state.characters = action.payload;
    },
    addCharacters: (state, action) => {
      if (state.characters) {
        state.characters.results = [
          ...state.characters.results,
          ...action.payload,
        ];
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      if (state.currentCharacter === null) {
        state.currentCharacter = action.payload.results[0];
        state.currentPage = 1;
      }
      if (!state.characters || state.characters?.results.length === 0) {
        state.characters = action.payload;
        return;
      } else {
        state.characters.results = [
          ...state.characters.results,
          ...action.payload.results,
        ];
        return;
      }
    });
  },
});

export const { loadCharacters, addCharacters } = charactersSlice.actions;

export default charactersSlice.reducer;
