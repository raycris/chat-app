import { createContext, ReactNode, useContext } from "react";

import { useMutation, UseMutationResult } from "@tanstack/react-query";

import axios, { AxiosResponse } from "axios";

type AuthContext = {
  signup: UseMutationResult<AxiosResponse, unknown, User>;
};
type User = {
  id: string;
  name: string;
  image?: string;
};

const Context = createContext<AuthContext | null>(null);

export function useAuth() {
  return useContext(Context) as AuthContext;
}

type AuthProviderProps = {
  children: ReactNode;
};

const AuthProvider = (props: AuthProviderProps) => {
  const signup = useMutation({
    mutationFn: (user: User) => {
      return axios.post(`${import.meta.env.VITE_SERVER_URL}/signup`, user);
    },
  });
  return (
    <Context.Provider value={{ signup }}>{props.children}</Context.Provider>
  );
};

export default AuthProvider;
