import type { Metadata } from "next";
import { Inter } from "next/font/google";

import React from "react"
import Image from "next/image";
import { List, Modal, TaskBar } from "@react95/core"
import { ReaderClosed, WindowsExplorer } from "@react95/icons";

import './globals.css'
import '@react95/core/GlobalStyle';
import '@react95/core/themes/win95.css';
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "bg-[#008080]")}>{children}</body>
    </html>
  );
}
