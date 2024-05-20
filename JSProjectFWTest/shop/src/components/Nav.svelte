<script context="module">
	const elements = new Set();
</script>

<script>
    import {onDestroy, onMount} from 'svelte';
    import {fetchChildCategoriesById} from '../../services/category';
    import { loginState } from '../../classes/login.js';
    import AboutUs from './representive/AboutUs.svelte';

    export let categoryid = 0;
    export let viewstate = 0;
    let categorystack = [];
    let canback = false;
    categorystack.push(0);
	let categories = [];
    onMount(async () => {
        try{
            categories = changeCategory(0);
        }catch(error){
            console.error('Failed to fetch categories', error);
        }
        
    });
    async function changeCategory(id){
        categories = await fetchChildCategoriesById(id);
        categoryid = id;
    }
    function checkCanBack(){
        canback = categorystack.length > 1;
    }
    function back(){
        categorystack.pop();
        changeCategory(categorystack[categorystack.length - 1]);
        checkCanBack();
    }
    function next(id){
        categorystack.push(id);
        changeCategory(id);
        canback = true;
    }

    
</script>

   
<div class="nav">
    <div class="nav-left">
        {#if viewstate == 0}
        <div class="nav-block">
            <div class="nav-middle">
                {#if canback}
                        <img src="left.svg" class="last-category" alt="Powrót" on:click={() => {back()}}/>
                {/if}
               

                <div>
                {#if categories.length > 0}
                    <ul>
                        {#each categories as category}
                            <li>
                                <button on:click={() => {next(category.id)}} class="nav-button">{category.name}</button>
                            </li>
                        {/each}
                    </ul>
                {/if}
                </div>
            </div>
        </div>
        {/if}
    </div>
    <div class="nav-right">
        {#if $loginState === 2}
        <button on:click={() => {viewstate = 2}}>
            <img src="login.svg" alt="Chat" class="login-icon" />
        </button>
        {:else}
        <button on:click={() => {viewstate = 9}}>
            <img src="chat.png" alt="Chat" class="login-icon" />
        </button>
        <button on:click={()=>{viewstate = 0;loginState.set(2)}}>
            <img src="logout.svg" alt="Logout" class="login-icon" />
        </button>
        {/if}
        {#if $loginState === 0}
        <button on:click={() => {viewstate = 1}}>
            <img src="orders_icon.png" alt="Koszyk" class="cart-icon" />
        </button>
        {:else}
        <button on:click={() => {viewstate = 1}}>
            <img src="cart.svg" alt="Koszyk" class="cart-icon" />
        </button>
        {/if}
    </div>
</div>

<style>
    .nav-block{
        display: inline-block;
    }
    .nav {
        display: flex;
        justify-content: space-between;
        background-color: white;
        border-bottom: 2px solid green;
    }
    .nav-left {
        display: flex;
    }
    .nav-right {
        display: flex;
        margin: auto;
        margin-right: 20px;
    }
    .nav-middle {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
    }
    .nav-button {
        width: 150px;
        text-align: center;
        height: 100%;
        border: none;
        background-color: white;
        font-family: 'Saira Condensed', sans-serif;
        font-size: 23px;
        margin: 0px 20px;
    }
    .login-icon{
        width:40px;
    }
    .cart-icon{
        width:40px;
        margin-left: 10px;
    }
    .last-category{
        width: 40px;
    }
    ul{
        list-style: none;
        display: flex;
        flex-wrap: wrap;
    }
    button{
        background: none;
        cursor: pointer;
        border: none;
    }
</style>