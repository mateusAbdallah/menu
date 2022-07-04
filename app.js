const menu = [
    {
        id: 1,
        title: "Super breakfast",
        category: "Breakfast",
        price: 14.99,
        img: "./images/breakfast1.jpg",
        desc: "Pão integral, pasta de azeitona, tomate seco, queijos e azeitona e suco de laranja.",
    },
    {
        id: 2,
        title: "Delicious breakfast",
        category: "Breakfast",
        price: 14.99,
        img: "./images/breakfast2.jpg",
        desc: "Pão integral, pasta de ricota e pasta de grão de bico e frutas tropicais.",
    },
    {
        id: 3,
        title: "Delicious pancake",
        category: "Breakfast",
        price: 14.99,
        img: "./images/breakfast3.jpg",
        desc: "Panquecas com mel e frutas vermelhas.",
    },
    {
        id: 4,
        title: "Super waffle",
        category: "Breakfast",
        price: 14.99,
        img: "./images/breakfast4.jpg",
        desc: "Delicioso waffle com amoras.",
    },
    {
        id: 5,
        title: "Ice cream",
        category: "Dessert",
        price: 14.99,
        img: "./images/dessert1.jpg",
        desc: "Delicioso bolo de sorvete com doce de leite e biscoito de maizena.",
    },
    {
        id: 6,
        title: "Red velvet",
        category: "Dessert",
        price: 14.99,
        img: "./images/dessert2.jpg",
        desc: "Experiência única. Bolo red velvet fenomenal.",
    },
    {
        id: 7,
        title: "Salmão",
        category: "Dinner",
        price: 14.99,
        img: "./images/dinner1.jpg",
        desc: "Salmão grelhado com legumes no vapor.",
    },
    {
        id: 8,
        title: "Pasta",
        category: "Dinner",
        price: 14.99,
        img: "./images/dinner2.jpg",
        desc: "Tradicional pasta italiana.",
    },
    {
        id: 9,
        title: "Espeto e porção",
        category: "Lunch",
        price: 14.99,
        img: "./images/lunch1.jpg",
        desc: "Espeto de frango com batata frita.",
    },
    {
        id: 10,
        title: "Sanduíche",
        category: "Lunch",
        price: 14.99,
        img: "./images/lunch2.jpg",
        desc: "Suculento sanduíche com carne, tomate, queijo, cebola e pickles.",
    },
    {
        id: 11,
        title: "Lasanha",
        category: "Lunch",
        price: 14.99,
        img: "./images/lunch3.jpg",
        desc: "Lasanha de carne com bastante queijo.",
    },
    {
        id: 12,
        title: "Arroz de Vó",
        category: "Lunch",
        price: 14.99,
        img: "./images/lunch4.jpg",
        desc: "Arroz de forno com ovo.",
    },
];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function(){
    let displayMenu = menu.map(function(item){
        return `<article class="menu-item">
                    <img src=${item.img} alt=${item.title} class="photo">
                    <div class="item-info">
                        <header>
                            <h4>${item.title}</h4>
                            <h4 class="price">$${item.price}</h4>
                        </header>
                        <p class="item-text">
                            ${item.desc}
                        </p>
                    </div>
                </article>`
    });
    displayMenu = displayMenu.join("");
    sectionCenter.innerHTML = displayMenu;
})