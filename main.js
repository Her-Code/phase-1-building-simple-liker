 // Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener to handle clicks on empty hearts
  document.querySelector(".like-glyph").addEventListener("click", function () {
    mimicServerCall()
      .then(() => {
        // On success, change the heart to full and add activated-heart class
        document.querySelector(".like-glyph").classList.add("activated-heart");
      })
      .catch(() => {
        // On failure, display error modal and message
        const errorModal = document.querySelector("#modal");
        errorModal.classList.remove("hidden");
        errorModal.querySelector("p").textContent = "Server Error. Please try again later.";
        // Hide the error modal after 3 seconds
        setTimeout(() => {
          errorModal.classList.add("hidden");
        }, 3000);
      });
  });

  // Add event listener to handle clicks on full hearts
  document.querySelector(".activated-heart").addEventListener("click", function () {
    // Change the heart back to empty and remove activated-heart class
    document.querySelector(".like-glyph").classList.remove("activated-heart");
  });
});

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
