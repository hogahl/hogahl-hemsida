<script>
    
    let image = "https://picsum.photos/id/70/367/267"
    let photo = "https://picsum.photos/id/88/367/267"
    let picture = "https://picsum.photos/id/93/367/267"

</script>

<h1>Photoapp</h1>
<p>Denna sida innehåller fina bilder</p>
<div class="photos">
    <div class="image-wrapper">
        <img src={image} alt="Flexbox egenskaper">
    </div>

    <div class="image-wrapper">
        <img src={photo} alt="">
    </div>

    <div class="image-wrapper">
        <img src={picture} alt="">
    </div>
    
    
</div>
<style>
    .photos {
        display: flex;
        flex-wrap:wrap;
    }
    .image-wrapper img{ 
        width: 100%; 
        border-radius: 20px;
        border: 4px solid white;
        box-shadow: 4px 8px 10px rgba(0,0,0,0.2);
    }

    .image-wrapper {
        flex-grow: 1;
        margin: 10px;
    }
    .image-wrapper:hover {
        flex-grow:2;
        transition: 500ms flex;
    }
    .image-wrapper:active {transform: scale(0.9);}
    
    h1{
        text-align: center;
        font-size: 50px;
        margin: 20px;
        color: black;
    }
</style>