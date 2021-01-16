




let myButton = document.getElementById('updateButton');

myButton.addEventListener('click', function(eventArg){
    let newArticle = document.createElement('article');

    let h2 =  document.createElement('h2');
    h2.classList.add("articleHeader");
    h2.innerText = "Trump wins election";

    let newSection = document.createElement('section');
    newSection.innerText = "Make America great again again";

    newArticle.appendChild(h2);
    newArticle.appendChild(newSection);

    let body = document.getElementById('body');
    body.appendChild(newArticle);
});

// myButton.addEventListener('mouseover', function(eventArg){
//     console.log(eventArg);
// });



// function onButtonClick() {
//     document.getElementById('mainHeader').innerHTML = "Update Header";
// }















// let updateBtn = document.getElementById('updateButton');

// updateBtn.addEventListener('click', onUpdateButtonClicked);


// function onUpdateButtonClicked(eventArg) {
//     // Do something!

// }


// updateBtn.addEventListener("mouseenter", onUpdateButtonMouseOver);

// function onUpdateButtonMouseOver(eventArg) {
//     console.log(eventArg);
//     eventArg.target.style.backgroundColor = 'red';
// }

// updateBtn.addEventListener("mouseleave", onUpdateButtonMouseLeave);

// function onUpdateButtonMouseLeave(eventArg) {
//     eventArg.target.style.backgroundColor = 'white';
// }


// let newArticle = document.createElement("article");
// let body = document.querySelector('body');
// body.appendChild(newArticle);