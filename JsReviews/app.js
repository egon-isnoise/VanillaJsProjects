// local reviews data

const reviews = [
    {
        id: 1,
        name: "Susan Smith",
        job: "Web Developer",
        img: "img/girl-smile2.jpg",
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus quasi velit pariatur consequatur quis voluptates sed amet tempore iusto nihil!"
    },

    {
        id: 2,
        name: "Anna Johnson",
        job: "Web Designer",
        img: "img/girl-smile3.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime esse earum perspiciatis repellat blanditiis animi unde repellendus molestias a deleniti."
    },

    {
        id: 3,
        name: "Malika Bloom",
        job: "intern",
        img: "img/girl-smile4.jpg",
        text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reiciendis quae quo assumenda id in cumque doloremque repellendus sint, aperiam voluptates!"
    },

    {
        id: 4,
        name: "Simone Witherspoon",
        job: "Senior Ruby Dev",
        img: "img/girl-smile.jpg",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim deleniti repellat odio ducimus et quo dolorum perferendis quos blanditiis culpa?"
    },

    
];

//select items

const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

//set starting item

let currentItem = 0;

//load initial item

window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
})

//show person based on item

function showPerson(person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

//show next person

nextBtn.addEventListener('click', function (){
    currentItem ++;
    if (currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson(currentItem);
});

// show prev person 

prevBtn.addEventListener('click', function (){
    currentItem --;
    if (currentItem < 0){
        currentItem = 3;
    }
    showPerson(currentItem);
});

// show random person

randomBtn.addEventListener('click', function (){
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
});
