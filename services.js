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

const ourplaces = [
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

//places
const directionsContainer = document.querySelector(".directions-container");

window.addEventListener("DOMContentLoaded", function(){
    if (this.window.innerWidth <=555){
        miniWidth();
    }else{
        displayNextThree();
    }
    displayAllPlaces(ourplaces);
});

function displayAllPlaces(menuItems){
    let displayPlaces = menuItems.map(function(item){
        return `<div class="directions-member">
        <img src=${item.img} class="directions-pic"/>
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
        <div class="dir-desc">
            <p>${item.duration}</p>
            <p>${item.criteria}</p>
            <p>${item.age}</p>
        </div>
        <div class="about-dir">
            <h2>${item.price}</h2>
            <p>Our travels are different from all the others.
                We love our business and want to see happy 
                customers, so we always do our best for your comfort!
            </p>
            <button class="dir-cart">ADD TO CART</button>
        </div>
    </div>`;
    });
    displayPlaces = displayPlaces.join("");
    directionsContainer.innerHTML = displayPlaces;
}

//comments
const commentsContainer = document.querySelector(".comments-container");
const prevBtn = document.querySelector(".comments-left");
const nextBtn = document.querySelector(".comments-right");
let commentsno = 0;

function displayAlLComments(commentsItems){
    let displayComments = commentsItems.map(function(item){
        return `<!--single item-->
        <div class="comments-member">
            <div class="ratings">
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
            <h2>${item.place}</h2>
            <p>Everything was seamless. The private guides were interesting and knowledgeable.
                We felt that they were more than just guides. It was like we had a friend in each city.
            </p>
            <div class="personell">
                <img src=${item.img} class="comments-pic"/>
                <div>
                    <h3>${item.name}</h3>
                    <h4>${item.job}</h4>
                </div>
            </div>
        </div>`;
    });
    displayComments = displayComments.join("");
    commentsContainer.innerHTML = displayComments;
}

const displayNextThree = () => {
    displayAlLComments(mycomments.slice(commentsno, commentsno + 3));
}
const displayPrevThree = () => {
    displayAlLComments(mycomments.slice(commentsno, commentsno - 3));
}
const miniWidth = () => {
    displayAlLComments(mycomments.slice(commentsno, commentsno + 1));
}

prevBtn.addEventListener("click", function(){
    if (window.innerWidth <= 555){
        commentsno--;
        if (commentsno < 0){
            commentsno = mycomments.length - 1;
        }
        miniWidth();
    }else{
        commentsno-=3;
        if (commentsno < 0){
            commentsno = mycomments.length - 3;
        }
        displayNextThree();
    }
});

nextBtn.addEventListener("click", function(){
    if (window.innerWidth <= 555){
        commentsno++;
        if (commentsno > mycomments.length - 1){
            commentsno = 0;
        }
        miniWidth();
    }else{
        commentsno+=3;
        if (commentsno + 3 > mycomments.length){
            commentsno = 0;
        }
        displayNextThree();
    }
});