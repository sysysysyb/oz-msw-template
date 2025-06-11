import { UserIcon } from "@heroicons/react/24/outline";
import { memo } from "react";

export const UserCard = memo(({ userInfo }) => {
  return (
    <div className="flex items-center justify-between gap-2 my-1 ml-1 font-gamja">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-secondary">
        <UserIcon className="w-4 h-4" />
      </div>
      <div>{userInfo.username}</div>
    </div>
  );
});
