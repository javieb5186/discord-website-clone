// A function that loads text by which device is being used.
// Detects it by user agent string

"use client";
import { useState, useEffect } from "react";
import { isAndroid, isIOS, isWindows, isMacOs } from "react-device-detect";

interface Device {
  name: string;
  button: string;
  requirement: string;
}

export default function useTextByDevice() {
  let initial = {
    name: "",
    button: "Download",
    requirement: "",
  };

  const possibleDevices = [
    {
      text: {
        name: "Mac",
        button: "Download for Mac",
        requirement: "macOS 10.15 (Catalina)",
      },
      active: isMacOs,
    },
    {
      text: {
        name: "Windows",
        button: "Download for Windows",
        requirement: "Windows 10",
      },
      active: isWindows,
    },
    {
      text: {
        name: "Android",
        button: "Download from Google Play",
        requirement: "Android 7",
      },
      active: isAndroid,
    },
    {
      text: {
        name: "iOS",
        button: "Download from App Store",
        requirement: "iOS 14",
      },
      active: isIOS,
    },
    {
      text: {
        name: "Linux",
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
  const [name, setName] = useState("");

  useEffect(() => {
    setButtonText(activeDevice.button);
    setRequirementText(activeDevice.requirement);
    setName(activeDevice.name);
  }, []);

  return { buttonText, requirementText, name };
}
