import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Container } from "./styles";

const data = [
  { name: "jan/25", receita: 4000, lucro: 2400 },
  { name: "fev/25", receita: 3000, lucro: 1398 },
  { name: "mar/25", receita: 2000, lucro: 1000 },
  { name: "abr/25", receita: 2780, lucro: 1300 },
  { name: "mai/25", receita: 1890, lucro: 940 },
];

export function GraphicLucroMensal() {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{ top: 8, right: 0, left: 0, bottom: 0 }}
        >
          {/* GRADIENTES */}
          <defs>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#6366f1" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
            </linearGradient>

            <linearGradient id="greenGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#22c55e" stopOpacity={0.6} />
              <stop offset="95%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis
            dataKey="name"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "#9ca3af", fontSize: 12 }}
          />

          <Tooltip />
          {/* ÁREA VERDE COM GRADIENTE */}
          <Area
            type="monotone"
            dataKey="lucro"
            stackId="1"
            stroke="#22c55e"
            fill="url(#greenGradient)"
          />

          {/* ÁREA AZUL COM GRADIENTE */}
          <Area
            type="monotone"
            dataKey="receita"
            stackId="2"
            stroke="#6366f1"
            fill="url(#blueGradient)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}
