import { state } from "@angular/animations";
import { createReducer, on } from "@ngrx/store";
import { logUserOut, setUserInformation } from "../actions/user.actions";

export const initialState = {
  isAdmin: false,
  isUserLoggedIn: false,
};

export const userReducer = createReducer(
  initialState,
  on(setUserInformation, (state) => ({ ...state, isUserLoggedIn: true })),
  on(logUserOut, (state) => ({ ...state, isUserLoggedIn: false }))
);
