import Link from "next/link";
import BenefitItem from "./_components/benefit-item";
import LogoIcon from "@/components/common/icons/logo-icon";
import LegalItem from "./_components/legal-item";
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
          <BenefitItem value="Free Shipping" icon="car" />
          <BenefitItem value="24/7 Support" icon="question" />
          <BenefitItem value="Money Back Guarantee" icon="money" />
        </ul>
      </div>
      <div className="small-screen:p-footer-p-small smallest-screen:p-footer-p-smallest relative bg-footer_color p-[60px] text-white">
        <div className="bg-footer_img absolute bottom-full left-0 block h-[3px] w-[110vw] translate-x-[-50px] translate-y-[1px] scale-y-[-1]"></div>
        <div className="mx-auto flex small-screen:flex-wrap">
          <div className="between-small-smallest:w-[50%] large-screen:w-[20%] smallest-screen:w-full">
            <div className="between-small-smallest:mb-[40px] flex flex-col large-screen:pr-[30px] smallest-screen:mb-[30px] smallest-screen:items-center">
              <Link
                href="/"
                className="mb-[50px] flex items-center gap-[10px] text-[30px] font-semibold tracking-wider text-white small-screen:flex-1 smallest-screen:mb-[27px]"
              >
                <div>
                  <LogoIcon size={30} fill="#ffffff" />
                </div>
                Whiskers
              </Link>
              <p className="text-footer_text font-normal tracking-[0.4px] small-screen:text-[14px]">
                © 2022 Ricky Theme. All rights reserved.
              </p>
              <div className="mt-[30px] flex w-full flex-wrap items-center justify-start text-[12px] smallest-screen:justify-center">
                <LegalItem value="Privacy Policy" href="#" />

                <DotIcon
                  className="text-footer_text mb-[12px] mr-[10px] fill-current smallest-screen:mb-[18px] smallest-screen:mr-[15px]"
                  size={3}
                />

                <LegalItem value="Terms" href="#" />

                <DotIcon
                  className="text-footer_text mb-[12px] mr-[10px] fill-current smallest-screen:mb-[18px] smallest-screen:mr-[15px]"
                  size={3}
                />

                <LegalItem value="SiteMap" href="#" />
              </div>
            </div>
          </div>
          <div className="between-small-smallest:w-[50%] large-screen:w-[30%] smallest-screen:w-full">
            <div className="between-small-smallest:mb-[40px] large-screen:pr-[30px] smallest-screen:mb-[30px]">
              <OverviewItem
                value="Quis quisque viverra nulla risus integer aliquet in. Dis
                  nascetur vitae sed ultricies vel luctus massa. Sed orci ut
                  magnis maecenas pharetra."
                icon="heart"
              />

              <OverviewItem
                value="Ut et duis ornare in eget elit. Vestibulum nisi nec ultricies
                consectetur suspendisse. Vitae aliquam quis sed at et."
                icon="car"
              />
            </div>
          </div>
          <div className="between-small-smallest:w-[50%] large-screen:w-[25%] small-screen:mb-[30px] small-screen:mt-[10px] smallest-screen:w-full">
            <div className="between-small-smallest:mb-[40px] large-screen:pr-[30px] smallest-screen:mb-[30px]">
              <ul className="flex flex-col gap-[20px]">
                <ShopInfoItem value="About Us" href="#" />
                <ShopInfoItem value="Our Team" href="#" />
                <ShopInfoItem value="Maintenance Mode" href="#" />
              </ul>
            </div>
            <div className="mt-[15px] flex items-center smallest-screen:justify-center">
              <span className="text-footer_text">Follow Us :</span>
              <div className="flex">
                <SocialItem href="https://www.facebook.com" icon="facebook" />
                <SocialItem href="https://www.instagram.com" icon="instagram" />
                <SocialItem href="https://www.youtube.com" icon="youtube" />
                <SocialItem href="https://www.tiktok.com" icon="tiktok" />
              </div>
            </div>
          </div>
          <div className="between-small-smallest:w-[50%] large-screen:w-[25%] smallest-screen:w-full">
            <div className="between-small-smallest:mb-[40px] large-screen:pr-[30px] smallest-screen:mb-[30px]">
              <ul className="flex flex-col gap-[20px]">
                <ContactItem
                  value="petshopdanang@gmail.com"
                  href="mailto:petshopdanang@gmail.com"
                  icon="mail"
                />
                <ContactItem
                  value="+84-857-123-987"
                  href="tel:+84857123987"
                  icon="phone"
                />
                <ContactItem
                  value=" 54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang"
                  href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5"
                  icon="locate"
                />
                <ContactItem
                  value="Mon-Fri: 8:00 AM - 20:00 PM"
                  href="#"
                  icon="businessTime"
                />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
