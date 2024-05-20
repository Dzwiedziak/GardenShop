<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState = 0;
    export let changeViewType;

    function changeView(){
        changeViewType(1);
    }
</script>

   
<div class="nav">
    <div class="nav-left">
        <div href="stronaglowna.html">
            <img class="logo" src="shop.jpg" />
        </div>
        <div class="nav-block">
            <div class="nav-middle">
                <div>
                    <ul>
                        <li>
                            <button on:click={() => {viewState = 0}} class="nav-button">Strona główna</button>
                        </li>
                        <li>
                            <button on:click={() => {viewState = 1}} class="nav-button">Faq</button>
                        </li>
                        <li>
                            <button on:click={() => {viewState = 2}} class="nav-button">O nas</button>
                        </li>
                        
                        <li>
                            <button on:click={() => {viewState = 4}} class="nav-button">Zespół</button>
                        </li>
                        <li>
                            <button on:click={() => {viewState = 5}} class="nav-button">Blog</button>
                        </li>
                        <li>
                            <button on:click={() => {viewState = 6}} class="nav-button">Współpraca</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    <div class="nav-right">
        <button on:click={changeView}>
            <img src="shop_icon.png" alt="Login" class="login-icon" />
        </button>
    </div>
</div>

<style>
.logo{
    height: 80px;
    margin: 10px;
    margin-left: 30px;
}
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
        flex-wrap: wrap;
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