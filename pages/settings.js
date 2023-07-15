import { useSession } from "next-auth/react";
import LoginPage from "./loginpage";
import { useState } from "react";
import TopNav from "./components/top_nav";

export default function Settings() {
  const { data: session } = useSession();

  const init_business_details = {
    business_name: "",
    business_cat: "",
    daysOpen: [],
    open_hours_from: "",
    open_hours_to: "",
    business_email: session?.user?.email,
    phoneno: "",
    business_addr: "",
  };

  const [business_details, setBusiness_details] = useState(
    init_business_details
  );

  return session ? (
    <span className="px-8 sm:col-start-3 sm:col-span-3 lg:col-start-2 lg:col-span-4 w-full mx-auto overflow-y-scroll scrollbar-thumb-zinc-300  -mr-4 p-2 scrollbar-thumb-rounded-2xl scrollbar-track-latte scrollbar-thin">
      <div className="flex items-center flex-wrap justify-between border-b-2 pb-4 mb-4">
        <span className="font-bold sm:text-2xl">Settings</span>
        <TopNav session={session} />
      </div>
      <form className="flex flex-col gap-4">
        <span className="text-xl font-bold text-zinc-900">Business Name</span>
        <input
          type="text"
          className="border-b-[1px] px-2 py-1 outline-none bg-transparent border-zinc-500 text-zinc-900"
          value={business_details?.business_name}
          onChange={(e) =>
            setBusiness_details({
              ...business_details,
              business_name: e.target.value,
            })
          }
        />
        <span className="text-xl font-bold text-zinc-900 mt-2">
          Business Email
        </span>
        <input
          type="text"
          className="border-b-[1px] px-2 py-1 outline-none bg-transparent border-zinc-500 text-zinc-900"
          value={business_details?.business_email}
          onChange={(e) =>
            setBusiness_details({
              ...business_details,
              business_email: e.target.value,
            })
          }
        />
        <span className="text-xl font-bold text-zinc-900 mt-2">Category</span>
        <input
          type="text"
          className="border-b-[1px] px-2 py-1 outline-none bg-transparent border-zinc-500 text-zinc-900"
          value={business_details?.business_cat}
          onChange={(e) =>
            setBusiness_details({
              ...business_details,
              business_cat: e.target.value,
            })
          }
        />
        <span className="text-xl font-bold text-zinc-900 mt-2">Address</span>
        <input
          type="text"
          className="border-b-[1px] px-2 py-1 outline-none bg-transparent border-zinc-500 text-zinc-900"
          value={business_details?.business_addr}
          onChange={(e) =>
            setBusiness_details({
              ...business_details,
              business_addr: e.target.value,
            })
          }
        />
        <span className="text-xl font-bold text-zinc-900 mt-2">Days Open</span>
        <input
          type="text"
          className="border-b-[1px] px-2 py-1 outline-none bg-transparent border-zinc-500 text-zinc-900"
          value={business_details?.daysOpen}
          onChange={(e) =>
            setBusiness_details({
              ...business_details,
              daysOpen: e.target.value,
            })
          }
        />
        <span className="text-xl font-bold text-zinc-900 mt-2">Open Hours</span>
        <span className="flex justify-around">
          <span className="flex flex-col items-center">
            <span className="font-bold">Open from (timings)</span>
            <input
              className="outline-none"
              type="time"
              value={business_details?.open_hours_from}
              onChange={(e) =>
                setBusiness_details({
                  ...business_details,
                  open_hours_from: e.target.value,
                })
              }
            />
          </span>
          <span className="flex flex-col items-center">
            <span className="font-bold">Open until (timings)</span>
            <input
              type="time"
              className="outline-none"
              value={business_details?.open_hours_to}
              onChange={(e) =>
                setBusiness_details({
                  ...business_details,
                  open_hours_to: e.target.value,
                })
              }
            />
          </span>
        </span>
        <div
          className="border-[1px] border-zinc-900 hover:bg-zinc-900 hover:text-white duration-200 ease-in w-fit px-2 py-1 rounded-sm cursor-pointer"
          onClick={(e) => {
            e.preventDefault();
            console.log("saving details: ", business_details);
          }}
        >
          SAVE
        </div>
      </form>
    </span>
  ) : (
    <LoginPage />
  );
}
