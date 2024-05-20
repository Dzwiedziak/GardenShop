<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="blogdetails">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="blog-article">
                        <h1>Jak Stworzyć Urodzajny Ogród na Małej Przestrzeni</h1>

                        <p>Marzysz o pięknym ogrodzie, pełnym kolorowych kwiatów, świeżych warzyw i ziół, ale dysponujesz tylko niewielką przestrzenią? Nie martw się! Nawet w ograniczonej przestrzeni można stworzyć urocze i urodzajne miejsce, które będzie cieszyć oczy i dostarczać świeżych plonów przez cały sezon. Oto kilka wskazówek, jak osiągnąć pełen sukces w uprawie roślin na małej działce.</p>

                        <h2>1. Planowanie i Wybór Roślin</h2>
                        <p>Przed rozpoczęciem prac nad ogródkiem warto dobrze przemyśleć jego projekt. Zastanów się, jakie rośliny chcesz uprawiać – kwiaty ozdobne, zioła czy warzywa? Wybierz gatunki, które dobrze będą rosły w warunkach dostępnych w Twoim małym ogrodzie.</p>

                        <h2>2. Wysokiej Jakości Gleba i Doniczki</h2>
                        <p>Gleba jest kluczowa dla zdrowego wzrostu roślin. Wybierz odpowiednią mieszankę ziemi do uprawy kwiatów lub warzyw, a także zapewnij dobre drenaż przez warstwę żwiru na dnie doniczek.</p>

                        <h2>3. Wykorzystanie Pionowej Przestrzeni</h2>
                        <p>Kiedy brakuje miejsca na ziemi, pomyśl o wykorzystaniu pionowej przestrzeni. Regały, wiszące doniczki, czy nawet ścienne ogrody wertykalne to doskonałe rozwiązania.</p>

                        <h2>4. Uprawa Wielofunkcyjna</h2>
                        <p>Wybieraj rośliny, które pełnią więcej niż jedną funkcję. Na przykład, niektóre zioła są nie tylko aromatycznymi dodatkami do potraw, ale także odstraszają niektóre szkodniki roślin.</p>

                        <h2>5. Systematyczne Pielęgnacja</h2>
                        <p>Regularna pielęgnacja jest kluczem do sukcesu nawet w małym ogrodzie. Regularne podlewanie, usuwanie chwastów, nawożenie i przycinanie to podstawowe czynności, które pomogą utrzymać Twój ogród w dobrej kondycji.</p>

                        <p>Tworzenie urodziwego ogrodu na niewielkiej powierzchni wymaga pomysłowości i staranności. Niezależnie od tego, czy masz balkon, mały taras czy skrawek ogródka, z odpowiednim planowaniem i troską możesz stworzyć piękne miejsce, które dostarczy nie tylko estetycznej przyjemności, ale także świeżych plonów.</p>

                        <p>Pamiętaj, że każdy ogródek jest unikalny, a eksperymentowanie z różnymi roślinami i układami może przynieść niespodziewane efekty. Ciesz się procesem tworzenia ogrodu i obserwuj, jak Twoje rośliny rosną i kwitną na tej niewielkiej, ale magicznej przestrzeni.</p>
                </div>
                <div class="similar-articles-container">
                    <h3>
                        Podobne artykuly
                    </h3>
                    <div class="similar-articles">
                        <div class="article-link">
                            Urzadzanie ogrodu
                        </div>
                        <div class="article-link">
                            Rozklad elementow w ogrodzie
                        </div>
                        <div class="article-link">
                            Wplyw gestosci roslinnosci na je same
                        </div>
                    </div>
                </div>
                <div class="categories-container">
                    <h3>
                        Zobacz z innych kategorii
                    </h3>
                    <div class="categories-list">
                        <div class="categories">
                            Podlewanie
                        </div>
                        <div class="categories">
                            Projektowanie
                        </div>
                        <div class="categories">
                            Nawadnianie
                        </div>
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
.blog-article h1{
    text-align: center;
}
.article-link{
    margin-right: 20px;
}
.similar-articles{
    display: flex;
    align-items: center;
    justify-content: center;
}
.similar-articles-container{
    border-radius: 3px;
    border-top: solid green 2px;
    text-align: center;
}
.categories-container {
    border-top: solid green 2px;
    text-align: center;
    margin-bottom: 50px;
}
.categories-list {
    display: flex;
    justify-content: center;
}
.categories{
    margin: 0px 20px;
}
</style>