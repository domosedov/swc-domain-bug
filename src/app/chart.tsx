"use client";
import { ReactNode } from "react";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { data } from "./data";

const lineOptions: {
  key: string;
  color: string;
  label: ReactNode;
}[] = [
  {
    key: "sub",
    color: "#4A86C6",
    label: "Подписки",
  },
  {
    key: "unsub",
    color: "#FF6A6A",
    label: "Отписки",
  },
];

export const SimpleChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400} className="mt-3">
      <LineChart data={data}>
        <CartesianGrid vertical={false} />
        <YAxis
          tick={{ fontSize: 10, fill: "#fafafa" }}
          allowDecimals={false}
          axisLine={{ stroke: "#fafafa" }}
          tickLine={false}
          domain={["dataMin", "auto"]}
        />
        <XAxis dataKey="xData" tickLine={false} minTickGap={30} />
        <Tooltip cursor={{ strokeDasharray: 3 }} animationDuration={300} />

        {lineOptions.map(({ color, key }) => (
          <Line
            key={key}
            type="monotone"
            dataKey={(metric: any) => metric[key]["total"]}
            stroke={color}
            dot={{ fill: color, stroke: "#fff" }}
          />
        ))}
      </LineChart>
    </ResponsiveContainer>
  );
};
