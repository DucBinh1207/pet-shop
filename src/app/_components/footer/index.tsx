import Link from "next/link";
import BenefitItem from "./_components/benefit-item";
import LogoIcon from "@/components/common/icons/logo-icon";
import DotIcon from "@/components/common/icons/dot-icon";
import OverviewItem from "./_components/overview-item";
import ShopInfoItem from "./_components/shop-info-item";
import SocialItem from "./_components/social-item";
import ContactItem from "./_components/contact-item";

export default function Footer() {
  return (
    <div className="mt-auto">
      <div className="flex w-full justify-center bg-benefit_color">
        <ul className="flex min-h-[90px] w-full max-w-[1160px] items-center justify-around smallest-screen:flex-col">
          <BenefitItem value="Free Shipping" icon="CAR" />
          <BenefitItem value="24/7 Support" icon="QUESTION" />
          <BenefitItem value="Money Back Guarantee" icon="MONEY" />
        </ul>
      </div>
      <div className="relative bg-footer_color text-white small-screen:p-footer-p-small smallest-screen:p-footer-p-smallest">
        <div className="absolute bottom-full left-0 block h-[30px] w-full translate-y-[1px] scale-y-[-1] bg-footer_img bg-repeat-x"></div>
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
              <p className="font-normal tracking-[0.4px] text-footer_text small-screen:text-[14px]">
                © 2022 Ricky Theme. All rights reserved.
              </p>
              <div className="mt-[30px] flex w-full flex-wrap items-center justify-start text-[12px] smallest-screen:justify-center">
                <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
                  <a href="#" className="hover_animate hover:text-secondary">
                    Privacy Policy
                  </a>
                </span>

                <DotIcon
                  className="mb-[12px] mr-[10px] fill-current text-footer_text smallest-screen:mb-[18px] smallest-screen:mr-[15px]"
                  size={3}
                />

                <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
                  <a href="#" className="hover_animate hover:text-secondary">
                    Terms
                  </a>
                </span>

                <DotIcon
                  className="mb-[12px] mr-[10px] fill-current text-footer_text smallest-screen:mb-[18px] smallest-screen:mr-[15px]"
                  size={3}
                />

                <span className="smallest-screen:mr-[15px mb-[12px] mr-[10px] smallest-screen:mb-[18px]">
                  <a href="#" className="hover_animate hover:text-secondary">
                    SiteMap
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="large-screen:w-[30%] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px]">
              <OverviewItem
                value="Quis quisque viverra nulla risus integer aliquet in. Dis
                  nascetur vitae sed ultricies vel luctus massa. Sed orci ut
                  magnis maecenas pharetra."
                icon="HEART"
              />
              <OverviewItem
                value="Ut et duis ornare in eget elit. Vestibulum nisi nec ultricies
                consectetur suspendisse. Vitae aliquam quis sed at et."
                icon="CAR"
              />
            </div>
          </div>
          <div className="large-screen:w-[25%] small-screen:mb-[30px] small-screen:mt-[10px] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px]">
              <ul className="flex flex-col gap-[20px]">
                <ShopInfoItem value="About Us" href="#" />
                <ShopInfoItem value="Our Team" href="#" />
                <ShopInfoItem value="Maintenance Mode" href="#" />
              </ul>
            </div>
            <div className="mt-[15px] flex items-center smallest-screen:justify-center">
              <span className="text-footer_text">Follow Us :</span>
              <div className="flex">
                <SocialItem href="https://www.facebook.com" icon="FACEBOOK" />
                <SocialItem href="https://www.instagram.com" icon="INSTAGRAM" />
                <SocialItem href="https://www.youtube.com" icon="YOUTUBE" />
                <SocialItem href="https://www.tiktok.com" icon="TIKTOK" />
              </div>
            </div>
          </div>
          <div className="large-screen:w-[25%] between-small-smallest:w-[50%] smallest-screen:w-full">
            <div className="large-screen:pr-[30px] between-small-smallest:mb-[40px] smallest-screen:mb-[30px]">
              <ul className="flex flex-col gap-[20px]">
                <ContactItem
                  value="petshopdanang@gmail.com"
                  href="mailto:petshopdanang@gmail.com"
                  icon="MAIL"
                />
                <ContactItem
                  value="+84-857-123-987"
                  href="tel:+84857123987"
                  icon="PHONE"
                />
                <ContactItem
                  value=" 54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang"
                  href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5"
                  icon="LOCATE"
                />
                <ContactItem
                  value="Mon-Fri: 8:00 AM - 20:00 PM"
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
