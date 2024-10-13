// All animations will take twice the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');



const typewriterElement = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < text.length) {
        typewriterElement.textContent += text.charAt(index);
        index++;
        setTimeout(type, 100); // Adjust typing speed here
    } else {
        // Pause for a moment after completing the text
        setTimeout(() => {
            // Clear the text and reset index
            typewriterElement.textContent = "";
            index = 0;
            type(); // Start typing again
        }, 1000); // Adjust pause duration before restarting
    }
}

type();
