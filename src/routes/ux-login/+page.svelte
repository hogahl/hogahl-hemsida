<script>
    let startOrStop = "Start"
    let stage = 0
    let username = ""
    let i1 
    let i2
    let i3
    function startStop() {
        if (stage == 0) {
            stage = 1
            i1= setInterval(()=>{
                letter1--
                if (letter1==-30) 
                letter1=0},400)

            i2 =setInterval(()=>{
                letter2--
                if (letter2==-30) 
                letter2=0},300)

            i3= setInterval(()=>{
                letter3--
                if (letter3==-30) 
                letter3=0},200)
        }
        else if (stage == 1) {
            stage = 2
            //stoppa första
            clearInterval(i1)

        }
        else if (stage == 2) {
            stage = 3
            //stoppa andra
            clearInterval(i2)
        }
        else if (stage == 3) {
            stage = 4
            //stoppa tredje
            clearInterval(i3)
        }
        else if (stage == 4) {
            //Fyll i bokstav
            var spans = document.getElementsByTagName("span");
            let letter = spans[letter1]
            if (letter1== letter2==letter3) {
                username += letter
            }
            }
        }
    

    let letter1 = 0
    let letter2 = 0
    let letter3 = 0




</script>

    <p class= "username">Username: {username}</p>
    <div class="base">
        <div class="letter-first" style="--ch:{letter1}">
            <span> </span>
            <span class="A">A</span>
            <span class="B">B</span>
            <span class="C">C</span>
            <span class="D">D</span>
            <span class="E">E</span>
            <span class="F">F</span>
            <span class="G">G</span>
            <span class="H">H</span>
            <span class="I">I</span>
            <span class="J">J</span>
            <span class="K">K</span>
            <span class="L">L</span>
            <span class="M">M</span>
            <span class="N">N</span>
            <span class="O">O</span>
            <span class="P">P</span>
            <span class="Q">Q</span>
            <span class="R">R</span>
            <span class="S">S</span>
            <span class="T">T</span>
            <span class="U">U</span>
            <span class="V">V</span>
            <span class="W">W</span>
            <span class="X">X</span>
            <span class="Y">Y</span>
            <span class="Z">Z</span>
            <span class="Å">Å</span>
            <span class="Ä">Ä</span>
            <span class="Ö">Ö</span>
        </div>
        <div class="letter-second" style="--ch:{letter2}">
            <span> </span>
            <span class="A">A</span>
            <span class="B">B</span>
            <span class="C">C</span>
            <span class="D">D</span>
            <span class="E">E</span>
            <span class="F">F</span>
            <span class="G">G</span>
            <span class="H">H</span>
            <span class="I">I</span>
            <span class="J">J</span>
            <span class="K">K</span>
            <span class="L">L</span>
            <span class="M">M</span>
            <span class="N">N</span>
            <span class="O">O</span>
            <span class="P">P</span>
            <span class="Q">Q</span>
            <span class="R">R</span>
            <span class="S">S</span>
            <span class="T">T</span>
            <span class="U">U</span>
            <span class="V">V</span>
            <span class="W">W</span>
            <span class="X">X</span>
            <span class="Y">Y</span>
            <span class="Z">Z</span>
            <span class="Å">Å</span>
            <span class="Ä">Ä</span>
            <span class="Ö">Ö</span>
        </div>
        <div class="letter-third" style="--ch:{letter3}">
            <span> </span>
            <span class="A">A</span>
            <span class="B">B</span>
            <span class="C">C</span>
            <span class="D">D</span>
            <span class="E">E</span>
            <span class="F">F</span>
            <span class="G">G</span>
            <span class="H">H</span>
            <span class="I">I</span>
            <span class="J">J</span>
            <span class="K">K</span>
            <span class="L">L</span>
            <span class="M">M</span>
            <span class="N">N</span>
            <span class="O">O</span>
            <span class="P">P</span>
            <span class="Q">Q</span>
            <span class="R">R</span>
            <span class="S">S</span>
            <span class="T">T</span>
            <span class="U">U</span>
            <span class="V">V</span>
            <span class="W">W</span>
            <span class="X">X</span>
            <span class="Y">Y</span>
            <span class="Z">Z</span>
            <span class="Å">Å</span>
            <span class="Ä">Ä</span>
            <span class="Ö">Ö</span>
        </div>
    </div>
    <button on:click={() => startStop()}>{startOrStop}</button>

<style>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    .base{
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .letter-first, .letter-second, .letter-third{
        display: flex;
        flex-direction: column;
        height: 100px;
        background-color: lightpink;
        color: blue;
        border: 1px solid;
        overflow: hidden;
        
        

    }

    .username{
        text-align: center;
        justify-self: center;
        margin-top:10px;

    }

    span{
        min-height: 100px;
        text-align: center;
        font-size: 90px;
        display: flex;
        justify-content: center;
        align-items: center;

    }

    .letter-first span{
        transform: translateY(calc(var(--ch)*100%));
        transition: all 500ms linear;

    }
    .letter-second span{
        transform: translateY(calc(var(--ch)*100%));
        transition: all 500ms linear;        
    }
    
    .letter-third span{
        transform: translateY(calc(var(--ch)*100%));
        transition: all 500ms linear;        
    }

    @keyframes scroll{
        
        to{
            transform: translateY(calc(var(--ch)*100%));

        }
    }

</style>

