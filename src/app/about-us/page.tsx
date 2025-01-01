"use client";

import HeartWithDogIcon from "@/components/common/icons/heart_with_dog";

export default function Page() {
  return (
    <div className="mx-auto mb-[40px] mt-[30px] w-[1160px] rounded-[4px] small-screen:w-[calc(100%-60px)] smallest-screen:w-full">
      <div className="flex w-full flex-col items-center justify-between bg-white px-[60px] py-[125px]">
        <div className="relative inline-block">
          <HeartWithDogIcon
            size={90}
            className="fill-current text-dark_yellow_color"
          />
        </div>
        <h1 className="mx-auto mt-[35px] max-w-[800px] text-center text-[27px] font-bold leading-[1.27] tracking-[-0.01em] text-primary">
          Về Whiskers
        </h1>
        <p className="mx-auto mb-[20px] mt-[20px] w-[600px] text-center text-text_color">
          Whiskers: Thương Hiệu Cung Cấp Thú Cưng Uy Tín – Chất Lượng Hàng Đầu
          Việt Nam
        </p>

        <div className="mx-auto mt-[30px] max-w-[800px] text-[16px] text-text_color">
          <p>
            Được thành lập vào năm 2024, Whiskers tự hào là địa chỉ đáng tin cậy
            cho cộng đồng yêu thú cưng trên toàn quốc. Chúng tôi chuyên cung cấp
            chó, mèo cùng các sản phẩm và phụ kiện thú cưng chất lượng cao, phục
            vụ khắp 64 tỉnh thành tại Việt Nam.
          </p>
          <p className="mt-[15px]">
            Đối với Whiskers, thú cưng không chỉ là vật nuôi mà còn là những
            người bạn đồng hành đáng yêu trong cuộc sống. Vì vậy, ngoài việc
            cung cấp sản phẩm, chúng tôi cũng xây dựng một cộng đồng nơi mọi
            người có thể chia sẻ kinh nghiệm nuôi thú cưng và lưu giữ những
            khoảnh khắc đáng nhớ cùng các bé.
          </p>
          <p className="mt-[15px]">
            Whiskers tự hào là thương hiệu thú cưng được yêu thích, với hàng
            nghìn khách hàng hài lòng và sự xuất hiện thường xuyên trên các kênh
            truyền thông lớn. Trong tương lai, chúng tôi sẽ tiếp tục phát triển
            để mang đến những trải nghiệm tốt nhất cho cộng đồng yêu thú cưng.
          </p>
        </div>

        <div className="mx-auto mt-[30px] w-full max-w-[800px] text-[16px] text-text_color">
          <h2 className="text-[18px] font-bold text-primary">Liên Hệ</h2>
          <p className="mt-[10px]">
            <strong>Địa chỉ:</strong>
          </p>
          <p>
            Đà Nẵng: Số 54 Nguyen Luong Bang, Hoa Khanh Bac, Lien Chieu, Da Nang
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

        <div className="mx-auto mt-[30px] w-full max-w-[800px] text-[16px] text-text_color">
          <h2 className="text-[18px] font-bold text-primary">
            Số Tài Khoản Ngân Hàng
          </h2>
          <p className="mt-[10px]">
            <strong>STK:</strong> 1234567890123456
          </p>
          <p>
            <strong>Tên chủ tài khoản:</strong> Whiskers Pet Shop
          </p>
          <p>
            <strong>Ngân hàng:</strong> MbBank Đà NẵngNẵng
          </p>

          <p className="mt-[15px]">
            <strong>STK:</strong> 9876543210987654
          </p>
          <p>
            <strong>Tên chủ tài khoản:</strong> Whiskers Pet Shop
          </p>
          <p>
            <strong>Ngân hàng:</strong> Agribank Đà Nẵng
          </p>
        </div>
      </div>
    </div>
  );
}
