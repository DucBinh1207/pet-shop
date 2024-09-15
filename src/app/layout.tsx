import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/Header/page";
import Footer from "@/app/_components/Footer/page";
import HeaderNotice from "@/app/_components/HeaderNotice/page";
import ToastNotification from "@/components/common/Toast/ToastNotification";
import FontAwesomeConfig from "./fontawesome";

const outfit_init = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Pet Shop NextJs Website",
  description: "Pet Shop Website build by NextJs, Tailwind and TypeScript",
  keywords:
    "HTML, CSS, JavaScript, TypeScript, Tailwind, NodeJS, NextJs, NextJs",
  applicationName: "TranDucBinh",
  openGraph: {
    title: "Pet Shop NextJs Website",
    description: "Welcome, This is my Pet Shop NextJs Website. Enjoy yourself",
    images: [
      {
        url: "/images/banner-1.jpg",
        width: 1200,
        height: 630,
        alt: "Banner Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Shop NextJs Website",
    description: "Welcome, This is my Pet Shop NextJs Website. Enjoy yourself",
    images: ["/images/banner-1.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <FontAwesomeConfig />
      </head>
      <body className={outfit_init.variable}>
        <div className="root">
          <HeaderNotice />
          <Header />

          {children}
          <Footer />
          <ToastNotification />
        </div>
      </body>
    </html>
  );
}
