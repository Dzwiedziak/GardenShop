<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="termsofservice">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <div class="first">
                <h1>Warunki i zasady korzystania ze strony internetowej firmy ogrodniczej "ogrodnik.pl"</h1>

                <section>
                    <h2>1. Wstęp</h2>
                    <p>
                        Witamy na stronie internetowej firmy ogrodniczej "ogrodnik.pl". Przed korzystaniem z naszej witryny prosimy o uważne zapoznanie się z poniższymi warunkami korzystania. Kontynuując korzystanie ze strony, akceptujesz warunki oraz zobowiązujesz się do ich przestrzegania. Jeśli nie zgadzasz się z warunkami, prosimy o zaprzestanie korzystania ze strony.
                    </p>
                </section>

                <section>
                    <h2>2. Kim jesteśmy</h2>
                    <p>
                        Strona internetowa www.ogrodnik.pl jest obsługiwana przez firmę ogrodniczą "Ogrodnik Sp. z o.o.", zarejestrowaną w Polsce, mającą siedzibę pod adresem: ul. Polowa 12, 15-001 Białystok. NIP firmy: [numer NIP].
                    </p>
                </section>

                <section>
                    <h2>3. Korzystanie ze strony internetowej</h2>
                    <p>
                        Otrzymujesz zgodę na korzystanie ze strony, jednakże zastrzegamy sobie prawo do zmiany lub zamknięcia usługi w dowolnym czasie bez ponoszenia odpowiedzialności prawnej. Korzystaj z tej strony zgodnie z prawem. Możemy zawiesić lub wyłączyć Twoje prawo do korzystania ze strony w przypadku naruszenia warunków.
                    </p>
                       
                </section>

                <section>
                    <h2>4. Prawa własności intelektualnej</h2>
                    <p>
                        Jesteśmy właścicielem lub licencjobiorcą wszelkich własności intelektualnych na stronie oraz materiałów w niej zawartych. Kopiowanie lub modyfikowanie treści bez zgody firmy jest zabronione.
                    </p>
                       
                </section>

                <section>
                    <h2>5. Nasza odpowiedzialność</h2>
                    <p>
                        Nie ponosimy odpowiedzialności za szkody wynikłe z użytkowania strony. Użytkownik korzysta z serwisu na własne ryzyko.
                    </p>
                        
                </section>

                    

                <section>
                    <h2>12. Skontaktuj się z nami</h2>
                    <p>
                        W przypadku pytań dotyczących warunków korzystania ze strony internetowej firmy "Ogrodnik Sp. z o.o." zachęcamy do kontaktu:
                        ul. Polowa 12, 15-001 Białystok
                        Email: <a href="mailto:kontakt@ogrodnik.pl">kontakt@ogrodnik.pl</a>
                        Telefon: [572 747 854]
                    </p>
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