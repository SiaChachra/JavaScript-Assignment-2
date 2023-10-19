// Constants for accessing DOM elements
const studentId = document.getElementById('myStudentId'); // Paragraph element to display the student ID
const customNumber = document.getElementById('customNumber'); // Input field to receive custom number from user
const customColorButton = document.querySelector('.custColor'); // Button to change the background color based on the custom number
const randomColorButton = document.querySelector('.randColor'); // Button to change the background color based on a random number
const imageSelect = document.getElementById('imageSelect'); // Dropdown select for choosing an image
const imagesDiv = document.getElementById('images'); // Image element to display the selected image

// Array containing image filenames
const imageArray = ["img1.jpg", "img2.jpg", "img3.jpg", "img4.jpg", "img5.jpg"];

// Function to change the background color based on user's input number and display the student ID
function changeCustomColor() {
    let number = customNumber.value; // Get the value from the input

    // Displaying the student ID
    studentId.textContent = "Student ID: 200547582";

    // Changing background color based on input value range
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

// Function to generate a random number between 1 to 100, set it to the input field, and then change the background color accordingly
function changeRandomColor() {
    let randomNum = Math.floor(Math.random() * 100) + 1; // Generating random number
    customNumber.value = randomNum; // Setting random number to input field
    changeCustomColor(); // Calling the function to change the background color
}

// Function to populate the dropdown select with images from the imageArray
function addList() {
    // Check if the dropdown has only the default option
    if (imageSelect.children.length === 1) {
        for (let img of imageArray) { // Iterating over imageArray
            let option = document.createElement('option'); // Creating a new option element
            option.value = img; // Setting the value to the image filename
            option.textContent = img; // Displaying the image filename as the option text
            imageSelect.appendChild(option); // Appending the option to the select dropdown
        }
    }
}

// Function to change the displayed image based on the selected option in the dropdown
function changeImage() {
    let selectedImage = imageSelect.value; // Getting the selected image filename
    imagesDiv.src = "./img/" + selectedImage; // Setting the image source to the selected image
}

// Adding event listeners

// Changing background color when customColorButton is clicked
customColorButton.addEventListener('click', changeCustomColor);

// Changing background color to a random color when randomColorButton is clicked
randomColorButton.addEventListener('click', changeRandomColor);

// Populating the dropdown when it's clicked
imageSelect.addEventListener('click', addList);

// Changing the displayed image when an option in the dropdown is selected
imageSelect.addEventListener('change', changeImage);
