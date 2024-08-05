import { android, iphone, mac, linux, windows } from "./assets";
import detectDevice from "utils/detectDevice";

export default function SvgByDevice() {
  // Possible detectable devices and their component
  const { isAndroid, isWindows, isMacOs, isIOS } = detectDevice();

  const possibleDevices = [
    { svg: mac, active: isMacOs },
    { svg: windows, active: isWindows },
    {
      svg: android,
      active: isAndroid,
    },
    { svg: iphone, active: isIOS },
    {
      svg: linux,
      active: !isWindows && !isMacOs && !isAndroid && !isIOS,
    },
  ];

  // Look for active device and reduce it to one final component
  const ActiveDevice = possibleDevices.reduce((acc, device) => {
    return device.active ? (acc = device.svg) : acc;
  }, "");

  return ActiveDevice;
}
