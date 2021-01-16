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


let paragraphs = document.querySelectorAll('p');
console.log(paragraphs);

let firstDiv = document.querySelector('div');
console.log(firstDiv);

let jumbotronText = document.getElementById('jumbotron-text');
console.log(jumbotronText);

let pInsidePrimaryContent = document.querySelectorAll('.primary-content p');
console.log(pInsidePrimaryContent);

/*
Task 2
======

When a user clicks the 'ALERT' button, an alert box should pop up with the text "Thanks for visiting Bikes for Refugees!"
*/
let alertButton = document.getElementById('alertBtn');

alertButton.addEventListener('click', function() {
    alert("Thanks for visiting Bikes for Refugees!");
});

/*
Task 3
=======

Write JavaScript below that changes the background colour of the page when the 'Change colour' button is clicked.
*/

let chgButton = document.getElementById('bgrChangeBtn');

chgButton.addEventListener('click', function(e) {
    document.body.style.backgroundColor="red";
});


/*
Task 4
======

When a user clicks the 'Add some text' button, a new paragraph should be added below the buttons that says "Read more below."
*/

let addText = document.getElementById('addTextBtn');

addText.addEventListener('click', function(){
    let newParagraph = document.createElement('p');
    newParagraph.innerText = 'Read more below.';

    let buttonContainer = document.getElementById('button-container');
    buttonContainer.appendChild(newParagraph);
});






/*
Task 5
======

When the 'Larger links!' button is clicked, the text of all links on the page should increase.
*/

let largerLinksBtn = document.getElementById('largerLinksBtn');

largerLinksBtn.addEventListener('click', function(){
    let links = document.querySelectorAll('a');

    for (let link of links) {
        let originalSize = link.style.fontSize;  // 1em 3em
        link.style.fontSize = `${parseFloat(originalSize) + 1}em`;
    }
});
