import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faBusinessTime,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

export default function HeaderNotice() {
  return (
    <div className="overflow-hidden bg-header_bg px-[50px] text-white small-screen:hidden">
      <ul className="top-header-text flex flex-nowrap justify-end gap-[15px] py-[15px]">
        <li className="top-header_hover relative flex flex-nowrap items-center">
          <a href="mailto:petshopdanang@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            petshopdanang@gmail.com
          </a>
        </li>
        <li className="top-header_hover relative flex flex-nowrap items-center">
          <a href="tel:+84857123987">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            +84-857-123-987
          </a>
        </li>
        <li className="top-header_hover relative flex flex-nowrap items-center">
          <a href="https://maps.app.goo.gl/Q4P1AhYJGg1qP4Ez5" target="_blank">
            <FontAwesomeIcon icon={faLocationDot} className="mr-2" />
            54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang
          </a>
        </li>
        <li className="top-header_hover relative flex flex-nowrap items-center">
          <FontAwesomeIcon icon={faBusinessTime} className="mr-2" />
          Mon-Fri: 8:00 AM - 20:00 PM
        </li>
      </ul>
    </div>
  );
}
