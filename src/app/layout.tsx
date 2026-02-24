import type { Metadata } from "next";
import localFont from "next/font/local"; // Local font ke liye import
import "./globals.css";

// Satoshi font files ko load karein
// Ensure karein ki aapne files public/fonts/ folder me rakhi hain
const satoshi = localFont({
  src: [
    {
      path: "../../public/fonts/Satoshi-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/Satoshi-Black.otf",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-satoshi",
});

export const metadata: Metadata = {
  title: "Obizax | Agency",
  description: "High-end design and development for startups",
  icons: {
    icon: [
      {
        url: "/icon.svg", // Agar aapne rename karke src/app/icon.svg rakha hai
        type: "image/svg+xml",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${satoshi.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}