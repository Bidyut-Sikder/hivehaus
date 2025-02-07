import Chart from "react-apexcharts";

const ChartBoard = () => {
  const barChartSeries = [
    { name: "Office Rentals", data: [50, 70, 110, 90, 120] },
  ];
  const lineChartSeries = [
    { name: "Revenue Growth", data: [200, 300, 400, 350, 500] },
  ];

  const barChartOptions = {
    chart: {
      type: "bar" as const,
      background: "transparent",
      toolbar: { show: true },
    },
    colors: ["#00BFFF"],
    plotOptions: {
      bar: { horizontal: false, borderRadius: 6, columnWidth: "45%" },
    },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
    yaxis: { title: { text: "Number of Rentals" } },
    dataLabels: { enabled: false },
    title: { text: "Monthly Office Rentals", align: "left" as const },
  };

  const lineChartOptions = {
    chart: { type: "line" as const, background: "transparent" },
    colors: ["#FF5733"],
    stroke: { curve: "smooth" as const },
    xaxis: { categories: ["Jan", "Feb", "Mar", "Apr", "May"] },
    title: { text: "Revenue Growth", align: "left" as const },
  };

  return (
    <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white shadow-xl p-6 rounded-2xl">
        <Chart
          options={barChartOptions}
          series={barChartSeries}
          type="bar"
          height={350}
        />
      </div>
      <div className="bg-white shadow-xl p-6 rounded-2xl">
        <Chart
          options={lineChartOptions}
          series={lineChartSeries}
          type="line"
          height={350}
        />
      </div>
    </div>
  );
};

export default ChartBoard;
