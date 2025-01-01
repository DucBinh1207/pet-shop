"use client";

import HandShakeIcon from "@/components/common/icons/hand-shake-icon";

export default function Page() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px] small-screen:w-[calc(100%-60px)] smallest-screen:w-full">
      <div className="flex w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <HandShakeIcon
            size={90}
            className="fill-current text-dark_yellow_color"
          />
        </div>
        <h1 className="mx-auto mt-[35px] max-w-[800px] text-center text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          Điều Khoản Sử Dụng Của Whiskers
        </h1>
        <p className="mx-auto mb-[20px] mt-[20px] w-[600px] text-center text-text_color">
          Cảm ơn quý khách đã truy cập vào website Whiskers. Xin vui lòng đọc kỹ
          các Điều khoản sử dụng dưới đây để hiểu rõ hơn về quyền lợi và trách
          nhiệm của bạn khi sử dụng dịch vụ của chúng tôi.
        </p>

        <div className="mx-auto mt-[30px] max-w-[800px] text-[16px] text-text_color">
          <p>
            Điều khoản sử dụng này áp dụng cho tất cả người dùng truy cập và sử
            dụng dịch vụ của website Whiskers. Việc truy cập và sử dụng trang
            web này đồng nghĩa với việc bạn đồng ý tuân thủ các điều khoản dưới
            đây.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">1. Giới thiệu chung</h2>
          <p>
            Whiskers là cửa hàng thú cưng cung cấp các sản phẩm thú cưng và phụ
            kiện tại Việt Nam. Chúng tôi cam kết cung cấp dịch vụ tốt nhất với
            chất lượng sản phẩm đảm bảo. Bạn cần tuân thủ các điều khoản sử dụng
            khi tham gia vào các giao dịch tại cửa hàng của chúng tôi.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">
            2. Quyền và nghĩa vụ của khách hàng
          </h2>
          <p>
            Khi bạn sử dụng dịch vụ của Whiskers, bạn đồng ý cung cấp các thông
            tin cá nhân đúng và đầy đủ, bao gồm nhưng không giới hạn ở tên, địa
            chỉ, số điện thoại, và email để phục vụ cho quá trình giao dịch.
          </p>
          <p className="mt-4">
            Bạn có quyền yêu cầu Whiskers cung cấp các thông tin về sản phẩm,
            chính sách khuyến mãi và cập nhật thông tin sản phẩm mới qua email
            hoặc tin nhắn (nếu bạn đồng ý nhận thông tin từ chúng tôi).
          </p>

          <h2 className="mt-6 text-[18px] font-bold">
            3. Quyền và nghĩa vụ của Whiskers
          </h2>
          <p>
            Whiskers cam kết bảo vệ thông tin cá nhân của khách hàng và không
            tiết lộ cho bên thứ ba mà không có sự đồng ý của khách hàng, trừ khi
            có yêu cầu của cơ quan pháp luật.
          </p>
          <p className="mt-4">
            Whiskers sẽ cung cấp dịch vụ hỗ trợ khách hàng, tư vấn về các sản
            phẩm và giao hàng đúng hạn. Trong trường hợp sản phẩm gặp vấn đề
            hoặc lỗi, khách hàng có thể yêu cầu đổi trả theo chính sách của
            Whiskers.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">4. Bảo mật thông tin</h2>
          <p>
            Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo các
            tiêu chuẩn bảo mật nghiêm ngặt. Thông tin thanh toán của khách hàng
            sẽ được mã hóa và lưu trữ an toàn để tránh bị truy cập trái phép.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">
            5. Chính sách thanh toán và giao nhận
          </h2>
          <p>
            Whiskers cung cấp nhiều phương thức thanh toán linh hoạt, bao gồm
            thẻ tín dụng, chuyển khoản ngân hàng và thanh toán khi nhận hàng.
            Sản phẩm sẽ được giao theo địa chỉ mà khách hàng cung cấp khi hoàn
            tất đơn hàng.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">6. Sử dụng Cookies</h2>
          <p>
            Whiskers sử dụng cookies để nâng cao trải nghiệm người dùng. Các
            cookies này giúp ghi nhớ thông tin đăng nhập của bạn và giúp cải
            thiện trải nghiệm mua sắm trên website.
          </p>
          <p className="mt-4">
            Bạn có thể điều chỉnh cài đặt cookies trong trình duyệt của mình,
            nhưng việc từ chối cookies có thể ảnh hưởng đến một số tính năng
            trên website.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">
            7. Quyền thay đổi điều khoản
          </h2>
          <p>
            Whiskers có quyền thay đổi, điều chỉnh các điều khoản sử dụng mà
            không cần thông báo trước. Các thay đổi sẽ có hiệu lực ngay khi được
            đăng tải trên trang web.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">8. Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi nào về Điều khoản sử dụng này hoặc các
            dịch vụ của Whiskers, vui lòng liên hệ với chúng tôi qua thông tin
            sau:
          </p>
          <p>
            Email:
            <a href="mailto:whiskersshop@gmail.com" className="text-primary">
              whiskersshop@gmail.com
            </a>
          </p>
          <p>SĐT: +84-857-123-987</p>
        </div>
      </div>
    </div>
  );
}
