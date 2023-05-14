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
        console.log(data)
    })
}

getArticle();
