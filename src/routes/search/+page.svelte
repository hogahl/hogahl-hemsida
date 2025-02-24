<script>
    import { goto } from "$app/navigation";

    let search
</script> 


<form on:submit|preventDefault={()=> goto('/search/'+search)} style="align-self: center;">
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>
                   


<style>

    input{
        text-align: center;  
        color: black;    

    }
</style>