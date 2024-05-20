<script context="module">
	const elements = new Set();
</script>

<script>
    import {onDestroy, onMount} from 'svelte';
    import { login } from '../../classes/login.js';
    import {loginState} from '../../classes/login.js'
    import { addAccount } from '../../services/account.js';
    let username = "";
    let password = "";
    let showPassword = false;

    export let viewstate;

    async function handleRegister(){
        await addAccount(username,password);
        viewstate = 2;
    }
    function togglePasswordVisibility(event) {
        showPassword = !showPassword;

        event.preventDefault();
    }
</script>

   
<div class="container">
    <div class="login-component">
        <div class="login-inside">
            <form on:submit={handleRegister}>
                <div class="inputs">
                    <div class="login-input">
                        <img src="user.svg" class="icon" />
                        <input bind:value={username} type="text" class="login-label" placeholder="Login" />
                    </div>
                    <div class="password-input">
                        <img src="lock.svg" class="icon" />
                        {#if showPassword}
                        <input bind:value={password} type="text" class="password-label" placeholder="Haslo" />
                        {:else}
                        <input bind:value={password} type="password" class="password-label" placeholder="Haslo" />
                        {/if}
                        <div on:click={togglePasswordVisibility} class="password-visible"></div>
                    </div>
                </div>
                </form>
                <div class="flex">
                <button class="back-button" on:click={() => {viewstate = 2}}>
                    <img src="back.svg" class="icon" />
                </button>
                <button class="border-top" on:click={handleRegister}>
                    Zarejestruj sie
                </button>
                </div>
        </div>
       
    </div>
</div>
<style>
.flex{
    display: flex;
}
.back-button{
    height: 20px;
    width: 20px;
    background-color: transparent;
}
    .login-inside {
    background-color: #312e2b;
    display: flex;
    flex-direction: column;
}
.border-top{
    margin-top: 30px;
    margin-left: 50px;
    width: 80%;
}
button{
    border: none;
    cursor: pointer;
}

.login-component {
    background-color: #262421;
    width: 400px;
    border-radius: 10px;
    padding: 20px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 50px;
}
.login-label {
    background-color: #050000;
}
.password-label {
    background-color: #050000;
}
.login-input{
    display: flex;
    margin: 30px 0px;
}
.password-input{
    display: flex;
}
a{
    text-decoration: none;
}
a:hover{
    cursor: pointer;
}
a:visited{
    color: inherit;
}
.icon {
    height: 20px;
    width: 40px;
    color: white;
    filter: invert(100%);
    margin-right: 10px;
}
.password-visible {
    background: url("../visible.svg");
    background-size: cover;
    height: 25px;
    width: 45px;
    margin-left: 10px;
}
.inputs{
    display: block;
    width: 100%;
}
input{
    color: white;
}
.submit-button {
    background-color: #4CAF50;
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin: 10px auto;
}
form{
    margin: 10px auto;
}
.button-container{
    display: flex;
    justify-items: center;
}
.social-btn {
    width: 100%;
    color: #000;
    border: 1px solid #dcdce5;
    border-radius: 6px;
    margin-bottom: 10px;
    padding: 12px 40px 12px 15px;
    font-size: 15px;
    font-weight: 300;
    text-decoration: none;
    transition: border-color .2s, box-shadow .2s;
    position: relative;
    box-shadow: 0 1px 2px rgba(220, 220, 229, .5);
    background-color: white;
}
.w-inline-block {
    max-width: 100%;
    width: 250px;
    display: inline-block;
}
.social-content {
    grid-column-gap: 20px;
    align-items: center;
    display: flex;
}
.social-image {
    width: 24px;
}
.alternative {
    text-align: center;
    border-bottom: 1px solid grey;
    margin-bottom: 20px;
    padding-bottom: 10px;
    color: white;
}
.alternative-login{
    margin: 0px auto;
    display: block;
}
.login-buttons {
    margin: 0 auto;
    display: block;
    width: 300px;
}
.sign-in {
    color: white;
    text-align: center;
    width: 90%;
    margin: 0px auto;
    display: block;
}
.container {
    background-image: url('../leaf20.png');
    background-size: cover; 
    background-position: center; 
    margin: 0;
    padding: 0;
    font-family: Arial, sans-serif; 
}
.container {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100vh;
    justify-content: center;
}
.flex {
    display: flex;
    align-items: center;
}


</style>