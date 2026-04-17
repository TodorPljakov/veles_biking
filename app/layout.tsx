"use client"; // Must be a client component

import { usePathname } from "next/navigation";
import { Header } from "@/components/header";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  // Check if the current route starts with "/studio"
  const isStudio = pathname.startsWith("/studio");

  return (
    <html lang="en">
      <body>
        {/* Only render Header if NOT in studio */}
        {!isStudio && <Header />}
        
        <main>{children}</main>
      </body>
    </html>
  );
}