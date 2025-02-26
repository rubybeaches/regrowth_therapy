"use client";
import { createContext, useContext } from "react";
import { communityVideos, userVideos } from "./globals";

const UserVideos = createContext(userVideos);
const CommunityVideos = createContext(communityVideos);

export function useUserVideoContext() {
  return useContext(UserVideos);
}

export function useCommunityVideoContext() {
  return useContext(CommunityVideos);
}

export function UserVideoContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <UserVideos.Provider value={userVideos}>{children}</UserVideos.Provider>
  );
}

export function CommunityVideoContext({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <CommunityVideos.Provider value={communityVideos}>
      {children}
    </CommunityVideos.Provider>
  );
}
