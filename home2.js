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

//places
const myplaces = [
    {
        id:1,
        img: "./images/62b432ef7cff04523655d41c_japan-4287832_1920-p-1600.jpeg",
        info: "Enjoy incredible pleasure",
        place: "Adventures In Japan"
    },
    {
        id:2, 
        img: "./images/62b432bccb9e07bf9b52eea6_madagascar-4601287_1920-p-1600.jpeg",
        info: "Travel and spend time actively",
        place: "Extreme Madagascar"
    },
    {
        id:3,
        img: "./images/62b4326a83ddb40ff0c08676_colombia-2462323_1920-p-1600.jpeg",
        info: "Get incredible pleasure with us",
        place: "Amazing Colombia"
    }
]
//popular tours
const popularTours = [
    {
        id:1,
        img: "./images/62b593de07b186507467186b_heritage-5430081_640-p-500.jpeg",
        name: "Old Castle of Kas Himeji, Yokohama, Japan",
        duration: "8 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$970.00 USD"
    },
    {
        id:2,
        img: "./images/62b592ec9b231ccf93b0daf5_africa-2259939_640-p-500.jpeg",
        name: "Brittany Canoe Beach, Madagascar",
        duration: "12 Days",
        criteria: "Exotic",
        age: "16+ Age",
        price: "$870.00 USD"
    },
    {
        id:3,
        img: "./images/62b591d8c00c485e6d367ac2_farming-6959629_640-p-500.jpeg",
        name: "Farm Colombian Coffee, Colombia",
        duration: "6 Days",
        criteria: "Romantic",
        age: "16+ Age",
        price: "$900.00 USD"
    },
    {
        id:4,
        img: "./images/zurich.jpeg",
        name: "Zurich, Switzerland",
        duration: "6 Days",
        criteria: "Family",
        age: "14+ Age",
        price: "$500.00 USD"
    },
    {
        id:5,
        img: "./images/62b5900a9b231c319bb0d243_venice-3183168_640-p-500.jpeg",
        name: "Venice, Beautiful Grand Canal, Italy",
        duration: "10 Days",
        criteria: "Budget",
        age: "14+ Age",
        price: "$700.00 USD"
    },
    {
        id:6,
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280.jpg",
        name: "Waterfall, Green Canyon Norway",
        duration: "9 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$800.00 USD"
    },
    {
        id:7,
        img: "./images/62b58ca59a3cf126e3a1d827_lithuania-912363_640-p-500.jpeg",
        name: "Ancient Castle, Suburban, Lithuania",
        duration: "6 Days",
        criteria: "Family",
        age: "16+ Age",
        price: "$700.00 USD"
    },
    {
        id:8,
        img: "./images/62b593de07b186507467186b_heritage-5430081_640-p-500.jpeg",
        name: "Old Castle of Kas Himeji, Yokohama, Japan",
        duration: "8 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$970.00 USD"
    },
    {
        id:9,
        img: "./images/62b592ec9b231ccf93b0daf5_africa-2259939_640-p-500.jpeg",
        name: "Brittany Canoe Beach, Madagascar",
        duration: "12 Days",
        criteria: "Exotic",
        age: "16+ Age",
        price: "$870.00 USD"
    },
    {
        id:10,
        img: "./images/62b591d8c00c485e6d367ac2_farming-6959629_640-p-500.jpeg",
        name: "Farm Colombian Coffee, Colombia",
        duration: "6 Days",
        criteria: "Romantic",
        age: "16+ Age",
        price: "$900.00 USD"
    },
    {
        id:11,
        img: "./images/zurich.jpeg",
        name: "Zurich, Switzerland",
        duration: "6 Days",
        criteria: "Family",
        age: "14+ Age",
        price: "$500.00 USD"
    },
    {
        id:12,
        img: "./images/62b5900a9b231c319bb0d243_venice-3183168_640-p-500.jpeg",
        name: "Venice, Beautiful Grand Canal, Italy",
        duration: "10 Days",
        criteria: "Budget",
        age: "14+ Age",
        price: "$700.00 USD"
    },
    {
        id:13,
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280.jpg",
        name: "Waterfall, Green Canyon Norway",
        duration: "9 Days",
        criteria: "Adventure",
        age: "16+ Age",
        price: "$800.00 USD"
    },
    {
        id:14,
        img: "./images/62b58ca59a3cf126e3a1d827_lithuania-912363_640-p-500.jpeg",
        name: "Ancient Castle, Suburban, Lithuania",
        duration: "6 Days",
        criteria: "Family",
        age: "16+ Age",
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
        name: "Ariana Mugo",
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

//guides
const myguides = [
    {
        id:1,
        img: "./images/person8.jpg",
        name: "Jennie Bennet",
        job: "Tourist Guide"
    },
    {
        id:2,
        img: "./images/person2.jpg",
        name: "Tasha Stewart",
        job: "Tourist Guide"
    },
    {
        id:3,
        img: "./images/person3.jpg",
        name: "Jacob Jones",
        job: "Tourist Guide"
    },
    {
        id:4,
        img: "./images/person7.jpg",
        name: "Guy Hawkins",
        job: "Tourist Guide"
    },
    {
        id:5,
        img: "./images/person5.jpg",
        name: "Ann Gates",
        job: "Tourist Guide"
    },
    {
        id:6,
        img: "./images/person6.jpg",
        name: "Alex Muthii",
        job: "Tourist Guide"
    }
]
//header
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const myimg = document.querySelector(".switz");
const mytext = document.getElementById('info');
const ourplace = document.getElementById('nation');

let firstItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPlaces();
    displayPopularTours(popularTours);
});
function showPlaces(){
    const item = myplaces[firstItem];
    myimg.src= item.img;
    mytext.textContent = item.info;
    ourplace.textContent = item.place;
}
//next
nextBtn.addEventListener('click', function(){
    firstItem++;
    if (firstItem > myplaces.length - 1){
        firstItem = 0;
    }
    showPlaces();
});
//prev
prevBtn.addEventListener('click', function(){
    firstItem--;
    if (firstItem < 0){
        firstItem = myplaces.length -1;
    }
    showPlaces();
});
//popular tours
const popularContainer = document.querySelector(".tour-container1");

function displayPopularTours(menuItems){
    let myPopular = menuItems.map(function(item){
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
    myPopular = myPopular.join("");
    popularContainer.innerHTML = myPopular;
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
//tabs
const travelCriteria = document.querySelector(".travel-container");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

travelCriteria.addEventListener('click', function (e){
    const id = e.target.dataset.id;
    if (id) {
        //remove selected from other buttons
        btns.forEach(function (btn) {
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        //hide other articles
        articles.forEach(function (article) {
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});
//guides
const guideContainer = document.querySelector(".guides-container");
const guidePrevBtn = document.querySelector(".guide-left");
const guideNextBtn = document.querySelector(".guide-right");
let currentItems = 0;
//functions
function displayNext(guideItems){
    let ourGuides = guideItems.map(function(item){
        return `<div class="guide-items">
        <img src=${item.img} class="pic-guide"/>
        <div class="social-media">
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-twitter"></i>
        </div>
        <h2>${item.name}</h2>
        <p>${item.job}</p>
    </div>`;
    });
    ourGuides = ourGuides.join("");
    guideContainer.innerHTML = ourGuides;
}
const displayNextThree = () => {
    displayNext(myguides.slice(currentItems, currentItems + 3));
}
const displayPrevThree = () => {
    displayNext(myguides.slice(currentItems,currentItems - 3));
}
const miniWidth = () => {
    displayNext(myguides.slice(currentItems,currentItems + 1));
}
//displayNextThree();
guideNextBtn.addEventListener("click",function(){
    if (window.innerWidth <= 555){
        currentItems++;
        if (currentItems > myguides.length - 1){
            currentItems = 0;
        }
        miniWidth();
    }else{
        currentItems+=3;
        if (currentItems + 3 > myguides.length){
            currentItems = 0;
        }
        displayNextThree();
    }
});
guidePrevBtn.addEventListener("click", function(){
    if (window.innerWidth <= 555){
        currentItems--;
        if (currentItems < 0){
            currentItems = myguides.length - 1;
        }
        miniWidth();
    }else{
        currentItems-=3;
        if (currentItems < 0){
            currentItems = myguides.length -3;
        }
        displayNextThree();
    }
});

window.addEventListener("DOMContentLoaded", function(){
    if (this.window.innerWidth <=555){
        miniWidth();
    }else{
        console.log(window.innerWidth);
        displayNextThree();
    }
});