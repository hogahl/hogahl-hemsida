<script>
    
    let ferrari = "ferrari.png"
    let yacht = "yacht.png"
    let helicopter = "helicopter.png"
    let motorcycle = "motorcycle.png"
    let jet = "jet.png"
    let house = "house.png"

    let antal_ferrari = 0
    let antal_yacht = 0
    let antal_helicopter = 0
    let antal_motorcycle = 0
    let antal_jet = 0
    let antal_house = 0

    let total_price = 0
    




    function Betala(){
        alert("Din beställning på " + total_price + "kr är skickad!")
        total_price = 0
    }


    function addFerrari(){
        antal_ferrari+=1
    }
    function addYacht(){
        antal_yacht+=1
    }
    function addHelicopter(){
        antal_helicopter+=1
    }
    function addMotorcycle(){
        antal_motorcycle+=1
    }
    function addJet(){
        antal_jet+=1
    }
    function addHouse(){
        antal_house+=1
    }

    
    function buyFerrari(){
        total_price += 2600000 * antal_ferrari
        antal_ferrari = 0
        
    }
    function buyYacht(){
        total_price += 100000000 * antal_yacht
        antal_yacht = 0

    }
    function buyHelicopter(){
        total_price += 80000000 * antal_helicopter
        antal_helicopter = 0

    }
    function buyMotorcycle(){
        total_price += 425000 * antal_motorcycle
        antal_motorcycle = 0

    }
    function buyJet(){
        total_price += 7000000000 * antal_jet
        antal_jet = 0

    }
    function buyHouse(){
        total_price += 200000000 * antal_house
        antal_house = 0

    }

    

    


    

</script>
<main>
    <h1>Alvins loppis</h1>
    <div class="photos">
        <div class="image-wrapper">
            <img src={ferrari} alt="">
            <div class="things">
                <button class="add" on:click={addFerrari}>➕</button>
                <p class="antal">{antal_ferrari}</p>
                <button class="köp" on:click={buyFerrari}>Köp</button>
            </div>
            
        </div>
        

        <div class="image-wrapper">
            <img src={yacht} alt="">
            <div class="things">
                <button class="add" on:click={addYacht}>➕</button>
                <p class="antal">{antal_yacht}</p>
                <button class="köp" on:click={buyYacht}>Köp</button>
            </div>
        </div>

        <div class="image-wrapper">
            <img src={helicopter} alt="">
            <div class="things">
                <button class="add" on:click={addHelicopter}>➕</button>
                <p class="antal">{antal_helicopter}</p>
                <button class="köp" on:click={buyHelicopter}>Köp</button>
            </div>
        </div>

        <div class="image-wrapper">
            <img src={motorcycle} alt="">
            <div class="things">
                <button class="add" on:click={addMotorcycle}>➕</button>
                <p class="antal">{antal_motorcycle}</p>
                <button class="köp" on:click={buyMotorcycle}>Köp</button>
            </div>
        </div>

        <div class="image-wrapper">
            <img src={jet} alt="">
            <div class="things">
                <button class="add" on:click={addJet}>➕</button>
                <p class="antal">{antal_jet}</p>
                <button class="köp" on:click={buyJet}>Köp</button>
            </div>
        </div>

        <div class="image-wrapper">
            <img src={house} alt="">
            <div class="things">
                <button class="add" on:click={addHouse}>➕</button>
                <p class="antal">{antal_house}</p>
                <button class="köp" on:click={buyHouse}>Köp</button>
            </div>
        </div>

        
        
    </div>
    <div class ="varukorg">
        <h2  class="korg">🛒</h2>
        <p class="pris">Total: {total_price}kr</p>
        <form on:submit={Betala}>
            <input class="betala" type="submit" value="Till Kassan">


    </div>
</main>
<style>

    main{
        background-color: white;

    }

    .photos {
        display: flex;
        flex-wrap:wrap;
        max-width: 80%;
    }


    .korg{
        position: fixed;
        right: 50px;
        top: 50px;
        font-size: 800%;
    }

    .pris{
        color:black;
        position: fixed;
        left: 1020px;
        top: 200px;
        font-size: 300%;
    }

    @media (min-width: 600px){
    
        .betala{
            position: fixed;
            left: 1020px;
            top: 300px;
            font-size: 150%; 
            background-color: black;
        }

        .pris{
            color:black;
            position: fixed;
            left: 1020px;
            top: 200px;
            font-size: 300%;
        }
    }

    @media (max-width: 600px){
    
        .betala{
            position: fixed;
            left: 200px;
            top: 300px;
            font-size: 100%; 
            background-color: black;
        }

        .pris{
            color:black;
            position: fixed;
            left: 200px;
            top: 200px;
            font-size: 100%;
        }
    }

    .image-wrapper img{ 
        width: 300vw;
        height: 30vh;
        border-radius: 20px;
        border: 4px solid black;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }

    .image-wrapper {
        flex-basis: 30vw;
        margin: 3vh;
        padding: 10px
    }
    
    h1{
        text-align: center;
        font-size: 60px;
        margin: 20px;
        color: black;
    }

    .add{
        margin-right: 10px;
    }

    .add:active {transform: scale(0.9);}

    .things{
        display: flex;
        margin: 10px
    }

    .antal{
        color: black;
        background-position: 100%;
        font-weight: bold;
        font-size: 150%;
    }

    .köp{
        color:black;
        background-color: lime;
        font-size: 200%;
        margin-left: 30px;
        font-style: italic;

    }




</style>