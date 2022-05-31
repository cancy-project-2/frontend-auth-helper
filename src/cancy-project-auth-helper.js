import { BehaviorSubject } from "rxjs";

export const auth$ = new BehaviorSubject({
  token: localStorage.getItem("token"),
  error: false,
  pending: false,
});

export const login = (token) => {
  if (!auth$.value.pending) {
    localStorage.setItem("token", token);
    auth$.next({
      token: token,
      error: false,
    });
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  auth$.next({
    token: null,
    error: false,
  });
};
