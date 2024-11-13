import Image from "next/image";

export default function Item() {
  return (
    <>
      <p className="text-[17px] font-normal leading-[1.55] tracking-[0.015em] text-text_color">
        Tôi rất hài lòng với trải nghiệm mua sắm tại cửa hàng thú cưng này. Nhân
        viên tận tình và am hiểu, giúp tôi chọn được một bé mèo khỏe mạnh và
        đáng yêu. Các sản phẩm đều chất lượng và an toàn cho thú cưng. Tôi chắc
        chắn sẽ quay lại!
      </p>

      <div className="min-h-[70px mt-[25px] flex items-center gap-[22px]">
        <div className="relative h-[70px] w-[70px] overflow-hidden rounded-[50%]">
          <Image
            src="/assets/images/avatar.jpg"
            alt="comments"
            fill
            className="object-cover object-center"
          />
        </div>
        <span className="] font-quicksand text-[18px] font-bold leading-[1.11] tracking-[-0.01em] text-primary">
          Trần Đức Bình
        </span>
      </div>
    </>
  );
}
