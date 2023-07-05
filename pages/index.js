import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Revenue from "@/public/Revenue.svg";
import Likes from "@/public/Likes.svg";
import Transactions from "@/public/total_transactions_icon.svg";
import User from "@/public/User.svg";
import side_dashboard from "@/public/side_dashboard.svg";
import side_schedule from "@/public/side_schedule.svg";
import side_settings from "@/public/side_settings.svg";
import side_transaction from "@/public/side_transaction.svg";
import google from "@/public/google.svg";
import apple from "@/public/apple.svg";
import side_users from "@/public/side_users.svg";
import { useEffect, useState } from "react";
import LineChart from "./components/linechart";
import PieChart from "./components/piechart";

export default function Home() {
  const { data: session } = useSession();
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
  // console.log(session?.user?.image);
  // session.user contains >
  // email
  // name
  // image
  return session ? (
    <div className="w-[100vw] h-[100vh] sm:grid sm:grid-cols-5 gap-8 sm:p-8 p-4">
      <div className="flex flex-col justify-between bg-black lg:col-span-1 sm:col-span-2 rounded-3xl sm:p-8 p-4 text-lightone sm:mb-0 mb-8">
        <div className="flex sm:flex-col flex-wrap sm:gap-8 gap-2 text-sm">
          <span className="text-3xl font-bold mr-4">Board.</span>
          <span className="flex items-center font-bold gap-4 cursor-pointer">
            <Image
              height={15}
              width={15}
              src={side_dashboard}
              alt="dashboard"
              className="rounded-full"
            />
            Dashboard
          </span>
          <span className="flex items-center gap-4 hover:font-bold cursor-pointer">
            <Image
              height={15}
              width={15}
              src={side_transaction}
              alt="transactions"
              className="rounded-full"
            />
            Transactions
          </span>
          <span className="flex items-center gap-4 hover:font-bold cursor-pointer">
            <Image
              height={15}
              width={15}
              src={side_schedule}
              alt="schedules"
              className="rounded-full"
            />
            Schedules
          </span>
          <span className="flex items-center gap-4 hover:font-bold cursor-pointer">
            <Image
              height={15}
              width={15}
              src={side_users}
              alt="users"
              className="rounded-full"
            />
            Users
          </span>
          <span className="flex items-center gap-4 hover:font-bold cursor-pointer">
            <Image
              height={15}
              width={15}
              src={side_settings}
              alt="settings"
              className="rounded-full"
            />
            Settings
          </span>
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
      <div className="flex flex-col sm:col-start-3 sm:col-span-3 lg:col-start-2 lg:col-span-4 overflow-y-scroll scrollbar-thumb-zinc-300 sm:pr-4 scrollbar-thumb-rounded-2xl scrollbar-track-latte scrollbar-thin">
        <div className="flex items-center flex-wrap justify-between">
          <span className="font-bold sm:text-2xl">Dashboard</span>
          <span className="flex gap-2 flex-1 items-center">
            <form className="bg-white sm:px-4 p-1 flex-1 sm:text-base text-xs text-zinc-600 sm:rounded-lg rounded-md flex gap-2 items-center">
              <input
                type="text"
                placeholder="Search..."
                className="text-light flex-1 outline-none bg-transparent"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="w-5 h-5 opacity-50"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>

              <button hidden onClick={(e) => e.preventDefault()}></button>
            </form>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
              />
            </svg>
            <Image
              height={25}
              width={25}
              src={session?.user?.image}
              alt="profile image"
              className="rounded-full"
            />
          </span>
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
        <div className="flex lg:flex-row flex-col justify-center gap-4 my-4">
          <PieChart data={fetchdata3?.data} />
          <div className="bg-white sm:p-8 p-4 rounded-3xl h-fit flex-1">
            <span className="flex justify-between items-center">
              <span className="font-bold sm:text-xl text-left">
                Today's Schedule
              </span>
              <span className="text-zinc-400 text-sm cursor-pointer hover:underline underline-zinc-400 underline-offset-4">
                See All {">"}
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
    </div>
  ) : (
    <div className="w-[100vw] h-[100vh] md:grid md:grid-cols-5">
      <div className="md:col-span-2 bg-black text-white py-2 mb-8 md:m-0 md:p-0 flex flex-col justify-center items-center md:text-6xl text-3xl font-bold">
        Board.
      </div>
      <div className="md:col-start-3 md:col-span-3 bg-lightone flex flex-col justify-center items-center">
        <span className="flex flex-col p-4">
          <span className="text-3xl font-bold">Sign In</span>
          <span className="font-semibold text-sm">Sign in to your account</span>
          <span className="flex items-center flex-wrap gap-4 my-8 text-sm">
            <button
              onClick={() => signIn()}
              className="bg-white flex gap-2 items-center px-4 py-1 rounded-lg text-zinc-500"
            >
              <Image height={15} width={15} src={google} alt="google sign in" />
              Sign in with Google
            </button>
            <button
              onClick=""
              className="bg-white flex gap-2 items-center px-4 py-1 rounded-lg text-zinc-500"
            >
              <Image height={15} width={15} src={apple} alt="apple sign in" />
              Sign in with Apple
            </button>
          </span>
          <form className="bg-white rounded-lg sm:p-8 p-4 flex flex-col gap-4 md:text-sm text-xs font-semibold">
            <span>Email address</span>
            <input
              className="outline-none px-4 py-2 bg-zinc-200 rounded-lg"
              placeholder="johndoe@gmail.com"
              type="email"
            />
            <span>Password</span>
            <input
              className="outline-none px-4 py-2 bg-zinc-200 rounded-lg tracking-wider"
              type="password"
            />
            <span className="font-normal hover:underline text-sky-600 hover:underline-sky-600 underline-offset-2 cursor-pointer">
              Forgot password?
            </span>
            <button className="bg-black text-center p-2 text-white font-bold rounded-lg">
              Sign In
            </button>
          </form>
          <span className="font-normal text-sm mx-auto text-zinc-600 my-4">
            Don't have an account?{" "}
            <span className="hover:underline text-sky-600 hover:underline-sky-600 underline-offset-2 cursor-pointer">
              Register here
            </span>
          </span>
        </span>
      </div>
    </div>
  );

  // if (session) {
  //   return (
  //     <>
  //       Signed in as {session.user.email} <br />
  //       <button onClick={() => signOut()}>Sign out</button>
  //     </>
  //   );
  // }
  // return (
  //   <>
  // Not signed in <br />
  // <button onClick={() => signIn()}>Sign in</button>
  //   </>
  // );
}
