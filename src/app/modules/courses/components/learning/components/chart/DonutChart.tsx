import ApexCharts, { ApexOptions } from 'apexcharts'
import { FC, useEffect, useRef } from 'react'
import { getCSSVariableValue } from '../../../../../../../_metronic/assets/ts/_utils'
import { useThemeMode } from '../../../../../../../_metronic/partials'

type Props = {
	className: string
}

const DonutChart: FC<Props> = () => {
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

export { DonutChart }

function getChartOptions(): ApexOptions {
	const successColor = getCSSVariableValue('--bs-success')
	const primaryColor = getCSSVariableValue('--bs-primary')
	const secondaryColor = getCSSVariableValue('--bs-info')
	const tertiaryColor = getCSSVariableValue('--bs-danger')

	return {
		series: [133, 9, 2, 3],
		chart: {
			type: 'donut',
			fontFamily: 'inherit',
			width: 400,
			height: 400,
		},
		labels: ['Присутствовал', 'Отпросился', 'Опоздал', 'Отсутствовал'],
		colors: [successColor, primaryColor, secondaryColor, tertiaryColor],
		legend: {
			position: 'bottom',
			// horizontalAlign: 'left',
		},
		plotOptions: {
			pie: {
				expandOnClick: false,
				donut: {
					labels: {
						show: true,
						total: {
							label: 'Все',
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
	}
}
