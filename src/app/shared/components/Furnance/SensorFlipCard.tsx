import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { Sensor } from "../../../redux/furnance/furnanceSlice";


interface SensorFlipCardProps {
  sensor?: Sensor;
}
const SensorFlipCard = ({ sensor }: SensorFlipCardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  return (
    <section className="furnanceInfo__sensor">
      <div className="flip-card">
        <div
          className={`flip-card-inner ${isFlipped ? "rotate180" : ""}`}
          onClick={() => setIsFlipped(!isFlipped)}
        >
          <div className="flip-card-front">{sensor?.name} {sensor?.status}</div>
          <div className="flip-card-back">
            <ResponsiveContainer width="90%" height={180}>
              <LineChart
                width={500}
                height={200}
                data={sensor?.data}
                margin={{
                  top: 10,
                  right: 30,
                  left: 0,
                  bottom: 0,
                }}
              >
                <CartesianGrid strokeDasharray="2 2" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#ef5a00"
                  fill="#ef5a00"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SensorFlipCard;
