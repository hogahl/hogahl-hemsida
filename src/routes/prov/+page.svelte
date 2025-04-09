<script>

    let lista = [0,1,2,3,4,5,6]

</script>

<main>
    <div class="container">
        <div class="rectangle">
            <li class="number">{lista[0]}</li>
        </div>

        <div class="square">
            <li class="number">{lista[1]}</li>
        </div>

        <div class="square2">
            <li class="number">{lista[2]}</li>
        </div>

        <div class="square3">
            <li class="number">{lista[3]}</li>
        </div>

        <div class="smallRectangle">
            <li class="number">{lista[4]}</li>
        </div>

        <div class="smallRectangle2">
            <li class="number">{lista[5]}</li>
        </div>

        <div class="smallRectangle3">
            <li class="number">{lista[6]}</li>
        </div>

    </div>
</main>

<style>
    .container{
        display: grid;
        width: 1000px;
        height: 600px;
        margin: 80px auto;
    }

    .rectangle{
        color: black;
        background-color: red;
        width: 1000px;
        height: 150px;
        margin: 5px;
    }

    .square{
        color: black;
        display: grid;
        background-color: red;
        width: 328px;
        height: 300px;
        margin: 5px;
    }

    .square2{
        color: black;
        position:fixed;
        left: 604px;
        top: 264px;
        background-color: red;
        width: 328px;
        height: 300px;
        margin: 5px;
    }

    .square3{
        color: black;
        position:fixed;
        left: 940px;
        top: 264px;
        background-color: red;
        width: 328px;
        height: 300px;
        margin: 5px;
    }

    .smallRectangle{
        color: black;
        display: grid;
        background-color: red;
        width: 328px;
        height: 150px;
        margin: 5px;
    }

    .smallRectangle2{
        color: black;
        position:fixed;
        left: 604px;
        top: 574px;
        background-color: red;
        width: 328px;
        height: 150px;
        margin: 5px;
    }

    .smallRectangle3{
        color: black;
        position:fixed;
        left: 940px;
        top: 574px;
        background-color: red;
        width: 328px;
        height: 150px;
        margin: 5px;
    }

    .number{
        margin: 10px;
    }




</style>