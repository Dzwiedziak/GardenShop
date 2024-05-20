<script context="module">
	const elements = new Set();
</script>

<script>
   import { onDestroy, onMount } from 'svelte';
   import {fetchProductsByCategoryId} from '../../services/product.js';
   import {fetchPhotoById, fetchAllPhotos} from '../../services/photo.js'
   import { deleteProductById } from '../../services/product.js';
   import { fetchAllChildCategoriesById, fetchCategoryById } from '../../services/category.js';
   import cart from '../../classes/cart.js';
   import { loginState } from '../../classes/login.js';
    import AddProduct from './AddProduct.svelte';
    import AdvancedCheckBox from './AdvancedCheckBox.svelte';

   export let categoryid;  //
   export let productsamount = 0;
   export let refresh;  //
   export let searchTerm;
   export let productid;   
   export let viewstate;
   export let sorttactic = 0; //
   let products = [];
   let productExtensions = [];
   let productImages = [];
   const shopcart = new cart();
   shopcart.getCart();

   let accounttype = 2;
   const unsubscribe = loginState.subscribe(value => {
       accounttype = value;
   });
   onDestroy(() => {
       unsubscribe();
   });
   
   export let propertiesString = [];  //
   export let propertiesNumber = [];   //
   
   onMount(async () => {
        await refreshProducts();
   });
   async function refreshProducts(){
        let tempproducts = await [];
        const allChildCategories = await fetchAllChildCategoriesById(categoryid);
        await allChildCategories.push(await fetchCategoryById(categoryid));
        for(const childCategory of allChildCategories){
            const categoryProducts = await fetchProductsByCategoryId(childCategory.id);
            tempproducts = await tempproducts.concat(categoryProducts);
        }
        const filteredProducts = await filterElements(tempproducts);
        await test(filteredProducts); 
   }

   $: {
       {refresh}
       {categoryid}
       {sorttactic}
       {propertiesNumber}
       refreshProducts();
   }
   
   async function test(tempproducts){
       let testproducts = [...tempproducts];
       await new Promise((resolve) => {
            if (sorttactic == 0) {
                testproducts.sort((a, b) => {
                    return a.title.localeCompare(b.title);
                });
            } else if (sorttactic == 1) {
                testproducts.sort((a, b) => {
                    return b.title.localeCompare(a.title);
                });
            } else if (sorttactic == 2) {
                testproducts.sort((a, b) => {
                    return a.price - b.price;
                });
            } else if (sorttactic == 3) {
                testproducts.sort((a, b) => {
                    return b.price - a.price;
                });
            }
            resolve();
       });

       const promises = testproducts.map(product => productPhotoExtension(product));
       productExtensions = await Promise.all(promises);
       const promisesImages = testproducts.map(product => productPhotoImages(product));
       productImages = await Promise.all(promisesImages);
       productsamount = tempproducts.length;
       products = testproducts;
   }
   
    function areStringsEqual(str1, str2) {
        const result = str1 === str2;
        return result;
    }


   async function filterElements(tempproducts){
        let filteredproducts = [...tempproducts];
        propertiesString.forEach(object => {
            object.valuefilters.forEach(valuefilter => {
                const valuefilterstrategy = valuefilter.strategy;
                const filtervalue = valuefilter.value;
                const filtertype = object.type;

                filteredproducts = filteredproducts.filter(product => {
                    let foundproperty = null;
                    product.properties.forEach(property => {
                        if (areStringsEqual(property.type, filtertype)) {
                            foundproperty = property;
                        }
                    });

                    if (valuefilterstrategy === 1) {
                        return foundproperty !== null && areStringsEqual(foundproperty.value, filtervalue);
                    } else if (valuefilterstrategy === 2) {
                        return foundproperty === null || areStringsEqual(foundproperty.value, filtervalue);
                    }
                    
                    return true; 
                });
            });
        });

        propertiesNumber.forEach(object => {
            filteredproducts = filteredproducts.filter(product => {
                let foundproperty = null;
                product.properties.forEach(property => {
                    if(areStringsEqual(property.type, object.typefilter.type)){
                        foundproperty = property;
                    }
                });
                if(object.typefilter.strategy == 1){
                    return foundproperty !== null && (foundproperty.value >= object.typefilter.min && foundproperty.value <= object.typefilter.max);
                }
                else if(object.typefilter.strategy == 2){
                    return foundproperty === null || (foundproperty.value >= object.typefilter.min && foundproperty.value <= object.typefilter.max);
                }
                return true;
            });
        });

        if(searchTerm != null && searchTerm.length > 0){
            filteredproducts = filteredproducts.filter(product => product.title.toLowerCase().includes(searchTerm.toLowerCase()));
        }
        return filteredproducts;
   }

   

   async function productPhoto(product){
       const productid = product.id;
       const foundphoto = await fetchPhotoById(product.photo_id);
       const photoid = foundphoto.id;
       return foundphoto;
   }
   async function productPhotoExtension(product){
       const photo = await productPhoto(product);
       const extension = photo.extension;
       return extension;
   }
   async function productPhotoImages(product){
       const photo = await productPhoto(product);
       const base64 = photo.base64;
       return base64;
   }

   async function deleteThis(productid){
       await deleteProductById(productid);
       refresh++;
   }
</script>
<div class="product-list">
    {#if accounttype == 0}
        <button style="height: 50px;" on:click={() => {viewstate = 4}} class="to-cart-button">
            Dodaj
        </button>
    {/if}
	    {#if products.length > 0}
		    <ul>
			    {#each products as product , index}
				    <li class="product">
                        <div class="product-above">
                            <div class="product-image-container">
                                <img class="product-image" src="data:image/{productExtensions[index]};base64,{productImages[index]}" alt="product" on:click={() => {viewstate = 7}}/>
                            </div>
                            <div class="product-content">
                                    <div class="product-title">
                                        {product.title}
                                    </div>
                                    <div class="product-properties">
                                        {#each product.properties as property}
                                        <p>
                                            {property.type}: {property.value}
                                        </p>                          
                                    {/each}
                                </div>
                            </div>
                        </div>
                        <div class="product-below-container">
                            <div class="product-below">
                                <div class="price">
                                    {product.price}zł
                                </div>
                                {#if accounttype == 0}
                                    <button on:click={() => {productid = product.id; viewstate = 5}} class="to-cart-button">
                                            Edytuj
                                    </button>
                                    <button on:click={() => {deleteThis(product.id)}} class="to-cart-button">
                                            Usun
                                    </button>
                                {:else}
                                    <div class="to-cart">
                                        <button on:click={() => {shopcart.addProduct(product)}} class="to-cart-button">
                                            Dodaj do koszyka
                                        </button>
                                    </div>
                                {/if}
                            </div>
                         </div>
				    </li>
			    {/each}
		    </ul>
	    {/if}
</div>

<style>
	.product {
    background-color: white;
    margin: 10px;
    border: 2px solid grey;
    width: 30%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
}
.product-above {
    display: flex;
    border-bottom: 2px solid grey;
    flex-wrap: wrap;
    margin: 10px;
    flex-grow: 1;
}
.product-list{
    display: flex;
    flex-wrap: wrap;
}
.product-title{
    font-size: 18px;
    font-weight: bold;
    max-width: 350px;
    overflow-wrap: break-word;
}
.product-content{
    margin-left: 10px;
}
.product-below{
    display : flex;
    justify-content: space-between;
    padding: 10px 40px;
    flex-wrap: wrap;
}
.product-below-container{
    align-self: flex-end;
    margin-bottom: 0px;
    margin-top: auto;
    width: 100%;
}
.to-cart-button {
    display: inline-block;
    margin-left: 50px;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: black;
    font:bold;
    background-color: orange;
}

.to-cart-button:hover {
    background-color: #0056b3; 
}
.price {
    height: 30px;
    font-size: 18px;
    font-weight: bold; 
    color: #333; 
    padding: 5px 10px; 
    border: 1px solid #ccc; 
    border-radius: 4px; 
}
.product-image{
    height: 200px;
    width: 200px;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style: none;
}
</style>
