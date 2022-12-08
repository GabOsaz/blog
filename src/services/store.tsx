import React, { useState, useContext } from "react";

const UserContext = React.createContext<any>({});

export const useStore = () => useContext(UserContext);

export const AuthProvider: React.FC = ({ children }: any) => {
  const [user, setUser] = useState();

  const value = {
    user,
    updateUser: setUser,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
