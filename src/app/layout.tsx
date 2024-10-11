import type { Metadata } from "next";
import { Outfit, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/common/header";
import HeaderNotice from "./_components/common/header-notice";
import ToastNotification from "@/components/common/toast";
import Footer from "./_components/common/footer";

const outfit_init = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-outfit",
});

const quicksand_init = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
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
    <html lang="en ">
      <head></head>
      <body
        className={`${outfit_init.variable} ${quicksand_init.variable} bg-background_color`}
      >
        <div className="root flex h-[100vh] flex-col font-outfit">
          <HeaderNotice />
          <Header />

          <div className="flex-1">{children}</div>
          <Footer />
          <ToastNotification />
        </div>
        <div id="modal-root"></div>
      </body>
    </html>
  );
}
