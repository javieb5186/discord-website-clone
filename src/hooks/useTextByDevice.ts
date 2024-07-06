"use client";
import { useState, useEffect } from "react";
import { isAndroid, isIOS, isWindows, isMacOs } from "react-device-detect";

export default function useTextByDevice() {
  let text = "Download";
  isAndroid && (text = "Download from Google Play");
  isIOS && (text = "Download from App Store");
  isWindows && (text = "Download for Windows");
  isMacOs && (text = "Download for Mac");

  const [deviceText, setDeviceText] = useState("Download");

  useEffect(() => {
    setDeviceText(text);
  }, []);

  return [deviceText];
}
