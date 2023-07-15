import Image from "next/image";

export default function TopNav({ session }) {
  return (
    <span className="flex gap-2 flex-1 md:flex-none items-center">
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
  );
}
