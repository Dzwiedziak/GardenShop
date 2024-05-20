<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="faq">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <div class="first-header">
                    Frequently Asked Questions
                </div>
                <div>
                    <details>
                        <summary>Pytania ogólne:</summary>
                        <p>
                            1. <strong>Jak mogę złożyć zamówienie w sklepie internetowym?</strong><br>
                            Aby złożyć zamówienie, należy przejść do naszej strony internetowej, wybrać produkty, dodać je do koszyka, a następnie przejść do procesu płatności i wypełnić niezbędne dane.
                        </p>
                        <p>
                            2. <strong>Czy mogę edytować zamówienie po jego złożeniu?</strong><br>
                            Niektóre zmiany można wprowadzić przed zakończeniem procesu zamówienia. Prosimy o kontakt z naszym działem obsługi klienta, jeśli chcesz dokonać zmiany.
                        </p>
                        <p>
                            3. <strong>Jak sprawdzić status mojego zamówienia?</strong><br>
                            Możesz sprawdzić status swojego zamówienia, logując się na swoje konto i przechodząc do sekcji "Historia zamówień".
                        </p>
                        <p>
                            4. <strong>Czy oferujecie kody rabatowe?</strong><br>
                            Tak, okazjonalnie oferujemy kody rabatowe dla naszych klientów. Aby otrzymać informacje o dostępnych promocjach, zapisz się do naszego biuletynu.
                        </p>
                    </details>

                    <details>
                        <summary>Dostawa i wysyłka:</summary>
                        <p>
                            5. <strong>Jaki jest czas dostawy zamówienia?</strong><br>
                            Czas dostawy zależy od lokalizacji oraz wybranej metody wysyłki. Szczegółowe informacje na temat czasu dostawy znajdują się na naszej stronie internetowej podczas składania zamówienia.
                        </p>
                        <p>
                            6. <strong>Jakie są koszty wysyłki?</strong><br>
                            Koszty wysyłki zależą od wybranej metody dostawy i lokalizacji. Mogą być one wyświetlane podczas procesu składania zamówienia.
                        </p>
                        <p>
                            7. <strong>Czy mogę śledzić moje zamówienie?</strong><br>
                            Tak, po wysłaniu zamówienia otrzymasz e-mail z numerem śledzenia przesyłki, który umożliwi śledzenie paczki online.
                        </p>
                    </details>

                    <details>
                        <summary>Zwroty i reklamacje:</summary>
                        <p>
                            8. <strong>Jaki jest okres na zwrot zakupionego towaru?</strong><br>
                            Akceptujemy zwroty w ciągu 30 dni od daty otrzymania towaru. Warunki zwrotu mogą się różnić w zależności od rodzaju produktu.
                        </p>
                        <p>
                            9. <strong>Czy mogę zwrócić produkt, jeśli nie spełnia moich oczekiwań?</strong><br>
                            Tak, akceptujemy zwroty towarów, pod warunkiem, że są one w oryginalnym stanie z kompletnym opakowaniem.
                        </p>
                        <p>
                            10. <strong>Co robić w przypadku braku produktu w moim zamówieniu?</strong><br>
                            Jeśli brakuje produktu w otrzymanym zamówieniu, prosimy o kontakt z naszym działem obsługi klienta w celu rozwiązania problemu.
                        </p>
                    </details>

                    <details>
                        <summary>Konta użytkowników:</summary>
                        <p>
                            11. <strong>Czy mogę zmienić dane w moim koncie?</strong><br>
                            Tak, możesz edytować swoje dane osobowe, adres dostawy i inne informacje w panelu swojego konta.
                        </p>
                        <p>
                            12. <strong>Czy mogę zapisać swoje ulubione produkty?</strong><br>
                            Tak, możesz dodać produkty do listy ulubionych, aby móc łatwo do nich wracać później.
                        </p>
                        <p>
                            13. <strong>Jak mogę sprawdzić historię moich zamówień?</strong><br>
                            Możesz przejrzeć historię swoich zamówień, logując się na swoje konto i przechodząc do sekcji "Historia zamówień".
                        </p>
                    </details>

                    <details>
                        <summary>Bezpieczeństwo i prywatność:</summary>
                        <p>
                            14. <strong>Czy moje dane karty kredytowej są bezpieczne?</strong><br>
                            Tak, dbamy o bezpieczeństwo danych naszych klientów i stosujemy odpowiednie środki ochrony, w tym szyfrowanie danych transakcyjnych.
                        </p>
                        <p>
                            15. <strong>Czy mogę usunąć swoje konto?</strong><br>
                            Tak, jeśli chcesz usunąć swoje konto, skontaktuj się z naszym działem obsługi klienta, a my pomożemy w tym procesie.
                        </p>
                        <p>
                            16. <strong>Czy przesyłacie informacje o moich danych osobowych osobom trzecim?</strong><br>
                            Szanujemy prywatność naszych klientów i nie udostępniamy danych osobowych osobom trzecim, chyba że jest to niezbędne do realizacji zamówienia.
                        </p>
                    </details>
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
    top: 0;
    left: 0;
    position: absolute;
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
    min-width: 450px;
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
.content {
    padding-bottom: 300px;
    margin-top: 200px;
}
</style>