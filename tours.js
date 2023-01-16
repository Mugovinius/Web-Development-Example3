//nav
const demoMainBtn = document.querySelector(".demo-main-toggle");
const demoBtn = document.querySelector(".demo-toggle");
const pagesMainBtn = document.querySelector(".pages-main-toggle");
const pagesBtn = document.querySelector(".pages-toggle");
const demoMainDropdown = document.querySelector(".toggle-main-demos");
const demoDropdown = document.querySelector(".toggle-demos");
const pagesMainDropdown = document.querySelector(".toggle-main-links");
const pagesDropdown = document.querySelector(".toggle-links");

demoBtn.addEventListener("click", function(){
    demoDropdown.classList.toggle('show-demo-dropdown');
    //pagesDropdown.classList.remove("show-pages-dropdown");
});

pagesBtn.addEventListener("click", function(){
    pagesDropdown.classList.toggle("show-pages-dropdown");
});

demoMainBtn.addEventListener("click", function(){
    demoMainDropdown.classList.toggle("show-main-demo-dropdown");
});

pagesMainBtn.addEventListener("click", function(){
    pagesMainDropdown.classList.toggle("show-main-pages-dropdown");
});
//sidebar
const sidebar = document.querySelector(".sidebar");
const navToggle = document.querySelector(".nav-toggle");

navToggle.addEventListener("click", function(){
    sidebar.classList.toggle('show-sidebar');
});

//tours
const mytours = [
    {
        id:1,
        img: "./images/62b432ef7cff04523655d41c_japan-4287832_1920-p-1600.jpeg",
        name: "Adventures in Japan",
        category: "ASIA",
        price: "$ 950.00 USD"
    },
    {
        id:2,
        img: "./images/62b432bccb9e07bf9b52eea6_madagascar-4601287_1920-p-1600.jpeg",
        name: "Extreme Madagascar",
        category: "AFRICA",
        price: "$ 870.00 USD"
    },
    {
        id:3,
        img: "./images/62b4326a83ddb40ff0c08676_colombia-2462323_1920-p-1600.jpeg",
        name: "Amazing Columbia",
        category: "AMERICA",
        price: "$ 900.00 USD"
    },
    {
        id:4,
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280.jpg",
        name: "Switzerland",
        category: "EUROPE",
        price: "$ 500.00 USD"
    },
    {
        id:5,
        img: "./images/62b1eb7d6343214cb67afe36_lake-4431134_1920.jpg",
        name: "Salerno",
        category: "EUROPE",
        price: "$ 700.00 USD"
    },
    {
        id:6,
        img: "./images/62b1ebe9c19edea8e2ff7137_moorage-1493681_1920.jpg",
        name: "Norway",
        category: "EUROPE",
        price: "$ 800.00 USD"
    }
]

window.addEventListener("DOMContentLoaded", function(){
    displayAllTours(mytours);
    displayPlacesBtns();
});

const myTourContainer = document.querySelector(".tours-container");
const btnHolder = document.querySelector(".btn-container");

function displayAllTours(menuItems){
    let displaymyTours = menuItems.map(function(item){
        return `<div class="tour-member">
        <img src=${item.img} class="tour-pic"/>
        <div class="tour-desc">
            <h3>${item.name}</h3>
            <div class="about-tour">
                <h4>
                    <i class="fa-solid fa-location"></i>
                    ${item.category}
                </h4>
                <h4 id="price">${item.price}</h4>
            </div>
        </div>
    </div>`;
    })
    displaymyTours = displaymyTours.join("");
    myTourContainer.innerHTML = displaymyTours;
}

//buttons
function displayPlacesBtns(){
    const categories = mytours.reduce(function(values,item){
        if (!values.includes(item.category)){
            values.push(item.category);
        }
        return values;
    },
    ['ALL-TOURS']
    );
    const placesBtns = categories.map(function (category){
        return `<button class="filter-btn" type="button" data-id=${category}>${category}</button>`
    })
    .join("");
    btnHolder.innerHTML = placesBtns;
 
    //filter btns
    const filterBtns = document.querySelectorAll(".filter-btn");
filterBtns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const places = (e.currentTarget.dataset.id);
        //console.log(city);
        const placeCategory = mytours.filter(function (placeItem){
            //console.log(cityCategory);
            if (placeItem.category === places){
                return placeItem;
            }
        });
        if (places === "ALL-TOURS"){
            displayAllTours(mytours);
        } else{
            btn.classList.remove("active");
            displayAllTours(placeCategory);
        }
    });
});
}

