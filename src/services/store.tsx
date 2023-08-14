import React, { useState, useContext, useEffect, useMemo } from "react";
import { User } from "src/domain/user";

const UserContext = React.createContext<any>({});

export const useStore = () => useContext(UserContext);

const initialState: User = {
  userName: "",
  id: "",
  email: "",
  createdAt: "",
  emailVerified: false,
};

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState(initialState);

  useEffect(() => {
    async function loadUserfromAsyncStorage() {
      const user = await Parse.User.currentAsync();

      if (user) {
        setUser({
          email: user.attributes.email,
          id: user.id,
          userName: user.attributes.username,
          emailVerified: user.attributes.emailVerified,
          createdAt: user.createdAt,
        });
      } else {
        setUser(initialState);
      }
    }

    loadUserfromAsyncStorage();
  }, []);

  const setInitialState = () => {
    setUser(initialState);
  };

  const value = useMemo(() => {
    const value = {
      user,
      updateUser: setUser,
      clearUser: () => setInitialState(),
    };
    return value;
  }, [user]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
