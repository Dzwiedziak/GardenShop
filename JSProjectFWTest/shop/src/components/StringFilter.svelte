<script context="module">
	const elements = new Set();
</script>

<script>
  import AdvancedCheckBox from "./AdvancedCheckBox.svelte";
  export let valuefilters;
  export let type;
  export let propertiesString = null;
  export let refreshfunction;

  function refresh() {
    refreshfunction();
  }
</script>

<label>
	<h3>
		{type}
	</h3>
	<div class="flex wrap">
		{#each valuefilters as valuefilter}
		<div class="flex">
			{valuefilter.value}
			<AdvancedCheckBox
				valuefilter = {valuefilter}
				refreshFunction = {refresh}
			/>
	    </div>
		{/each}
	</div>
</label>

<style>
.flex{
	display: flex;
}
.wrap{
	flex-wrap: wrap;
}
</style>