import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  ArcElement,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

export default function PieChart({ data }) {
  //   console.log(data);
  let product = [];
  let quantity = [];
  let sum_quantity = 0;

  data?.map((e) => {
    product.push(e.product);
    sum_quantity += parseInt(e.quantity);
  });

  data?.map((e) => {
    const f = (e.quantity / sum_quantity) * 100;
    quantity.push(f);
  });

  const options = {
    label: "Two nights at the Beach of Oklahoma",
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true,
        },
      },
    },
  };
  const datapoints = {
    labels: product,
    datasets: [
      {
        label: "Products",
        data: quantity,
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        borderWidth: 0,
      },
    ],
  };
  return (
    <div className="bg-white sm:p-8 pt-16 p-2 sm:rounded-3xl rounded-md items-center flex flex-col w-full mx-auto">
      <span className="flex justify-between w-full ">
        <span className="sm:text-xl font-bold">Top Products</span>
        <span className="text-zinc-400 text-sm cursor-pointer hover:underline underline-zinc-400 underline-offset-4 flex gap-1 items-center">
          May - June 2021{" "}
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
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </span>
      <Pie options={options} data={datapoints} />
    </div>
  );
}
