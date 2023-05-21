// Recupération de toutes les infos des canapés à aprtir de l'API
fetch("http://localhost:3000/api/products")
.then (response => response.json ())
.then (data => { affiche (data) })
.catch(error => { console.log("Erreur: ", error)})


// Fonction qui affiche les infos des canapés sur la page d'accueil
function affiche (canapes) {
    const container = document.getElementById ("items") 
    canapes.forEach(element => {
        container.innerHTML += `<a href="./product.html?id=${element._id}">
        <article>
          <img src="${element.imageUrl}" alt="${element.altTxt}">
          <h3 class="productName">${element.name}</h3>
          <p class="productDescription">${element.description}</p>
        </article>
      </a>`  
      console.log(element._id)
    });
}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             






// fetch("http://127.0.0.1:3000/api/products")
// .then (res => res.json ())
// .then (data => { affiche (data) })

// // Fonction qui affiche le nom des canapés
// function affiche (canapes) {

//     console.log (canapes);
//     const container = document.getElementById ("items") 
//     canapes.forEach(element => {
//         container.innerHTML += ``  
//     });
// }
