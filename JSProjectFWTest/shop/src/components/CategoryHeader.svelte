<script context="module">
	const elements = new Set();
</script>

<script>
    import {onMount} from 'svelte'
    import {fetchCategoryById} from '../../services/category.js'
    export let categoryid = 0;
    export let productsamount = 0;
    let categoryname = "unknown"
    onMount(async () => {
        let category = await fetchCategoryById(categoryid);
        categoryname = category.name;
    });
</script>

   
<div class="category-header">
    <h2 class="searched-frase">
        {categoryname}
    </h2>
    <h3 class="searched-count">
        ({productsamount})
    </h3>
</div>

<style>
    .category-header{
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    border-bottom: 1px solid black;
    margin-bottom: 30px;
}
</style>