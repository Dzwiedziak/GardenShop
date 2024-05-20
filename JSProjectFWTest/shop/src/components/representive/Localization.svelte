<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="localization">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="first-header">
                    Lokalizacja
                </div>
                <div class="localizations">
                    <div class="adress">
                        <img src="adress.svg" class="calendar" />
                        Ul. Polowa 12
                    </div>
                    <div class="adress">
                        <img src="city.svg" class="calendar" />
                        Bialystok
                    </div>
                    <div class="map">
                        <iframe width="100%" height="500" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=1011&amp;height=497&amp;hl=en&amp;q=Polowa%2012%20Bia%C5%82ystok+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe> <a href='http://maps-generator.com/pl'></a>
                        <script type='text/javascript' src='https://embedmaps.com/google-maps-authorization/script.js?id=8cfc3bb1ac5b8bcffc716793a7630f496c50618a'></script>
                    </div>
                </div>
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
    min-height: 80vh;
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
.adress{
    display: flex;
    font-size: 30px;
    align-items: center;
}
.calendar{
    width: 100px;
    height: 100px;
    margin-right: 20px;
}  
</style>