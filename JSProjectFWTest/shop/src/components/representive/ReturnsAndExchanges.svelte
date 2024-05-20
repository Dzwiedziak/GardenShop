<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="returnsandexchanges">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="first-header">
                    Zwroty i wymiany
                </div>
                <h1>Polityka Zwrotów i Wymian w Sklepie ogrodnik.pl</h1>
                <p><em>W przypadku watpliwosci skontaktuj sie z nami: <a href="kontakt">www.ogrodnik.pl/kontakt</a></em></p>

                <h2>1. Zwroty Produktów:</h2>
                <p>
                    Towar zakupiony w sklepie ogrodnik.pl możesz zwrócić w okresie 30 dni, licząc od następnego dnia po dokonaniu zakupu.
                    Zwrot środków za zwracany towar nastąpi w tej samej formie płatności, która została użyta do dokonania pierwotnej transakcji.
                </p>

                <h2>2. Warunki Zwrotu:</h2>
                <p>
                    Zwroty można dokonać zgodnie z instrukcjami zamieszczonymi w sekcji "Gdzie przekazać zwracany produkt?"
                    Produkty z okresu pomiędzy 15 a 30 dniem od dostarczenia (ostatniego z zamówionych produktów) nie podlegają zwrotowi z powodów bezpieczeństwa (np. foteliki samochodowe, monitory oddechu) lub higienicznych (kosmetyki, pieluchy, bielizna).
                </p>

                <h2>3. Prawo do Odstąpienia od Umowy:</h2>
                <p>
                    Zgodnie z ustawą o prawach konsumenta, masz prawo odstąpić od Umowy bez podawania przyczyny w terminie 14 dni, licząc od dnia odebrania zamówienia lub gdy osoba trzecia inna niż przewoźnik i wskazana przez Ciebie weszła w posiadanie produktu.
                </p>

                <h2>4. Zwrot Środków:</h2>
                <p>
                    W przypadku odstąpienia od Umowy, zwracamy otrzymaną płatność za produkt w ciągu 14 dni od poinformowania nas o decyzji zwrotu.
                    Zwrot dokonywany jest za pomocą tych samych sposobów płatności, które zostały użyte w pierwotnej transakcji, chyba że wyrazisz zgodę na inne rozwiązanie.
                </p>

                <h2>5. Procedura Zwrotu Produktu:</h2>
                <p>
                    Zwracany produkt można odesłać do naszego magazynu z uzupełnionym formularzem odstąpienia na adres: ogrodnik.pl - Dział reklamacji i zwrotów, ul. Polowa 12, 15-000 Białystok z dopiskiem "odstąpienie".
                    Prosimy o drukowanie literami oraz odpowiednie zabezpieczenie produktu, aby uniknąć uszkodzeń w trakcie transportu.
                    Sklep internetowy ogrodnik.pl nie akceptuje przesyłek wysłanych za pobraniem.
                    Zwracany produkt można dostarczyć osobiście do dowolnego Sklepu ogrodnik.pl, jeśli nie był używany poza niezbędnym sprawdzeniem jego charakteru, cech lub funkcjonowania.
                </p>

                <h2>6. Koszty i Terminy Zwrotu:</h2>
                <p>
                    Zwrot produktu powinien nastąpić w ciągu 14 dni od zgłoszenia decyzji o odstąpieniu od Umowy.
                    Koszt odesłania produktu do magazynu ponosi Klient.
                    Odpowiadasz tylko za zmniejszenie wartości rzeczy wynikające z korzystania z niej w sposób inny niż było konieczne do stwierdzenia jej charakteru, cech i funkcjonowania.
                </p>

                <h2>7. Wyłączenia z Prawa do Odstąpienia od Umowy:</h2>
                <p>
                    Istnieją sytuacje, w których prawo do odstąpienia od Umowy nie przysługuje, np. świadczenie usług w pełni za zgodą Konsumenta, dostarczanie produktów w zapieczętowanym opakowaniu po jego otwarciu, dostarczanie treści cyfrowych itp.
                </p>

                <a class="download-link" href="link_do_pliku_zwrotu.pdf" download>
                    <button class="download-button">Pobierz formularz zwrotu</button>
                </a>

                    
                <a class="download-link" href="link_do_pliku_wymiany.pdf" download>
                    <button class="download-button">Pobierz formularz wymiany</button>
                </a>
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

.download-button {
    padding: 10px 20px;
    font-size: 16px;
    background-color: #3498db;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}


.download-link {
    text-decoration: none;
}

.download-button:hover {
    background-color: #2980b9;
}
</style>