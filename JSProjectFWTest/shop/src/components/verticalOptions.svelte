<script context="module">
	const elements = new Set();
</script>

<script>
    import { fetchProductsByCategoryId} from '../../services/product';
    import { fetchAllChildCategoriesById, fetchCategoryById } from '../../services/category';
    import {onMount} from 'svelte';
    import StringFilter from './StringFilter.svelte';
    import NumberFilter from './NumberFilter.svelte';
    export let categoryid = 0;
    let products = [];
    export let sorttactic = 0;
    export let propertiesString = [];
    export let propertiesNumber = [];
    let ended = false;
    export let refreshFunction;
    function handleRefresh() {
        refreshFunction();
    }



    onMount(async () => {
        propertiesString = [];
        propertiesNumber = [];

        const allChildCategories = await fetchAllChildCategoriesById(categoryid);
        await allChildCategories.push(await fetchCategoryById(categoryid));
        for(const childCategory of allChildCategories){
            const categoryProducts = await fetchProductsByCategoryId(childCategory.id);
            products = await products.concat(categoryProducts);
        }

        await products.forEach(product => {
            product.properties.forEach(property => {
                if (isNaN(property.value)) {
                    const propertyObject = { type: property.type };
                    if (!propertiesString.some(item => item.type === propertyObject.type)) {
                        propertiesString.push(propertyObject);
                    }
                    propertiesNumber = propertiesNumber.filter(item => item.type !== propertyObject.type);
                }
                else{
                    const propertyObject = { type: property.type , min: 0 , max: 0, strategy: 0};
                    const typefilter = { typefilter: propertyObject};
                    if (!propertiesString.some(item => item.type === typefilter.typefilter.type)) {
                        if (!propertiesNumber.some(item => item.typefilter.type === propertyObject.type)) {
                            
                            propertiesNumber.push(typefilter);
                        }
                    }
                }
            });
        });

        products.forEach( product => {
            product.properties.forEach(property => {
                const propertyArrayElement = propertiesString.find(element => element.type === property.type);
                if(propertyArrayElement !== undefined){
                    propertyArrayElement.valuefilters = propertyArrayElement.valuefilters || new Array();
                    const valuefilter = { value: property.value , strategy: 0};
                    if (!propertyArrayElement.valuefilters.some(arrayvaluefilter => {
                        return arrayvaluefilter.value === valuefilter.value
                    })) {
                        propertyArrayElement.valuefilters.push(valuefilter);
                    }
                }
                else{
                    const propertyArrayElement2 = propertiesNumber.find(element => element.typefilter.type === property.type);
                    if(propertyArrayElement2 !== undefined){
                        propertyArrayElement2.values = propertyArrayElement2.values || new Array();
                        if (!propertyArrayElement2.values.includes(property.value)) {
                            propertyArrayElement2.values.push(property.value);
                        }
                    }
                }
            });
        });


        const element = document.querySelector('.sort-select');
        const optionToSelect = element.querySelector('option[value="0"]');

        if (optionToSelect) {
            optionToSelect.selected = true;
        }
        ended = true;
    });

   
    

    
</script>

   
<div class="content-left">
    <h2>
        Filtry
    </h2>
    {#if propertiesString.length > 0 && ended}
        {#each propertiesString as stringproperty}
            <StringFilter
                valuefilters = {stringproperty.valuefilters}
                type = {stringproperty.type}
                propertiesString = {propertiesString}
                refreshfunction = {handleRefresh}
            />
        {/each}
    {/if}
    {#if propertiesNumber.length > 0 && ended}
        {#each propertiesNumber as numberproperty}
            <NumberFilter
                typefilter = {numberproperty.typefilter}
                numbervalues = {numberproperty.values}
                refreshfunction = {handleRefresh}
            />
        {/each}
    {/if}
    

    <h2>
        Sortowanie
    </h2>
    <select class="sort-select" bind:value={sorttactic}>
        <option value="0">Nazwa - Rosnąco</option>
        <option value="1">Nazwa - Malejąco</option>
        <option value="2">Cena - Rosnąco</option>
        <option value="3">Cena - Malejąco</option>
    </select>
</div>

<style>
    .content-left {
    padding: 10px 10px;
    background-color: white;
    border: 2px solid grey;
    width: 20%;
    min-width: 200px;
    flex-shrink: 0;
}
</style>