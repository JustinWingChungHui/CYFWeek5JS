// let mydocument = document.querySelectorAll("p");

// console.log(`${mydocument.length}`)

// //exercise 2

// let firstDiv = document.getElementsByClassName('site-header');
// console.log(firstDiv)

// //exercise 3

// let jumbo = document.getElementById("jumbotron-text");
// console.log(jumbo)

// //exercise 4
// let primary = document.querySelector('.primary-content');
// console.log(primary.querySelectorAll('p').length);
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

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
// let myButton = document.getElementById("alertBtn");
// myButton.addEventListener("click", function(){
//     alert("Thanks for visiting Bikes for Refugees");
// }
// );

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

// let button = document.getElementById('bgrChangeBtn');
// let body = document.querySelector('body');

// body.addEventListener('click', function(){
//     body.style.backgroundColor = 'yellow';
// });
/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

// let addText = document.querySelector('#addTextBtn');
// let text = document.querySelector('.buttons');

// function newWord(){
//     let element = document.createElement('p');
//     text.appendChild(element).innerText = 'Read more below';
// };

// addText.addEventListener("click", newWord);

/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let button = document.querySelector("#largerLinksBtn");
button.addEventListener('click', function(){
    let links = document.querySelectorAll('a');
    
    for (let i = 0; i < links.length; i++) {
        links[i].style.fontSize = '200%';
        
    }
});