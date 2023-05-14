// Utilisation de la méthode params
const params = new URL(document.location).searchParams
const id = params.get("id")

// Recherche des url de chaques canapés en fonction des id
const url = `http://127.0.0.1:3000/api/products/${id}`;


// Récuperation de chaque canapé par fetch
const getArticle = () => {
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        console.log(data);
        // Ajout des titre,description, prix et image des canapés dans les pages produit
        const title = document.getElementById("title").innerHTML = data.name;
        const description = document.getElementById("description").innerHTML = data.description;
        const price = document.getElementById("price").innerHTML = data.price;
        //Création d'un attribut pour mettre l'image des canapé
        const image = document.createElement("img");
        document.querySelector(".item__img").appendChild(image);
        image.setAttribute("src",`${data.imageUrl}`);


    })
}

getArticle();


