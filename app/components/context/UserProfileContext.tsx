"use client";
import { IUserProfileData } from "@/app/api/user/me/route";
import { createContext, useContext, useEffect, useState } from "react";

interface IUserProfileContext {
  profile: IUserProfileData | null;
}

const UserProfileContext = createContext<IUserProfileContext | undefined>(
  undefined
);

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [profile, setProfile] = useState<IUserProfileData | null>(null);

  useEffect(() => {
    try {
      fetch("/api/user/me").then(async (res) => {
        const data: IUserProfileData = await res.json();
        setProfile(data);
      });
    } catch (error) {
      throw error;
    }
  }, []);

  return (
    <UserProfileContext.Provider value={{ profile }}>
      {children}
    </UserProfileContext.Provider>
  );
};

export const useUserProfile = (): IUserProfileContext => {
  const context = useContext(UserProfileContext);
  if (context === undefined) {
    throw new Error("useUserProfile must be used within a UserProfileProvider");
  }
  return context;
};
