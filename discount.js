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