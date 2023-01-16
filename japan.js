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

window.addEventListener("DOMContentLoaded", function(){
    displayMyInit();
    showPhotos();
});
function displayMyInit(){
    const inits = document.querySelectorAll(".my-init");
    inits.forEach(function(init){
        const toggleBtn = init.querySelector(".tab-toggle");
        toggleBtn.addEventListener("click", function(){
            inits.forEach(function(item){
                if (item !=init){
                    item.classList.remove("show-init");
                }
            });
            init.classList.toggle("show-init");
        });
    });
}
const myplaces = [
    {
        id:1,
        img: "./images/62b97f115a0db1f5a20f612d_river-5524569_1280-p-500.jpeg"
    },
    {
        id:2,
        img: "./images/62b593de07b186507467186b_heritage-5430081_640-p-500.jpeg"
    },
    {
        id:3,
        img: "./images/62b432ef7cff04523655d41c_japan-4287832_1920-p-1600.jpeg"
    }
]
let firstItem = 0;
const prevBtn = document.querySelector(".photo-left");
const nextBtn = document.querySelector(".photo-right");
const myImg = document.querySelector(".photo");

function showPhotos(){
    const item = myplaces[firstItem];
    myImg.src = item.img;
}
//next
nextBtn.addEventListener("click", function(){
    firstItem++;
    if (firstItem > myplaces.length - 1){
        firstItem = 0;
    }
    showPhotos();
});
//prev
prevBtn.addEventListener("click", function(){
    firstItem--;
    if (firstItem < 0){
        firstItem = myplaces.length - 1;
    }
    showPhotos();
});
//navigation buttons
const navCriteria = document.querySelector(".more-desc");
const articles = document.querySelectorAll(".content");
const myBtns = document.querySelectorAll(".tab-button");

navCriteria.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if (id){
        //remove selected from other buttons
        myBtns.forEach(function(btn){
            btn.classList.remove("active");
        });
        e.target.classList.add("active");
        //hide other articles
        articles.forEach(function(article){
            article.classList.remove("active");
        });
        const element = document.getElementById(id);
        element.classList.add("active");
    }
});