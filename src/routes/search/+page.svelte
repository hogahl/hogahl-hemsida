<script>
    import { goto } from "$app/navigation";
    import {base} from "$app/paths";
    let search
</script> 


<form on:submit|preventDefault={()=> goto(base+'/search/'+search)} style="align-self: center;">
    <input type="text" placeholder="Sök upp en pokemon" bind:value={search} />
</form>
                   


<style>

    input{
        text-align: center;  
        color: black;    

    }
</style>