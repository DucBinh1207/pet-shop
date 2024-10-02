import Input from "@/components/common/input";

type props = {
  id: string;
  label: string;
  placeholder: string;
};

export default function InputField({ id, label, placeholder }: props) {
  return (
    <div className="mt-[25px]">
      <span className="clear-right mb-[20px]">
        <label
          className="block pb-[10px] font-quicksand text-[13px] font-semibold leading-[18px] tracking-[0.02em] text-primary"
          htmlFor={id}
        >
          {label} *
        </label>
        <Input
          type="text"
          inputSize="medium_full_width"
          placeholder={placeholder}
          id={id}
        />
      </span>
    </div>
  );
}
