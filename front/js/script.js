fetch("http://127.0.0.1:3000/api/products")
.then (res => res.json ())
.then (data => { affiche (data) })

// Fonction qui affiche le nom des canapés
function affiche (canapes) {

    console.log (canapes);
    const container = document.getElementById ("items") 
    canapes.forEach(element => {
        container.innerHTML += `<a href="./product.html?id=42">
        <article>
          <img src="${element.imageUrl}" alt="${element.altTxt}">
          <h3 class="productName">${element.name}</h3>
          <p class="productDescription">${element.description}</p>
        </article>
      </a>`  
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
