import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const colourPalette = ["#fffa6a", "#ffa8a8", "#7ce8f7"];

const fruitMasses = {
  bananas: 100,
  papaya: 650,
  coconut: 800,
};

export const FruitStats = (props) => {
  return (
    <div className="card row row-center">
      <div>
        <Doughnut
          data={{
            labels: ["Banana", "Papaya", "Coconut"],
            datasets: [
              {
                id: 1,
                label: "Count",
                data: [4, 3, 6],
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
