<script>
    let varor=[{name:"Påse", toBuy:true}]
    let vara =""

    function add(){
        varor = [...varor, {name:vara,toBuy:true}]
    }

    function remove(taBortVara){
        for(let vara in varor){
            if(taBortVara.name == varor[vara].name) {
                varor.splice(vara, 1)
                break
            }
        }
        varor = [...varor]
    }

    function bought(vara){
        vara.toBuy =false
        varor=varor
    }

    function notbought(vara){
        vara.toBuy=true
        varor=varor
    }

</script>


<main class="container">
    <h1>Shoppinglist</h1>

    <div class="categories_container">
        <section>
            <h2>Varor att köpa</h2>
            <ol>
                {#each varor as vara,i}
                {#if vara.toBuy}
                    <li>
                        <button on:click={()=>remove(vara)} class="knapp">{vara.name}</button>
                        <button on:click={()=>bought(vara)}><strong>☐</strong></button>
                    </li>
                    {/if}
                {/each}
            </ol>
        </section>
        
        <section>
            <h2>Köpta varor</h2>
            <ul>
                {#each varor as vara}
                {#if !vara.toBuy}
                    <li>
                        <button on:click={()=>remove(vara)} class="knapp">{vara.name}</button>
                        <button on:click={()=>notbought(vara)}><strong>☑</strong></button>
                    </li>
                    {/if}
                {/each}
            </ul>
        </section>

    </div>

    <div>
        <input style="color:black;" type="text" bind:value={vara}>
        <button on:click={add}>Lägg till</button>
    </div>

</main>


<style>

    .knapp {
        transition: 1000ms flex;

    }
    .knapp:hover {
        text-decoration: line-through;
        
    }
    
    .container{
        background-color: rgb(21, 21, 122);
        width: 60vw;
        height: 70vh;
        border-radius: 20px;
        display: grid;
        grid-template-rows: 1fr 8fr 1fr;
        
        
    }

    .categories_container{
        background-color: rgb(181, 181, 181);
        height: 100%;
        display: grid;
        grid-template-columns: repeat(2,1fr);
        grid-column-gap: 10px;

        

    }

    .container h1{
        background-color: black;
        border-radius: 10px;
        align-self: center;
        justify-self: center;


    }

    .container section{
        width:100%;
        height:100%;
    }

    .container section h2{
        background-color:black;
        font-size: larger;
        text-align: center;
        margin: 10px;
    }

    
    .categories_container section:first-child{ 
        background-color: rgba(0, 0, 0, 0.1) 
    }
    
    .categories_container section:last-child{  
        background-color: rgba(0, 0, 0, 0.3) 
    }

    .container section h2 ol{
        list-style-type: decimal;
        list-style-position:inside;
    }

    .container section h2 ul{
        list-style-type: disc;
        list-style-position: inside;
    }

        
</style>