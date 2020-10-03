import React from "react";
import { useHistory } from "react-router-dom";
import {
  getMe,
  signIn,
  signInToken,
  signOut,
  signUpToken,
} from "src/api/socialapp";

const AuthContext = React.createContext();

const AuthContextProvider = ({ children }) => {
  const history = useHistory();
  const [isSessionChecked, setIsSessionChecked] = React.useState(false);
  const [loading, setLoading] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const login = async ({ username, password }) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const { token } = await signInToken({ username, password });
      const user = await getMe();
      setUser(user);
      history.push("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const signup = async ({ username, password }) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const { token } = await signUpToken({ username, password });
      const user = await getMe();
      setUser(user);
      history.push("/");
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const logOut = async () => {
    await signOut();
    setLoading(false);
    setUser(null);
    setError(null);
    setIsSessionChecked(true);
  };

  React.useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await getMe();
        setUser(user);
      } catch (ok) {}
      setIsSessionChecked(true);
    };
    checkSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logOut, signup, loading, error }}
    >
      {isSessionChecked ? children : null}
    </AuthContext.Provider>
  );
};

const useAuth = () => {
  return React.useContext(AuthContext);
};

export { AuthContextProvider, useAuth };
