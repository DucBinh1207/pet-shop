import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {
  faXmark,
  faEnvelope,
  faPhone,
  faLocationDot,
  faBusinessTime,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faSquareInstagram,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import Shop from "/src/assets/icons/shop_icon.svg";
import Pet from "/src/assets/icons/dog_icon.svg";
import Food from "/src/assets/icons/food_icon.svg";
import Supplies from "/src/assets/icons/supplies_icon.svg";
import Guide from "/src/assets/icons/guide_icon.svg";
import { usePathname } from "next/navigation";
import triggerSidebar from "@/store/trigger-sidebar";

export default function Sidebar() {
  const pathName = usePathname();
  const { sidebar, closeSidebar } = triggerSidebar((state) => ({
    sidebar: state.sidebar,
    closeSidebar: state.closeSidebar,
  }));

  return (
    <div
      className={`${sidebar === true ? "block opacity-100" : "hidden opacity-0"} fixed top-0 z-[1000] h-full w-full min-w-[320px] max-w-[415px] bg-header_bg_second text-header_text`}
    >
      <div className="absolute left-0 top-0 flex h-[60px] w-full items-center justify-end px-[25px]">
        <button>
          <FontAwesomeIcon
            icon={faXmark}
            size="2x"
            onClick={() => {
              closeSidebar();
            }}
          />
        </button>
      </div>

      <div className="absolute bottom-[100px] left-0 right-0 top-[60px] overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 top-0 overflow-hidden">
          <div className="h-full w-[100vw] min-w-[320px] max-w-[415px] overflow-auto px-[25px]">
            <ul className="text-navbar-size flex flex-col text-header_text">
              <li className="mobile-item-sidebar">
                <Link
                  href="/"
                  className={`group relative flex hover:!text-header_text_third ${pathName === "/" ? "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']" : ""}`}
                >
                  <Shop
                    alt="shop page"
                    loading="lazy"
                    className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/" ? "brightness-[1.5]" : ""} `}
                  />
                  Shop
                  <span
                    className={`absolute bottom-[-10px] left-0 h-[1px] w-0 bg-header_text transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              </li>

              <li className="mobile-item-sidebar">
                <Link
                  href="/pets"
                  className={`group relative flex hover:!text-header_text_third ${pathName === "/pets" ? "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']" : ""}`}
                >
                  <Pet
                    alt="pet page"
                    loading="lazy"
                    className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/pets" ? "brightness-[1.5]" : ""} `}
                  />
                  Pets
                  <span
                    className={`absolute bottom-[-10px] left-0 h-[1px] w-0 bg-header_text transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              </li>

              <li className="mobile-item-sidebar">
                <Link
                  href="/foods"
                  className={`} group relative flex hover:!text-header_text_third ${
                    pathName === "/foods"
                      ? "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']"
                      : ""
                  }`}
                >
                  <Food
                    alt="food page"
                    loading="lazy"
                    className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/foods" ? "brightness-[1.5]" : ""} `}
                  />
                  Foods
                  <span
                    className={`absolute bottom-[-10px] left-0 h-[1px] w-0 bg-header_text transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              </li>

              <li className="mobile-item-sidebar">
                <Link
                  href="/supplies"
                  className={`group relative flex hover:!text-header_text_third ${
                    pathName === "/supplies"
                      ? "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']"
                      : ""
                  }`}
                >
                  <Supplies
                    alt="supplies page"
                    loading="lazy"
                    className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/supplies" ? "brightness-[1.5]" : ""} `}
                  />
                  Supplies
                  <span
                    className={`absolute bottom-[-10px] left-0 h-[1px] w-0 bg-header_text transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              </li>

              <li className="mobile-item-sidebar">
                <Link
                  href="/guides"
                  className={`group relative flex hover:!text-header_text_third ${
                    pathName === "/guides"
                      ? "after:absolute after:right-[30px] after:top-0 after:h-[20px] after:w-[20px] after:bg-arrow_img after:bg-no-repeat after:content-['']"
                      : ""
                  }`}
                >
                  <Guide
                    alt="guide page"
                    loading="lazy"
                    className={`mr-[16px] brightness-100 group-hover:brightness-[1.5] ${pathName === "/guides" ? "brightness-[1.5]" : ""} `}
                  />
                  Guides
                  <span
                    className={`absolute bottom-[-10px] left-0 h-[1px] w-0 bg-header_text transition-all duration-300 group-hover:w-full`}
                  ></span>
                </Link>
              </li>

              <li className="mt-[22px]">
                <div className="overflow-hidden px-[50px] text-white">
                  <ul className="top-header-text flex flex-col flex-nowrap justify-end gap-[15px] py-[15px]">
                    <li className="relative flex flex-nowrap items-center justify-center">
                      <a
                        href="mailto:petshopdanang@gmail.com"
                        className="top-header_hover text-center"
                      >
                        <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                        petshopdanang@gmail.com
                      </a>
                    </li>

                    <li className="relative flex flex-nowrap items-center justify-center">
                      <a
                        href="tel:+84857123987"
                        className="top-header_hover text-center"
                      >
                        <FontAwesomeIcon icon={faPhone} className="mr-2" />
                        0857123987
                      </a>
                    </li>

                    <li className="relative flex flex-nowrap items-center justify-center">
                      <a
                        href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5"
                        target="__blank"
                        className="top-header_hover text-center"
                      >
                        <FontAwesomeIcon
                          icon={faLocationDot}
                          className="mr-2"
                        />
                        54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang
                      </a>
                    </li>

                    <li className="top-header_hover relative flex flex-nowrap items-center justify-center">
                      <FontAwesomeIcon icon={faBusinessTime} className="mr-2" />
                      Mon-Fri: 8:00 AM - 20:00 PM
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[50px] left-0 w-full">
        <ul className="flex h-full w-full items-center justify-around text-header_text">
          <li>
            <Link
              href="https://www.facebook.com"
              target="_blank"
              className="group relative flex h-[50px] w-[50px] flex-col"
            >
              <FontAwesomeIcon
                transform="grow-4"
                icon={faFacebook}
                className="icon_sidebar_animate translate-y-[-50%] opacity-0 group-hover:translate-y-[75%] group-hover:opacity-100"
              />

              <FontAwesomeIcon
                transform="grow-4"
                icon={faFacebook}
                className="icon_sidebar_animate translate-y-[-25%] opacity-100 group-hover:translate-y-[75%] group-hover:opacity-0"
              />
              <div className="absolute h-[50px] w-[50px] rounded-[45%] border border-solid border-header_text transition-all duration-300 hover:scale-[110%]"></div>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              className="group relative flex h-[50px] w-[50px] flex-col"
            >
              <FontAwesomeIcon
                transform="grow-4"
                icon={faSquareInstagram}
                className="icon_sidebar_animate translate-y-[-50%] opacity-0 group-hover:translate-y-[75%] group-hover:opacity-100"
              />

              <FontAwesomeIcon
                transform="grow-4"
                icon={faSquareInstagram}
                className="icon_sidebar_animate translate-y-[-25%] opacity-100 group-hover:translate-y-[75%] group-hover:opacity-0"
              />
              <div className="absolute h-[50px] w-[50px] rounded-[45%] border border-solid border-header_text transition-all duration-300 hover:scale-[110%]"></div>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.youtube.com"
              target="_blank"
              className="group relative flex h-[50px] w-[50px] flex-col"
            >
              <FontAwesomeIcon
                transform="grow-4"
                icon={faYoutube}
                className="icon_sidebar_animate translate-y-[-50%] opacity-0 group-hover:translate-y-[75%] group-hover:opacity-100"
              />

              <FontAwesomeIcon
                transform="grow-4"
                icon={faYoutube}
                className="icon_sidebar_animate translate-y-[-25%] opacity-100 group-hover:translate-y-[75%] group-hover:opacity-0"
              />
              <div className="absolute h-[50px] w-[50px] rounded-[45%] border border-solid border-header_text transition-all duration-300 hover:scale-[110%]"></div>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.tiktok.com"
              target="_blank"
              className="group relative flex h-[50px] w-[50px] flex-col"
            >
              <FontAwesomeIcon
                transform="grow-4"
                icon={faTiktok}
                className="icon_sidebar_animate translate-y-[-50%] opacity-0 group-hover:translate-y-[75%] group-hover:opacity-100"
              />

              <FontAwesomeIcon
                transform="grow-4"
                icon={faTiktok}
                className="icon_sidebar_animate translate-y-[-25%] opacity-100 group-hover:translate-y-[75%] group-hover:opacity-0"
              />
              <div className="absolute h-[50px] w-[50px] rounded-[45%] border border-solid border-header_text transition-all duration-300 hover:scale-[110%]"></div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
