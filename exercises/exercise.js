let mydocument = document;


/*
Task 1
=======
Write JavaScript below that logs:
    1. all the "p" element nodes of the document,
    --> should log a list of nodes with a length of 6

    2. the first div element node
    --> should log the ".site-header" node

    3. the element with id "jumbotron-text"
    --> should log the "#jumbotron-text" node

    4. all the "p" elements of contained inside  the .primary-content element node
    --> should log a list of nodes with a length of 3

*/
let allParaghaph =document.getElementsByTagName("p");
console.log(allParaghaph.length);
let firstDiv = document.querySelector("div");
console.log(firstDiv);
let jumbo = document.getElementById("jumbotron-text");
console.log(jumbo);
let content = document.getElementsByClassName("primary-content");
let para = content[0].getElementsByTagName("p");
console.log(para.length);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// let alertButton = document.getElementById("alertBtn");
// alertButton.addEventListener("click",alert("Thanks for visiting Bikes for Refugees!"));

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/
let chgButton = document.getElementById("bgrChangeBtn");
chgButton.addEventListener("click",function(){
    document.body.style.backgroundColor = "yellow";

});

/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/
let myButton = document.getElementById("addTextBtn");
myButton.addEventListener("click",function(){
    let newArticle = document.createElement("p");
     newArticle.innerText = "Read more below";
     let button = document.getElementById("hello");
     button.appendChild(newArticle);
    
});



/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/
let largerBtn = document.getElementById("largerLinksBtn");
largerBtn.addEventListener("click",function(){
  let button = document.getElementById("hello");
  hello.style.fontSize="2em";
});