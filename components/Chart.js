import { Legend, PieChart, Pie, Cell } from "recharts";
import styled from "styled-components";

const COLORS = ["#9BD77C", "#E5586A"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default function Chart({ data }) {
  return (
    <>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart width={200} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${data.id}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend />
        </PieChart>
        <table>
          <tr>
            <td>Yes:</td>
            <td>{data[0].value}</td>
          </tr>
          <tr>
            <td>No:</td>
            <td>{data[1].value}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>{data[0].value + data[1].value}</td>
          </tr>
        </table>
      </ResponsiveContainer>
    </>
  );
}
const ResponsiveContainer = styled.section`
  display: flex;
  gap: 20px;
`;
