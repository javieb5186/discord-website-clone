// A function that loads text by which device is being used.
// Detects it by user agent string

import detectDevice from "./detectDevice";
import { Device } from "ts/interfaces/Device";

interface Params {
  isMacOs: boolean;
  isWindows: boolean;
  isAndroid: boolean;
  isIOS: boolean;
}

function getDeviceText({ isAndroid, isIOS, isMacOs, isWindows }: Params) {
  let initial = {
    text: {
      name: "",
      button: "Download",
      requirement: "",
    },
    active: false,
  };

  let promise: Promise<Device> = new Promise((Resolve) => {
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
        active: !isWindows && !isMacOs && !isAndroid && !isIOS,
      },
    ];

    const activeDevice: Device = possibleDevices.reduce(
      (acc, device): Device => {
        return device.active ? (acc = device) : acc;
      },
      initial
    );

    Resolve(activeDevice);
  });

  return promise;
}

export default async function getActiveDeviceText() {
  const device = detectDevice();
  const deviceText = getDeviceText(device);
  return deviceText;
}
