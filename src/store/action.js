const SIGNUP = "SIGNUP";
const SIGNIN = "SIGNIN";
const LOGOUT = "LOGOUT";

export const handleSignUp = (data) => async (dispatch) => {
  dispatch({
    type: SIGNUP,
    payload: data,
  });
};

export const handleSignIn = (data) => async (dispatch) => {
  dispatch({
    type: SIGNIN,
    payload: data,
  });
};

export const handleLogout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
