import { Container } from "./styles";
import {
  BarChart,
  Bar,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Liq.", qnt: 7, vendido: 950, custos: 419 },
  { name: "Câm.", qnt: 2, vendido: 320, custos: 160 },
  { name: "Bon.", qnt: 4, vendido: 230, custos: 52 },
  { name: "Fon.", qnt: 2, vendido: 118, custos: 25 },
  { name: "Tec.", qnt: 1, vendido: 272, custos: 138 },
];

// 👉 LABEL DENTRO DA BARRA
const QuantityInsideBar = ({ x, y, width, height, index }) => {
  if (height < 20) return null;

  return (
    <text
      x={x + width / 2}
      y={y + height / 2}
      textAnchor="middle"
      dominantBaseline="middle"
      fill="#342e47ff"
      fontSize={14}
      fontFamily="Inter"
      fontWeight={600}
    >
      {data[index].qnt} un.
    </text>
  );
};

export function GraphicItemsMaisVendidos() {
  return (
    <Container>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <defs>
            {/* CUSTOS – VERMELHO */}
            <linearGradient id="custosGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#ef4444" stopOpacity={0.7} />
              <stop offset="85%" stopColor="#ef4444" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#ef4444" stopOpacity={0} />
            </linearGradient>

            {/* VENDIDO / LUCRO – VERDE */}
            <linearGradient id="lucroGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="10%" stopColor="#22c55e" stopOpacity={0.75} />
              <stop offset="85%" stopColor="#22c55e" stopOpacity={0.15} />
              <stop offset="100%" stopColor="#22c55e" stopOpacity={0} />
            </linearGradient>
          </defs>

          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />

          {/* CUSTOS */}
          <Bar dataKey="custos" fill="url(#custosGradient)" stackId="1" />

          {/* VENDIDO + QUANTIDADE DENTRO */}
          <Bar
            dataKey="vendido"
            fill="url(#lucroGradient)"
            stackId="1"
            label={<QuantityInsideBar />}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}
