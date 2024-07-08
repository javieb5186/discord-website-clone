import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import "./globals.css";
import theme from "./theme";

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
      <body className={inter.className}>
        {/* Provider is necessary for MUI to integrate with NextJS */}
        <AppRouterCacheProvider>
          {/* Check out ./theme.ts to see theme in it's entirety */}
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
