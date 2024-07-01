"use client";
import { ScreenContext } from "store/ScreenContext";
import getMedia from "utils/getMedia";

export default function Template({ children }: { children: React.ReactNode }) {
  const { desktop } = getMedia();
  return (
    <ScreenContext.Provider value={desktop}>{children}</ScreenContext.Provider>
  );
}
