import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import "./globals.css";
import theme from "utils/theme";
import Script from "next/script";

console.log(theme);

// Font from Google
const inter = Inter({ subsets: ["latin"] });

// Metadata that is used by NextJS
export const metadata: Metadata = {
  title: "Discord - Group Chat That's All Fun & Games",
  description: "A replicated clone of Discord for educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <link rel="stylesheet" type="text/css" href={"htmx.css"} />
      </Head>
      <body className={inter.className}>
        {/* Provider is necessary for MUI to integrate with NextJS */}
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
          {/* Check out ./theme.ts to see theme in it's entirety */}
        </AppRouterCacheProvider>
        <Script id="id" src="./htmx.min.js" />
      </body>
    </html>
  );
}
