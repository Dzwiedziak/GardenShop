<script context="module">
	const elements = new Set();
</script>

<script>
    export let viewState;
</script>

   
<div class="reportproblem">
    <div class="content">
        <div class="leaf-image">

        </div>
        <div class="first-container">
            <form action="" method="post">
                <h2>Zgłoszenie problemu z witryną</h2>
                <label for="name">Imię i nazwisko:</label>
                <input type="text" id="name" name="name" required>

                <label for="email">Adres e-mail:</label>
                <input type="email" id="email" name="email" required>

                <label for="issue-category">Kategoria problemu:</label>
                <select id="issue-category" name="issue-category" required>
                    <option value="" selected disabled>Wybierz kategorię</option>
                    <option value="Błąd strony">Błąd strony</option>
                    <option value="Problem z CSS">Problem z CSS</option>
                    <option value="Problemy z funkcjonalnością">Problemy z funkcjonalnością</option>
                    <option value="Inne">Inne</option>
                </select>

                <label for="issue-description">Opisz swój problem:</label>
                <textarea id="issue-description" name="issue-description" required></textarea>

                <label for="url">Adres URL witryny (jeśli dotyczy):</label>
                <input type="text" id="url" name="url">

                <button type="submit">Wyślij zgłoszenie</button>
            </form>
        </div>
    </div>
</div>

<style>
.content{
    padding-bottom: 70px;
}
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

    min-height: 100%;
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
.first-header{
    font-size: 60px;
    margin-bottom: 30px;
    text-align: center;
    border-bottom: 1px solid grey;
}
.first-container{
    margin-bottom: 100px;
}
.contact-columns-container{
    display: flex;
    width: 50%;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    flex-wrap: wrap;
}
.horizontal{
    display: flex;
}
.left-calendar{
    height: 20px;
    width: 20px;
    padding-right: 5px;
    margin-right: 3px;
}
.verticalline{
    border-right: 1px solid #808080;
}
.small-text{
    font-size: 12px;
}
.margin-bottom{
    margin-bottom: 5px;
}
.margin-top {
    margin-top: 5px;
}
.form-send{
    display: flex;
    width: 500px;
    margin: 0 auto;
}
.form-send-container {
    width: 50%;
    margin: 0 auto;
}
.send-text {
    display: flex;
    margin: 0 auto;
    width: 250px;
}
.margin-top-big{
    margin-top: 30px;
}
.welcome-image{
    width: 100%;
}
body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
    margin: 0;
    padding: 20px;
}

form {
    max-width: 600px;
    margin: 0 auto;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.first-container form h2 {
    text-align: center;
}

.first-container form label, input, textarea, select {
    display: block;
    margin-bottom: 10px;
}

.first-container form input, textarea, select {
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}

.first-container form textarea {
    height: 100px;
}

.first-container form button {
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 16px;
}

.first-container form button:hover {
    background-color: #45a049;
}

</style>