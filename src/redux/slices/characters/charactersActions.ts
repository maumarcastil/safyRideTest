import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/config/axios";
import { AppDispatch, RootState } from "@/redux/store";
import { setCurrentCharacter } from "./charactersSlice";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async (id: number) => {
    const response = await axios.get(`/character/${id}`);
    const data = await response.data;
    return data;
  }
);

export const nextCharacter =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { currentCharacter, characters } = getState().characters;

    const findId = characters.find(
      (character) => character.id === Number(currentCharacter?.id) + 1
    );

    if (findId) {
      dispatch(setCurrentCharacter(findId));
    } else {
      const nextId = currentCharacter?.id ? currentCharacter?.id + 1 : 1;
      await dispatch(fetchCharacters(nextId));
    }
  };

export const prevCharacter =
  () => async (dispatch: AppDispatch, getState: () => RootState) => {
    const { currentCharacter, characters } = getState().characters;
    if (currentCharacter?.id === 1) return;

    const findId = characters.find(
      (character) => character.id === Number(currentCharacter?.id) - 1
    );
    console.log("🚀 ~ file: charactersActions.ts:38 ~ findId:", findId);

    if (findId) {
      dispatch(setCurrentCharacter(findId));
    } else {
      const prevId = currentCharacter?.id ? currentCharacter?.id - 1 : 1;
      await dispatch(fetchCharacters(prevId));
    }
  };
