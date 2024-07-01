"use client";
import NavBar from "./NavBar";
import getMedia from "utils/getMedia";

export default function Home() {
  const { desktop } = getMedia();
  return (
    <>
      <NavBar />
    </>
  );
}
