import UserIcon from "@/components/common/icons/user-icon";
import useUser from "@/hooks/users/useUser";
import Image from "next/image";
import Link from "next/link";

export default function Avatar() {
  const { user } = useUser();

  if (user) {
    return (
      <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
        <Link
          href="/profile"
          className="flex h-[20px] w-[20px] items-center justify-center"
        >
          <div className="relative h-[21px] w-[21px] overflow-clip rounded-[50%] object-cover hover:cursor-pointer hover:opacity-70">
            <Image src={user?.image ?? "#"} fill alt="avatar" />
          </div>
        </Link>
      </li>
    );
  }

  return (
    <li className="group relative flex items-center justify-center p-[15px] hover:scale-110 hover:text-white small-screen:mx-[8px] small-screen:p-0">
      <Link
        href="/login"
        className="flex h-[20px] w-[20px] items-center justify-center"
      >
        <UserIcon size={21} />
      </Link>
    </li>
  );
}
