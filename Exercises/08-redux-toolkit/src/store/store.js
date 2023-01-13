import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter/'
import { pokemonSlice } from './slices/pokemon/'

export const store = configureStore({
  // Here you declare all your reducers, so your store (Unique storage) can serve it to all the app
  reducer: {
    counter: counterSlice.reducer,
    pokemon: pokemonSlice.reducer
  },
})