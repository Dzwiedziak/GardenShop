<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="teams">
    <div class="content">
        <div class="handshake-container">
            <div class="handshake-header">
                <div class="handshake-text">
                    Nasz zespol
                </div>
                <img class="handshake-image" src="handshake.avif" />
            </div>
            <details>
                <summary>Dział marketingu</summary>
                <div class="employee-info">
                    <img src="worker1.jpg" alt="Zdjęcie Damiana Krychowskiego">
                    <div>
                        <h3>Damian Krychowski</h3>
                        <p>Stanowisko: Specjalista ds. Marketingu</p>
                        <p>Email: damian@gmail.com</p>
                        <p>Telefon: 183-456-749</p>
                    </div>
                </div>
            </details>

            <details>
                <summary>Dział sprzedaży</summary>
                <div class="employee-info">
                    <img src="worker1.jpg" alt="Zdjęcie Kacpra Kowalskiego">
                    <div>
                        <h3>Kacper Kowalski</h3>
                        <p>Stanowisko: Specjalista ds. sprzedaży</p>
                        <p>Email: kackow@gmail.com</p>
                        <p>Telefon: 123-426-779</p>
                    </div>
                </div>
            </details>

            <details>
                <summary>Dział IT</summary>
                <div class="employee-info">
                    <img src="worker1.jpg" alt="Zdjęcie Janusza Nowaka">
                    <div>
                        <h3>Janusz Nowak</h3>
                        <p>Stanowisko: Administrator sieci</p>
                        <p>Email: janusz@firma.com</p>
                        <p>Telefon: 456-789-012</p>
                    </div>
                </div>
            </details>

            <details>
                <summary>Dział HR</summary>
                <div class="employee-info">
                    <img src="worker2.webp" alt="Zdjęcie Ewy Wiśniewskiej">
                    <div>
                        <h3>Ewa Wiśniewska</h3>
                        <p>Stanowisko: Specjalista ds. zasobów ludzkich</p>
                        <p>Email: ewa@firma.com</p>
                        <p>Telefon: 789-012-345</p>
                    </div>
                </div>
            </details>

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
.handshake-container {
    width: 50%;
    margin: 0 auto;
    position: relative; 
}

.handshake-header {
    position: relative; 
}

.handshake-image {
    display: block;
    width: 100%; 
    height: auto; 
}

.handshake-text {
    font-family: 'Barlow', sans-serif;
    position: absolute;
    top: 80%; 
    left: 32%; 
    transform: translate(-50%, -50%); 
    color: white; 
    font-size: 30px; 
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); 
}
.employee-info {
    display: flex;
    align-items: center;
}

.employee-info img {
    max-width: 100px;
    max-height: 100px;
    margin-right: 20px;
}

</style>