import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const EmptyState = {
    films: [],
    characters: [],
    charactersCopy: [],
  };


  // fetch de todos los films
  export const fetchFilms = createAsyncThunk(
    "films/fetchFilms", async () => {
      try {
        const res = await axios.get("https://swapi.dev/api/films");
        const data = await res.data.results
        return {data: data};

      } catch (error) {
        console.log(error);
      }
    }
  );

  // fetch de personajes 
  export const fetchCharacters = createAsyncThunk(
    "characters/fetchCharacters", async (filmId) => {
      try {
        const { data } = await axios.get(`https://swapi.dev/api/films/${filmId}`);
        const characters = data.characters;
        const characterData = await Promise.all(
          characters.map(async (characterUrl) => {
            const response = await axios.get(characterUrl);
            return response.data;
          })
        );
        return {data: characterData};

      } catch (error) {
        console.log(error);
      }
    }
  );


  export const filmsSlice = createSlice({
    name: "films",
    initialState: EmptyState,
    reducers: {
      filterEyeColor: (state, action) => {
        state.characters = state.charactersCopy.filter(
          (e) => e.eye_color === action.payload
        ); 
      },
      
      filterGender: (state, action) => {
        state.characters = state.charactersCopy.filter(
          (g) => g.gender === action.payload
        );
      },
    },
    extraReducers(builder) {
      builder
        .addCase(fetchFilms.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchFilms.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchFilms.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.films = data.data;
          
          if (data.errors === "There is not data") {
            state.films = [];
          }
          
        })
        .addCase(fetchCharacters.pending, (state, action) => {
          state.status = "loading";
        })
        .addCase(fetchCharacters.rejected, (state, action) => {
          state.status = "error";
        })
        .addCase(fetchCharacters.fulfilled, (state, action) => {
          state.status = "succeeded";
  
          const data  = action.payload;
          state.characters = data.data
          state.charactersCopy = data.data
  
          if (data.errors === "There is not data") {
            state.characters = [];
            state.charactersCopy = [];
          }
          
        });
    },
  });

  export const { filterEyeColor, filterGender } = filmsSlice.actions;


export default filmsSlice.reducer;