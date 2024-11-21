<script>
    let color =""
    let colors = [
        {namn: "Blå", value: "blue"}, 
        {namn: "Gul", value: "yellow"}, 
        {namn: "Röd", value: "red"}, 
        {namn: "Svart", value: "black"},
        {namn: "Vit", value: "white"},
        {namn: "Grön", value: "green"}]

    let name =""
    let email=""
    let password=""

    let new_user = {username: name, password: password, email: email, color: color};
    

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

    function already_used(){
        new_user = {username: name, password: password, email: email, color: color};

        if(users.filter(user => user.username == new_user.username).length>0){
            alert("Användaren har redan ett konto! Prova att logga in istället")
        }
        else {
            users = [...users, new_user]
            $users_store = JSON.stringify(users);
            alert("Välommen " + name + "!  Email: "+ email + "  Password: " + password + "  Favorite color: " + color)

        }
        console.log(users)
    }

</script>

<main>
    <div class= "container">
        <h1>Registrering</h1>

        <form  on:submit|preventDefault={already_used}>
           <div style="width: 100px; height: 100px; border-radius: 50%; overflow:hidden; background-color:{color};">
           </div>
            <label for="name">Användarnamn:</label>
            <input type="text" id="name" bind:value={name}>

            <label for="email">Email:</label>
            <input type="email" id="email" bind:value={email}>

            <label for="password">Lösenord:</label>
            <input type="password" id="password" bind:value={password}>

            <label for="favoritfärg">Favoritfärg</label>
            <select id="favoritfärg" bind:value={color}>
                {#each colors as x}
		            <option value={x.value}>{x.namn}</option>
	            {/each}
            </select>

            <input type="submit" value="Registrera">
        </form>
        <a href="{base}/login">Har du redan ett konto? Logga in!</a>


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
        width: 35%;
        height: 80%;
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

