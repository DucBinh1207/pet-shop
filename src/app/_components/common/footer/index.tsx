import Link from "next/link";
import Benefit from "./benefit";
import LogoIcon from "@/components/common/icons/logo-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import Overview from "./overview";
import ShopInfo from "./shop-info";
import Social from "./social";
import Contact from "./contact";

export default function Footer() {
  return (
    <div className="mt-auto">
      <div className="flex w-full justify-center bg-light_gray_color">
        <ul className="flex min-h-[90px] w-full max-w-[1160px] items-center justify-around smallest-screen:flex-col">
          <Benefit value="Vận chuyển nhanh chóng" icon="CAR" />
          <Benefit value="Hỗ trợ 24/7" icon="QUESTION" />
          <Benefit value="Đảm bảo hoàn tiền" icon="MONEY" />
        </ul>
      </div>
      <div className="relative bg-dark_blue_color text-white small-screen:p-footer-p-small smallest-screen:p-footer-p-smallest">
        <div className="absolute bottom-full left-0 block h-[30px] w-full translate-y-[1px] scale-y-[-1] bg-footer_img bg-repeat-x" />
        <div className="mx-auto flex p-[60px] small-screen:flex-wrap">
          <div className="large-screen:w-[20%] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="flex flex-col large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px] smallest-screen:items-center">
              <Link
                href="/"
                className="mb-[50px] flex items-center gap-[10px] text-[30px] font-semibold tracking-wider text-white small-screen:flex-1 smallest-screen:mb-[27px]"
              >
                <div>
                  <LogoIcon size={30} fill="#ffffff" />
                </div>
                Whiskers
              </Link>
              <p className="font-normal tracking-[0.4px] text-blue_gray_color small-screen:text-[14px]">
                © 2022 Whiskers. All rights reserved.
              </p>
              <div className="mt-[30px] flex w-full flex-wrap items-center justify-start text-[12px] smallest-screen:justify-center">
                <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
                  <Link href="#" className="hover_animate hover:text-secondary">
                    Chính sách bảo mật
                  </Link>
                </span>

                <DotIcon
                  className="mb-[12px] mr-[10px] fill-current text-blue_gray_color smallest-screen:mb-[18px] smallest-screen:mr-[15px]"
                  size={3}
                />

                <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
                  <Link href="#" className="hover_animate hover:text-secondary">
                    Điều khoản
                  </Link>
                </span>

                <DotIcon
                  className="mb-[12px] mr-[10px] fill-current text-blue_gray_color smallest-screen:mb-[18px] smallest-screen:mr-[15px]"
                  size={3}
                />

                <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
                  <Link href="#" className="hover_animate hover:text-secondary">
                    Sơ đồ cửa hàng
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div className="large-screen:w-[30%] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px]">
              <Overview
                value="Thú cưng là những người bạn trung thành, mang lại niềm vui và tình yêu vô bờ. Chúng khiến cuộc sống của chúng ta thêm ý nghĩa và hạnh phúc."
                icon="HEART"
              />
              <Overview
                value="Chúng tôi cam kết đảm bảo vận chuyển an toàn cho thú cưng của bạn. Mỗi gói hàng đều được xử lý cẩn thận để đảm bảo rằng thú cưng sẽ đến nơi một cách khỏe mạnh và thoải mái. Sự an toàn của chúng là ưu tiên hàng đầu của chúng tôi."
                icon="CAR"
              />
            </div>
          </div>
          <div className="large-screen:w-[25%] small-screen:mb-[30px] small-screen:mt-[10px] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px]">
              <ul className="flex flex-col gap-[20px]">
                <ShopInfo value="Về chúng tôi" href="#" />
                <ShopInfo value="Nhóm của tôi" href="#" />
              </ul>
            </div>
            <div className="mt-[15px] flex items-center smallest-screen:justify-center xxx-smallest-screen:flex-col">
              <span className="text-blue_gray_color">Theo dõi chúng tôi :</span>
              <div className="flex">
                <Social href="https://www.facebook.com" icon="FACEBOOK" />
                <Social href="https://www.instagram.com" icon="INSTAGRAM" />
                <Social href="https://www.youtube.com" icon="YOUTUBE" />
                <Social href="https://www.tiktok.com" icon="TIKTOK" />
              </div>
            </div>
          </div>
          <div className="large-screen:w-[25%] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px]">
              <ul className="flex flex-col gap-[20px]">
                <Contact
                  value="petshopdanang@gmail.com"
                  href="mailto:petshopdanang@gmail.com"
                  icon="MAIL"
                />
                <Contact
                  value="+84-857-123-987"
                  href="tel:+84857123987"
                  icon="PHONE"
                />
                <Contact
                  value=" 54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang"
                  href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5"
                  icon="LOCATE"
                />
                <Contact
                  value="T2-T6 : 8:00 AM - 20:00 PM"
                  href="#"
                  icon="BUSINESS_TIME"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
