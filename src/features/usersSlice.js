import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    userId: 'fqfynmjPwSrhet3lwuh43',
    userName: `louisHofmann`,
    userFullName: `Louis Hofmann`,
    password: `louis@Hofmann`,
		userImage: `${require('../images/LouisHofmann.jpg')}`
  }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      const { userId, userName, userFullName, password, userImage } = action.payload;
      return [...state, {userId, userName, userFullName, password, userImage}];
    }
  }
});

export const { getLoggedIn, userAdded } = usersSlice.actions;
export default usersSlice.reducer;