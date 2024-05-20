<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="help">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <h1>Witaj w Centrum Pomocy</h1>
                <p>Znajdź odpowiednie wsparcie dla Twoich potrzeb:</p>

                <div class="options">
                    <div class="option">
                        <h3>FAQ - Najczęściej Zadawane Pytania</h3>
                        <p>Skorzystaj z naszych odpowiedzi na często zadawane pytania.</p>
                        <button on:click={() => {viewState = 1}} href="faq.html">Przejdź do FAQ</button>
                    </div>

                    <div class="option">
                        <h3>Kontakt z Obsługą Klienta</h3>
                        <p>Skontaktuj się z naszym zespołem obsługi klienta.</p>
                        <button on:click={() => {viewState = 7}} href="kontakt.html">Skontaktuj się z nami</button>
                    </div>

                    <div class="option">
                        <h3>Zgłoszenie Problemu</h3>
                        <p>Zgłoś problem techniczny lub inne kwestie.</p>
                        <button on:click={() => {viewState = 13}} href="zglosproblem.html">Zgłoś problem</button>
                    </div>

                    <div class="option">
                        <h3>Polityka Zwrotów i Reklamacji</h3>
                        <p>Zapoznaj się z naszą polityką zwrotów i reklamacji.</p>
                        <button on:click={() => {viewState = 10}} href="zwrotywymiany.html">Sprawdź politykę</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
.option{
    min-width: 250px;
}
.content{
    padding-bottom: 200px;
}
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
.nav-right a {
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

    min-height: 100%;
    width: 100%;
    background-image: url("../leaf20.png");
    opacity: 1;
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
.leaf-image {
    
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
details {
    border: 1px solid #aaa;
    border-radius: 4px;
    padding: 0.5em 0.5em 0;
    font-size: 20px;
}

summary {
    font-weight: bold;
    font-size: 30px;
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
    height: 100px;
    width: 800px;
}

details[open] {
    padding: 0.5em;
}

details[open] summary {
    border-bottom: 1px solid #aaa;
    margin-bottom: 0.5em;
}
.first-header{
    font-size: 60px;
    margin-bottom: 30px;
    text-align: center;
    border-bottom: 1px solid grey;
}
.first-container{
    margin-bottom: 100px;
}
.ogrod {
    display: flex;
    margin: 0px auto;
}
.container {
    width: 80%;
    margin: 0 auto;
    padding: 20px;
}

h1 {
    text-align: center;
}

.options {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 20px;
}

.option {
    width: 45%;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
}

.option h3 {
    margin-top: 0;
}

.option button {
    display: block;
    text-align: center;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: #fff;
    text-decoration: none;
    border-radius: 3px;
    margin: auto;
    width: 90%;
    min-width: 200px;
}

.option a:hover {
    background-color: #0056b3;
}
.content{
    text-align: center;
}
</style>