import toast from "react-hot-toast";
import { createSlice } from "@reduxjs/toolkit";
import { Character } from "@/types/characters";

import { fetchCharacters } from "./charactersActions";

interface CharacterState {
  characters: Character[];
  currentCharacter: Character | null;
  loading: boolean;
}

const initialState: CharacterState = {
  characters: [],
  currentCharacter: null,
  loading: false,
};

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    loadCharacters: (state, action) => {
      state.characters = action.payload;
    },
    setCurrentCharacter: (state, action) => {
      state.currentCharacter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCharacters.fulfilled, (state, action) => {
      state.characters?.push(action.payload);
      state.currentCharacter = action.payload;
      state.loading = false;
    });
    builder.addCase(fetchCharacters.rejected, (state) => {
      state.loading = false;
      toast.error("Error loading characters", {
        duration: 4000,
        position: "bottom-right",
      });
    });
  },
});

export const { loadCharacters, setCurrentCharacter } = charactersSlice.actions;

export default charactersSlice.reducer;
