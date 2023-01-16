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

//blogs
const myblogs = [
    {
        id:1,
        img: "./images/62b198394ff75472c061eddb_view-red-cottages-by-coastline-hamn-y-lofoten-islands-norway-p-500.jpeg",
        info: "Exciting Discoveries And Adventures"
    },
    {
        id:2,
        img: "./images/62b197ceb4d45e15bc9c31ae_paul-vincent-roll-c61jL_NpAn8-unsplash-p-500.jpeg",
        info: "Unforgettable Trip To Sri Lanka"
    },
    {
        id:3,
        img: "./images/62b19726d08db63bff7acdef_veligandu-island-1044366_1920-p-500.jpeg",
        info: "Maldives - Your Personal Paradise"
    },
    {
        id:4,
        img: "./images/62b196385edaf64b6855aa37_beautiful-luxury-outdoor-swimming-pool-hotel-resort.jpg",
        info: "The One Veterian Tourist Trap Everyone Falls For"
    },
    {
        id:5,
        img: "./images/62c42eafecf05141c4f4b1a6_helena-lopes-e3OUQGT9bWU-unsplash-p-500.jpeg",
        info: "Discovered Along The Way On Journey"
    },
    {
        id:6,
        img: "./images/62b196ff6bac755debd2c057_eiffel-tower-975004_1920-p-500.jpeg",
        info: "Fountain Di Trevi Is Made From The Same Material"
    }
]

const blogContainer = document.querySelector(".blog-container");

function displayBlogItems(blogItems){
    let displayBlogs = blogItems.map(function(item){
        return `<!--single item-->
        <div class="my-blog-item">
            <img src=${item.img} class="blog-pic"/>
            <div class="my-blog-desc">
                <p>July 1,2022</p>
                <h2>${item.info}</h2>
                <p>Everything was seamless. The private guides were interesting and...</p>
                <a href="#">READ FULL POST</a>
            </div>
        </div>`;
    });
    displayBlogs = displayBlogs.join("");
    blogContainer.innerHTML = displayBlogs;
}

window.addEventListener("DOMContentLoaded", function(){
    displayBlogItems(myblogs);
});