import type { Metadata } from "next";
import { Baloo_2, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/app/_components/common/header";
import HeaderNotice from "./_components/common/header-notice";
import Footer from "./_components/common/footer";
import dynamic from "next/dynamic";

const ToastNotification = dynamic(() => import("@/components/common/toast"), {
  ssr: false,
});

const baloo_2_init = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo_2",
});

const quicksand_init = Quicksand({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title:
    "Whiskers Shop - Cửa hàng thú cưng cho người Việt | Mua sắm online dễ dàng",
  description:
    "Mua sắm thú cưng, thức ăn và phụ kiện tại Pet Shop. Chất lượng đảm bảo, giao hàng nhanh chóng, và giá tốt nhất!",
  keywords:
    "HTML, CSS, JavaScript, TypeScript, Tailwind, NodeJS, NextJs, NextJs, pet shop, thú cưng, thức ăn cho chó, phụ kiện cho mèo, cửa hàng thú cưng",
  applicationName: "Whiskers Shop",
  openGraph: {
    title:
      "Whiskers Shop - Cửa hàng thú cưng cho người Việt | Mua sắm online dễ dàng",
    description:
      "Khám phá Pet Shop, nơi cung cấp thú cưng đáng yêu, thức ăn và phụ kiện chất lượng cao. Trải nghiệm mua sắm trực tuyến dễ dàng!",
    images: [
      {
        url: "/images/banner-1.jpg",
        width: 1200,
        height: 630,
        alt: "Cửa hàng Pet Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Whiskers Shop - Cửa hàng thú cưng cho người Việt | Mua sắm online dễ dàng",
    description:
      "Khám phá Pet Shop, nơi cung cấp thú cưng đáng yêu, thức ăn và phụ kiện chất lượng cao. Trải nghiệm mua sắm trực tuyến dễ dàng!",
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
        className={`${baloo_2_init.variable} ${quicksand_init.variable} bg-background_color`}
      >
        <div className="root flex min-h-[100vh] flex-col font-baloo_2">
          <HeaderNotice />
          <Header />

          <div className="flex-1">{children}</div>

          <Footer />
          <ToastNotification />
        </div>
      </body>
    </html>
  );
}
