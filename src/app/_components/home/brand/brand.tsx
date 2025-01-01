import Image from "next/image";

export default function Brand() {
  return (
    <div className="mx-auto mb-[60px] mt-[35px] max-w-[1920px]">
      <div className="mx-auto max-w-[1160px] pt-[30px] small-screen:w-[calc(100%-60px)]">
        <div className="flex justify-center small-screen:flex-wrap">
          <a
            href="https://wholeheartedshop.com/"
            className="mx-[37.5px]"
            target="_blank"
          >
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand.png" fill alt="whole hearted" />
            </div>
          </a>

          <a
            href="https://www.hillspet.com/science-diet"
            className="mx-[37.5px]"
            target="_blank"
          >
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand1.png" fill alt="Science Diet" />
            </div>
          </a>

          <a
            href="https://www.royalcanin.com/vn"
            className="mx-[37.5px]"
            target="_blank"
          >
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand2.png" fill alt="Royal Canin" />
            </div>
          </a>

          <a
            href="https://www.greenies.com/"
            className="mx-[37.5px]"
            target="_blank"
          >
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand3.png" fill alt="Greenies" />
            </div>
          </a>

          <a
            href="https://www.tasteofthewildpetfood.com/taste-of-the-wild/"
            className="mx-[37.5px]"
            target="_blank"
          >
            <div className="relative h-[100px] w-[100px]">
              <Image
                src="/assets/images/brand4.png"
                fill
                alt="Taste of the wild"
              />
            </div>
          </a>

          <a
            href="https://thesophresh.com/"
            className="mx-[37.5px]"
            target="_blank"
          >
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand5.png" fill alt="TThe Sophresh" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
