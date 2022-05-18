// NGRX
import { createSelector } from "@ngrx/store";

export const selectAuthState = (state) => state.user;

export const isLoggedIn = createSelector(
  selectAuthState,
  (user) => user.isUserLoggedIn
);

export const getUserData = createSelector(selectAuthState, (user) => user);
