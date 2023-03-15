fetch("http://127.0.0.1:3000/api/products")
.then (res => res.json ())
.then (data => { affiche (data) })


function affiche (canapes) {

    console.log (canapes)
    const section = document.getElementById ("items") 
    canapes.forEach(element => {
        section.innerHTML += `<h3>${element.name}</h3>`  
    });
}
