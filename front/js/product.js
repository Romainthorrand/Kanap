// Utilisation de la méthode params
const params = new URL(document.location).searchParams
const id = params.get("id")

// Recherche des url de chaques canapés en fonction des id
const url = `http://localhost:3000/api/products/${id}`;


// Récuperation de chaque canapé par fetch
const getArticle = () => {
    fetch(url)
    .then(function(res){
        return res.json()
    })
    .then(function(data){

        // Ajout des titre,description, prix et image des canapés dans les pages produit
        const title = document.getElementById("title").innerHTML = data.name;
        const description = document.getElementById("description").innerHTML = data.description;
        const price = document.getElementById("price").innerHTML = data.price;

        //Création d'un attribut pour mettre l'image des canapé
        const image = document.createElement("img");
        document.querySelector(".item__img").appendChild(image);
        image.setAttribute("src",`${data.imageUrl}`);

        // Ajout des couleurs dans le selecteur
        const optionColor = document.getElementById("colors");
        for(color in data.colors){
                optionColor.innerHTML +=`<option value ="${data.colors[color]}">"${data.colors[color]}"</option>` 
        }

    })
}

getArticle();


// creation d'une variable qui gére les paniers
 const addToCart = document.getElementById("addToCart");

//Création d'un événement qui écoute le "clic" sur le bouton du panier
 addToCart.addEventListener("click", () => {
    // addProduct est un objet qui contiend les choix de l'utilisateur
     const addProduct =  {
        quantity : document.getElementById("quantity").value,
        color : document.getElementById("colors").value,
        id : id,
    }

//Gestion du localStorage, création d'un tableau
addProductToLocalStorage = []
//Si le localStorage contient des données (n'est pas "null")
    if (localStorage.getItem("addToCart") !== null){
        //Convertire le JSON en objet et ajouter a "addToCart"
        addProductToLocalStorage = JSON.parse(localStorage.getItem("addToCart"));
        //Ajouter le nouvel élement à notre tableau
        addProductToLocalStorage.push(addToCart);
        //Stocker une nouvelle fois le tableau dans le localStorage
        localStorage.setItem("addToCart",JSON.stringify(addProductToLocalStorage));
        console.log(addProductToLocalStorage);
//Si le localStorage est vide
    } else {
    //Envoyé les données vers "addProduct"
        addProductToLocalStorage.push(addProduct);
        localStorage.setItem("addToCart",JSON.stringify(addProductToLocalStorage));
        console.log(addProductToLocalStorage);
    }


})


