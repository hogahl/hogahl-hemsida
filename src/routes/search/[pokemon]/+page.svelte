
<script>
    /** @type {import('./$types').PageData} */
    export let data;
  </script>
  
  {#await data}
    <p>.. waiting</p>
  {:then pokemon}
  <h1>{pokemon.response.name}</h1>   
  <article>  
    {#each Object.entries(pokemon.response.sprites) as sprites}
      {#if typeof sprites[1] == "string"}
      <img src={sprites[1]} />
      {/if}
    {/each}
  </article>
  <section>
  
  </section>
  
  {/await}  


<style>
    article{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        width: 90%;
        height: 30%;
        gap: 1em;
    }

    h1{
        color: black;
        justify-self: center;
        align-self: center;

    }

    img{
        width: 100vw;
        height: 40vh; 
    }
</style>
  
  
    