import Revenue from "@/public/Revenue.svg";
import Likes from "@/public/Likes.svg";
import Transactions from "@/public/total_transactions_icon.svg";
import User from "@/public/User.svg";
import Image from "next/image";
import LineChart from "./components/linechart";
import PieChart from "./components/piechart";
import { useEffect, useState } from "react";
import TopNav from "./components/top_nav";

export default function HomePage({ session }) {
  const [fetchdata1, setFetchdata1] = useState("");
  const [fetchdata2, setFetchdata2] = useState("");
  const [fetchdata3, setFetchdata3] = useState("");
  const fetch_function = async () => {
    const res1 = await fetch(
      "https://fakerapi.it/api/v1/custom?_quantity=5&word=word&activities=buildingNumber"
    );
    const data1 = await res1.json();
    setFetchdata1(data1);

    const res2 = await fetch(
      "https://fakerapi.it/api/v1/custom?_quantity=5&word=word&activities=buildingNumber"
    );
    const data2 = await res2.json();
    setFetchdata2(data2);

    const res3 = await fetch(
      "https://fakerapi.it/api/v1/custom?_quantity=3&product=country&quantity=number"
    );
    const data3 = await res3.json();
    setFetchdata3(data3);
  };
  useEffect(() => {
    fetch_function();
  }, []);
  return (
    <div className="flex p-2 flex-col lg:col-start-2 lg:col-span-4 sm:col-start-3 sm:col-span-3 overflow-y-scroll scrollbar-thumb-zinc-300 -mr-4 scrollbar-thumb-rounded-2xl scrollbar-track-latte scrollbar-thin">
      <div className="flex items-center flex-wrap justify-between border-b-2 pb-4 mb-4">
        <span className="font-bold sm:text-2xl">Dashboard</span>
        <TopNav session={session} />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 sm:gap-8 gap-2 my-4">
        <span className="sm:p-4 p-2 bg-[#DDEFE0] rounded-lg flex justify-center flex-col">
          <Image
            height={25}
            width={25}
            alt="revenue"
            src={Revenue}
            className="self-end"
          />
          <span className="text-xs">Total Revenues</span>
          <span className="sm:text-xl font-bold">$2,129,430</span>
        </span>
        <span className="sm:p-4 p-2 bg-[#F4ECDD] flex flex-col justify-center rounded-lg">
          <Image
            height={25}
            width={25}
            alt="revenue"
            src={Transactions}
            className="self-end"
          />
          <span className="text-xs">Total Transactions</span>
          <span className="sm:text-xl font-bold">1,520</span>
        </span>
        <span className="p-4 bg-[#EFDADA] flex flex-col justify-center rounded-lg">
          <Image
            height={25}
            width={25}
            alt="revenue"
            src={Likes}
            className="self-end"
          />
          <span className="text-xs">Total Likes</span>
          <span className="sm:text-xl font-bold">9,721</span>
        </span>
        <span className="sm:p-4 p-2 bg-[#DEE0EF] flex flex-col justify-center rounded-lg">
          <Image
            height={25}
            width={25}
            alt="revenue"
            src={User}
            className="self-end"
          />
          <span className="text-xs">Total Users</span>
          <span className="sm:text-xl font-bold">892</span>
        </span>
      </div>

      <LineChart data1={fetchdata1?.data} data2={fetchdata2?.data} />
      <div className="flex md:grid lg:grid-cols-3 flex-col justify-center gap-4 my-4">
        <PieChart data={fetchdata3?.data} />
        <div className="bg-white col-span-2 sm:p-8 p-4 rounded-3xl h-fit flex-1">
          <span className="flex justify-between items-center">
            <span className="font-bold sm:text-xl text-left">
              Today's Schedule
            </span>
            <span className="text-zinc-400 text-sm cursor-pointer hover:underline underline-zinc-400 underline-offset-4 flex gap-1 items-center">
              See All
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </span>
          </span>

          <span className="border-l-4 border-[#9BDD7C] flex flex-col p-4 sm:text-sm text-xs text-zinc-500 mt-4">
            <span className="font-bold">
              Meeting with Suppliers from Kuta Bali
            </span>
            <span>14.00 - 15.00</span>
            <span>at Sunset Road, Kuta Bali</span>
          </span>
          <span className="border-l-4 border-[#6972C3] mt-4 flex flex-col p-4 text-sm text-zinc-500">
            <span className="font-bold">
              Meeting with Suppliers from Kuta Bali
            </span>
            <span>14.00 - 15.00</span>
            <span>at Sunset Road, Kuta Bali</span>
          </span>
        </div>
      </div>
    </div>
  );
}
