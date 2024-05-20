<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="home">
    <div class="content">
        <div class="first">
            <h2>Dlaczego My?</h2>
            <p>
                Witaj w naszym sklepie internetowym!
                Odkryj wyjątkowe produkty dla każdego
                Witamy w naszym sklepie internetowym, gdzie zaspokoimy Twoje potrzeby odzieżowe, wnętrzarskie i wiele więcej! Nasza platforma to miejsce, gdzie odkryjesz bogactwo produktów, które sprawią, że Twoje życie będzie wygodniejsze, bardziej stylowe i interesujące.
            </p>
            <p>
                Znajdź produkty dopasowane do Twoich potrzeb
                Nie ważne, czy szukasz najnowszych gadżetów elektronicznych, artykułów dla domu, modnych dodatków czy też praktycznych narzędzi, nasz sklep oferuje szeroki wybór produktów z różnych kategorii. Stawiamy na różnorodność, aby każdy mógł znaleźć coś dla siebie.
            </p>
            <p>
                Jakość i wygoda zakupów online
                Współpracujemy z renomowanymi dostawcami, aby zapewnić Ci produkty najwyższej jakości. Nasza platforma zapewnia łatwą nawigację, a zakupy online u nas są proste, wygodne i bezpieczne. Dzięki szybkiej dostawie Twoje zamówienie dotrze do Ciebie szybko i sprawnie.
            </p>
            <p>
                Dołącz do naszej społeczności
                Dołącz do naszej społeczności klientów, którzy cenią sobie jakość, wygodę i różnorodność. U nas znajdziesz nie tylko produkty, ale również inspiracje i nowości, które pomogą Ci w wyborze idealnych rozwiązań dla Twojego stylu życia.
            </p>
            <p>
                Zapraszamy do eksploracji naszej strony, gdzie możesz znaleźć to, czego szukasz. Odkryj nasz asortyment i znajdź produkty, które pomogą Ci uczynić codzienność bardziej wyjątkową!
            </p>
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
    min-height: 65vh;
    background-image: url("../leaf20.png");
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