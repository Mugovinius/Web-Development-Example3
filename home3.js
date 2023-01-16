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
        img: "./images/62b97fdf26df60664404dd7d_beach-429749_1280.jpg",
        info: "Let's explore the world together",
        place: "Travel With Steppi"
    },
    {
        id:2, 
        img: "./images/62b97fc05b15f4055e10d3e5_waterfall-5838582_1280.jpg",
        info: "Visit the beautiful landscapes",
        place: "Discover New Ways"
    },
    {
        id:3,
        img: "./images/62b97f88d3bd76e779571000_truebsee-5337646_1280.jpg",
        info: "Find Excitement Wherever You Go",
        place: "Make New Discoveries"
    }
]
//travels
const mytravels = [
    {
        id:1,
        img1: "./images/62c44c51a41e2eb8fc6b0f8f_china-5017648_640.jpg",
        header: "Travel Through The Carpathians",
        duration: "6 Days",
        img2: "./images/person2.jpg",
        name: "Tasha Stewart",
        category: "hiking"
    },
    {
        id:2,
        img1: "./images/62c44c52214ae02a7c05ca61_hallstatt-3609863_640.jpg",
        header: "Trip Through The Alps",
        duration: "5 Days",
        img2: "./images/person7.jpg",
        name: "Guy Hawkins",
        category: "hiking"
    },
    {
        id:3,
        img1: "./images/62c44c52ba7addf80c6d9d43_central-park-1804588_640.jpg",
        header: "Travel Through The Dolomites",
        duration: "4 Days",
        img2: "./images/person5.jpg",
        name: "Ann Gates",
        category: "hiking"
    },
    {
        id:4,
        img1: "./images/62b6cc073606cfe39b9e1d09_sea-2559826_1280-p-500.jpeg",
        header: "Rafting On Nesamovty Lake",
        duration: "3 Days",
        img2: "./images/person2.jpg",
        name: "Tasha Stewart",
        category: "rafting"
    },
    {
        id:5,
        img1: "./images/62c42eaf84131b2f867b25a5_felix-rostig-UmV2wr-Vbq8-unsplash-p-500.jpeg",
        header: "Rafting On Lake Cheremosh",
        duration: "6 Days",
        img2: "./images/person7.jpg",
        name: "Guy Hawkins",
        category: "rafting"
    },
    {
        id:6,
        img1: "./images/62b5900a9b231c319bb0d243_venice-3183168_640-p-500.jpeg",
        header: "Rafting On Lake Teteriv",
        duration: "9 Days",
        img2: "./images/person5.jpg",
        name: "Ann Gates",
        category: "rafting"
    },
    {
        id:7,
        img1: "./images/62c42eae57caff8720f77721_omar-lopez-0-uzdU3gUYw-unsplash-p-500.jpeg",
        header: "Trekking Through Europe",
        duration: "16 Days",
        img2: "./images/person2.jpg",
        name: "Tasha Stewart",
        category: "tracking"
    },
    {
        id:8,
        img1: "./images/62b97fdf26df60664404dd7d_beach-429749_1280-p-500.jpeg",
        header: "Research Of the Iberian Peninsula",
        duration: "14 Days",
        img2: "./images/person7.jpg",
        name: "Guy Hawking",
        category: "tracking"
    },
    {
        id:9,
        img1: "./images/62c42eafecf05141c4f4b1a6_helena-lopes-e3OUQGT9bWU-unsplash-p-500.jpeg",
        header: "Trekking Through The Atlantic Islands",
        duration: "10 Days",
        img2: "./images/person5.jpg",
        name: "Ann Gates",
        category: "tracking"
    },
    {
        id:10,
        img1: "./images/62c44c55880581c04ede477b_france-1973527_640.jpg",
        header: "Interesting Adventures in Sri Lanka",
        duration: "22 Days",
        img2: "./images/person2.jpg",
        name: "Tasha Stewart",
        category: "extreme"
    },
    {
        id:11,
        img1: "./images/62c42eaf84131b2f867b25a5_felix-rostig-UmV2wr-Vbq8-unsplash-p-500.jpeg",
        header: "Mysteries of Madagascar",
        duration: "18 Days",
        img2: "./images/person7.jpg",
        name: "Guy Hawkins",
        category: "extreme"
    },
    {
        id:12,
        img1: "./images/62c44c52ba7addf80c6d9d43_central-park-1804588_640.jpg",
        header: "Extreme in Bali",
        duration: "14 Days",
        img2: "./images/person5.jpg",
        name: "Ann Gates",
        category: "extreme"
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
const prevBtn = document.querySelector(".arrow-left");
const nextBtn = document.querySelector(".arrow-right");
const myimg = document.querySelector(".switz");
const mytext = document.getElementById('info');
const ourplace = document.getElementById('nation');
let firstItem = 0;

window.addEventListener("DOMContentLoaded", function(){
    showPlaces();
});

function showPlaces(){
    const item = myplaces[firstItem];
    myimg.src = item.img;
    mytext.textContent = item.info;
    ourplace.textContent = item.place;
}
//next
nextBtn.addEventListener("click", function(){
    firstItem++;
    if (firstItem > myplaces.length - 1){
        firstItem = 0;
    }
    showPlaces();
});
//prev
prevBtn.addEventListener("click", function(){
    firstItem--;
    if (firstItem < 0){
        firstItem = myplaces.length - 1;
    }
    showPlaces();
});
//travels
const travelContainer = document.querySelector(".our-travels");

window.addEventListener("DOMContentLoaded", function(){
//btns
const travelBtns = document.querySelectorAll(".tab-btn");
travelBtns.forEach(function(travelBtn){
   travelBtn.addEventListener('click', function(e){
       //console.log("yoh");
       const myCategory = (e.currentTarget.dataset.id);
       const ourCategory = mytravels.filter(function (picItem){
           if (picItem.category ===myCategory){
               return picItem;
           }
           travelBtn.classList.toggle("active");
       });
       displayAllTravels(ourCategory);
       displayContents();
   });
});
    displayContents();
});
function displayAllTravels(menuTravels){
    let displayTravels = menuTravels.map(function(item){
        return `<!--single item-->
        <article class="content" id="hiking">
            <img src=${item.img1} class="travel-pic"/>
            <div class="travel-body">
                <div class="q-header">
                    <h4>${item.duration}</h4>
                    <h3>${item.header}</h3>
                </div>
                <div class="q-body">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna 
                        aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in pariatur.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <button class="more-bt">Details</button>
                    <div class="our-guide">
                        <img src=${item.img2} class="guide-pic"/>
                        <p><b>${item.name}</b></p>
                        <p>Tourist Guide</p>
                        <span style="color: orangered; font-size: 1.5rem;">
                            <i class="fab fa-facebook"></i>
                            <i class="fab fa-twitter"></i>
                            <i class="fab fa-linkedin"></i>
                        </span>
                    </div>
                </div>
            </div> 
            <button class="up-down">
                <i class="fa-solid fa-chevron-down"></i>
            </button>
        </article>`;
    });
    displayTravels = displayTravels.join("");
    travelContainer.innerHTML = displayTravels;
}
function displayContents(){
    const travels = document.querySelectorAll(".content");
    travels.forEach(function(travel){
        const toggleBtn = travel.querySelector(".up-down");
        toggleBtn.addEventListener("click", function(){
            travels.forEach(function(item){
                if(item != travel){
                    item.classList.remove("show-content");
                }
            });
            console.log("yoh");
            travel.classList.toggle("show-content");
        });
    });
}
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
            currentItems = myguides.length - 3;
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