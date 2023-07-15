import side_dashboard from "@/public/side_dashboard.svg";
import side_schedule from "@/public/side_schedule.svg";
import side_settings from "@/public/side_settings.svg";
import side_transaction from "@/public/side_transaction.svg";
import side_users from "@/public/side_users.svg";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Panel() {
  const { data: session } = useSession();
  return session ? (
    <div className="flex flex-col justify-between bg-black sm:col-span-2 lg:col-span-1 rounded-3xl sm:p-8 p-4 text-lightone sm:mb-0 mb-8">
      <div className="flex sm:flex-col flex-wrap sm:gap-8 gap-2 text-sm">
        <span className="text-3xl font-bold mr-4">Pettera.in</span>
        <Link
          href="./"
          className="flex items-center hover:font-bold duration-300 ease-in gap-4 cursor-pointer"
        >
          <Image
            height={15}
            width={15}
            src={side_dashboard}
            alt="dashboard"
            className="rounded-full"
          />
          Dashboard
        </Link>
        <span className="flex items-center gap-4 hover:font-bold duration-300 ease-in cursor-pointer">
          <Image
            height={15}
            width={15}
            src={side_transaction}
            alt="transactions"
            className="rounded-full"
          />
          Transactions
        </span>
        <span className="flex items-center gap-4 hover:font-bold duration-300 ease-in cursor-pointer">
          <Image
            height={15}
            width={15}
            src={side_schedule}
            alt="schedules"
            className="rounded-full"
          />
          Schedules
        </span>
        <Link
          href="./services"
          className="flex items-center gap-4 hover:font-bold duration-300 ease-in cursor-pointer"
        >
          <Image
            height={15}
            width={15}
            src={side_users}
            alt="users"
            className="rounded-full"
          />
          Services
        </Link>
        <Link
          className="flex items-center gap-4 hover:font-bold duration-300 ease-in cursor-pointer"
          href="./settings"
        >
          <Image
            height={15}
            width={15}
            src={side_settings}
            alt="settings"
            className="rounded-full"
          />
          Settings
        </Link>
      </div>
      <div className="flex sm:flex-col flex-wrap items-center sm:items-start self-end sm:self-start gap-2 mt-2 sm:text-sm text-xs font-light">
        <span className="hover:underline underline-offset-4 cursor-pointer sm:border-0 border-[1px] px-2 py-1 rounded-md">
          Help
        </span>
        <span className="hover:underline underline-offset-4 cursor-pointer sm:border-0 border-[1px] px-2 py-1 rounded-md">
          Contact Us
        </span>
        <span
          className="sm:bg-lightone sm:text-black text-white px-2 py-1 rounded-md font-extrabold w-fit cursor-pointer sm:border-0 border-[1px]"
          onClick={() => signOut()}
        >
          Sign Out
        </span>
      </div>
    </div>
  ) : (
    <div className="sm:col-span-2 bg-black text-white py-2 mb-8 md:m-0 md:p-0 flex flex-col justify-center items-center md:text-6xl text-3xl font-bold rounded-3xl">
      Pettera.in
    </div>
  );
}
