// Constants for query selectors
const studentId = document.getElementById('myStudentId');
const customNumber = document.getElementById('customNumber');
const customColorButton = document.querySelector('.custColor');
const randomColorButton = document.querySelector('.randColor');
const imageSelect = document.getElementById('imageSelect');
const imagesDiv = document.getElementById('images');

// Image array
const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

function changeCustomColor() {
    let number = customNumber.value;

    studentId.textContent = "Student ID: 200547582";

    if (number < 0 || number > 100) {
        document.body.style.backgroundColor = "red";
    } else if (number <= 20) {
        document.body.style.backgroundColor = "green";
    } else if (number <= 40) {
        document.body.style.backgroundColor = "blue";
    } else if (number <= 60) {
        document.body.style.backgroundColor = "orange";
    } else if (number <= 80) {
        document.body.style.backgroundColor = "purple";
    } else {
        document.body.style.backgroundColor = "yellow";
    }
}

function changeRandomColor() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    customNumber.value = randomNum;
    changeCustomColor();
}

function addList() {
    if (imageSelect.children.length === 1) {
        for (let img of imageArray) {
            let option = document.createElement('option');
            option.value = img;
            option.textContent = img;
            imageSelect.appendChild(option);
        }
    }
}

function changeImage() {
    let selectedImage = imageSelect.value;
    imagesDiv.src = "./img/" + selectedImage;
}

customColorButton.addEventListener('click', changeCustomColor);
randomColorButton.addEventListener('click', changeRandomColor);
imageSelect.addEventListener('click', addList);

imageSelect.addEventListener('change', changeImage);
