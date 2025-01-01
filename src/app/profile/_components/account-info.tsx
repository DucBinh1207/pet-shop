import Button from "@/components/common/button";
import useMutation from "@/hooks/use-mutation";
import { toastError, toastSuccess } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./input-field";
import useUser from "@/hooks/users/useUser";
import { updateAccountInfo } from "@/services/api/user-api";

const schema = z.object({
  name: z.string().min(1, "Vui lòng nhập tên"),
  telephoneNumber: z.string().min(1, "Vui lòng nhập số điện thoại"),
  image: z.string().optional(),
  nationality: z.string().min(1, "Vui lòng nhập quốc tịch"),
});

export type ChangeAccountInfoFormType = z.infer<typeof schema>;

export default function AccountInfo() {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<ChangeAccountInfoFormType>({
    defaultValues: {
      name: user?.name,
      telephoneNumber: user?.telephoneNumber,
      image: user?.image,
      nationality: user?.nationality,
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    fetcher: updateAccountInfo,
    options: {
      onSuccess: () => {
        toastSuccess("Cập nhật thông tin thành công");
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const onSubmit = handleSubmit((data: ChangeAccountInfoFormType) => {
    mutate({ data });
  });

  return (
    <>
      <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
        Chi tiết tài khoản
      </h2>

      <form onSubmit={onSubmit} className="flex max-w-[430px] flex-col">
        <InputField
          id="name"
          label="Tên"
          placeholder="Nhập tên "
          {...register("name")}
          error={errors.name?.message}
        />

        <InputField
          id="telephoneNumber"
          label="Số điện thoại"
          placeholder="Nhập tỉnh/ thành phố "
          {...register("telephoneNumber")}
          error={errors.telephoneNumber?.message}
        />

        <div className="mt-[25px] flex flex-col justify-start gap-[10px]">
          <label className="text-primary" htmlFor="user_email">
            Email *
          </label>
          <input
            id="user_email"
            value={user?.email}
            className="rounded-[3px] border border-solid border-gray-300 bg-gray-100 px-[12px] py-[9px] text-[13px] font-medium leading-[16px] tracking-[0.01em] text-gray-500 outline-none"
            disabled
          />
        </div>

        <InputField
          id="nationality"
          label="Quốc tịch"
          placeholder="Nhập quốc tịch"
          {...register("nationality")}
          error={errors.nationality?.message}
        />

        {isDirty ? (
          <Button
            size="xsm"
            variant="secondary"
            className="mt-[35px] font-bold"
          >
            Lưu thay đổi
          </Button>
        ) : (
          <button
            className="hover_animate mt-[35px] inline-block rounded-[25px] border-[2px] border-solid border-primary bg-primary px-[25px] py-[15px] text-center font-bold uppercase text-white opacity-30 outline-none"
            disabled
          >
            Lưu thay đổi
          </button>
        )}
      </form>
    </>
  );
}
