const Wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
    {
        id: 1,
        title: "Sneaker",
        price: 200,
        colors: [
            {
                code: "green",
                img: "./img/shoe.png"
            },
            {
                code: "gray",
                img: "./img/Blue-2.jpg"
            },
        ],

    },
    {
        id: 2,
        title: "Air Force",
        price: 199,
        colors: [
            {
                code: "purple",
                img: "./img/shoe.png"
            },
            {
                code: "darkblue",
                img: "./img/shoe.png"
            },
        ],

    },
    {
        id: 3,
        title: "T Shirt",
        price: 300,
        colors: [
            {
                code: "black",
                img: "./img/shoe.png"
            },
            {
                code: "darkblue",
                img: "./img/shoe.png"
            },
        ],

    },
    {
        id: 4,
        title: "Trouser",
        price: 80,
        colors: [
            {
                code: "yellow",
                img: "./img/shoe.png"
            },
            {
                code: "darkblue",
                img: "./img/shoe.png"
            },
        ],

    },
    {
        id: 5,
        title: "Pams",
        price: 30,
        colors: [
            {
                code: "black",
                img: "./img/shoe.png"
            },
            {
                code: "darkblue",
                img: "./img/shoe.png"
            },
        ],

    },

]


let chooseProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSize = document.querySelectorAll(".size");

menuItems.forEach((item, index)=>{
    item.addEventListener("click", () => {
        //change the current side
    Wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choose product
    chooseProduct = products[index];

    //change text of currentProduct
    currentProductTitle.textContent = chooseProduct.title;
    currentProductPrice.textContent = "$" + chooseProduct.price;
    currentProductImg.src = chooseProduct.colors[0].img;
    
    //assign new colors
    currentProductColors.forEach((color,index) =>{
     color.style.backgroundColor = chooseProduct.colors[index].code;
    });
    });
});


currentProductColors.forEach((color,index)=>{
 color.addEventListener("click", ()=>{
    currentProductImg.src = chooseProduct.colors[index].img;
 })
});

currentProductSize.forEach((size)=>{
    size.addEventListener("click", ()=>{
        currentProductSize.forEach(size=>{
     size.style.backgroundColor= "white",
     size.style.color= "black"
        });
     size.style.backgroundColor= "black",
     size.style.color= "white"

    });
});


const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", ()=>{
    payment.style.display="flex"
})
close.addEventListener("click", ()=>{
    payment.style.display="none"
})


