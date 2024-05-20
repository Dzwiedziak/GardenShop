<script context="module">
	const elements = new Set();
</script>

<script>
	
</script>

<div class="clientorders">
    <div class="content">
        <h2>Zamowienia</h2>
        <div class="order-list">
            <div class="order">
                <div class="order-id-header">
                    Id zamowienia:
                </div>
                <div class="order-id">
                    #122435
                </div>
                <div class="order-status-header">
                    Status zamowienia:
                </div>
                <div class="order-status">
                    W trakcie realizacji
                </div>
                <table class="cart-section">
                    <tr class="cart-header">
                        <th class="title-header">
                            Tytu³
                        </th>
                        <th class="count-header">
                            Iloœæ
                        </th>
                        <th class="price-header">
                            Cena
                        </th>
                    </tr>
                    <tr class="product">
                        <td class="title">
                            <img src="werbena.webp" class="product-image" />
                            <div class="product-title">
                                Nasiona werbeny
                            </div>
                        </td>
                        <td class="count">
                            <div class="count-container">
                                3
                            </div>
                        </td>
                        <td class="price-container">
                            <div class="price">
                                <div class="product-price">
                                    32.99zl
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="product">
                        <td class="title">
                            Dostawa: InPost Kurier
                        </td>
                        <td class="count">
                            <div class="count-container">
                                    
                            </div>
                        </td>
                        <td class="price-container">
                            <div class="price">
                                <div class="product-price">
                                    15.99
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr class="product">
                        <td class="title">
                            Suma:
                        </td>
                        <td class="count">
                            <div class="count-container">

                            </div>
                        </td>
                        <td class="price-container">
                            <div class="price">
                                <div class="product-price">
                                    70.99zl
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
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
    width: 100%;
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
.product-image{
    width: 100px;
}
.title {
    display: flex;
}

.price {
    display: flex;
}

.back-icon {
    height: 30px;
}

.stages {
    display: flex;
}

.product-image {
    height: 150px;
    max-width: 300px;
}

.title-header {
    width: 40%;
    text-align: left;
}

.count-header {
    text-align: left;
}

.price-header {
    text-align: left;
}

.count-header {
    width: 30%;
}

.to-trash {
    height: 30px;
}

.left-side {
    width: 66%;
}

.cart-section {
    width: 100%;
}

.ad-cart {
    width: 100%;
}

.cart-container {
    display: flex;
}

.right-side {
    width: 33%;
}

.count {
}

.add {
    height: 30px;
}

.decline {
    width: 30px;
}

.amount-manipulation {
    display: flex;
}
.order {
    margin: 50px 0px;
    border: 1px solid black;
    padding: 20px 20px;
}
table, tr{
    border: 1px solid black;
    padding: 5px;
    border-collapse: collapse;
}
table {
    font-family: Arial;
}
.order-id-header {
    font-weight: bold;
}

.order-status-header {
    font-weight: bold;
}
.order-list{
    width: 70%;
    margin: 10px auto;
}
.content h2{
    text-align: center;
}

.order {
    margin: 50px 0px;
    border: 1px solid #ccc; /* Gruboœæ i styl obramowania */
    border-radius: 8px; /* Zaokr¹glenie rogów */
    padding: 20px; /* Wype³nienie wewnêtrzne */
    background-color: #f9f9f9; /* Kolor t³a */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.1); /* Delikatny cieñ */
}

/* Stylizacja dla nag³ówków wewn¹trz .order */
.order-id-header,
.order-status-header {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 8px;
}

/* Stylizacja dla ID zamówienia */
.order-id {
    font-size: 16px;
    color: #333;
    margin-bottom: 12px;
}

/* Stylizacja dla statusu zamówienia */
.order-status {
    font-size: 16px;
    color: #555;
    margin-bottom: 20px;
}

/* Stylizacja dla ca³ej zawartoœci w .order */
.order-content {
    border-top: 1px solid #ddd;
    padding-top: 20px;
}

/* Stylizacja dla tytu³ów produktów */
.product-title {
    font-size: 16px;
    font-weight: bold;
    color: #444;
    margin-bottom: 5px;
}

/* Stylizacja dla cen produktów */
.product-price {
    font-size: 16px;
    font-weight: bold;
    color: #007bff;
    margin-bottom: 10px;
}
</style>