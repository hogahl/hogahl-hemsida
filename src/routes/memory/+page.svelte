<script>

    let bluePoints = 0
    let redPoints = 0

    let blueTurn = true

    let winnertext = ""

    let wait = false

    let cards = [
        {img: "https://varsego.se/storage/61B16535A14A0020C608EA0896EB8D5665BEF05B5673201853DDA64B3591A165/d843922b705d48dab48ad593a0dde58e/700-700-0-png.Png/media/132ff49f3f3742aa82fcaf362846aca3/14196%20NOCCO%20Juicy%20Breeze%20330ml.png", flipped:false, matched:false},
        {img: "https://varsego.se/storage/61B16535A14A0020C608EA0896EB8D5665BEF05B5673201853DDA64B3591A165/d843922b705d48dab48ad593a0dde58e/700-700-0-png.Png/media/132ff49f3f3742aa82fcaf362846aca3/14196%20NOCCO%20Juicy%20Breeze%20330ml.png", flipped:false, matched:false},
        {img: "https://e-line.gobert.se/images/prod450/01916510.png", flipped:false, matched:false},
        {img: "https://e-line.gobert.se/images/prod450/01916510.png", flipped:false, matched:false},
        {img: "https://www.eckeroline.com/media/catalog/product/cache/0f3dc3b6609d75343169595aac92d4b7/n/o/nocco_caribbean_24pack_37200_08-2023.png", flipped:false, matched:false},
        {img: "https://www.eckeroline.com/media/catalog/product/cache/0f3dc3b6609d75343169595aac92d4b7/n/o/nocco_caribbean_24pack_37200_08-2023.png", flipped:false, matched:false},
        {img: "https://joselind.se/images/zoom/noccoskumnisse24x33cl.png", flipped:false, matched:false},
        {img: "https://joselind.se/images/zoom/noccoskumnisse24x33cl.png", flipped:false, matched:false},
        {img: "https://nycdn.nyehandel.se/store_17dfab1e-b233-4e19-a6f0-ae93160c8b85/images/lvUx7EvVkCiPhNu9pQPhpioqWAxA2esfiZhIVgrz.png?width=1024&height=1024", flipped:false, matched:false},
        {img: "https://nycdn.nyehandel.se/store_17dfab1e-b233-4e19-a6f0-ae93160c8b85/images/lvUx7EvVkCiPhNu9pQPhpioqWAxA2esfiZhIVgrz.png?width=1024&height=1024", flipped:false, matched:false},
        {img: "https://nocco.co.uk/wp-content/uploads/sites/2/2023/01/BB_UK_WEBSHOP_VISUAL02_2800x2800_RAMONADE.png", flipped:false, matched:false},
        {img: "https://nocco.co.uk/wp-content/uploads/sites/2/2023/01/BB_UK_WEBSHOP_VISUAL02_2800x2800_RAMONADE.png", flipped:false, matched:false}
        ]
    
    shuffle()
    
    let flipped_img = "https://shop.nocco.com/wp-content/uploads/2022/04/instagram_thumbnail-375x375.png"

    function flip(card){
        let flippedCards = cards.filter(kort => kort.flipped == true && kort.matched == false)
        if (flippedCards.length >= 2 || wait) {
            return
        }

        else if (card.flipped == false) {
            card.flipped = !card.flipped
            flippedCards = cards.filter(kort => kort.flipped == true && kort.matched == false)
            cards = [...cards]

            if (flippedCards.length == 2) {
                wait = true
                if (flippedCards[0].img == flippedCards[1].img){
                    flippedCards[0].matched = true
                    flippedCards[1].matched = true

                    if (!blueTurn){
                        redPoints +=1
                    }
                    else if (blueTurn){
                        bluePoints +=1
                    }
                    if (bluePoints + redPoints == 6){
                        if (bluePoints > redPoints){
                            winnertext = "Blå Vann!!!"
                        }
                        else if (bluePoints < redPoints){
                            winnertext = "Röd Vann!!!"
                        }
                        else{
                            winnertext = "Oavgjort!"
                        }
                    }
                }

                else {blueTurn = !blueTurn}


                

                setTimeout(() => {
                    cards.forEach((card) => {
                        card.flipped = card.matched;
                    });
                    wait = false
                    cards = cards;
                    }, 1000);
                }
                
            

        }
    }

    function shuffle(){
        for (var i = cards.length - 1; i >= 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
    }

    function restart(){
        cards = [
        {img: "https://varsego.se/storage/61B16535A14A0020C608EA0896EB8D5665BEF05B5673201853DDA64B3591A165/d843922b705d48dab48ad593a0dde58e/700-700-0-png.Png/media/132ff49f3f3742aa82fcaf362846aca3/14196%20NOCCO%20Juicy%20Breeze%20330ml.png", flipped:false, matched:false},
        {img: "https://varsego.se/storage/61B16535A14A0020C608EA0896EB8D5665BEF05B5673201853DDA64B3591A165/d843922b705d48dab48ad593a0dde58e/700-700-0-png.Png/media/132ff49f3f3742aa82fcaf362846aca3/14196%20NOCCO%20Juicy%20Breeze%20330ml.png", flipped:false, matched:false},
        {img: "https://e-line.gobert.se/images/prod450/01916510.png", flipped:false, matched:false},
        {img: "https://e-line.gobert.se/images/prod450/01916510.png", flipped:false, matched:false},
        {img: "https://www.eckeroline.com/media/catalog/product/cache/0f3dc3b6609d75343169595aac92d4b7/n/o/nocco_caribbean_24pack_37200_08-2023.png", flipped:false, matched:false},
        {img: "https://www.eckeroline.com/media/catalog/product/cache/0f3dc3b6609d75343169595aac92d4b7/n/o/nocco_caribbean_24pack_37200_08-2023.png", flipped:false, matched:false},
        {img: "https://joselind.se/images/zoom/noccoskumnisse24x33cl.png", flipped:false, matched:false},
        {img: "https://joselind.se/images/zoom/noccoskumnisse24x33cl.png", flipped:false, matched:false},
        {img: "https://nycdn.nyehandel.se/store_17dfab1e-b233-4e19-a6f0-ae93160c8b85/images/lvUx7EvVkCiPhNu9pQPhpioqWAxA2esfiZhIVgrz.png?width=1024&height=1024", flipped:false, matched:false},
        {img: "https://nycdn.nyehandel.se/store_17dfab1e-b233-4e19-a6f0-ae93160c8b85/images/lvUx7EvVkCiPhNu9pQPhpioqWAxA2esfiZhIVgrz.png?width=1024&height=1024", flipped:false, matched:false},
        {img: "https://nocco.co.uk/wp-content/uploads/sites/2/2023/01/BB_UK_WEBSHOP_VISUAL02_2800x2800_RAMONADE.png", flipped:false, matched:false},
        {img: "https://nocco.co.uk/wp-content/uploads/sites/2/2023/01/BB_UK_WEBSHOP_VISUAL02_2800x2800_RAMONADE.png", flipped:false, matched:false}
        ]

        shuffle()
        
        bluePoints = 0
        redPoints = 0

        winnertext = ""

        blueTurn = true

        wait = false

    }
    

</script>

<h1>Memory</h1>

<main>

    {#each cards as card}
        <div class= "card" class:flipped= { card.flipped } on:click={flip(card)}>
            <img class="front" src={card.img} alt="">
            <img class="back" src={flipped_img} alt="">
        </div>
    {/each}

    <div>
        <button on:click={restart}><strong>Starta om</strong></button>
    </div>

</main>

<p class= "winner">
    {winnertext}
</p>

<aside class = "blue">
    <p>
        {bluePoints}
    </p>
</aside>

<aside>
    <p>
        {redPoints}
    </p>
</aside>

<aside class= "turn" class:blue= { blueTurn }>

</aside>

<style>
    h1{
        text-align:center;
    }

    main{
        display:grid;
        grid-template-columns: repeat(4, 200px);
        grid-template-rows: repeat(3, 200px);
        justify-content: center;
    }

    .card{
        border: solid 2px white;
        margin: 5px;
        background-color: navy;
        backface-visibility: hidden;
        transform-style: preserve-3d;
        transition: transform 0.5s;

    }

    .card:not(.flipped):hover{
        transform: scale(1.1);
    }
    
    aside{
        width: 100px;
        height: 100px;
        position: fixed;
        bottom: 10px;
        right: 10px;
        background-color: red;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .winner{
        text-align: center;
    }

    p{
        font-size: 30px;
    }

    .blue{
        background-color: blue;
        left:10px
    }

    .turn{
        box-shadow: 0 0 10px 10px yellowgreen;
        z-index: -1;
    }

    .front{
        transform: rotateY(180deg);
    }

    .back{
        position: relative;
        top: -187px;
    }

    .flipped {
        transform: rotateY(180deg);
    }
                            
</style>