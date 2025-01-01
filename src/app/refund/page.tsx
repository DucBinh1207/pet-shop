import RefundIcon from "@/components/common/icons/refund-icon";

export default function Page() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px] small-screen:w-[calc(100%-60px)] smallest-screen:w-full">
      <div className="flex w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <RefundIcon
            size={90}
            className="fill-current text-dark_yellow_color"
          />
        </div>
        <h1 className="mx-auto mt-[35px] max-w-[800px] text-center text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          Chính Sách Hoàn Trả Hàng & Hoàn Trả Tiền
        </h1>
        <p className="mx-auto mb-[20px] mt-[20px] w-[600px] text-center text-text_color">
          Whiskers cam kết mang đến cho bạn sự hài lòng tuyệt đối với sản phẩm
          thú cưng và dịch vụ của chúng tôi. Dưới đây là chính sách hoàn trả
          hàng hóa và hoàn tiền khi mua sắm tại Whiskers.
        </p>

        <div className="mx-auto mt-[30px] max-w-[800px] text-[16px] text-text_color">
          <h2 className="text-[18px] font-bold text-primary">
            1. Chính Sách Hoàn Trả Hàng
          </h2>
          <p className="mt-[10px]">
            Nếu bạn không hài lòng với sản phẩm mua tại Whiskers, bạn có thể yêu
            cầu hoàn trả hàng trong vòng 7 ngày kể từ ngày nhận hàng. Để được
            hoàn trả hàng, sản phẩm phải còn nguyên vẹn, không bị hư hỏng, và
            không qua sử dụng.
          </p>
          <p className="mt-[10px]">
            Để yêu cầu hoàn trả, vui lòng liên hệ với bộ phận hỗ trợ khách hàng
            qua email hoặc hotline của chúng tôi.
          </p>

          <h2 className="mt-[30px] text-[18px] font-bold text-primary">
            2. Chính Sách Hoàn Tiền
          </h2>
          <p className="mt-[10px]">
            Sau khi nhận lại hàng, chúng tôi sẽ kiểm tra tình trạng của sản phẩm
            và xác nhận hoàn trả. Nếu đủ điều kiện, chúng tôi sẽ hoàn tiền cho
            bạn trong vòng 7 ngày làm việc. Tiền sẽ được hoàn lại vào tài khoản
            ngân hàng hoặc phương thức thanh toán mà bạn đã sử dụng khi mua
            hàng.
          </p>
          <p className="mt-[10px]">
            Nếu bạn đã thanh toán bằng thẻ tín dụng hoặc ví điện tử, tiền hoàn
            sẽ được chuyển vào tài khoản của bạn thông qua hình thức thanh toán
            đó.
          </p>

          <h2 className="mt-[30px] text-[18px] font-bold text-primary">
            3. Điều Kiện Hoàn Trả
          </h2>
          <p className="mt-[10px]">
            Để được hoàn trả và hoàn tiền, sản phẩm phải đáp ứng đầy đủ các điều
            kiện sau:
          </p>
          <ul className="list-disc pl-[20px]">
            <li>Sản phẩm còn nguyên tem, nhãn mác và chưa qua sử dụng.</li>
            <li>
              Không có dấu hiệu của việc hư hỏng hoặc thay đổi từ phía khách
              hàng.
            </li>
            <li>Đảm bảo sản phẩm được trả lại trong bao bì gốc, nếu có.</li>
          </ul>

          <h2 className="mt-[30px] text-[18px] font-bold text-primary">
            4. Các Trường Hợp Không Được Hoàn Trả
          </h2>
          <p className="mt-[10px]">
            Whiskers không thể hoàn trả hoặc hoàn tiền trong các trường hợp sau:
          </p>
          <ul className="list-disc pl-[20px]">
            <li>Sản phẩm đã bị sử dụng hoặc hư hỏng do khách hàng.</li>
            <li>Sản phẩm không còn nguyên vẹn hoặc không có bao bì gốc.</li>
            <li>Sản phẩm đã quá 7 ngày kể từ ngày nhận hàng.</li>
          </ul>

          <h2 className="mt-[30px] text-[18px] font-bold text-primary">
            5. Liên Hệ
          </h2>
          <p className="mt-[10px]">
            Để yêu cầu hoàn trả hàng hoặc hoàn tiền, bạn có thể liên hệ với
            chúng tôi qua các phương thức sau:
          </p>
          <p className="mt-[10px]">
            <strong>Email:</strong> whiskersshop@gmail.com
          </p>
          <p>
            <strong>Hotline:</strong> +84-857-123-987
          </p>
          <p className="mt-[10px]">
            <strong>Thời gian làm việc:</strong> 8:00am – 20:00pm (Từ thứ 2 đến
            thứ 6)
          </p>
        </div>
      </div>
    </div>
  );
}
