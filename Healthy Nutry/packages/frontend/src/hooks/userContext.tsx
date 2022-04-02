import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";

export type requestUserProps = {
  id: string;
  name: string;
  username: string;
};
type dataUser = {
  dataUser: requestUserProps;
  verifyDataEquals: (data: requestUserProps) => void | string;
};

interface UserProviderProps {
  children: React.ReactNode;
}

const UserDataContext = createContext({} as dataUser);

function UserContextProvider({ children }: UserProviderProps) {
  const router = useRouter();
  const [user, setUser] = useState({} as requestUserProps);

  const verifyDataUserEquals = (data: requestUserProps) => {
    setUser(data);
    localStorage.setItem("TOKEN_USER_ID", data.id);
    localStorage.setItem("TOKEN_NAME", data.name);
    router.push("/listMeals");
  };

  return (
    <UserDataContext.Provider
      value={{
        dataUser: user,
        verifyDataEquals: verifyDataUserEquals,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
}

function useUserContext() {
  const context = useContext(UserDataContext);

  return context;
}

export { useUserContext, UserDataContext, UserContextProvider };
