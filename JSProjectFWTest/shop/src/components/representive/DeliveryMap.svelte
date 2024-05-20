<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="deliverymap">
    <div class="container">
        <h2>Dane odbiorcy</h2>
        <form action="process_order.php" method="post">
            <div class="personal-info">
                <h3>Informacje osobowe</h3>
                <div class="field">
                    <label for="firstName">Imię:</label>
                    <input type="text" id="firstName" name="firstName" required>
                </div>

                <div class="field">
                    <label for="lastName">Nazwisko:</label>
                    <input type="text" id="lastName" name="lastName" required>
                </div>
                <div class="field">
                    <label for="country">Kraj zamieszkania:</label>
                    <input type="text" id="country" name="country" required>
                </div>

                <div class="flex-form">
                    <div class="field flex-form-left">
                        <label for="zipCode">Kod pocztowy:</label>
                        <input type="text" id="zipCode" name="zipCode" required>
                    </div>

                    <div class="field flex-form-right">
                        <label for="country">Miasto:</label>
                        <input type="text" id="city" name="city" required>
                    </div>
                </div>

                <div class="field">
                    <label for="street">Ulica:</label>
                    <input type="text" id="street" name="street" required>
                </div>
                <div class="flex-form">
                    <div class="field flex-form-left">
                        <label for="houseNumber">Numer domu:</label>
                        <input type="text" id="houseNumber" name="houseNumber" required>
                    </div>

                    <div class="field flex-form-right">
                        <label for="apartmentNumber">Numer mieszkania (opcjonalnie):</label>
                        <input type="text" id="apartmentNumber" name="apartmentNumber">
                    </div>
                </div>


            </div>

            <div class="contact-info">
                <h3>Informacje kontaktowe</h3>
                <div class="flex-form">
                    <div class="field flex-form-left">
                        <label for="areaCode">Kierunkowy:</label>
                        <input type="text" id="areaCode" name="areaCode" required>
                    </div>

                    <div class="field flex-form-right">
                        <label for="phoneNumber">Numer telefonu:</label>
                        <input type="text" id="phoneNumber" name="phoneNumber" required>
                    </div>
                </div>
            </div>

            <input type="submit" value="Zapisz">
        </form>
    </div>
    <div class="delivery-container">
        <h2>Wybierz punkt odbioru</h2>
        <div class="flex-form">
            <div class="field flex-form-left">
                <label for="areaCode">Miasto:</label>
                <input type="text" id="areaCode" name="areaCode" required>
            </div>

            <div class="field flex-form-right">
                <label for="phoneNumber">Adres:</label>
                <input type="text" id="phoneNumber" name="phoneNumber" required>

            </div>

        </div>
        <img src="mapka.bmp" class="delivery-map"/>
       
    </div>
</div>

<style>
    .nav {
    display: flex;
    justify-content: space-between;
    background-color: white;
    border-bottom: 2px solid green;
}
.nav-button {
    width: 150px;
    text-align: center;
    height: 100%;
    border: none;
    background-color: white;
    font-family: 'Saira Condensed', sans-serif;
    font-size: 23px;
    margin: 0px 20px;
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
    height: 100px;
    width: 200px;
}
.login-icon{
    width:30px;
}
.cart-icon{
    width:30px;
    margin-left: 10px;
}
.search-container {
    border-top: 2px solid #e3e1dc;
    border-bottom: 2px solid #e3e1dc;
    padding-right: 200px;
}
.searching{
    display: flex;
    margin: 0 auto;
}
.search-nav {
    display: flex;
    align-items: center;
}
.search-bar{
    width: 300px;
    height: 40px;
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
    font-family: 'Open Sans', sans-serif;
    width: 90%;
    margin: 30px auto;
    
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
.status{
    
}
.back-to-shop{
    display: flex;
}
.back-icon{
    width: 30px;
}
.stages{
    display: flex;
}


* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Styl dla kontenera formularza */
.container {
    width: 30%;
    margin: 50px auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Open Sans', sans-serif;

    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -30%);
    display: none;
}

/* Styl dla nagłówka formularza */
h2 {
    text-align: center;
    margin-bottom: 20px;
}

/* Styl dla sekcji informacji osobowych */
.personal-info {
    margin-bottom: 20px;
}

    /* Styl dla nagłówka sekcji informacji osobowych */
.personal-info h3 {
    font-size: 1.2em;
    margin-bottom: 10px;
}

/* Styl dla sekcji nazw */
.names {
    display: flex;
    justify-content: space-between;
}

/* Styl dla sekcji regionu */
.region {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

/* Styl dla sekcji kontaktowej */
.contact {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
}

/* Styl dla sekcji telefonu */
.phone {
    display: flex;
    justify-content: space-between;
}

/* Styl dla kierunkowego */
.area-code {
    width: 30%;
}

/* Styl dla właściwego numeru telefonu */
.phone-number {
    width: 65%;
}

/* Styl dla etykiet */
label {
    margin-bottom: 5px;
    display: block;
}

/* Styl dla pól input */
input[type="text"] {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-bottom: 10px;
}

/* Styl dla pola submit */
input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}
.contact-info{
    
}
.flex-form{
    display: flex;
}
.flex-form-right{
    width: 66.6%;
}
.flex-form-left {
    width: 33.3%;
    margin-right: 10px;
}

.recipient-data {
    width: 300px; /* Ustaw szerokość diva na dowolną */
    padding: 20px;
    border: 1px solid #ccc; /* Ramka */
}

.data-container {
    background-color: #f9f9f9; /* Kolor tła kontenera z danymi */
    padding: 10px;
}

.data {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
}

h2 {
    text-align: center;
    margin-bottom: 10px;
}
.edit-button {
    
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

.edit-button:hover {
    background-color: #0056b3;
}

.payment-methods {
    width: 400px; /* Ustaw szerokość diva na dowolną */
    padding: 20px;
    border: 1px solid #ccc; /* Ramka */
}

h2 {
    text-align: center;
}

.methods-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment-method {
    display: flex;
    align-items: center;
    margin: 10px 0;
    border: 1px solid #ccc; /* Ramka dla pojedynczej metody płatności */
    border-radius: 8px; /* Zaokrąglenie rogów ramki metody płatności */
    padding: 10px;
    width: 80%;
}

.payment-method img {
    width: 50px; /* Ustaw rozmiar obrazka na odpowiedni */
    height: 50px; /* Ustaw rozmiar obrazka na odpowiedni */
    margin-right: 10px;
}

.payment-method p {
    font-size: 16px;
    margin: 0;
}

.delivery-methods {
    width: 400px; /* Ustaw szerokość diva na dowolną */
    padding: 20px;
    border: 1px solid #ccc; /* Ramka główna */
    border-radius: 8px; /* Zaokrąglenie rogów ramki głównej */
}

h2 {
    text-align: center;
}

.methods-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.delivery-method {
    display: flex;
    align-items: center;
    margin: 10px 0;
    border: 1px solid #ccc; /* Ramka dla pojedynczej metody dostawy */
    border-radius: 8px; /* Zaokrąglenie rogów ramki metody dostawy */
    padding: 10px;
    width: 80%;
}

.delivery-method img {
    width: 50px; /* Ustaw rozmiar obrazka na odpowiedni */
    height: 50px; /* Ustaw rozmiar obrazka na odpowiedni */
    margin-right: 10px;
}

.delivery-method p {
    font-size: 16px;
    margin: 0;
}

.delivery-container {
    width: 80%;
    margin: 0px auto;
    padding: 40px 40px;
    border: 2px solid grey;
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -30%);
}
.delivery-map{
    width: 100%;
}
.data-cont{
    display: flex;
    justify-content: space-between;
    width: 70%;
    flex-wrap: wrap;
}
.content{
    filter: blur(5px);
    padding-bottom: 500px;
}
.nav{
    
}
.search-container{
    
}
.above-nav{
    
}

</style>