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
//header elements
myplaces = [
    {
        id:1,
        img: "./images/62b330421a87a7f39997dddf_diego-jimenez-XHDtPRj535A-unsplash (1) (1) (1)-p-500.jpeg",
        info: "Find excitement wherever you go",
        place: "Switzerland",
        price: "From $500"
    },
    {
        id:2,
        img: "./images/62b1eb7d6343214cb67afe36_lake-4431134_1920 (1).jpg",
        info:"Find your perfect vacation",
        place: "Salerno",
        price: "From $700"
    },
    {
        id:3,
        img: "./images/62b1ebe9c19edea8e2ff7137_moorage-1493681_1920 (1).jpg",
        info: "Visit the beautiful landscapes",
        place: "Norway",
        price: "From $800"
    }
]
//tours categories
const mytours = [
    {
        id:1,
        place: "AFRICA",
        price: "From $700",
        img: "./images/62b592ec9b231ccf93b0daf5_africa-2259939_640-p-500.jpeg"
    },
    {
        id:2,
        place: "ASIA",
        price: "From $700",
        img: "./images/62b593de07b186507467186b_heritage-5430081_640-p-500.jpeg"
    },
    {
        id:3,
        place: "SOUTH AMERICA",
        price: "From $600",
        img: "./images/62b591d8c00c485e6d367ac2_farming-6959629_640-p-500.jpeg"
    },
    {
        id:4,
        place: "EASTERN EUROPE",
        price: "From $450",
        img: "./images/62b58ca59a3cf126e3a1d827_lithuania-912363_640-p-500.jpeg"
    },
    {
        id:5, 
        place: "EUROPE",
        price: "From $800",
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280-p-500.jpeg"
    },
    {
        id:6,
        place: "CENTRAL EUROPE",
        price: "From $700",
        img: "./images/62b5900a9b231c319bb0d243_venice-3183168_640-p-500.jpeg"
    }
]

const popularTours = [
    {
        id:1,
        img: "./images/62b97f115a0db1f5a20f612d_river-5524569_1280-p-500.jpeg",
        name: "River Rafting",
        duration: "8 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$970.00 USD"
    },
    {
        id:2,
        img: "./images/62b97f2f3e2f177a0508c84a_madagascar-4287921_1280-p-500.jpeg",
        name: "Island Life",
        duration: "12 Days",
        criteria: "Exotic",
        age: "16+ Age",
        price: "$870.00 USD"
    },
    {
        id:3,
        img: "./images/62b4326a83ddb40ff0c08676_colombia-2462323_1920-p-1600.jpeg",
        name: "Hobbit Houses",
        duration: "6 Days",
        criteria: "Romantic",
        age: "16+ Age",
        price: "$900.00 USD"
    },
    {
        id:4,
        img: "./images/62b97f88d3bd76e779571000_truebsee-5337646_1280-p-500.jpeg",
        name: "Underwater World",
        duration: "6 Days",
        criteria: "Family",
        age: "14+ Age",
        price: "$500.00 USD"
    },
    {
        id:5,
        img: "./images/62b97fa54046ae3caceee3f9_rome-2151629_1280-p-500.jpeg",
        name: "Travel To The Colosseum",
        duration: "10 Days",
        criteria: "Budget",
        age: "14+ Age",
        price: "$700.00USD"
    },
    {
        id:6,
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280-p-500.jpeg",
        name: "Rafting The Waterfall",
        duration: "9 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$800.00USD"
    },
    {
        id:7,
        img: "./images/62b97fdf26df60664404dd7d_beach-429749_1280-p-500.jpeg",
        name: "Vilnius, Lithuania",
        duration: "6 Days",
        criteria: "Family",
        age: " 16+ Age",
        price: "$700.00 USD"
    },
    {
        id:8,
        img: "./images/62b97f115a0db1f5a20f612d_river-5524569_1280-p-500.jpeg",
        name: "Adventures in Japan",
        duration: "8 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$970.00 USD"
    },
    {
        id:9,
        img: "./images/62b97f2f3e2f177a0508c84a_madagascar-4287921_1280-p-500.jpeg",
        name: "Extreme Madagascar",
        duration: "12 Days",
        criteria: "Exotic",
        age: "16+ Age",
        price: "$870.00 USD"
    },
    {
        id:10,
        img: "./images/62b4326a83ddb40ff0c08676_colombia-2462323_1920-p-1600.jpeg",
        name: "Amazing Columbia",
        duration: "6 Days",
        criteria: "Romantic",
        age: "16+ Age",
        price: "$900.00 USD"
    },
    {
        id:11,
        img: "./images/62b97f88d3bd76e779571000_truebsee-5337646_1280-p-500.jpeg",
        name: "Switzerland",
        duration: "6 Days",
        criteria: "Family",
        age: "14+ Age",
        price: "$500.00 USD"
    },
    {
        id:12,
        img: "./images/62b97fa54046ae3caceee3f9_rome-2151629_1280-p-500.jpeg",
        name: "Salerno",
        duration: "10 Days",
        criteria: "Budget",
        age: "14+ Age",
        price: "$700.00USD"
    },
    {
        id:13,
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280-p-500.jpeg",
        name: "Norway",
        duration: "9 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$800.00USD"
    },
    {
        id:14,
        img: "./images/62b97fdf26df60664404dd7d_beach-429749_1280-p-500.jpeg",
        name: "Aristocratic Lithuania",
        duration: "6 Days",
        criteria: "Family",
        age: " 16+ Age",
        price: "$700.00 USD"
    }
]

//comments
const mycomments = [
    {
        id:1,
        place: "Colourful India",
        img: "./images/person1.jpg",
        name: "Raymon Thomas",
        job: "/Marketer"
    },
    {
        id:2,
        place: "Yangshuo Mist",
        img: "./images/person2.jpg",
        name: "Tasha Stewart",
        job: "/Manager"
    },
    {
        id:3,
        place: "Miami Beach",
        img: "./images/person3.jpg",
        name: "Jacob Jones",
        job: "/Front-end Developer"
    },
    {
        id:4,
        place: "Amazing Mexico",
        img: "./images/person4.jpg",
        name: "Ariana Muthii",
        job: "/CEO"
    },
    {
        id:5,
        place: "Charming Singapore",
        img: "./images/person5.jpg",
        name: "Ann Gates",
        job: "/Accountant"
    },
    {
        id:6,
        place: "Exotic Columbia",
        img: "./images/person6.jpg",
        name: "Alex Muthii",
        job: "/Managing-Partner"
    }
]
//select items

const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const myimg = document.querySelector(".switz");
const mytext = document.getElementById('info');
const ourplace = document.getElementById('nation');
const myprice = document.querySelector(".price");

//set starting item
let firstItem = 0;
//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPlaces();
});
function showPlaces(){
    const item = myplaces[firstItem];
    myimg.src= item.img;
    mytext.textContent = item.info;
    ourplace.textContent = item.place;
    myprice.textContent = item.price;
}
//next item
nextBtn.addEventListener('click', function(){
    firstItem++;
    if (firstItem > myplaces.length - 1){
        firstItem = 0;
    }
    showPlaces();
});
//show previous item
prevBtn.addEventListener('click', function(){
    firstItem--;
    if (firstItem < 0){
        firstItem = myplaces.length - 1;
    }
    showPlaces();
});

//tours
const tourContainer = document.querySelector(".tour-container");
const tourNextBtn = document.querySelector(".tour-right");
const tourPrevBtn = document.querySelector(".tour-left");
let currentItems = 0;

window.addEventListener("DOMContentLoaded", function(){
    if (this.window.innerWidth <=555){
        miniWidth();
    }else{
        console.log(window.innerWidth);
        displayNextThree();
    }
    displayPopularTours(popularTours);
});
function displayNext(menuItems){
    let displayMenu = menuItems.map(function(item){
        return `<div class="tour1">
        <img src=${item.img} class="pic-tour"/>
        <div class="tour-price">${item.price}</div>
        <br>
        <a href="#">
            <i class="fas fa-square fa-2x"></i> 
            ${item.place}
        </a>
        <p>Our travels are different from all the others! We love our business and want to see happy customers,
            so we always do our best for your comfort!
        </p>
        <button class="more">READ MORE</button>
    </div>`;
    });
    displayMenu = displayMenu.join("");
    tourContainer.innerHTML = displayMenu;
}

const displayNextThree = () => {
    displayNext(mytours.slice(currentItems, currentItems + 3));
}
const displayPrevThree = () => {
    displayNext(mytours.slice(currentItems,currentItems - 3));
}
const miniWidth = () => {
    displayNext(mytours.slice(currentItems,currentItems + 1));
}
//displayNextThree();
tourNextBtn.addEventListener("click",function(){
    if (window.innerWidth <= 555){
        currentItems++;
        if (currentItems > mytours.length - 1){
            currentItems = 0;
        }
        miniWidth();
    }else{
        currentItems+=3;
        if (currentItems + 3 > mytours.length){
            currentItems = 0;
        }
        displayNextThree();
    }
});
tourPrevBtn.addEventListener("click", function(){
    if (window.innerWidth <= 555){
        currentItems--;
        if (currentItems < 0){
            currentItems = mytours.length - 1;
        }
        miniWidth();
    }else{
        currentItems-=3;
        if (currentItems < 0){
            currentItems = mytours.length - 3;
        }
        displayNextThree();
    }
});

//popular tours
const tourContainer1 = document.querySelector(".tour-container1");

function displayPopularTours(tourItems){
    let displayPopular = tourItems.map(function(item){
        return `<div class="tour2">
        <img src=${item.img} class="pic-tour1"/>
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
        <div class="info">
            <div class="duration">${item.duration}</div>
            <div class="criteria">${item.criteria}</div>
            <div class="age">${item.age}</div>
        </div>
        <div class="more-info">
            <h2>${item.price}</h2>
            <p>Our travels are different from all the others! We love our business and want to see happy customers,
                so we always do our best for your comfort!
            </p>
            <button>ADD TO CART</button>
        </div>
    </div>`;
    });
    displayPopular = displayPopular.join("");
    tourContainer1.innerHTML = displayPopular;
}
//comments
const commentsContainer = document.querySelector(".comments-container");
const commentNextBtn = document.querySelector(".comments-right");
const commentPrevBtn = document.querySelector(".comments-left");
let commentsItems = 0;

function displayAllComments(commentsMenu){
    let displayComments = commentsMenu.map(function(item){
        return `<div class="comments">
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
        <h2>${item.place}</h2>
        <p>Everything was seamless. The private guides were interesting and knowledgeable.
            We felt that they were more than just guides. It was like we had a friend in each city.
        </p>
        <div class="comments-person">
            <img src=${item.img} class="comments-pic"/>
            <div>
                <h3>${item.name}</h3>
                <p>${item.job}</p>
            </div>
        </div>
    </div>`;
    });
    displayComments = displayComments.join("");
    commentsContainer.innerHTML = displayComments;
}
const displayCommentsNThree = () => {
    displayAllComments(mycomments.slice(commentsItems, commentsItems + 3));
}
const displayCommentsPThree = () => {
    displayAllComments(mycomments.slice(commentsItems,commentsItems - 3));
}
const smallerWidth = () => {
    displayAllComments(mycomments.slice(commentsItems,commentsItems + 1));
}
//displayNextThree();
commentNextBtn.addEventListener("click",function(){
    if (window.innerWidth <= 555){
        commentsItems++;
        if (commentsItems > mycomments.length - 1){
            commentsItems = 0;
        }
        smallerWidth();
    }else{
        commentsItems+=3;
        if (commentsItems + 3 > mycomments.length){
            commentsItems = 0;
        }
        displayCommentsNThree();
    }
});
commentPrevBtn.addEventListener("click", function(){
    if (window.innerWidth <= 555){
        commentsItems--;
        if (commentsItems < 0){
            commentsItems = mycomments.length - 1;
        }
        smallerWidth();
    }else{
        commentsItems-=3;
        if (commentsItems < 0){
            commentsItems = mycomments.length - 3;
        }
        displayCommentsNThree();
    }
});
window.addEventListener("DOMContentLoaded", function(){
    if (this.window.innerWidth <=555){
        smallerWidth();
    }else{
        console.log(window.innerWidth);
        displayCommentsNThree();
    }
});