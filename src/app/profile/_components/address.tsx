import Button from "@/components/common/button";
import Input from "@/components/common/input";

export default function Address() {
  return (
    <div className="mt-[10px] flex max-w-[430px] flex-col">
      <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
        Address
      </h2>

      <form action="" className="mt-[25px] flex flex-col gap-[10px]">
        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="province">
            Province *
          </label>
          <Input id="province"></Input>
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="district">
            District *
          </label>
          <Input id="district"></Input>
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="ward">
            Ward *
          </label>
          <Input id="ward"></Input>
        </div>

        <div className="flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="street">
            Street *
          </label>
          <Input id="street"></Input>
        </div>

        <Button
          type="submit"
          size="xsm"
          variant="secondary"
          className="mt-[35px] font-bold"
        >
          Save changes
        </Button>
      </form>
    </div>
  );
}
