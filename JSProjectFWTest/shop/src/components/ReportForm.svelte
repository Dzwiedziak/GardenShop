<script context="module">
	const elements = new Set();
</script>

<script>
    import { onMount } from "svelte";

	export let reporting;

    onMount(() => {
        document.querySelector('.report-form').addEventListener('submit', function (event) {
            event.preventDefault();
        });
    });
</script>


<div class="report">
    <form action="" method="post" class="report-form">
        <div class="flex">
        <button on:click={() => {reporting = false}}>
            <img src="back.svg" class="back-icon" />
        </button>
        <h2>Zgłoszenie użytkownika</h2>
        </div>

        <label for="category">Kategoria:</label>
        <select id="category" name="category">
            <option value="obrazliwa_nazwa">Obraźliwa nazwa</option>
            <option value="spam">Spam</option>
            <option value="naruszenie_regulaminu">Naruszenie regulaminu</option>
            <option value="nieodpowiednia_tresc">Nieodpowiednia treść</option>
            <option value="niedozwolona_aktywnosc">Niedozwolona aktywność</option>
            <option value="problem_techniczny">Problem techniczny</option>
            <option value="zawartosc_podejrzana">Zawartość podejrzana</option>
            <option value="niebezpieczne_linki">Niebezpieczne linki</option>
            <option value="niewlasciwe_komentarze">Niewłaściwe komentarze</option>
            <option value="oszustwo">Oszustwo</option>
            <option value="inne">Inne</option>
        </select>

        <label for="description">Opis:</label>
        <textarea id="description" name="description" rows="4" cols="50" placeholder="Opisz problem..."></textarea>

        <input type="submit" value="Wyślij zgłoszenie">
    </form>
</div>

<style>
.back-icon{
    height: 20px;
    width: 20px;
}
.flex{
    display: flex;
}
button{
    background-color: white;
    border: none;
}
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
.notify-types{
    display: flex;
    justify-content: space-between;
}
.notify-type{
    margin: 0px 10px;
    width: 70px;
    font-size: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.notify-type-image{
    width: 20px;
}
.notify-container{
    display: flex;
    flex-wrap: wrap;
}
.notify-left{
    width: 600px;
}
form {
    margin: 20px;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
}

label {
    display: block;
    margin-bottom: 5px;
}

textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 3px;
    resize: vertical;
}

input[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 3px;
    cursor: pointer;
}

input[type="submit"]:hover {
    background-color: #0056b3;
}
.title{
    border: 1px solid grey;
}
.message {
    border: 1px solid grey;
}
.report-form {
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.report-form h2 {
    text-align: center;
    margin-bottom: 20px;
}

.report-form label,
.report-form select,
.report-form textarea,
.report-form input[type="submit"] {
    display: block;
    width: 100%;
    margin-bottom: 15px;
    padding: 8px;
    border-radius: 3px;
    border: 1px solid #ccc;
}

.report-form select,
.report-form textarea {
    height: 100px;
}

.report-form input[type="submit"] {
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
    transition: background-color 0.3s;
}

.report-form input[type="submit"]:hover {
    background-color: #0056b3;
}
.content{
    filter: blur(5px);
}
</style>