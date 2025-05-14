"use client";

import { getUserCookie, setUserCookie } from "@/utils/cookies";
import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface UserContextType {
  user: User | null;
  setUser: (user: User) => void;
  isLoggedIn: boolean;
}

interface User {
  username: string;
  jobTitle: string;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export default function UserProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Load user from cookies on mount
    getUserCookie().then((storedUser) => {
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
      setIsLoading(false);
    });
  }, []);

  const handleSetUser = async (newUser: User) => {
    setUser(newUser);
    // Store user using server action
    await setUserCookie(JSON.stringify(newUser));
  };

  if (isLoading) {
    return null;
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser: handleSetUser,
        isLoggedIn: !!user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
}
