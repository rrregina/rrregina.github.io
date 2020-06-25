let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/barcelona.jpg') {
        myImage.setAttribute ('src', 'images/casa-mila-1.jpg');
    } else {
        myImage.setAttribute ('src', 'images/barcelona.jpg');

    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please eneter your name.');
    if (!myName) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = "Hello, dear " + myName + "!";
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello again, ' + storedName + "!";
}

myButton.onclick = function() {
    setUserName();
}