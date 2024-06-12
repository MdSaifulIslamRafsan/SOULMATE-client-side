import { Vortex } from "react-loader-spinner";
import useCount from "../../../Hooks/useCount";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Helmet } from "react-helmet";
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ff1397"];
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
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

const AdminDashboard = () => {
  const [count, isLoading] = useCount();

  const data = [
    { name: "Total Biodata", value: count?.totalBoidata },
    { name: "Male Biodata", value: count?.maleBoidata },
    { name: "Female Biodata", value: count?.femaleBoidata },
    { name: "Premium Biodata", value: count?.premiumBoidata },
    { name: "Total Revenue", value: count?.totalRevenue },
  ];

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <Vortex
          visible={true}
          height="80"
          width="80"
          ariaLabel="vortex-loading"
          wrapperStyle={{}}
          wrapperClass="vortex-wrapper"
          colors={["red", "green", "blue", "yellow", "orange", "purple"]}
        />
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>SOULMATE || AdminDashboard</title>
      </Helmet>
      <div>
        <section className="text-gray-700 body-font">
          <div className="py-10 lg:pr-5 px-2 mx-auto">
            <div className=" grid gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 text-center">
              <div className=" w-full">
                <div className="border-2 border-gray-600 py-6 rounded-lg transform transition duration-500 hover:scale-105">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {count?.totalBoidata}
                  </h2>
                  <p className="leading-relaxed">Total Biodatas</p>
                </div>
              </div>
              <div className=" w-full">
                <div className="border-2 border-gray-600  py-6 rounded-lg transform transition duration-500 hover:scale-105">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {count?.maleBoidata}
                  </h2>
                  <p className="leading-relaxed">Male Biodatas</p>
                </div>
              </div>
              <div className=" w-full">
                <div className="border-2 border-gray-600  py-6 rounded-lg transform transition duration-500 hover:scale-105">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {count?.femaleBoidata}
                  </h2>
                  <p className="leading-relaxed">Female Biodatas</p>
                </div>
              </div>
              <div className="  w-full">
                <div className="border-2 border-gray-600 py-6 rounded-lg transform transition duration-500 hover:scale-105">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {count?.premiumBoidata}
                  </h2>
                  <p className="leading-relaxed">Premium Biodatas</p>
                </div>
              </div>
              <div className=" w-full">
                <div className="border-2 border-gray-600 py-6 rounded-lg transform transition duration-500 hover:scale-105">
                  <h2 className="title-font font-medium text-3xl text-gray-900">
                    {count?.totalRevenue}
                  </h2>
                  <p className="leading-relaxed">Total Revenue</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="w-full h-96">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Legend></Legend>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
