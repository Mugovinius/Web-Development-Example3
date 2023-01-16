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
//team
const myteam = [
    {
        id:1,
        img: "./images/person4.jpg",
        name: "Ariana Mugo",
        job: "Designer"
    },
    {
        id:2,
        img: "./images/person1.jpg",
        name: "Ramon Thomas",
        job:"Marketer"
    },
    {
        id:3,
        img: "./images/person5.jpg",
        name: "Ann Gates",
        job:"Accountant"
    },
    {
        id:4,
        img: "./images/person7.jpg",
        name: "Guy Hawkins",
        job:"HR Business Admin"
    },
    {
        id:5,
        img: "./images/person2.jpg",
        name: "Tasha Stewart",
        job:"Office Worker"
    },
    {
        id:6,
        img: "./images/person3.jpg",
        name: "Jacob Jones",
        job:"Business Consultant"
    }
]

//team
const teamContainer = document.querySelector(".team-container");
const nextBtn = document.querySelector(".team-right");
const prevBtn = document.querySelector(".team-left");
let currentTeam = 0;
window.addEventListener("DOMContentLoaded", function(){
    if (this.window.innerWidth <= 555){
        miniWidth();
    }else{
        displayNextThree();
    }
});

function displayEntireTeam(menuItems){
    let displayTeam = menuItems.map(function(item){
        return `<!--single item-->
        <div class="team-members">
            <img src=${item.img} class="team-pic">
            <div class="team-desc">
                <h2>${item.name}</h2>
                <h3>${item.job}</h3>
                <p>Travel is what inspires you to do new things! New countries are changing our worldview.</p>
                <span>
                    <i class="fab fa-instagram fa-2x"></i>
                    <i class="fab fa-facebook fa-2x"></i>
                    <i class="fab fa-whatsapp fa-2x"></i>
                    <i class="fab fa-twitter fa-2x"></i>
                </span>
            </div>
        </div>`;
    });
    displayTeam = displayTeam.join("");
    teamContainer.innerHTML = displayTeam;
} 
const displayNextThree = () => {
    displayEntireTeam(myteam.slice(currentTeam, currentTeam + 3));
}
const miniWidth = () => {
    displayEntireTeam(myteam.slice(currentTeam, currentTeam + 1));
}
const displayPrevThree = () => {
    displayEntireTeam(myteam.slice(currentTeam, currentTeam - 3));
}
nextBtn.addEventListener('click', function(){
    if (window.innerWidth <= 555){
        currentTeam++;
        if (currentTeam > myteam.length - 1){
            currentTeam = 0;
        }
        miniWidth();
    }else{
        currentTeam+=3;
        if (currentTeam + 3 > myteam.length){
            currentTeam = 0;
        }
        displayNextThree();
    }
});
prevBtn.addEventListener("click", function(){
    if (window.innerWidth <=555){
        currentTeam--;
        if (currentTeam < 0){
            currentTeam= myteam.length - 1;
        }
        miniWidth();
    }else{
        currentTeam-=3;
        if (currentTeam < 0 ){
            currentTeam = myteam.length - 3;
        }
        displayNextThree();
    }
});