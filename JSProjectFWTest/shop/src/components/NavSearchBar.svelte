<script context="module">
	const elements = new Set();
</script>

<script>
    import { loginState } from '../../classes/login.js';
   export let viewstate = 0;
   export let searchTerm;
   export let changeViewType;
   function handleSearch(){
       
   }
</script>

<div class="search-container">
    <div class="search-nav">
        {#if viewstate == 0}
            <button on:click={() => {changeViewType(0)}}>
            <img class="logo" src="shop.jpg" alt="logo"/>
        </button>
        {:else}
            <button on:click={() => {viewstate = 0}}>
            <img class="logo" src="shop.jpg" alt="logo"/>
        </button>
        {/if}
        <div class="wrap">
            <div class="searching">
                <form action="/search" method="get">
                    <input bind:value={searchTerm} type="text" class="search-bar" placeholder="szukaj" maxlength="100" on:input={handleSearch} />
                </form>
                <div class="search">
                    <img src="search.svg" alt="search-icon"/>
                </div>    
            </div>
            <div class = "loginState">
                {#if $loginState === 2}
                    <div class="loginState">
                        <p>Niezalogowany</p>
                    </div>
                {:else if $loginState === 0}
                    <div class="loginState">
                        <p>Zalogowany jako administrator</p>
                    </div>
                {:else if $loginState === 1}
                    <div class="loginState">
                        <p>Zalogowany jako klient</p>
                    </div>
                {/if}
            </div>
        </div>
    </div>
</div>

<style>
.wrap{
    display: flex;
    justify-content: space-between;
    flex-grow: 1;
}
.logo{
    height: 100px;
    width: 200px;
}
.search-container {
    border-top: 2px solid #e3e1dc;
    border-bottom: 2px solid #e3e1dc;
}
.searching{
    display: flex;
    align-items: center;
    margin: 0 auto;
}
.search-nav {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.search-bar{
    width: 300px;
    height: 40px;
}
button{
    background: none;
    cursor: pointer;
    border: none;
}
</style>
