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

const myteam = [
    {
        id:1,
        name:"Raymon Thomas",
        img: "./images/person1.jpg",
        job: "Targetologist"
    },
    {
        id:2,
        name:"Ann Gates",
        img: "./images/person5.jpg",
        job: "Travel Guide"
    },
    {
        id:3,
        name:"Alex Muthii",
        img: "./images/person6.jpg",
        job: "Travel Guide"
    },
    {
        id:4,
        name:"Jennie Bennet",
        img: "./images/person8.jpg",
        job: "Photographer"
    },
    {
        id:5,
        name:"Guy Hawkins",
        img: "./images/person7.jpg",
        job: "Travel Guide"
    },
    {
        id:6,
        name:"Tasha Stewart",
        img: "./images/person2.jpg",
        job: "Photographer"
    },
    {
        id:7,
        name:"Ariana Mugo",
        img: "./images/person4.jpg",
        job: "CEO"
    },
    {
        id:8,
        name:"Jacob Jones",
        img: "./images/person3.jpg",
        job: "Targetologist"
    }
]
//quiz
const myquiz = [
    {
        id:1,
        name: "Can i get a little extra help with parking if necessary?"
    },
    {
        id:2,
        name: "What do you like the most about that holiday?"
    },
    {
        id:3,
        name: "What season is best for holiday in the cabins?"
    },
    {
        id:4,
        name: "What large-scale foreign holidays are worth visiting?"
    },
    {
        id:5,
        name: "I have never stayed at a campsite before - how does it work?"
    },
    {
        id:6,
        name: "What extra benefits do you provide to your clients?"
    }
]
//team
const teamContainer = document.querySelector(".team-container");

function displayAllTeam(teamItems){
    let displayTeam = teamItems.map(function(item){
        return `<!--single member-->
        <article class="team-member">
            <img src=${item.img} class="my-pic"/>
            <div class="desc">
                <h2>${item.name}</h2>
                <h4>${item.job}</h4>
                <span class="social-media">
                    <i class="fab fa-instagram fa-2x"></i>
                    <i class="fab fa-facebook fa-2x"></i>
                    <i class="fab fa-whatsapp fa-2x"></i>
                    <i class="fab fa-twitter fa-2x"></i>
                </span>
            </div>
        </article>`;
    });
    displayTeam = displayTeam.join("");
    teamContainer.innerHTML = displayTeam;
}
window.addEventListener("DOMContentLoaded", function(){
    displayAllTeam(myteam);
    displayAllQuiz(myquiz);
    displayMyQuiz();
});
//quizs
const quizContainer = document.querySelector(".quiz-container");
function displayAllQuiz(quizItems){
    let displayQuiz = quizItems.map(function(item){
        return ` <!--single quiz-->
        <article class="my-quiz">
            <span>
                <h2>${item.name}</h2>
                <p id="hide">Lorem ipsum dolor sit amet, consetetur sadips cing elitr, 
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam.
                </p>
            </span>
            <span class="tab-toggle">
                <i class="fa-solid fa-chevron-down" style="font-size: 1rem;"></i>
            </span>
        </article>`;
    })
    displayQuiz = displayQuiz.join("");
    quizContainer.innerHTML = displayQuiz;
}
//tab buttons
function displayMyQuiz(){
    const Quizs = document.querySelectorAll(".my-quiz");
    console.log(Quizs);
    Quizs.forEach(function(Quiz){
        console.log(Quiz);
        const toggleBtn = Quiz.querySelector(".tab-toggle");
        toggleBtn.addEventListener("click", function(){
            Quizs.forEach(function(item){
                if (item !=Quiz){
                    item.classList.remove("show-quiz");
                }
            });
            Quiz.classList.toggle("show-quiz");
        });
    });
}
