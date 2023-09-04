import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recommend: null,
  trending: null,
  movies: null,
  series: null,
  terror: null,
  romance: null,
};

const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.recommend = action.payload.recommend;
      state.trending = action.payload.trending;
      state.movies = action.payload.movies;
      state.series = action.payload.series;
      state.terror = action.payload.terror;
      state.romance = action.payload.romance;
    },
  },
});

export const { setMovies } = movieSlice.actions;

export const selectRecommend = (state) => state.movie.recommend;
export const selectTrending = (state) => state.movie.trending;
export const selectMovies = (state) => state.movie.movies;
export const selectSeries = (state) => state.movie.series;
export const selectTerror = (state) => state.movie.terror;
export const selectRomance = (state) => state.movie.romance;

export default movieSlice.reducer;