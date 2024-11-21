<script>
    let name = ""
    let password= ""

    import { base } from '$app/paths';

    import {users_store} from "$lib/user";
    let users = [];

    
    import { onMount } from 'svelte';
    onMount(() => {
        /*Check if has more then 2 characters*/
        if($users_store.length > 2){
            users = JSON.parse($users_store);
        }
    });

    function verify_login(){
        let loginPerson = {username: name, password: password}
        if (users.filter(user => user.username == loginPerson.username).length>0){
            if (users.filter(user => user.password == loginPerson.password).length>0) {
                alert("Du har loggat in!")
            }
            else {
                alert("Fel lösenord!")}
        }
        else {
            alert("Du har inget konto för den användaren! Kontrollera att användarnamn och lösenord är rätt och försök igen")
        }
    }


</script>

<main>
    <div class= "container">
        <h1>
            Inloggning
        </h1>
        <form on:submit={verify_login}>
           <label for="name">Användarnamn:</label>
           <input type="text" id="name" bind:value={name}>

            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password}>

            <input type="submit" value="Logga in">

 
        </form>
        <a href="{base}/register">Har du inget konto? Regsistrera dig!</a>


    </div>
</main>

<style>
 main{
        background-image: url("https://t4.ftcdn.net/jpg/05/21/65/59/360_F_521655929_N80d5GaCQJ2VP073PfTXJTe9mkvsNtHE.jpg");
        background-size: cover;
        width: 100%;
        height: 100%;
        padding: 5%;
        min-width: 500px;
        min-height: 500px;


    }
    
    .container{
        border: solid 5px rosybrown;
        border-radius: 10px;
        width: 30%;
        height: 50%;
        background-color: #3a2e3b;
        margin: auto;
        color: black;
        background-color: white;
        min-width: 300px;
        min-height: 500px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
    }     
    
</style>

