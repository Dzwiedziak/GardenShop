<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="cooperation">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="first-header">
                    Partnerzy
                </div>
                <section class="partners">
                    <div class="container">
                        <h2>Nasi partnerzy</h2>
                        <div class="partners-list">
                            <div class="partner">
                                <img class="partner-logo" src="deutschepost.webp" alt="Partner 1">
                                <p>Deutche Post</p>
                            </div>
                            <div class="partner">
                                <img class="partner-logo" src="tauron.png" alt="Partner 2">
                                <p>Tauron</p>
                            </div>
                                
                        </div>
                    </div>
                </section>

                <section class="join-us">
                    <div class="container">
                        <h2>Dołącz do nas!</h2>
                        <p>Jeśli jesteś zainteresowany współpracą, skontaktuj się z nami!</p>
                        <div href="kontakt.html" class="contact-button">Skontaktuj się</div>
                    </div>
                </section>
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

    background-position: top left;
    min-height: 100%;
    width: 100%;
    background-image: url("../leaf20.png");
    opacity: 1;
    min-height: 75vh;
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
    width: 100%;
}
.join-us {
    background-color: #fff;
    text-align: center;
    padding: 50px 0;
}

.join-us h2 {
    margin-bottom: 20px;
}

.join-us p {
    font-size: 18px;
    margin-bottom: 30px;
}

.contact-button {
    display: inline-block;
    padding: 10px 20px;
    background-color: #3498db;
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
}

.contact-button:hover {
    background-color: #2980b9;
}

.partner-logo{
    height: 300px;
    width: 300px;
}
</style>