import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const res = await request.text();
  console.log(res);
  const className = res.slice(0, res.length - 1);
  const name = className.includes("download-hide-menu")
    ? "download-show-menu"
    : "download-hide-menu";
  const display = className.includes("download-hide-menu") ? true : false;

  const withMenu = `
  <button id="linux-button" tabindex="0" type="button" hx-swap="outerHTML" hx-post="/api/ssevents/download/experiment" style="border-radius:1rem;border:none;padding:0.5rem 1rem;color:white;background-color:black;position:relative" name="${name}"><div style="display:flex;align-items:center"><span>Download Public Test Build</span><div style="width:1rem;margin-left:0.5rem"><svg role="img" aria-label="Open Menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></div></div><div style="background-color: whitesmoke; border-radius: 0.5rem; display: flex; flex-direction: column; position: absolute; bottom: -125px; left: 0px; width: 100%;"><div style="width: 100%; height: 100%; border-radius: 0.5rem; box-shadow: rgba(0, 0, 0, 0.2) 6px 6px;"><div style="display: flex; flex-direction: column; margin: 8px 0px;"><a href="" style="padding-left: 8px; margin: 4px 0px; color: black; text-align: left;">Mac</a><a href="" style="padding-left: 8px; margin: 4px 0px; color: black; text-align: left;">Linux Deb</a><a href="" style="padding-left: 8px; margin: 4px 0px; color: black; text-align: left;">Linux tar.gz</a><a href="" style="padding-left: 8px; margin: 4px 0px; color: black; text-align: left;">Windows 64-bit</a></div></div></div></button>
  `;

  const withOutMenu = `
  <button id="linux-button" tabindex="0" type="button" hx-swap="outerHTML" hx-post="/api/ssevents/download/experiment" style="border-radius:1rem;border:none;padding:0.5rem 1rem;color:white;background-color:black;position:relative" name="${name}"><div style="display:flex;align-items:center"><span>Download Public Test Build</span><div style="width:1rem;margin-left:0.5rem"><svg role="img" aria-label="Open Menu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="white" d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z"></path></svg></div></div></button>
  `;

  return new NextResponse(display ? withMenu : withOutMenu);
}
