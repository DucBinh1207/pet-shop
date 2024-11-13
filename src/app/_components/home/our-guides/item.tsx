import Image from "next/image";
import Link from "next/link";

export default function Item() {
  return (
    <>
      <Link href="/guides" className="relative block pb-[61.53%]">
        <Image
          src="/assets/images/corgi-guides.jpg"
          fill
          alt="guides"
          className="object-cover object-center"
        />
      </Link>
      <div className="flex flex-col p-[25px]">
        <Link
          href="/guides"
          className="font-quicksand text-[18px] font-bold leading-[1.1] tracking-[0.005em] text-primary"
        >
          Xu Hướng Mới Trong Ngành Thú Cưng Năm 2023
        </Link>
        <p className="mt-[15px] max-h-[38px] overflow-hidden overflow-ellipsis font-quicksand text-[14px] font-normal leading-[1.46] tracking-[0.02em] text-text_color">
          Năm 2023, ngành công nghiệp thú cưng nổi bật với xu hướng tập trung
          vào sức khỏe và hạnh phúc của thú cưng. Nhu cầu về thực phẩm tự nhiên
          và hữu cơ ngày càng tăng, cùng với việc sử dụng công nghệ như ứng dụng
          và thiết bị thông minh để theo dõi sức khỏe thú cưng. Xu hướng này
          mang đến nhiều cơ hội cho doanh nghiệp và nâng cao chất lượng cuộc
          sống cho thú cưng. của họ.
        </p>
      </div>
    </>
  );
}
