<script context="module">
	const elements = new Set();
</script>

<script>
    import {onMount} from 'svelte';
    import Cart from '../../classes/cart.js'
    import App from '../App.svelte';
    import AudioPlayer from './AudioPlayer.svelte';
    import {fetchPhotoById} from '../../services/photo.js'
    import Nav from './Nav.svelte';
    import { loginState } from '../../classes/login.js';

    

    let products = [];
    let productExtensions = [];
    let productImages = [];
    let ended = false;
    
    export let viewstate = 1;

    const shopcart = new Cart();
    onMount(async () => {
        await shopcart.verifyCart();
        products = shopcart.getCart();
        const promises = products.map(product => productPhotoExtension(product));
        const promisesImages = products.map(product => productPhotoImages(product));
        productExtensions = await Promise.all(promises);
        productImages = await Promise.all(promisesImages);
    });

    async function productPhoto(product){
        const foundphoto = await fetchPhotoById(product.photo_id);
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

   async function deleteProduct(product){
       shopcart.removeProduct(product); 
       let tempproducts = await shopcart.getCart();
       const promises = tempproducts.map(product => productPhotoExtension(product));
       const promisesImages = tempproducts.map(product => productPhotoImages(product));
       productExtensions = await Promise.all(promises);
       productImages = await Promise.all(promisesImages);
       products = tempproducts;
   }
  

</script>

   
<div class="cart-container">
    <div class="left-side">
        <div class="content-header">
            <button class="back-button" on:click={() => {viewstate = 0}}>
                <img src="back.svg" class="back-icon" />
            </button>
                Powrót do koszyka
            
            <div class="stages">
                <div>
                    <strong>Koszyk</strong>
                </div>
                <div>
                    ->
                </div>
                <div>
                    Dostawa i płatność
                </div>
            </div>
        </div>
        <div class="products-section">
            {#if products.length > 0}
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
                        {#each products as product, index}
                        <tr class="product">
                            <td class="title">
                                <img class="product-image" src="data:image/{productExtensions[index]};base64,{productImages[index]}" alt="product"/>
                                <div class="product-title">
                                    {product.title}
                                </div>
                            </td>
                            <td class="count">
                                <div class="count-container">
                                    {product.quantity}
                                    <div class="amount-manipulation">
                                        <button on:click={() => {shopcart.setQuantity(product, product.quantity + 1); products = shopcart.getCart()}}>
                                            <img src="add.svg" class="add" />
                                        </button>
                                        <button on:click={() => {shopcart.setQuantity(product, product.quantity - 1); products = shopcart.getCart()}}>
                                            <img src="decline.svg" class="decline" />
                                        </button>
                                    </div>
                                </div>
                            </td>
                            <td class="price-container">
                                <div class="price">
                                    <div class="product-price">
                                        {product.price}
                                    </div>
                                    <button on:click={() => {deleteProduct(product)}}>
                                        <img src="trash.svg" class="to-trash" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                        {/each}
                        
                    </table>
            {:else}
                
            {/if}
        </div>
        {#if $loginState !==2}
        <button on:click={() => {viewstate = 6}} class="next-section">
            Przejdź do dostawy i płatności
        </button>
        {:else}
            <button on:click={() => {viewstate = 2}} class="next-section">
            Przejdź do dostawy i płatności
        </button>
        {/if}
    </div>
    <div class="right-side">
        <img src="ad2.jpg" class="ad-cart" />
    </div>
</div>       

<style>
.back-button{
    background-color: transparent;
    border: none;
}
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