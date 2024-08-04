import { android, iphone, mac, linux, windows } from "./assets";
import detectDevice from "utils/detectDevice";

export default function SvgByDevice() {
  // Possible detectable devices and their component
  const { isAndroid, isWindows, isMacOs, isIOS } = detectDevice();

  const possibleDevices = [
    { svg: mac.src, active: isMacOs },
    { svg: windows.src, active: isWindows },
    {
      svg: android.src,
      active: isAndroid,
    },
    { svg: iphone.src, active: isIOS },
    {
      svg: linux.src,
      active: !isWindows && !isMacOs && !isAndroid && !isIOS,
    },
  ];

  // Look for active device and reduce it to one final component
  const ActiveDevice = possibleDevices.reduce((acc, device) => {
    return device.active ? (acc = device.svg) : acc;
  }, "");

  return ActiveDevice;
}
