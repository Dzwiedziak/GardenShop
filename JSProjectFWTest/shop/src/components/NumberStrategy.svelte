<script context="module">
	const elements = new Set();
</script>

<script>
    export let valuefilter;
    export let refreshFunction;
    function update(){
        valuefilter.strategy = (valuefilter.strategy + 1) % 3;
        refreshFunction();
    }
</script>

   
<div
  class:unchecked={valuefilter.strategy == 0}
  class:red={valuefilter.strategy == 1}
  class:green={valuefilter.strategy == 2}
  class="checkbox"
  on:click={() => {update()}}
>
</div>

<style>
.unchecked {
    background-color: blue;
}

.red {
    background-color: red;
}

.green {
    background-color: green;
}
.checkbox {
    width: 20px;
    height: 20px;
    margin: 10px;
    cursor: pointer;
}
</style>