<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="contact">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="first-header">
                    Kontakt
                </div>
            </div>
            <div class="contact-columns-container">
                <div class="left-column-contact">
                    Jestesmy do twojej dyspozycji
                    <div class="horizontal small-text margin-bottom margin-top">
                        <img src="calendar.svg" class="left-calendar verticalline" />
                        Od poniedzialku do piatku
                    </div>
                    <div class="horizontal small-text">
                        <img src="timer.svg" class="left-calendar verticalline" />
                        Od 7.00 - 15.00
                    </div>

                </div>
                <div class="middle-column-container">
                    Kontakt elektroniczny
                    <div class="horizontal small-text margin-bottom margin-top">
                        <img src="phone.svg" class="left-calendar verticalline" />
                        572 738 746
                    </div>
                    <div class="horizontal small-text">
                        <img src="email.svg" class="left-calendar verticalline" />
                        naszogrod@gmail.com
                    </div>
                </div>
                <div class="right-column-container">
                    Gdy chcesz przyjsc osobiscie
                    <div class="horizontal small-text margin-bottom margin-top">
                        <img src="adress.svg" class="left-calendar verticalline" />
                        Ul. Polowa 12
                    </div>
                    <div class="horizontal small-text">
                        <img src="city.svg" class="left-calendar verticalline" />
                        Bialystok
                    </div>
                </div>
            </div>
            <div class="form-send-container margin-top-big">
                <div class="send-text">
                    Lub przez ten formularz
                </div>

                <div class="form-send">
                    <form action="/wyslij-email.php" method="post">
                        <label for="imie">Imię:</label><br>
                        <input type="text" id="imie" name="imie"><br>
                        <label for="email">Email:</label><br>
                        <input type="email" id="email" name="email"><br>
                        <label for="wiadomosc">Wiadomość:</label><br>
                        <textarea id="wiadomosc" name="wiadomosc" rows="4" cols="50"></textarea><br><br>
                        <input type="submit" value="Wyślij">
                    </form>
                </div>
                <img src="zapraszamy.png" class="welcome-image send-text" />
            </div>
        </div>
    </div>
</div>

<style>
    .nav {
    display: flex;
    justify-content: space-between;
    background-color: white;
}
.content {
    padding-bottom: 10px;
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
.contact-columns-container{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
}
.horizontal{
    display: flex;
}
.left-calendar{
    height: 20px;
    width: 20px;
    padding-right: 5px;
    margin-right: 3px;
}
.verticalline{
    border-right: 1px solid #808080;
}
.small-text{
    font-size: 12px;
}
.margin-bottom{
    margin-bottom: 5px;
}
.margin-top {
    margin-top: 5px;
}
.form-send{
    display: flex;
    width: 500px;
    margin: 0 auto;
}
.form-send-container {
    width: 50%;
    margin: 0 auto;
}
.send-text {
    display: flex;
    margin: 0 auto;
    width: 250px;
}
.margin-top-big{
    margin-top: 30px;
}
.welcome-image{
    width: 100%;
}

</style>