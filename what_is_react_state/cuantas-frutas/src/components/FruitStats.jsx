import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const colourPalette = ["#fffa6a", "#ffa8a8", "#7ce8f7"];

export const FruitStats = (props) => {
  const labels = [];
  const countData = [];
  const massData = [];

  for (const fruit of props.data) {
    labels.push(fruit.label);
    countData.push(fruit.count);
    massData.push(fruit.mass);
    console.log(fruit);
  }

  return (
    <div className="card row row-center">
      <div>
        <Doughnut
          data={{
            labels,
            datasets: [
              {
                id: 1,
                label: "Count",
                data: countData,
                backgroundColor: colourPalette,
                borderColor: "hsl(80, 90%, 30%)",
                borderWidth: 5,
              },
            ],
          }}
        />
      </div>
      <div>
        <Doughnut
          data={{
            labels,
            datasets: [
              {
                id: 1,
                label: "Mass",
                data: massData,
                backgroundColor: colourPalette,
                borderColor: "hsl(80, 90%, 30%)",
                borderWidth: 5,
              },
            ],
          }}
        />
      </div>
    </div>
  );
};
