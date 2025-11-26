import "./globals.css";
import type { Metadata } from "next";
import type { ReactNode } from "react";     
import { Manrope } from "next/font/google";
import Header from "@/components/layout/Header/Header"; 

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "RentalCar",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <Header /> 
        {children}
        </body>
    </html>
  );
}
