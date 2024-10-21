import { createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface User {
  id: string;
  name: string;
  email: string;
}

interface Authstate {
  isAuthenticated: boolean,
  isLoading: boolean,
  user: User | null; // user can be of type user or null
}

const initialState: Authstate = {
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {},
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
