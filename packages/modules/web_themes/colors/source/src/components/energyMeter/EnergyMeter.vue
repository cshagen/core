<template>
	<WBWidget :full-width="true">
		<template #title>
			{{ heading }}
		</template>
		<template #buttons>
			<PgSelector
				widgetid="graphsettings"
				:show-left-button="true"
				:show-right-button="true"
				@shift-left="shiftLeft"
				@shift-right="shiftRight"
				@shift-up="shiftUp"
				@shift-down="shiftDown"
			/>
		</template>
		<figure id="energymeter" class="p-0 m-0">
			<svg viewBox="0 0 500 500">
				<g :transform="'translate(' + margin.left + ',' + margin.top + ')'">
					<!--  Bar Graph -->
					<EMBarGraph
						:plotdata="plotdata"
						:x-scale="xScale"
						:y-scale="yScale"
						:height="height"
						:margin="margin"
					/>
					<!-- Y Axis -->
					<EMYAxis
						:y-scale="yScale"
						:width="width"
						:fontsize="axisFontsize"
						:config="globalConfig"
					/>
					<text
						:x="-margin.left"
						y="-15"
						fill="var(--color-axis)"
						:font-size="axisFontsize"
					>
						{{ graphData.graphMode == 'year' ? 'MWh' : 'kWh' }}
					</text>
					<EMLabels
						:plotdata="plotdata"
						:x-scale="xScale"
						:y-scale="yScale"
						:height="height"
						:margin="margin"
						:config="globalConfig"
					/>
				</g>
			</svg>
		</figure>
	</WBWidget>
</template>
<script setup lang="ts">
import * as d3 from 'd3'
import type { PowerItem } from '@/assets/js/types'
import { sourceSummary, historicSummary } from '@/assets/js/model'
import EMBarGraph from './EMBarGraph.vue'
import EMYAxis from './EMYAxis.vue'
import EMLabels from './EMLabels.vue'
import WBWidget from '../shared/WBWidget.vue'
import PgSelector from '../powerGraph/PgSelector.vue'
import { globalConfig, setInitializeEnergyGraph } from '@/assets/js/themeConfig'
import {
	shiftLeft,
	shiftRight,
	shiftUp,
	shiftDown,
} from '@/components/powerGraph/model'
import { graphData } from '@/components/powerGraph/model'
import { computed } from 'vue'
// props
const props = defineProps<{
	usageDetails: PowerItem[]
}>()
//state
const width = 500
const height = 500
const margin = {
	top: 25,
	bottom: 30,
	left: 25,
	right: 0,
}
const axisFontsize = 12
// computed
const plotdata = computed(() => {
	let sources = Object.values(sourceSummary)
	let usage = props.usageDetails
	let historic = Object.values(historicSummary)
	let result: PowerItem[] = []
	setInitializeEnergyGraph(true)
	switch (graphData.graphMode) {
		default:
		case 'live':
		case 'today':
			result = sources.concat(usage).filter((row) => row.energy > 0)
			break
		case 'day':
		case 'month':
		case 'year':
			result = historic.filter((row) => row.energy > 0)
	}
	return result
})
const xScale = computed(() => {
	return d3
		.scaleBand()
		.range([0, width - margin.left - margin.right])
		.domain(plotdata.value.map((d) => d.name))
		.padding(0.4)
})
const yScale = computed(() => {
	return d3
		.scaleLinear()
		.range([height - margin.bottom - margin.top, 15])
		.domain([0, d3.max(plotdata.value, (d: PowerItem) => d.energy) as number])
})
const heading = 'Energie'
</script>

<style scoped></style>