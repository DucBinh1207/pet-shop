import Image from "next/image";

export default function Brand() {
  return (
    <div className="mx-auto mb-[60px] mt-[35px] max-w-[1920px]">
      <div className="mx-auto max-w-[1160px] pt-[30px] small-screen:w-[calc(100%-60px)]">
        <div className="flex justify-center small-screen:flex-wrap">
          <a href="/" className="mx-[37.5px]" target="_blank">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand.png" fill alt="whole hearted" />
            </div>
          </a>

          <a href="/" className="mx-[37.5px]" target="_blank">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand1.png" fill alt="whole hearted" />
            </div>
          </a>

          <a href="/" className="mx-[37.5px]" target="_blank">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand2.png" fill alt="whole hearted" />
            </div>
          </a>

          <a href="/" className="mx-[37.5px]" target="_blank">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand3.png" fill alt="whole hearted" />
            </div>
          </a>

          <a href="/" className="mx-[37.5px]" target="_blank">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand4.png" fill alt="whole hearted" />
            </div>
          </a>

          <a href="/" className="mx-[37.5px]" target="_blank">
            <div className="relative h-[100px] w-[100px]">
              <Image src="/assets/images/brand5.png" fill alt="whole hearted" />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
