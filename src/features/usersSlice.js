import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    userId: 1324140,
    userName: `sakib75`,
    fullName: `Samiur Rafi Sakib`,
    password: `sakib5@rafi`
  }
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    userAdded: (state, action) => {
      const { userId, userName, fullName, password } = action.payload;
      return [...state, {userId, userName, fullName, password}];
    }
  }
});

export const { getLoggedIn, userAdded } = usersSlice.actions;
export default usersSlice.reducer;