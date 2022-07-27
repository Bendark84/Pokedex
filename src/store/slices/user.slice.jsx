import { createSlice } from '@reduxjs/toolkit';

// Cambiamos mySlice por el nombre de nuestro slice (usersSlice, toDosSlice...)
export const usersSlice = createSlice({
  name: 'user',
  initialState: '',
  reducers: {
    changeUser: (state, action) => {
      return action.payload;
    },
  },
});

export const { changeUser } = usersSlice.actions;

export default usersSlice.reducer;
