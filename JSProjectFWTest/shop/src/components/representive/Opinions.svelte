<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="opinions">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="first-header">
                    Opinie
                </div>
                <p>
                    Witajcie w sekcji opinii, gdzie gromadzimy głosy naszych zadowolonych klientów! To dla nas ogromna przyjemność móc podzielić się pozytywnymi doświadczeniami osób, które wybrały nasz sklep ogrodniczy. Nasza pasja do roślin i ogrodnictwa motywuje nas do dostarczania produktów najwyższej jakości oraz oferowania profesjonalnej obsługi.
                </p>
                <p>
                    Dołączone opinie to autentyczne świadectwo naszych klientów na temat produktów, którymi się z nami dzielili. Cieszymy się, że nasze wysiłki przyczyniły się do Waszej satysfakcji. Wasze pozytywne opinie są dla nas nie tylko potwierdzeniem naszej pracy, lecz także inspiracją do dalszego doskonalenia się.
                </p>
                <p>
                    Zachęcamy do zapoznania się z relacjami naszych zadowolonych klientów. Ich doświadczenia mogą pomóc Wam w dokonaniu trafnego wyboru spośród naszych produktów oraz wpłynąć na przyjemność z zakupów w naszym sklepie. Dziękujemy Wam za zaufanie i możliwość dzielenia się Waszymi pozytywnymi doświadczeniami.
                </p>
                <div class="opinions">
                    <div class="opinion">
                        <div class="small-opinion-inside">
                            <div class="horizontal">
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                            </div>
                            <h2 class="horizontal">
                                Ola
                            </h2>
                            Otrzymałem/-am przesyłkę z nowymi roślinami do ogrodu i muszę przyznać, że sposób ich zapakowania mnie oczarował! Każda roślina była starannie umieszczona w papierze z motywującymi cytatami o naturze. To było tak urocze i sprawiło, że otwieranie paczki było przyjemnością. Polecam zakupy w tym sklepie ogrodniczym – po prostu magiczne doświadczenie dla miłośników ogrodnictwa!
                        </div>
                    </div>
                    <div class="opinion">
                        <div class="big-opinion-inside">
                            <div class="horizontal">
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                            </div>
                            <h2 class="horizontal">
                                Krzysztof
                            </h2>
                            Paczka z zestawem nowych narzędzi ogrodniczych sprawiła, że mój dzień był pełen radości! Każde narzędzie było starannie zapakowane, a na każdym z nich było narysowane małe uśmiechnięte słoneczko. To było tak sympatyczne i wywołało u mnie uśmiech na twarzy. Gorąco polecam ten sklep, bo nie tylko narzędzia są świetne, ale i sposób pakowania robi ogromną różnicę!
                        </div>
                    </div>
                    <div class="opinion">
                        <div class="small-opinion-inside">
                            <div class="horizontal">
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                                <img src="star.svg" />
                            </div>
                            <h2 class="horizontal">
                                Mariusz
                            </h2>
                            <div class="opinion-text">
                                Dzisiaj odebrałem/-am przesyłkę z różnymi gatunkami nasion do ogrodu, a sposób ich opakowania był naprawdę uroczy! Każde nasiono było zamknięte w małej kopercie z piękną grafiką przedstawiającą daną roślinę. To było tak szczegółowe i staranne – czułem/-am się jak dziecko w sklepie z cukierkami! Polecam ten sklep ogrodniczy wszystkim, którzy cenią sobie dbałość o szczegóły i piękne opakowania.
                            </div>
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
    width: 90%; 
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
.opinions{
    display: flex;
    margin: 10px auto;
    justify-content: center;
}
.opinion {
    width: 33.33%;
    margin: 10px 20px;
    min-height: 750px;
    
}
.small-opinion-inside {
    margin: 60px 10px 10px 10px;
    background-color: white;
    min-height: 600px;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.big-opinion-inside {
    margin: 10px 10px 10px 30px;
    background-color: white;
    min-height: 650px;
    border: 2px solid #ccc;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.horizontal{
    display: flex;
    justify-content: center;
}
.opinion-text{
    
}
</style>