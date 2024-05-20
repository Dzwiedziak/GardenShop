<script context="module">
	const elements = new Set();
</script>

<script>
    import {onMount} from 'svelte';
	import { fetchAllOrders } from '../../services/order';
	import {payments} from '../../enum/payment_types.js';
	import {deliveries} from '../../enum/delivery_types.js';
	import { fetchProductById } from '../../services/product';
	
	export let showProducts;

	function checkProducts(order){
		showProducts(order);
	}

	let orders = [];
	onMount(async () => {
		let dataorders = await fetchAllOrders();

		for (const orderdata of dataorders) {
			orderdata.total = 0;
			for (const product of orderdata.products) {
				const productPrice = (await fetchProductById(product.id)).price;
				orderdata.total += product.count * productPrice;
			}
		}
		orders = dataorders;
	});
</script>

   
<div class="order-list">
	<h2>Zamowienia</h2>

	{#if orders.length > 0}
		<table>
			<thead>
				<tr>
					<th>Imie</th>
					<th>Nazwisko</th>
					<th>Kraj</th>
					<th>Miasto</th>
					<th>Kod pocztowy</th>
					<th>Nr domu</th>
					<th>Nr lokalu</th>
					<th>Kierunkowy</th>
					<th>Nr telefonu</th>
					<th>Typ platnosci</th>
					<th>Typ dostawy</th>
					<th>Calkowity koszt
				</tr>
			</thead>
			{#each orders as order}
			<tr>
				<td>{order.first_name}</td>
				<td>{order.last_name}</td>
				<td>{order.country}</td>
				<td>{order.city}</td>
				<td>{order.code}</td>
				<td>{order.house_number}</td>
				<td>{order.apartment}</td>
				<td>{order.country_code}</td>
				<td>{order.phone_number}</td>
				<td>{deliveries[order.delivery_id]}</td>
				<td>{payments[order.payment_id]}</td>
				<td>
					<button on:click={() => {checkProducts(order)}}>
						{order.total}
					</button>
				</td>
				
			</tr>
			{/each}
		</table>
	{/if}
</div>       

<style>
body {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f0f0f0;
}

table {
    width: 80%;
    border-collapse: collapse;
    margin: auto;
}

th, td {
    border: 1px solid #ddd;
    padding: 15px;
    text-align: center;
}

th {
    background-color: #4CAF50;
    color: white;
}
        
tr:nth-child(even) {
    background-color: #f2f2f2;
}

tr:hover {
    background-color: #ddd;
}

.table-container {
    display: flex;
    justify-content: space-between;
}
h2{
	text-align: center;
}
button{
	border: none;
	width: 100%;
	height: 100%;
	background-color: lawngreen;
	cursor: pointer;
}
</style>