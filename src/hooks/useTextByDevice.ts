// A function that loads text by which device is being used.
// Detects it by user agent string

"use client";
import { useState, useLayoutEffect } from "react";
import { isAndroid, isIOS, isWindows, isMacOs } from "react-device-detect";

interface Device {
  button: string;
  requirement: string;
}

export default function useTextByDevice() {
  let initial = {
    button: "Download",
    requirement: "",
  };

  const possibleDevices = [
    {
      text: {
        button: "Download for Mac",
        requirement: "macOS 10.15 (Catalina)",
      },
      active: isMacOs,
    },
    {
      text: { button: "Download for Windows", requirement: "Windows 10" },
      active: isWindows,
    },
    {
      text: {
        button: "Download from Google Play",
        requirement: "Android 7",
      },
      active: isAndroid,
    },
    {
      text: { button: "Download from App Store", requirement: "iOS 14" },
      active: isIOS,
    },
    {
      text: {
        button: "Download for Linux",
        requirement:
          "Ubuntu 20.04, Debian 10, openSUSE 16.2 and Fedora Linux 32",
      },
      activeDevice: !isWindows && !isMacOs && !isAndroid && !isIOS,
    },
  ];

  const activeDevice: Device = possibleDevices.reduce((acc, device): Device => {
    return device.active ? (acc = device.text) : acc;
  }, initial);

  const [buttonText, setButtonText] = useState("Download");
  const [requirementText, setRequirementText] = useState("");

  useLayoutEffect(() => {
    setButtonText(activeDevice.button);
    setRequirementText(activeDevice.requirement);
  }, []);

  return [buttonText, requirementText];
}
