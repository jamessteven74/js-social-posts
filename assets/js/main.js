//Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:


// id del post, numero progressivo da 1 a n
// nome autore,
// foto autore,
// data in formato americano (mm-gg-yyyy),
// testo del post,
// immagine (non tutti i post devono avere una immagine),
// numero di likes.


//per capire come procedere parto  dall'Html per creare sito e successivamente la scrittura la riporto in js

//creo array di oggetti.



let posts = [{

    "id": 1,
    "autore": "mario",
    "img": "https://unsplash.it/300/300?image=",
    "foto" : "https://unsplash.it/300/300?image=",
    "data" : "12-13-2016",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatum!",
    "img": "https://unsplash.it/300/300?image=",
    "likes": 100,








},

{

    "id": 1,
    "autore": "giovanni",
    "img": "https://unsplash.it/300/300?image=",
    "foto" : "https://unsplash.it/300/300?image=",
    "data" : "12-13-2016",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, voluptatum!",
    "img": "https://unsplash.it/300/300?image=",
    "likes": 80,








}

]

//creo div in Html
const postsHtml = document.getElementById("posts");
posts.forEach(p => {
    let pHtml = document.createElement("div");
    pHtml.className = "col-sm-6";

    //creo una card in html con le stesse proprietà presenti in html
        let cardHtml = document.createElement("div");
        cardHtml.className = "card w-100 rounded-0 p-2 border-0";
        
        //creo un div in html con le stesse proprietà riga 24 html
            let headerHtml = document.createElement("div");
            headerHtml.className = "d-flex";
            //creo immagine rotonda in alto a sinistra con le stesse proprietà di riga 25 html
                let iconHtml = document.createElement("img");
                iconHtml.className = "img-fluid rounded-circle";
                iconHtml.width = 50;
                iconHtml.src = p.foto;
                headerHtml.append(iconHtml);

            cardHtml.append(headerHtml);
                // creo la descrizione
            let descHtml = document.createElement("p");
            descHtml.className = "my-2";
            descHtml.innerText = p.text;
            cardHtml.append(descHtml);

        pHtml.append(cardHtml);
    
    postsHtml.append(pHtml);
});
