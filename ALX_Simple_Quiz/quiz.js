// Function to check the user's answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Retrieve the user's selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;

    // Get the feedback element
    const feedbackElement = document.getElementById("feedback");

    // Check if the user selected an answer
    if (!userAnswer) {
        feedbackElement.textContent = "Please select an answer.";
        feedbackElement.style.color = "orange";
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "green";
    } else {
        feedbackElement.textContent = "That's incorrect. Try again!";
        feedbackElement.style.color = "red";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);