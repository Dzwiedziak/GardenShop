<script context="module">
	const elements = new Set();
</script>

<script>
    import {onMount} from 'svelte';
    import {addOrder} from '../../services/order.js';
    import Cart from '../../classes/cart.js';
    
    const shopcart = new Cart();

    let delivery = {
        first_name: '',
        last_name: '',
        country_code: '',
        phone_number: '',
        country: '',
        city: '',
        code: '',
        street: '',
        house_number: '',
        apartment: ''
    }

    let delivery_methods = [
        { type: 0, label: 'Kurier InPost', image: 'inpost.jpg' },
        { type: 1, label: 'Kurier DPD', image: 'dpd.jfif' },
        { type: 2, label: 'Paczkomaty InPost', image: 'inpost.jpg' },
        { type: 3, label: 'Kiosk Ruch', image: 'ruch.jpg' },
        { type: 4, label: 'Stacja Orlen', image: 'orlen.jfif' },
        { type: 5, label: 'Sklep Żabka', image: 'zabka.png' }
    ];

    let payment_methods = [
        { type: 0, label: 'BLIK', image: 'blik.png' },
        { type: 1, label: 'Przelew', image: 'payment.svg' },
        { type: 2, label: 'Karta płatnicza', image: 'card.svg' },
        { type: 3, label: 'Google Pay', image: 'google_pay.svg' },
        { type: 4, label: 'Apple Pay', image: 'apple_pay.svg' }
    ];

    let delivery_type = 0;
    let payment_type = 0;

    let editing = false;

    export let viewstate = 6;

    async function acceptOrder(){
        let order = await {...delivery};

        firstNameError = '';
        lastNameError = '';
        countryError = '';
        streetError = '';
        houseNumberError = '';
        apartmentError = '';
        codeError = '';
        countryCodeError = '';
        phoneNumberError = '';

        if (!order.first_name.trim()) {
            firstNameError = 'Imię jest wymagane';
        }
        else if (!/^[A-Za-z]+$/.test(order.first_name.trim())) {
            firstNameError = 'Imię powinno zawierać tylko litery';
        }

        if (!order.last_name.trim()) {
            lastNameError = 'Nazwisko jest wymagane';
        }
        // Walidacja nazwiska
        else if (!/^[A-Za-z]+$/.test(order.last_name.trim())) {
            lastNameError = 'Nazwisko powinno zawierać tylko litery';
        }

        if (!order.country.trim()) {
            countryError = 'Kraj jest wymagany';
        }
        // Walidacja kraju
        else if (!/^[A-Za-z]+$/.test(order.country.trim())) {
            countryError = 'Kraj powinien zawierać tylko litery';
        }

        if (!order.street.trim()) {
            streetError = 'Ulica jest wymagana';
        }
        // Walidacja ulicy
        else if (!/^[A-Za-z\s]+$/.test(order.street.trim())) {
            streetError = 'Ulica powinna zawierać tylko litery';
        }

        if (!order.house_number.trim()) {
            houseNumberError = 'Numer domu jest wymagany';
        }
        // Walidacja numeru domu
        else if (!/^\d+$/.test(order.house_number.trim())) {
            houseNumberError = 'Numer domu powinien zawierać tylko cyfry';
        }

        if (!order.apartment.trim()) {
            apartmentError = 'Numer mieszkania jest wymagany';
        }
        // Walidacja numeru mieszkania
        if (order.apartment.trim() && !/^\d+$/.test(order.apartment.trim())) {
            apartmentError = 'Numer mieszkania powinien zawierać tylko cyfry';
        }

        if (!order.code.trim()) {
            codeError = 'Kod pocztowy jest wymagany';
        }

        if (!order.country_code.trim()) {
            countryCodeError = 'Kod kraju jest wymagany';
        }

        if (!order.phone_number.trim()) {
            phoneNumberError = 'Numer telefonu jest wymagany';
        }
        // Walidacja numeru telefonu
        else if (!/^\d+$/.test(order.phone_number.trim())) {
            phoneNumberError = 'Numer telefonu powinien zawierać tylko cyfry';
        }
        else if (!/^\d{9}$/.test(order.phone_number.trim())) {
            phoneNumberError = 'Numer telefonu powinien zawierać dokładnie 9 cyfr';
        }
        if(firstNameError || lastNameError || countryError || streetError || houseNumberError || apartmentError || codeError || countryCodeError || phoneNumberError){
            return;
        }

        order.products = [];
        const products = await shopcart.getCart();

        products.forEach(product => {
            order.products.push({ id: product.id, count: product.quantity });
        });

        order.delivery_id = delivery_type;
        order.payment_id = payment_type;
        await addOrder(order);
        shopcart.clearCart();
        viewstate = 0;
    }
    let firstNameError = '';
    let lastNameError = '';
    let countryError = '';
    let streetError = '';
    let houseNumberError = '';
    let apartmentError = '';
    let codeError = '';
    let countryCodeError = '';
    let phoneNumberError = '';
</script>

<div class="compontent-container">
            <div class="status">
                <div class="back-to-shop">
                    <button class="back-button" on:click={() => {viewstate = 1}}>
                    <img src="back.svg" class="back-icon" />
                    </button>
                    Powrót do sklepu
                </div>
                

            </div>
    <div class="content"
        class:blured={editing}>
            <div class="status">
                
                    <h1>
                        <strong>Dostawa i płatność</strong>
                    </h1>
            </div>
            <div class="data-cont">
                <div class="delivery-methods">
                    <h2>Dane odbiorcy</h2>
                    <div class="data-container">
                        <div class="data">
                            <strong>Imię: <span class="error">{firstNameError}</span></strong>{delivery.first_name}<br>
                            <strong>Nazwisko: <span class="error">{lastNameError}</span> </strong>{delivery.last_name}<br>
                            <strong>Kraj: <span class="error">{countryError}</span></strong>{delivery.country}<br>
                            <strong>Ulica: <span class="error">{streetError}</span></strong>{delivery.street}<br>
                            <strong>Numer domu: <span class="error">{houseNumberError}</span></strong>{delivery.house_number}<br>
                            <strong>Numer mieszkania: <span class="error">{apartmentError}</span></strong>{delivery.apartment}<br>
                            <strong>Kod pocztowy: <span class="error">{codeError}</span></strong>{delivery.code}<br>
                            <strong>Kierunkowy: <span class="error">{countryCodeError}</span></strong>{delivery.country_code}<br>
                            <strong>Numer telefonu: <span class="error">{phoneNumberError}</span></strong>{delivery.phone_number}<br>
                        </div>
                        <button class="edit-button" on:click={() => {editing = !editing}}>Edytuj</button>
                    </div>
                </div>
                <div class="delivery-methods">
                    <h2>Metody dostawy</h2>
                    <div class="methods-container">
                    {#each delivery_methods as { type, label, image }}
                        <div class:selected={type == delivery_type}
                            class="delivery-method"
                            on:click={() => {delivery_type = type}}>
                            <img src={image} alt={label}>
                            <p>{label}</p>
                        </div>

                    {/each}
                    </div>
                </div>
                <div class="delivery-methods">
                    <h2>Metody płatności</h2>
                    <div class="methods-container">
                        {#each payment_methods as { type, label, image }}
                        <div class:selected={type == payment_type}
                            class="payment-method"
                            on:click={() => {payment_type = type}}>
                            <img src={image} alt={label}>
                            <p>{label}</p>
                        </div>

                    {/each}
                    </div>
                </div>
            </div>
            <button class="deliver-button" on:click={acceptOrder}>
                Zamów
            </button>
        
        </div>
    <div class="container"
        class:hidden={!editing}>
        <h2>Dane odbiorcy</h2>
        <span>
            <div class="personal-info">
                <h3>Informacje osobowe</h3>
                <div class="field">
                    <label for="firstName">Imię:</label>
                    <input type="text" bind:value={delivery.first_name} id="firstName" name="firstName" required>
                </div>

                <div class="field">
                    <label for="lastName">Nazwisko:</label>
                    <input type="text" bind:value={delivery.last_name} id="lastName" name="lastName" required>
                </div>
                <div class="field">
                    <label for="country">Kraj zamieszkania:</label>
                    <input type="text" bind:value={delivery.country} id="country" name="country" required>
                </div>

                <div class="flex-form">
                    <div class="field flex-form-left">
                        <label for="zipCode">Kod pocztowy:</label>
                        <input type="text" bind:value={delivery.code} id="zipCode" name="zipCode" required>
                    </div>

                    <div class="field flex-form-right">
                        <label for="country">Miasto:</label>
                        <input type="text" bind:value={delivery.city} id="city" name="city" required>
                    </div>
                </div>

                <div class="field">
                    <label for="street">Ulica:</label>
                    <input type="text" bind:value={delivery.street} id="street" name="street" required>
                </div>
                <div class="flex-form">
                    <div class="field flex-form-left">
                        <label for="houseNumber">Numer domu:</label>
                        <input type="text" bind:value={delivery.house_number} id="houseNumber" name="houseNumber" required>
                    </div>

                    <div class="field flex-form-right">
                        <label for="apartmentNumber">Numer mieszkania (opcjonalnie):</label>
                        <input type="text" bind:value={delivery.apartment} id="apartmentNumber" name="apartmentNumber">
                    </div>
                </div>


            </div>

            <div class="contact-info">
                <h3>Informacje kontaktowe</h3>
                <div class="flex-form">
                    <div class="field flex-form-left">
                        <label for="areaCode">Kierunkowy:</label>
                        <input type="text" bind:value={delivery.country_code} id="areaCode" name="areaCode" required>
                    </div>

                    <div class="field flex-form-right">
                        <label for="phoneNumber">Numer telefonu:</label>
                        <input type="text" bind:value={delivery.phone_number} id="phoneNumber" name="phoneNumber" required>
                    </div>
                </div>
            </div>

            <button class="edit-button" on:click={() => {editing = !editing}}>Powrót</button>
        </span>
    </div>
</div>
    

<style>
.back-button{
    background-color: transparent;
    border: none;
}
.error{
    color: red;
    font-weight: bold;
}
.deliver-button{
    padding: 5px 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 50px;
    width: 300px;
}
.status{
    margin: 30px;
}
h1{
    margin-bottom: 50px;
}

.content {
    font-family: 'Open Sans', sans-serif;
    width: 90%;
    margin: 30px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    
}
.selected{
    border: 3px solid green;
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

.hidden{
    display: none;
}
.blured{
    filter: blur(5px);
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

    /*position: absolute;*/
    top: 50%;
    left: 50%;
    background-color: white;
    transform: translate(-50%, -50%);
    position: absolute;
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
    flex-wrap: wrap;
    position: relative;
}
.flex-form-right{
    width: 66.6%;
    
}
.flex-form-left {
    width: 30%;
    margin-right: 10px;
    
}

.recipient-data {
    width: 300px; /* Ustaw szerokość diva na dowolną */
    padding: 20px;
    border: 1px solid #ccc; /* Ramka */
}

.data-container {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
}

.data {
    font-family: Arial, sans-serif;
    font-size: 14px;
    line-height: 1.6;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
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
    margin: 0px 50px;
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
    display: none;
}
.delivery-map{
    width: 100%;
}
.data-cont{
    display: flex;
    justify-content: center;
    width: 100%;
    flex-wrap: wrap;
}
.component-container{
    position: relative;
}
</style>