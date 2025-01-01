import ShieldIcon from "@/components/common/icons/shield-icon";

export default function Page() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px] small-screen:w-[calc(100%-60px)] smallest-screen:w-full">
      <div className="flex w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <ShieldIcon
            size={90}
            className="fill-current text-dark_yellow_color"
          />
        </div>
        <h1 className="mx-auto mt-[35px] max-w-[800px] text-center text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          Chính Sách Bảo Mật Của Whiskers
        </h1>
        <p className="mx-auto mb-[20px] mt-[20px] w-[600px] text-center text-text_color">
          Cảm ơn quý khách đã truy cập vào website Whiskers. Chúng tôi tôn trọng
          và cam kết bảo vệ thông tin cá nhân của bạn. Xin vui lòng đọc kỹ Chính
          sách bảo mật dưới đây để hiểu rõ hơn về cách chúng tôi thu thập, sử
          dụng và bảo vệ dữ liệu của bạn.
        </p>

        <div className="mx-auto mt-[30px] max-w-[800px] text-[16px] text-text_color">
          <p>
            Chính sách bảo mật này giải thích cách chúng tôi tiếp nhận, sử dụng
            và (trong một số trường hợp) tiết lộ thông tin cá nhân của bạn.
            Chúng tôi cũng sẽ nêu rõ các biện pháp bảo mật mà chúng tôi thực
            hiện để bảo vệ thông tin của bạn.
          </p>
          <p className="mt-4">
            Bảo vệ dữ liệu cá nhân và xây dựng niềm tin từ khách hàng là ưu tiên
            hàng đầu của chúng tôi. Chính vì vậy, chúng tôi chỉ thu thập những
            thông tin cần thiết liên quan đến giao dịch mua bán thú cưng và phụ
            kiện tại Whiskers. Bạn có thể truy cập vào website mà không cần cung
            cấp bất kỳ thông tin cá nhân nào. Tuy nhiên, để thực hiện các giao
            dịch mua bán hoặc sử dụng các dịch vụ của chúng tôi, bạn sẽ cần cung
            cấp thông tin cá nhân.
          </p>
          <h2 className="mt-6 text-[18px] font-bold">
            1. Thu thập thông tin cá nhân
          </h2>
          <p>
            Khi bạn mua thú cưng hoặc các sản phẩm phụ kiện tại Whiskers, chúng
            tôi sẽ thu thập các thông tin cá nhân cần thiết cho quá trình giao
            dịch. Thông tin này có thể bao gồm:
          </p>
          <ul className="mt-2 list-disc pl-5">
            <li>Tên, địa chỉ, số điện thoại, email</li>
            <li>Địa chỉ giao hàng</li>
            <li>
              Thông tin thanh toán (thẻ thanh toán hoặc tài khoản ngân hàng)
            </li>
          </ul>
          <p className="mt-4">Chúng tôi sẽ sử dụng các thông tin này để:</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Xử lý đơn hàng của bạn.</li>
            <li>Cung cấp dịch vụ hỗ trợ và thông tin về sản phẩm.</li>
            <li>
              Gửi thông báo về các chương trình khuyến mãi và sản phẩm mới của
              cửa hàng (nếu bạn không từ chối nhận thông tin).
            </li>
          </ul>
          <p className="mt-4">
            Chúng tôi cam kết bảo mật thông tin cá nhân của khách hàng và không
            tiết lộ cho bên thứ ba mà không có sự đồng ý của bạn, trừ khi yêu
            cầu từ pháp luật.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">2. Sử dụng cookie</h2>
          <p>
            Whiskers sử dụng cookies để cải thiện trải nghiệm người dùng.
            Cookies là các tệp văn bản nhỏ được lưu trữ trên thiết bị của bạn để
            nhận diện người dùng và giúp tiết kiệm thời gian khi sử dụng
            website.
          </p>
          <p className="mt-4">Chúng tôi sử dụng cookies để:</p>
          <ul className="mt-2 list-disc pl-5">
            <li>Nhớ thông tin khi bạn quay lại trang web của chúng tôi.</li>
            <li>
              Cải thiện giao diện và nội dung của trang web để phù hợp hơn với
              nhu cầu của bạn.
            </li>
          </ul>
          <p className="mt-4">
            Bạn có thể từ chối sử dụng cookies qua trình duyệt của mình, nhưng
            điều này có thể làm hạn chế một số tính năng trên website.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">3. Bảo mật</h2>
          <p>
            Chúng tôi đã thực hiện các biện pháp bảo mật kỹ thuật và tổ chức để
            bảo vệ thông tin cá nhân của bạn khỏi việc truy cập trái phép, mất
            mát, hoặc tiết lộ. Các giao dịch thanh toán qua website của chúng
            tôi được mã hóa bằng SSL (Secure Socket Layer) để đảm bảo an toàn.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">
            4. Quyền lợi của khách hàng
          </h2>
          <p>
            Bạn có quyền yêu cầu truy cập và sửa chữa thông tin cá nhân của
            mình. Nếu bạn muốn ngừng nhận các thông báo về sản phẩm, khuyến mãi
            từ Whiskers, bạn có thể từ chối bất cứ lúc nào bằng cách sử dụng
            tính năng từ chối trong các email của chúng tôi.
          </p>

          <h2 className="mt-6 text-[18px] font-bold">5. Liên hệ</h2>
          <p>
            Nếu bạn có bất kỳ câu hỏi hoặc yêu cầu nào về Chính sách bảo mật
            này, vui lòng liên hệ với chúng tôi qua thông tin sau:
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
