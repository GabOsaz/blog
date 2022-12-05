import React, { useState, useContext } from "react";

const UserContext = React.createContext<any>({});

export const useStore = () => useContext(UserContext);

export const AuthProvider: React.FC = ({ children }) => {
  const [user, setUser] = useState();

  const value = {
    user,
    setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
