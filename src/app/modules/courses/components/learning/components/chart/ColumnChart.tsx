import ApexCharts, { ApexOptions } from 'apexcharts'
import { FC, useEffect, useRef } from 'react'
import { useThemeMode } from '../../../../../../../_metronic/partials'

type Props = {
	className: string
}

const ColumnChart: FC<Props> = () => {
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
			style={{ height: '250px' }}
		/>
	)
}

export { ColumnChart }

function getChartOptions(): ApexOptions {
	return {
		chart: {
			type: 'bar',
		},
		plotOptions: {
			bar: {
				borderRadius: 5,
				columnWidth: '30px',
			},
		},
		series: [
			{
				data: [
					{
						x: 'Дек 08',
						y: 54,
					},
					{
						x: 'Дек 09',
						y: 42,
					},
					{
						x: 'Дек 10',
						y: 75,
					},
					{
						x: 'Дек 11',
						y: 110,
					},
					{
						x: 'Дек 12',
						y: 23,
					},
					{
						x: 'Дек 13',
						y: 87,
					},
					{
						x: 'Дек 14',
						y: 50,
					},
				],
			},
		],
	}
}
