import ApexCharts, { ApexOptions } from 'apexcharts'
import { FC, useEffect, useRef } from 'react'
import { getCSSVariableValue } from '../../../../../../../_metronic/assets/ts/_utils'
import { useThemeMode } from '../../../../../../../_metronic/partials'

type Props = {
	className: string
}

const LineChart: FC<Props> = () => {
	const chartRef = useRef<HTMLDivElement | null>(null)
	const { mode } = useThemeMode()

	useEffect(() => {
		const chart = refreshChart()

		return () => {
			if (chart) {
				chart.destroy()
			}
		}
	}, [chartRef, mode])

	const refreshChart = () => {
		if (!chartRef.current) {
			return
		}

		const chart = new ApexCharts(chartRef.current, getChartOptions())
		if (chart) {
			chart.render()
		}

		return chart
	}

	return (
		<div
			ref={chartRef}
			id='kt_charts_widget_1_chart'
			style={{ height: '300px', display: 'flex', alignItems: 'center' }}
		/>
	)
}

export { LineChart }

function getChartOptions(): ApexOptions {
	const tertiaryColor = getCSSVariableValue('--bs-danger')

	return {
		chart: {
			type: 'line',
		},

		colors: [tertiaryColor],
		series: [
			{
				data: [
					{
						x: 'Апр 08',
						y: 21,
					},
					{
						x: 'Апр 11',
						y: 15,
					},
					{
						x: 'Апр 14',
						y: 18,
					},
					{
						x: 'Апр 16',
						y: 24,
					},
					{
						x: 'Апр 18',
						y: 12,
					},
				],
			},
		],
		stroke: {
			curve: 'smooth',
		},
	}
}
