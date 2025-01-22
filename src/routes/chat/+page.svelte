<script>
    import ElizaBot from 'elizabot';
    import { enhance } from "$app/forms";

    const eliza = new ElizaBot();

    let chat = [{ user: 'Eliza', message: eliza.getInitial() }];
    
    async function write(message) {
        chat = [...chat, {user: "user", message: message}]

        
        //Hämta HTML-elementet med id:et visible
        var element = document.getElementById("visible");
        //Ändrar elementets CSS-egenskap display till default
        element.style.display = "block"; // Visa elementet
            

        // random delay for Eliza's response time
        await new Promise((r) => setTimeout(r, 1000 + Math.random() * 1000));
        element.style.display="none"

        chat = [...chat, {user: "Eliza", message: "Nice to hear!"}]

    }
                
    
</script>

<main>
    <section>
        {#each chat as meddelande}
            <article class="container" id={meddelande.user} >
                <p> {meddelande.user} : {meddelande.message}</p>
            </article>
        {/each}

        <article id="visible">                  
            <span class="circle"></span>
            <span class="circle"></span>
            <span class="circle"></span>

        </article>
    </section>

    <form method="post"
        
        use:enhance={({ formElement, formData, action, cancel }) => {
        cancel(); //don't post anything to server
        const text = formData.get("text"); // what does "text" refer to?
        write(text);

        // TODO: reset the form using _____.reset() - what do we want to reset? the element or the data?
        formElement.reset()
        }}>

        <input type="text" name="text" style="color:black;">
            
    </form>
</main>

<style>

    #user{
        justify-content:  flex-end;   
        margin-left: 40%;
        background-color: rgb(62, 61, 61);
    }

    main{
        height: 70vh;
        width: 60vW;
        padding: 10px;
        background-color: black;
        justify-self: center;
        margin: 20px auto;
    }

    section{
        height: 90%;
        overflow-y:scroll;
    }

    .container{
        margin: 10px;
        padding: 10px;
        border-radius: 10px;
        background-color: grey;
        width: 60%;
        display: flex;
    }

    #visible{
        display: none;
        justify-content: center;
        align-items: center;
    }

    .circle{
        display: inline-block;
        width: 10px;
        height: 10px;
        border-radius: 50%;
        background-color: grey;

        animation-name: typing;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: ease-in-out; /* Funktion som styr tidsförloppet (till exempel "ease-in-out") */
    }

     
    @keyframes typing {
        0% {transform: scale(1);}
        25% {transform: scale(1);}
        50% {transform: scale(1.4);}
        100% {transform: scale(1);}
    }

    
    .circle:nth-child(1) {
        animation-delay: 0ms; /* Ingen fördröjning */
    }
    .circle:nth-child(2) {
        animation-delay: 333ms; /* Starta animationen efter 333 millisekunder (ms) */
    }
    .circle:nth-child(3) {
        animation-delay: 666ms; /* Starta animationen efter 666 ms */
    }

    
            
               

</style>