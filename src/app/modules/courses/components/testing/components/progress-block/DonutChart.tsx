import { useEffect, useRef, FC } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { useThemeMode } from "../../../../../../../_metronic/partials";
import { getCSSVariableValue } from "../../../../../../../_metronic/assets/ts/_utils";

type Props = {
  className: string;
};

const DonutChart: FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();

  useEffect(() => {
    const chart = refreshChart();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  const refreshChart = () => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions());
    if (chart) {
      chart.render();
    }

    return chart;
  };

  return (
    <div
      ref={chartRef}
      id="kt_charts_widget_1_chart"
      style={{ height: "250px" }}
    />
  );
};

export { DonutChart };

function getChartOptions(): ApexOptions {
  const successColor = getCSSVariableValue("--bs-success");
  const primaryColor = getCSSVariableValue("--bs-primary");
  const secondaryColor = getCSSVariableValue("--bs-gray");

  return {
    series: [72, 29, 17],
    chart: {
      type: "donut",
      fontFamily: "inherit",
      height: 250,
    },
    labels: ["Пройдено", "В процессе", "Не начато"],
    colors: [successColor, primaryColor, secondaryColor],

    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              label: "Все",
              show: true,
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      },
    },
  };
}
