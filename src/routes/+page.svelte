
<!--Delar upp sidan i två delar-->
<main>
  <div>

    <h1> Hugo Ahlberg </h1>
    <h2 class=Axel>Axel är kort.</h2>
    <h3 id="number">Inspirerade citat för min webbutvecklingsresa:</h3>
    <!--Under denna kommer vi lägga till fler element-->
    <p id="inspo">
      "En Nocco om dagen är aldrig tillräckligt!" - <strong>Hugo Jatko</strong>, Nocco-fantast i sörfors.
  </p>
  
  <p style="background-color:pink">
      "Axels handicap: 68, Davids handicap: 77, Alexanders handicap: 83, Hugo Js handicap: 106, Elias handicap: 103, Alvins handicap: 56. " - <span>Lejonkungen, proffisionell golfare på korthålsbanan i Holmsund</span>.
  </p>

  </div>
    <!--Här kommer vi lägga till en bild senare i uppgiften 1.2.4 Extra styling--> 
    <svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FF0066" d="M29.5,-44C37.1,-41,41.4,-30.9,43.5,-21.3C45.7,-11.7,45.8,-2.5,46.6,8.2C47.5,19,49.1,31.5,43.9,38.7C38.7,45.9,26.6,47.8,14.3,53.8C1.9,59.9,-10.8,70,-18.4,66.2C-26,62.4,-28.6,44.7,-40.2,33.5C-51.8,22.4,-72.5,17.9,-75.7,9.6C-78.8,1.3,-64.3,-10.7,-56.1,-24.3C-47.8,-37.9,-45.8,-53,-37.5,-55.7C-29.2,-58.3,-14.6,-48.4,-1.8,-45.6C10.9,-42.7,21.9,-46.9,29.5,-44Z" transform=" translate(100,70)"  />
    </svg> 

</main>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fill-opacity="1" d="M0,160L14.1,170.7C28.2,181,56,203,85,213.3C112.9,224,141,224,169,197.3C197.6,171,226,117,254,96C282.4,75,311,85,339,128C367.1,171,395,245,424,266.7C451.8,288,480,256,508,224C536.5,192,565,160,593,133.3C621.2,107,649,85,678,69.3C705.9,53,734,43,762,80C790.6,117,819,203,847,229.3C875.3,256,904,224,932,181.3C960,139,988,85,1016,96C1044.7,107,1073,181,1101,229.3C1129.4,277,1158,299,1186,266.7C1214.1,235,1242,149,1271,138.7C1298.8,128,1327,192,1355,192C1383.5,192,1412,128,1426,96L1440,64L1440,320L1425.9,320C1411.8,320,1384,320,1355,320C1327.1,320,1299,320,1271,320C1242.4,320,1214,320,1186,320C1157.6,320,1129,320,1101,320C1072.9,320,1045,320,1016,320C988.2,320,960,320,932,320C903.5,320,875,320,847,320C818.8,320,791,320,762,320C734.1,320,706,320,678,320C649.4,320,621,320,593,320C564.7,320,536,320,508,320C480,320,452,320,424,320C395.3,320,367,320,339,320C310.6,320,282,320,254,320C225.9,320,198,320,169,320C141.2,320,113,320,85,320C56.5,320,28,320,14,320L0,320Z"></path></svg>

<style>
  main{
    /*Styling för att dela upp sidan i två delar. */
    /*Vi kommer gå igenom detta i detalj senare*/
    margin: auto;
    width: 80vw;
    height: 70vh;
    display: grid;
    grid-template-columns: repeat(2,50%);
    overflow: hidden;
  }
  div{
    /*Styling för att centrera texten i behållaren*/
    margin: auto;
  }
    
h1{
    background-color: lightblue;
}
                
h2{
    color: rgb(255, 165, 0);
}
h3{
    color: #3cb371;
    font-family: sans-serif;
    font-weight: bold;
}
  .Axel {
    color: rgb(82, 249, 5);
  }
 
  #number{
    border: 1px solid black;
    padding: 10px;
}
#inspo{
    font-family: courier;
    font-size: 160%;
}

span{
    color: green;
}


  /* Vi skiljer elementen med ett kommatecken(,) för att ge möjligheten till att ge flera element samma styling*/
  h1, h2, h3, p {
  display: inline;
  /*Ger utrymme mellan element*/
  margin: 10px;
}
        

  </style>

