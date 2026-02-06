import { Container } from "./style";
import { PieChart, Pie, Sector, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Entregas", value: 72 },
  { name: "Retiradas", value: 28 },
];

const COLORS = ["#22c55e", "#6366f1"];

/* SETOR COM GRADIENTE (ESTILO PREMIUM) */
const PieGradient = (props) => {
  const { cx, cy, outerRadius, index, width, height, isActive } = props;

  return (
    <>
      <defs>
        {/* GRADIENTE INTERNO */}
        <radialGradient
          id={`fillGradient${index}`}
          cx={cx}
          cy={cy}
          r={outerRadius}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0%" stopColor={COLORS[index]} stopOpacity={0} />
          <stop offset="100%" stopColor={COLORS[index]} stopOpacity={0.85} />
        </radialGradient>

        {/* GRADIENTE DA BORDA */}
        <radialGradient
          id={`borderGradient${index}`}
          cx={(typeof width === "number" ? width : 0) / 2}
          cy={(typeof height === "number" ? height : 0) / 2}
        >
          <stop offset="0%" stopColor={COLORS[index]} stopOpacity={0} />
          <stop offset="100%" stopColor={COLORS[index]} stopOpacity={0.9} />
        </radialGradient>

        {/* CLIP DO SETOR */}
        <clipPath id={`clipPath${index}`}>
          <Sector {...props} />
        </clipPath>
      </defs>

      <Sector
        {...props}
        clipPath={`url(#clipPath${index})`}
        fill={`url(#fillGradient${index})`}
        stroke={`url(#borderGradient${index})`}
        strokeWidth={isActive ? 2 : 1}
      />
    </>
  );
};

export function GraphicEntregasRetirada() {
  return (
    <Container>
      <ResponsiveContainer width="100%" height={260}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            innerRadius="60%"
            outerRadius="85%"
            shape={PieGradient}
            isAnimationActive
          />
          <Tooltip formatter={(v) => `${v}%`} />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
}
