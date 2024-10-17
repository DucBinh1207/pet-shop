type FormInputProps = {
  input: React.InputHTMLAttributes<HTMLInputElement>;
  error?: string;
};

export default function FormInput({ input, error }: FormInputProps) {

  return (
    <>
      {input}
      {error && (
        <span className="ml-[5px] mt-[5px] text-[13px] leading-[18px] text-red-500">
          {error}
        </span>
      )}
    </>
  );
}
