import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  PointElement,
  Legend,
  LineElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart({ data1, data2 }) {
  //   console.log(data);
  let words1 = [];
  let activities1 = [];
  let words2 = [];
  let activities2 = [];
  data1?.map((e) => {
    words1.push(e.word);
    activities1.push(e.activities);
  });
  data2?.map((e) => {
    words2.push(e.word);
    activities2.push(e.activities);
  });
  const options = {
    label: "One Morning in the Summer Month of June",
    legend: {
      display: true,
    },
    elements: {
      pointRadius: 0,
    },
    responsive: true,
  };
  const datapoints = {
    labels: words1,
    datasets: [
      {
        label: "Activities One",
        data: activities1,
        fill: false,
        borderColor: "#9BDD7C",
        backgroundColor: "#9BDD7C",
        tension: 0.3,
        pointRadius: 0,
      },
      {
        label: "Activities Two",
        data: activities2,
        borderColor: "#E9A0A0",
        backgroundColor: "#E9A0A0",
        fill: false,
        pointRadius: 0,

        tension: 0.3,
      },
    ],
  };
  return (
    <div className="bg-white p-8 pt-16 rounded-3xl relative">
      <span className="text-xl absolute left-8 top-4 font-bold">
        Activities
      </span>
      <Line options={options} data={datapoints} />
    </div>
  );
}
