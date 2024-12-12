import Button from "@/components/common/button";
import useMutation from "@/hooks/use-mutation";
import useUser from "@/hooks/users/useUser";
import { updateAddress } from "@/services/api/user-api";
import { toastError, toastSuccess } from "@/utils/toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import InputField from "./input-field";

const schema = z.object({
  province: z.string().min(1, "Province is required"),
  district: z.string().min(1, "District is required"),
  ward: z.string().min(1, "Ward is required"),
  street: z.string().min(1, "Street is required"),
});

export type AddressFormType = z.infer<typeof schema>;

export default function Address() {
  const { user } = useUser();

  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
  } = useForm<AddressFormType>({
    defaultValues: {
      province: user?.province,
      district: user?.district,
      ward: user?.ward,
      street: user?.street,
    },
    mode: "onSubmit",
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    fetcher: updateAddress,
    options: {
      onSuccess: () => {
        toastSuccess("Cập nhật địa chỉ thành công");
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  const onSubmit = handleSubmit((data: AddressFormType) => {
    if (isDirty) mutate({ data });
    else {
      toastError("Bạn chưa thay đổi thông tin");
    }
  });

  return (
    <div className="mt-[10px] flex max-w-[430px] flex-col">
      <h2 className="text-[22px] font-medium leading-[28px] text-primary xxx-smallest-screen:text-center">
        Địa chỉ
      </h2>

      <form onSubmit={onSubmit} className="flex flex-col gap-[5px]">
        <InputField
          id="province"
          label="Tỉnh/ Thành phố"
          placeholder="Nhập tỉnh/ thành phố "
          {...register("province")}
          error={errors.province?.message}
        />

        <InputField
          id="district"
          label="Quận/ Huyện"
          placeholder="Nhập quận/ huyện "
          {...register("district")}
          error={errors.district?.message}
        />

        <InputField
          id="ward"
          label="Xã/ Phường"
          placeholder="Nhập xã/ phường "
          {...register("ward")}
          error={errors.ward?.message}
        />

        <InputField
          id="street"
          label="Số đường"
          placeholder="Nhập số đường "
          {...register("street")}
          error={errors.street?.message}
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
    </div>
  );
}
