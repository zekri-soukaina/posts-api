import axios from "../axios";

const setLoading = () => ({
  type: "user/loading",
});

export const signUp = (fName, lName, email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    console.log("thunk", fName, lName, email, password);
    dispatch(setLoading());
    const res = await axios.post("/signup", {
      fName,
      lName,
      email,
      password,
    });
    console.log("sign up success!", res);
    history.push("/login");
  } catch (e) {
    console.log(e.message);
  }
};

export const logIn = (email, password, history) => async (
  dispatch,
  getState
) => {
  try {
    console.log("thunk", email, password);
    dispatch(setLoading());
    // for post request you got 3 paramettre URL PARAMETRE AND CONFIG
    const res = await axios.post("/login", { email, password });
    console.log("login up success!", res);
    history.push("/");
  } catch (e) {
    console.log(e.message);
  }
};
