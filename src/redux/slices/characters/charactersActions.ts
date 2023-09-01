import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "@/config/axios";

export const fetchCharacters = createAsyncThunk(
  "characters/fetchCharacters",
  async () => {
    const response = await axios.get("/character");
    const data = await response.data;
    return data;
  }
);
