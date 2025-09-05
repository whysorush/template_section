import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "GrowthAlly — Financial Advisory Template",
  description: "A modern financial services template inspired by PINC.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="text-neutralgray">
        {children}
      </body>
    </html>
  );
}
