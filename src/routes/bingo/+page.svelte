<script>

    let randomNumber = 0
    let z = 1

    function rollRandom(){
        randomNumber = Math.round(Math.random() * 100)
    }

    let x = 0;
    let y = 0;
    // up = 38
    // down = 40
    // right = 39
    // left = 37

    let numList = []
    
    function shuffle(){
    
        numList = []
        for (var i = 0; i < 49; i++){
            let num = Math.round(Math.random()*100)
            while ((numList.filter(n => n==num).length) > 0) {
                num = Math.round(Math.random()*100)
                console.log(true)
            }
            numList = [...numList, {num:num, matched: false}]
        }
    }
    

    function onKeyDown(e){
        switch(e.keyCode){
            case 38:
                if (y >=1) {
                    y -= 1;
                    z-=7
                }
                break;
            case 40:
            if (y <=5) {
                y += 1;
                z+=7
            }
                break;
            case 37:
            if (x >=1) {
                x-= 1;
                z-=1
            }
                break;
            case 39:
            if (x <=5) {
                x+= 1;
                z+=1
            }
                break;
            case 13:
                if (numList[z-1].num == randomNumber) {
                    numList[z-1].matched = true
                }
                break;
        }
    }

    shuffle()


</script>
<div class="top">
    <button on:click={rollRandom}>Snurra</button>
    <p>{randomNumber}</p>
</div>

<main>
    <div class="choser" style= "left: {x*50}px; top: {y*50}px"></div>

    <div class="main-grid">
        {#each numList as num}
            <div class="number" class:gray = {num.matched}>{num.num}</div>
            {/each}
    </div>


</main>


<svelte:window on:keydown|preventDefault={onKeyDown}/>


<style>

    main{
        width: 350px;
        height: 350px;
        border: solid black 1px;
        margin: 150px auto;
        position: relative;

    }

    .top{
        text-align: center;
        justify-self: center;
        font-size: 150%;
        margin: 100px;
    }

    .main-grid{
        display: grid;
        grid-template-columns: repeat(7, 1fr);
        grid-template-rows: repeat(7, 1fr);
        height: 100%;
        width: 100%;
        text-align: center;
        align-items: center;
    }

    .number{
        color: white;
        z-index: +1;
        font-size:150%;
        font-weight: bold;
    }

    .choser{
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: rgb(107, 107, 107);
        position: absolute;
    }

    .gray {
        border-radius: 50%;
        width: 50px;
        height: 50px;
        background-color: red;
    }

</style>

