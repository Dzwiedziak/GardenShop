<script context="module">
	const elements = new Set();
</script>

<script>
	import Nav from './Nav.svelte'
	import NavSearchBar from './NavSearchBar.svelte'
    import ProductList from './ProductList.svelte';
	import Cart from './cart.svelte'
	import CategoryHeader from './CategoryHeader.svelte'
	import VerticalOptions from './verticalOptions.svelte'
	import AdvancedCheckBox from './AdvancedCheckBox.svelte'
    import Login from './Login.svelte';
	import Register from './register.svelte';
	import AddProduct from './AddProduct.svelte';
    import ModifyProduct from './ModifyProduct.svelte';
	import DeliveryPayment from './DeliveryPayment.svelte';
	import OrderList from './OrderList.svelte'
	import OrderProductList from './OrderProductList.svelte';
	import { loginState } from '../../classes/login.js';
	import { onDestroy } from 'svelte';
    import Product from './Product.svelte';
    import Chat from './Chat.svelte';

	let categoryid = 0;
	let viewstate = 0;
	let productsamount = 0;
	let refreshProductList = 0;
	let productid;
	let searchTerm;
	let sorttactic = 0;
	let order;
	let accounttype = 2;
	export let viewType;
	const unsubscribe = loginState.subscribe(value => {
       accounttype = value;
	});
	onDestroy(() => {
		unsubscribe();
	});

	let changeViewType = function(number){
		console.log(number)
		viewType = number;
	}

	let propertiesString = [];
    let propertiesNumber = [];



	function refresh(){
		refreshProductList += 1;
	}
	function showOrderProducts(orderToShow){
		order = orderToShow;
		viewstate = 8;
	}
</script>

<div class="shop">
    <NavSearchBar
		bind:viewstate
		bind:searchTerm
		bind:changeViewType
	/>
	<Nav
		bind:categoryid
		bind:viewstate
	/>
	{#if viewstate == 0}
		{#key categoryid}
		<CategoryHeader
			bind:categoryid
			bind:productsamount
		/>
		<div class="flex">
			<VerticalOptions
				bind:categoryid
				bind:propertiesNumber
				bind:propertiesString
				refreshFunction = {refresh}
				bind:sorttactic
			/>
			{#key searchTerm}
			<ProductList
				bind:categoryid
				bind:productsamount
				bind:propertiesString
				bind:propertiesNumber
				refresh = {refreshProductList}
				bind:searchTerm
				bind:productid
				bind:viewstate
				bind:sorttactic
			/>
			{/key}
		</div>
		{/key}
	{/if}
	{#if viewstate == 1 && accounttype > 0}
	<Cart
		bind:viewstate
	/>
	{/if}
	{#if viewstate == 2}
	<Login
		bind:viewstate
	/>
	{/if}
	{#if viewstate == 3}
	<Register
	    bind:viewstate
	/>
	{/if}
	{#if viewstate == 4}
		<AddProduct
			bind:viewstate
	/>
	{/if}
	{#if viewstate == 5}
		<ModifyProduct
			bind:productid
			bind:viewstate
		/>
	{/if}
	{#if viewstate == 6}
	<DeliveryPayment
	bind:viewstate
	/>
	{/if}
	{#if viewstate == 7}
		<Product
		/>
	{/if}
	{#if viewstate == 1 && accounttype == 0}
	<OrderList
		showProducts = {showOrderProducts}
	/>
	{/if}
	{#if viewstate == 8}
	<OrderProductList
		bind:order
	/>
	{/if}
	{#if viewstate == 9}
	<Chat
	/>
	{/if}

</div>

<style>
.flex{
	display: flex;
}
</style>