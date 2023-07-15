import { useSession } from "next-auth/react";
import LoginPage from "./loginpage";
import TopNav from "./components/top_nav";
import { useState } from "react";

export default function ServicesPage() {
  const { data: session } = useSession();

  const init_services = { service_name: "", service_type: "" };
  const [services, setServices] = useState([init_services]);

  async function INSERT_SERVICE(e) {
    e.preventDefault();
    console.log("Updating services: ", services);
  }

  const handleAdd = () => {
    setServices([...services, init_services]);
  };

  const handleRemove = (index) => {
    const l = [...services];
    l.splice(index, 1);
    setServices(l);
  };

  const handleChangeName = (index, e) => {
    const v = e.target.value;
    const l = [...services];
    l[index]["service_name"] = v;
    setServices(l);
  };

  const handleChangeType = (index, e) => {
    const v = e.target.value;
    const l = [...services];
    l[index]["service_type"] = v;
    setServices(l);
  };

  return session ? (
    <span className="px-8 sm:col-start-3 sm:col-span-3 lg:col-start-2 lg:col-span-4 w-full mx-auto overflow-y-scroll scrollbar-thumb-zinc-300 p-2 -mr-4 scrollbar-thumb-rounded-2xl scrollbar-track-latte scrollbar-thin">
      <div className="flex items-center flex-wrap justify-between border-b-2 pb-4 mb-4">
        <span className="font-bold sm:text-2xl">Services</span>
        <TopNav session={session} />
      </div>
      {services?.map((thing, index) => (
        <>
          <span className="flex gap-2 items-center pt-4">
            <span className="text-xl font-bold text-zinc-900">
              Service {index + 1}
            </span>
            {index !== 0 && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-zinc-900 opacity-30 hover:opacity-100 duration-200 ease-in cursor-pointer"
                onClick={() => handleRemove(index)}
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </span>

          <span className="flex flex-col flex-1 my-4">
            <textarea
              key={index + "NAME"}
              type="text"
              placeholder="Service Name"
              className="border-[1px] px-2 py-1 rounded-sm outline-none bg-transparent border-zinc-500 text-zinc-900 scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-2xl scrollbar-track-zinc-900 scrollbar-thin my-2"
              value={thing.service_name}
              onChange={(e) => handleChangeName(index, e)}
            />
            <textarea
              key={index + "SERVICE"}
              type="text"
              placeholder="Service Type"
              className="border-[1px] px-2 py-1 rounded-sm outline-none bg-transparent border-zinc-500 text-zinc-900 scrollbar-thumb-zinc-400 scrollbar-thumb-rounded-2xl scrollbar-track-zinc-900 scrollbar-thin my-2"
              value={thing.service_type}
              onChange={(e) => handleChangeType(index, e)}
            />

            {services.length - 1 === index && (
              <span
                className="flex items-center -gap-1 opacity-20 hover:opacity-100 cursor-pointer duration-200 ease-in my-2"
                onClick={() => handleAdd()}
              >
                <hr className="border-[1px] w-full border-zinc-900" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 text-zinc-900"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </span>
            )}
          </span>
        </>
      ))}
      <div
        className="border-[1px] border-zinc-900 hover:bg-zinc-900 hover:text-white duration-200 ease-in w-fit px-2 py-1 rounded-sm cursor-pointer"
        onClick={(e) => INSERT_SERVICE(e)}
      >
        SAVE
      </div>
    </span>
  ) : (
    <LoginPage />
  );
}
