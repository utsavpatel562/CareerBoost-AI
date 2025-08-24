// Code by Utsav Patel
import { Inter } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "CareerBoost-AI",
  description: "Enrich your interview experience"
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
   <html lang="en">
        <head>
          {/* Add your logo path here */}
          <link rel="icon" href="/logo4.png" sizes="any" />
          {/* or use PNG/SVG */}
          {/* <link rel="icon" href="/logo.png" type="image/png" /> */}
        </head>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
