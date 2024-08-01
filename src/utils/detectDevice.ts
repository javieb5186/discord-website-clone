import { headers } from "next/headers";
import { getSelectorsByUserAgent } from "react-device-detect";

export default function detectDevice() {
  const userAgent = headers().get("user-agent") || "";
  const selectors = getSelectorsByUserAgent(userAgent);
  const { isMacOs, isAndroid, isIOS, isWindows } = selectors;
  const selects = {
    isMacOs,
    isAndroid,
    isIOS,
    isWindows,
  };
  return selects;
}
