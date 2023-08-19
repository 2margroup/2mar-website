// script.js
const backgrounds = ['sergio-de-paula-c_GmwfHBDzk-unsplash.jpgimage1.jpg', 'jonnelle-yankovich-c7TBD3PvoaQ-unsplash.jpg', 'jack-finnigan-rriAI0nhcbc-unsplash (1).jpg', 'imansyah-muhamad-putera-KchIV_GDy6U-unsplash.jpg'];
let currentBgIndex = 0;

function changeBackground() {
    const body = document.querySelector('body');
    body.style.backgroundImage = `url('path_to_your_images_folder/${backgrounds[currentBgIndex]}')`;

    currentBgIndex = (currentBgIndex + 1) % backgrounds.length;
}

setInterval(changeBackground, 5000);

function submitComment() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Here, you can handle the submission and display the comments on the page
}

// script.js
// Initialize an array to store the comments
const commentsArray = [];

function changeBackground() {
    // ... (unchanged)
}

function submitComment() {
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;

    // Check if both name and comment are provided
    if (name.trim() === '' || comment.trim() === '') {
        alert('Please provide your name and comment before submitting.');
        return;
    }

    // Create an object to store the comment
    const newComment = {
        name: name,
        comment: comment
    };

    // Add the new comment to the comments array
    commentsArray.push(newComment);

    // Clear the input fields after submitting
    document.getElementById('name').value = '';
    document.getElementById('comment').value = '';

    // Display all comments on the page
    displayComments();
}

function displayComments() {
    const commentsSection = document.getElementById('comments');

    // Clear any existing comments
    commentsSection.innerHTML = '';

    // Loop through the comments array and create HTML elements to display the comments
    commentsArray.forEach((comment, index) => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `
            <strong>${comment.name}</strong>: ${comment.comment}
        `;
        commentsSection.appendChild(commentDiv);
    });
}
