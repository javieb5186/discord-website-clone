"use client";
import { ScreenContext } from "store/ScreenContext";
import getMedia from "utils/getMedia";

export default function Template({ children }: { children: React.ReactNode }) {
  const media = getMedia();
  return (
    <ScreenContext.Provider value={media}>{children}</ScreenContext.Provider>
  );
}
