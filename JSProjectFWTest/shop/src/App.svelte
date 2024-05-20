<script>
    import AudioPlayer from './components/AudioPlayer.svelte';
	import Nav from './components/Nav.svelte'
	import Shop from './components/shop.svelte'
	import Cart from '../classes/cart.js'
	import Login from './components/Login.svelte'
	import Register from './components/register.svelte';
	import Chat from './components/Chat.svelte'
	import Representive from './components/representive/Representive.svelte';

	let viewType = 0;
</script>

{#if viewType == 0}
<Representive
	bind:viewType
/>
{/if}
{#if viewType == 1}
<Shop
	bind:viewType
/>
{/if}

<style>
    
</style>
