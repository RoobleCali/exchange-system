import { PieChart } from "react-minimal-pie-chart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const data = [
  {
    title: "Group A",
    value: 400,
    color: "#0D34FF",
  },
  {
    title: "Group B",
    value: 300,
    color: "gray",
  },
  {
    title: "Group C",
    value: 300,
    color: "white",
  },
];

function CustomPieCahrt() {
  const percentage = 66;
  return (
    <div className="w-fit h-max">
      <div>
        <p>Invoices sent</p>
        <span className="text-xs md:text-[10px]  text-gray-500 truncate">
          Lorem, ipsum dolor amet consectetur .
        </span>
      </div>
      <div className="mt-3  lg:w-40 flex flex-col  items-center">
        <CircularProgressbar
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            rotation: 0.5 + (1 - percentage / 100) / 2,
            pathColor: "#0D34FF",
            trailColor: "white",
          })}
        />
        <p className="text-gray-500 lg:text-xs text-center">
          On Progress <span className="text-blue-500">50%</span>{" "}
        </p>
      </div>
    </div>
  );
}

export default CustomPieCahrt;
