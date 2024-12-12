import ToolTip from "@/components/common/tooltip";
import useMutation from "@/hooks/use-mutation";
import useUser from "@/hooks/users/useUser";
import { updateAvatar } from "@/services/api/user-api";
import { toastError, toastSuccess } from "@/utils/toast";
import Image from "next/image";
import { ChangeEvent, useEffect, useRef, useState } from "react";

export default function Avatar() {
  const avatarInputRef = useRef<HTMLInputElement>(null);
  const [avatar, setAvatar] = useState("/assets/images/avatar.svg"); 

  const { user } = useUser();

  const { mutate } = useMutation({
    fetcher: updateAvatar,
    options: {
      onSuccess: async () => {
        toastSuccess("Cập nhật hình nền thành công");
      },
      onError: (error) => {
        toastError(error.message);
      },
      onFinally: () => {},
    },
  });

  function onChangeAvatar() {
    if (avatarInputRef && avatarInputRef.current) {
      avatarInputRef.current.click();
    }
  }

  useEffect(() => {
    if (user && user.image) {
      console.log(user.image)
      setAvatar(user.image);
    }
  }, []);

  function handleChangeAvatar(e: ChangeEvent<HTMLInputElement>) {
    try {
      const file = e.target.files?.[0];
      if (file) {
        if (!file.type.startsWith("image/")) {
          toastError("Vui lòng chọn một tệp hình ảnh.");
          return;
        }

        const data = new FormData();
        data.append("image", file);
        mutate({ data });
      }
    } catch (error) {}
  }

  return (
    <div className="mb-[25px] flex items-center gap-[20px] text-start x-small-screen:flex-col">
      <ToolTip
        value="Thay đổi hình nền"
        element={
          <div
            className="hover_animate relative h-[70px] w-[70px] overflow-clip rounded-[50%] object-cover hover:cursor-pointer hover:opacity-70"
            onClick={onChangeAvatar}
          >
            {user && user.image ? (
              <Image src={user.image} fill alt="avatar" />
            ) : (
              <Image src={avatar} fill alt="avatar" />
            )}
          </div>
        }
      />
      <input
        type="file"
        accept="image/*"
        ref={avatarInputRef}
        style={{ display: "none" }}
        multiple={false}
        onChange={handleChangeAvatar}
      />

      <div className="flex flex-col text-[14px] leading-[1.5] tracking-[0.02] x-small-screen:flex-row">
        <span className="text-text_color">Xin chào,&nbsp;</span>
        {user && user.name ? (
          <span className="font-medium text-primary">{user.name}</span>
        ) : (
          <span className="font-medium text-primary">
            {user?.email.split("@")[0]}
          </span>
        )}
      </div>
    </div>
  );
}
