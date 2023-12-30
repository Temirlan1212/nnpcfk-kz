import React, { useEffect, useRef } from "react";
import ApexCharts, { ApexOptions } from "apexcharts";
import { useThemeMode } from "../../../../_metronic/partials";
import { getCSSVariableValue } from "../../../../_metronic/assets/ts/_utils";
import { KTIcon } from "../../../../_metronic/helpers";

type Props = {
  className: string;
};

const ChartsWidget3: React.FC<Props> = ({ className }) => {
  const chartRef = useRef<HTMLDivElement | null>(null);
  const { mode } = useThemeMode();
  const refreshMode = () => {
    if (!chartRef.current) {
      return;
    }

    const chart = new ApexCharts(chartRef.current, getChartOptions());
    if (chart) {
      chart.render();
    }

    return chart;
  };

  useEffect(() => {
    const chart = refreshMode();

    return () => {
      if (chart) {
        chart.destroy();
      }
    };
  }, [chartRef, mode]);

  return (
    <div className={`card ${className}`}>
      {/* begin::Header */}
      <div className="card-header border-0 pt-5">
        <h3 className="card-title align-items-start flex-column">
          <span className="card-label fw-bold fs-3 mb-1">Моя активность</span>

          <span className="text-muted fw-semibold fs-7">
            Активность в течении месяца
          </span>
        </h3>

        {/* begin::Toolbar */}
        <button
          type="button"
          className="btn btn-sm btn-icon btn-color-primary btn-active-light-primary"
          data-kt-menu-trigger="click"
          data-kt-menu-placement="bottom-end"
          data-kt-menu-flip="top-end"
        >
          <KTIcon iconName="category" className="fs-2" />
        </button>
        {/* end::Toolbar */}
      </div>

      <div className="card-body">
        <div className="d-flex align-items-center" style={{ gap: "10px" }}>
          <span className={`symbol-label fs-1 fw-bold text-dark`}>105</span>
          <span className="symbol symbol-50px">
            <span
              className={`symbol-label fs-5 fw-bold bg-light-success text-success`}
            >
              ^ 4.5%
            </span>
          </span>
        </div>
        <span className="text-muted fw-semibold fs-7">
          учебных материала изучил
        </span>
      </div>
      {/* end::Header */}

      {/* begin::Body */}
      <div className="card-body">
        {/* begin::Chart */}
        <div
          ref={chartRef}
          id="kt_charts_widget_3_chart"
          style={{ height: "350px" }}
        ></div>
        {/* end::Chart */}
      </div>
      {/* end::Body */}
    </div>
  );
};

export { ChartsWidget3 };

function getChartOptions(): ApexOptions {
  const labelColor = getCSSVariableValue("--bs-gray-500");
  const borderColor = getCSSVariableValue("--bs-gray-200");
  const baseColor = getCSSVariableValue("--bs-info");
  const lightColor = getCSSVariableValue("--bs-info-light");

  return {
    series: [
      {
        name: "Net Profit",
        data: [30, 40, 40, 90, 90, 70, 70],
      },
    ],
    chart: {
      fontFamily: "inherit",
      type: "area",
      height: 350,
      toolbar: {
        show: false,
      },
    },
    plotOptions: {},
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "solid",
      opacity: 1,
    },
    stroke: {
      curve: "smooth",
      show: true,
      width: 3,
      colors: [baseColor],
    },
    xaxis: {
      categories: ["Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug"],
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
      crosshairs: {
        position: "front",
        stroke: {
          color: baseColor,
          width: 1,
          dashArray: 3,
        },
      },
      tooltip: {
        enabled: true,
        formatter: undefined,
        offsetY: 0,
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: labelColor,
          fontSize: "12px",
        },
      },
    },
    states: {
      normal: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      hover: {
        filter: {
          type: "none",
          value: 0,
        },
      },
      active: {
        allowMultipleDataPointsSelection: false,
        filter: {
          type: "none",
          value: 0,
        },
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
      },
      y: {
        formatter: function (val) {
          return "$" + val + " thousands";
        },
      },
    },
    colors: [lightColor],
    grid: {
      borderColor: borderColor,
      strokeDashArray: 4,
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    markers: {
      strokeColors: baseColor,
      strokeWidth: 3,
    },
  };
}
