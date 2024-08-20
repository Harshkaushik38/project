 let products ={

    data:[
        {
        productName:"Regular white T-shirt",
        category:"Topwear",
        price:"300",
        image:"white-addidas tshirt.webp"
    },
    {
        productName:"Beige Short SKirt",
        category:"Bottomwear",
        price:"35",
        image:"bottomwear.webp"
    },
    {
        productName:"Sporty Smartwatch",
        category:"Watch",
        price:"300",
        image:"smartwatch.webp"
    }, {
        productName:"Basic knitted Top",
        category:"",
        price:"300",
        image:"jacket.webp",
    },
    {
        productName:"Basic knitted Top",
        category:"",
        price:"300",
        image:"jacket.webp",
    },
    {
        productName:"Basic knitted Top",
        category:"",
        price:"300",
        image:"jacket.webp",
    },
    {
        productName:"Basic knitted Top",
        category:"",
        price:"300",
        image:"jacket.webp",
    },
    {
        productName:"Basic knitted Top",
        category:"",
        price:"300",
        image:"jacket.webp",
    },

],
 };


 for (let i of products.data) {
// create card
    let card = document.createElement("div");
    //card should have category
    card.classList.add("card","i.category");
    //image div
    let imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    //img tag
    let image = document.createElement("img");
    image.setAttribute("src",i.image);
    imgContainer.appendChild(image);
    card.appendChild(imgContainer);
    //container
    let container = document.createElement("div");
    container.classList.add("container");
    //product name
    let name = document.createElement("h5");
    name.classList.add("product-name");
    name.innerText =i.productName.toUpperCase();
    container.appendChild(name);
// //price
let price =document.createElement("h6");webkitURL
price.innerText= "$" + i.price;
container.appendChild(price);

    card.appendChild(container);
    document.getElementById("products").appendChild(card);

 }
