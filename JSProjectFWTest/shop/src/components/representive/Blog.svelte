<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="blog">
    <div class="content">
        <div class="leaf-image">

        </div>
        <h1>
            Blog
        </h1>
        <div class="blog-container">
            <div on:click={() => {viewState = 14}} href="szczegolbloga.html">
                <div class="article-container">
                    <article id="post1">
                        <h2>Jak stworzyć urodzajny ogród w małej przestrzeni</h2>
                        <p>Data publikacji: 10 kwietnia 2023</p>
                        <p>Autor: Maria Nowak</p>
                        <img class="article-image" src="small_garden.jpg" alt="Mały ogród">
                        <p>Posiadanie ogródka w mieście nie musi być ograniczeniem. W tym artykule podpowiadamy, jak wykorzystać nawet niewielką przestrzeń, aby stworzyć piękny i funkcjonalny ogród, pełen roślin ozdobnych i warzyw.</p>
                    </article>
                </div>

            </div>

            <div class="article-container">
                <article id="post2">
                    <h2>Nowoczesne trendy w projektowaniu ogrodów</h2>
                    <p>Data publikacji: 20 lipca 2023</p>
                    <p>Autor: Paweł Zielinski</p>
                    <img class="article-image" src="modern_garden.jpg" alt="Nowoczesny ogród">
                    <p>Przeglądając aktualne trendy w projektowaniu ogrodów, odkryjesz nowoczesne rozwiązania w aranżacji przestrzeni zielonych. Od minimalizmu po zrównoważoną architekturę krajobrazu, dowiecie się jak stworzyć piękny ogród zgodny z najnowszymi trendami.</p>
                </article>
            </div>

            <div class="article-container">
                <article id="post3">
                    <h2>Jak pielęgnować rośliny doniczkowe zimą</h2>
                    <p>Data publikacji: 5 stycznia 2024</p>
                    <p>Autor: Katarzyna Woźniak</p>
                    <img class="article-image" src="indoor_plants.jpg" alt="Rośliny doniczkowe">
                    <p>Zima może być trudnym okresem dla roślin doniczkowych. W tym artykule znajdziesz wskazówki dotyczące pielęgnacji roślin w miesiącach zimowych, aby zapewnić im odpowiednie warunki do wzrostu i zachować ich zdrowie i urodę.</p>
                </article>
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
.nav-right a{
    margin: auto;
}
.nav-middle {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
}
a {
    text-decoration: none;
}

a:hover {
    cursor: pointer;
}

a:visited {
    color: inherit;
}

a:active {
    color: inherit;
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
.article-container {
    background-color: white;
    border-bottom: 2px solid grey;
}
.blog-container{
    border-bottom: none;
    width: 50%;
    display: block;
    margin: 10px auto;
}
.article-image{
    display: block;
    margin: 0px auto;
    width: 40%;
    max-height: 500px;
}
article h2{
    text-align: center;
}
article p{
    text-align: center;
}
.content h1{
    text-align: center;
    font-size: 50px;
    border-bottom: 3px solid green;
    padding-bottom: 50px;
    margin-bottom: 100px;
}
</style>