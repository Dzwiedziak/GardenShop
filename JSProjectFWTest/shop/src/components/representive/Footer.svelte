<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

<div class="footer">
    <div class="footer-content">
        <button on:click={() => {viewState = 7}} class="footer-content-button">
            Kontakt
        </button>
        <button on:click={() => {viewState = 8}} class="footer-content-button">
            Pomoc
        </button>
        <button on:click={() => {viewState = 9}} class="footer-content-button">
            Lokalizacje
        </button>
        <button on:click={() => {viewState = 10}} class="footer-content-button">
            Zwroty i wymiany
        </button>
        <button on:click={() => {viewState = 11}} class="footer-content-button">
            Polityka prywatności
        </button>
        <button on:click={() => {viewState = 12}} class="footer-content-button">
            Warunki korzystania
        </button>
        <button on:click={() => {viewState = 13}} class="footer-content-button">
            Zgloś problem
        </button>
    </div>
</div>

<style>
.nav {
    display: flex;
    justify-content: space-between;
    background-color: white;
}
.nav-button {
    width: 80px;
    text-align: center;
    height: 100%;
    border: none;
    background-color: white;
    font-family: 'Saira Condensed', sans-serif;
    font-size: 17px;
}
.nav-button:hover{
    color: green;
}
.nav-left {
    display: flex;
}
.nav-right {
    display: flex;
    margin-right: 20px;
}
.nav-right a{
    margin: auto;
}

.nav-middle {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
.logo{
    height: 50px;
    width: 100px;
}
.login-icon{
    width:30px;
}
.cart-icon{
    width:30px;
    margin-left: 10px;
}
.above-nav {
    font-family: 'Saira Condensed', sans-serif;
    font-size: 17px;
    flex-wrap: wrap;
}
.above-nav-left {
    display: flex;
    align-items: center;
    margin-left: 40px;
}
.content {
    font-family: 'Open Sans', sans-serif;
    background-position: top left;
    min-height: 100%;
    width: 100%;
    background-image: url("../leaf20.png");
}
body {
    background-color: #f8f6f3;
    min-height: 100vh;
}
.shipping-icon{
    margin-left: 20px;
}

.nav-block{
    display: inline-block;
}
.content {
    width: 100%;
    margin: 100px auto;
}
.first {
    width: 50%; 
    margin: 0 auto; 
    padding: 20px;
}
.footer {
    display: flex;
    background-color: #001524;
    position: fixed;
    bottom: 0;
    min-width: 100%;
    min-height: 80px;
    color: white;
    font-family: 'Open Sans', sans-serif;
    align-items: center;
}
.footer-content{
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    flex-wrap: wrap;
}
.footer-content-button{
    background-color: #001524;
    color: white;
    border: none;
    font-size: 18px;
}
</style>