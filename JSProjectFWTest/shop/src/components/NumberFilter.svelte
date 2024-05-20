<script context="module">
  const elements = new Set();
</script>


<script>
	import RangeSlider from "svelte-range-slider-pips";
	import NumberStrategy from "./NumberStrategy.svelte";

	export let refreshfunction;

	function refresh() {
		refreshfunction();
	}

	export let typefilter; 
    export let numbervalues;
    let min = Math.min(...numbervalues);
    let max = Math.max(...numbervalues);

	let unique = {};
	const reset = () => {
		unique = {};
	}
	let values = [min, max];
	const addBreak = () => {
		let tempValues = values;
		let last = tempValues[tempValues.length-1];
		let secondLast = tempValues[tempValues.length-2]
		tempValues.push((last+100)/2);
		values = tempValues;
		reset();
	}
	const removeBreak = () => {
		values.pop();
		values[values.length-1] = (values[values.length-2] + 100)/2;
		values = values;
		reset();
	}
	function changeStrategy(){
		typefilter.strategy = (typefilter.strategy + 1) % 3;
	}

	$: {
		typefilter.min = Math.min(...values);
		refresh();
	}
	$: {
		typefilter.max = Math.max(...values);
		refresh();
	}

</script>
<h3>{typefilter.type}</h3>
<div class="flex">
{#each values as value, i}
	<input type="number" bind:value={value} min={values[i-1] || 0} max={values[i+1] || 100}/>
{/each}
<NumberStrategy
	valuefilter = {typefilter}
	refreshFunction = {refresh}
/>
</div>
{#key unique}
	<RangeSlider bind:values pips min={min} max={max}/>
{/key}

<style>
.flex{
	display: flex;
	flex-wrap: wrap;
}
</style>