<script context="module">
	const elements = new Set();
</script>

<script>
    import { onMount } from "svelte";
	import { fetchAllProducts } from "../../services/product";
    import { fetchPhotoById } from "../../services/photo";

	export let order;
	let ready = false;
	
	let products = [];
    let photos = [];
	function getProductById(id){
		const product = products.find(product => {
			return product.id === id;
		});
		return product;
	}
    async function productPhoto(product){
        const foundphoto = await fetchPhotoById(product.photo_id);
        return foundphoto;
    }
    function getImageForProduct(productid){
        let foundproduct = getProductById(productid);
        const foundphoto = photos.find(image => {
            return image.id == foundproduct.photo_id;
        })
        return foundphoto.base64;
    }
    function getExtensionForProduct(productid){
        let foundproduct = getProductById(productid);
        const foundphoto = photos.find(image => {
            return image.id == foundproduct.photo_id;
        })
        return foundphoto.extension;
    }

	onMount(async () => {
		products = await fetchAllProducts();
        photos = await Promise.all(products.map(async product => {
            return await fetchPhotoById(product.photo_id);
        }));
        
		ready = true;
	});
</script>

   
<div class="order-list">
	<h2>Produkty z zamowienia</h2>

	{#if order.products.length > 0 && ready}
		

		<table class="cart-section">
            <tr class="cart-header">
                <th class="title-header">
                    Tytuł
                </th>
                <th class="count-header">
                    Ilość
                </th>
                <th class="price-header">
                    Cena
                </th>
            </tr>
            {#each order.products as product, index}
            <tr class="product">
                <td class="title">
                    <img class="product-image" src="data:image/{getExtensionForProduct(product.id)};base64,{getImageForProduct(product.id)}" alt="product"/>
                    <div class="product-title">
                        {getProductById(product.id).title}
                    </div>
                </td>
                <td class="count">
                    <div class="count-container">
                        {product.count}
                        <div class="amount-manipulation">
                            
                        </div>
                    </div>
                </td>
                <td class="price-container">
                    <div class="price">
                        <div class="product-price">
                            {getProductById(product.id).price}
                        </div>
                    </div>
                </td>
            </tr>
            {/each}
                        
        </table>
	{/if}
</div>       

<style>
    .title{
    display: flex;
}
.price{
    display: flex;
}
.back-icon{
    height: 30px;
}
.stages{
    display: flex;
}
.product-image{
    height: 150px;
    max-width: 300px;
}
.title-header{
    width: 40%;
    text-align: left;
}
.count-header{
    text-align: left;
}
.price-header{
    text-align: left;
}
.count-header{
    width: 30%;
}
.to-trash{
    height: 30px;
}
.left-side{
    width: 66%;
    position: relative;
}
.cart-section{
    width: 100%;
}
.ad-cart{
    width: 100%;
}
.cart-container{
    display: flex;
}
.right-side{
    width: 500px;
}
.add{
    height: 30px;
}
.decline{
    width: 30px;
}
.amount-manipulation{
    display: flex;
}
.next-section{
    position: absolute;
    right: 200px;
}
.next-section {
    display: inline-block;
    padding: 10px 20px;
    font-size: 16px;
    text-align: center;
    text-decoration: none;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    color: #fff;
    background-color: #3498db;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    transition: background-color 0.3s ease;
}

.next-section:hover {
    background-color: #2980b9;
}
</style>

