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
const alltours =[
    {
        id:1,
        img: "./images/62b432ef7cff04523655d41c_japan-4287832_1920-p-1600.jpeg",
        name: "Adventures in Japan",
        duration: "8 Days",
        category: "Adventure",
        age: "16+ Age",
        price: "$ 950.00 USD"
    },
    {
        id:2,
        img: "./images/62b1ebe9c19edea8e2ff7137_moorage-1493681_1920.jpg",
        name: "Norway",
        duration: "9 Days",
        category: "Adventure",
        age: "16+ Age",
        price: "$ 800.00 USD"
    },
    {
        id:3,
        img: "./images/62b4320dcd21024307a97adb_trakai-castle-2719711_1920-p-1600.jpeg",
        name: "Aristocratic Lithuania",
        duration: "6 Days",
        category: "Family",
        age: "14+ Age",
        price: "$ 700.00 USD"
    },
    {
        id:4,
        img: "./images/62b97f115a0db1f5a20f612d_river-5524569_1280-p-500.jpeg",
        name: "River Rafting",
        duration: "8 Days",
        category: "Adventure",
        age: "16+ Age",
        price: "$ 900.00 USD"
    },
    {
        id:5,
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280.jpg",
        name: "Rafting The Waterfall",
        duration: "9 Days",
        category: "Adventure",
        age: "16+ Age",
        price: "$ 800.00 USD"
    },
    {
        id:6,
        img: "./images/62b97fdf26df60664404dd7d_beach-429749_1280.jpg",
        name: "Vilnius, Lithuania",
        duration: "6 Days",
        category: "Family",
        age: "16+ Age",
        price: "$ 700.00 USD"
    },
    {
        id:7,
        img: "./images/62b593de07b186507467186b_heritage-5430081_640-p-500.jpeg",
        name: "Old Castle of Kas Himeji,Yokohama,Japan",
        duration: "8 Days",
        category: "Adventure",
        age: "16+ Age",
        price: "$ 950.00 USD"
    },
    {
        id:8,
        img: "./images/62b58cc291356d364dbf6188_waterfall-3723422_640-p-500.jpeg",
        name: "Waterfall, Green Canyon, Norway",
        duration: "9 Days",
        category: "Adventure",
        age: "16+ Age",
        price: "$ 800.00 USD"
    },
    {
        id:9,
        img: "./images/62b58ca59a3cf126e3a1d827_lithuania-912363_640-p-500.jpeg",
        name: "Ancient Castle, Suburban, Lithuania",
        duration: "6 Days",
        category: "Family",
        age: "14+ Age",
        price: "$ 700.00 USD"
    },
    {
        id:10,
        img: "./images/62b1eb7d6343214cb67afe36_lake-4431134_1920.jpg",
        name: "Salerno",
        duration: "10 Days",
        category: "Budget",
        age: "14+ Age",
        price: "$ 700.00 USD"
    },
    {
        id:11,
        img: "./images/62b330421a87a7f39997dddf_diego-jimenez-XHDtPRj535A-unsplash.jpg",
        name: "Switzerland",
        duration: "6 Days",
        category: "Family",
        age: "14+ Age",
        price: "$ 500.00 USD"
    },
    {
        id:12,
        img: "./images/62b4326a83ddb40ff0c08676_colombia-2462323_1920-p-1600.jpeg",
        name: "Amazing Columbia",
        duration: "6 Days",
        category: "Romantic",
        age: "16+ Age",
        price: "$ 900.00 USD"
    },
    {
        id:13,
        img: "./images/62b97fa54046ae3caceee3f9_rome-2151629_1280-p-500.jpeg",
        name: "Travel To The Colosseum",
        duration: "10 Days",
        category: "Budget",
        age: "14+ Age",
        price: "$ 700.00 USD"
    },
    {
        id:14,
        img: "./images/62b97f88d3bd76e779571000_truebsee-5337646_1280.jpg",
        name: "Underwater World",
        duration: "6 Days",
        category: "Family",
        age: "14+ Age",
        price: "$ 500.00 USD"
    },
    {
        id:15,
        img: "./images/62b97f4aa833910563251cb9_colombia-2462346_1280-p-500.jpeg",
        name: "Hobbit Houses",
        duration: "6 Days",
        category: "Romantic",
        age: "16+ Age",
        price: "$ 900.00 USD"
    },
    {
        id:16,
        img: "./images/62b5900a9b231c319bb0d243_venice-3183168_640-p-500.jpeg",
        name: "Venice, Beautiful Grand Canal, Italy",
        duration: "10 Days",
        category: "Budget",
        age: "14+ Age",
        price: "$ 700.00 USD"
    },
    {
        id:17,
        img: "./images/62c68fb17979bb5d1ed91569_water-3161063_1920-p-500.jpeg",
        name: "Zurich, Swizterland",
        duration: "6 Days",
        category: "Family",
        age: "14+ Age",
        price: "$ 500.00 USD"
    },
    {
        id:18,
        img: "./images/62b591d8c00c485e6d367ac2_farming-6959629_640-p-500.jpeg",
        name: "Farm Colombian Coffee, Colombia",
        duration: "6 Days",
        category: "Romantic",
        age: "16+ Age",
        price: "$ 900.00 USD"
    }
]

const tourContainer = document.querySelector(".tour-container");
window.addEventListener("DOMContentLoaded", function(){
    displayMyTours(alltours);
});

function displayMyTours(tourItems){
    let mytours = tourItems.map(function(item){
        return `<!--single item-->
        <div class="my-tour">
            <img src=${item.img} class="tour-pic"/>
            <div class="desc">
                <h2>${item.name}</h2>
                <span class="fa-stack fa-1x" style="--fa-inverse:#fbff2b;">
                    <i class="fa fa-star fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </span>
                <span class="fa-stack fa-1x" style="--fa-inverse: #fbff2b;">
                    <i class="fa fa-star fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </span>
                <span class="fa-stack fa-1x" style="--fa-inverse: #fbff2b;">
                    <i class="fa fa-star fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </span>
                <span class="fa-stack fa-1x" style="--fa-inverse: #fbff2b;">
                    <i class="fa fa-star fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </span>
                <span class="fa-stack fa-1x" style="--fa-inverse: #fbff2b;">
                    <i class="fa fa-star fa-stack-1x fa-inverse" aria-hidden="true"></i>
                </span>
            </div>
            <div class="tour-desc">
                <p>${item.duration}</p>
                <p>${item.category}</p>
                <p>${item.age}</p>
            </div>
            <div class="about-tour">
                <h2>${item.price}</h2>
                <p>Our travels are different from all the others! We love our business and want to see happy customers, so we always do our best for your comfort!</p>
                <button class="add-cart">ADD TO CART</button>
            </div>
        </div>`;
    });
    mytours = mytours.join("");
    tourContainer.innerHTML = mytours;
}