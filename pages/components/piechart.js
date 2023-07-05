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
    legend: {
      display: true,
      position: "right",
    },
    responsive: true,
  };
  const datapoints = {
    labels: product,
    datasets: [
      {
        label: "Products",
        data: quantity,
        backgroundColor: ["#98D89E", "#EE8484", "#F6DC7D"],
        borderWidth: 0,
        hoverOffset: 24,
      },
    ],
  };
  return (
    <div className="bg-white sm:p-8 pt-16 p-2 sm:rounded-3xl rounded-md w-full items-center flex flex-col flex-1 relative ">
      <span className="sm:text-xl absolute left-8 top-4 font-bold">
        Top Products
      </span>
      <Pie options={options} data={datapoints} />
    </div>
  );
}
