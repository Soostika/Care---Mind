// Toggle active state on navigation categories
const categoryLinks = document.querySelectorAll(".categories-container a");

categoryLinks.forEach((link) => {
  link.addEventListener("click", () => {
    categoryLinks.forEach((link) => link.classList.remove("active"));
    link.classList.add("active");
  });
});

// Show/Hide Share Options on Button Click
const shareButton = document.querySelector(".share__button");
const shareOptions = document.querySelector(".share__options");
const showShareOptionsClass = "show__share-options";

shareButton.addEventListener("click", () => {
  shareOptions.classList.toggle(showShareOptionsClass);
});

// Responsive Navigation Toggle (For Mobile Views)
const navMenuButton = document.querySelector(".nav-menu-button");
const navMenu = document.querySelector(".categories-container");

navMenuButton.addEventListener("click", () => {
  navMenu.classList.toggle("show-nav");
});

// Make Share Options Visible on Hover
const shareWrapper = document.querySelector(".share__wrapper");
shareWrapper.addEventListener("mouseover", () => {
  shareOptions.classList.add(showShareOptionsClass);
});

shareWrapper.addEventListener("mouseout", () => {
  shareOptions.classList.remove(showShareOptionsClass);
});

// Comments Section Toggle (Add New Comment)
const commentButton = document.querySelector(".buttons button");
const commentInput = document.querySelector(".commentinput input");

commentButton.addEventListener("click", () => {
  const commentText = commentInput.value.trim();
  if (commentText) {
    addNewComment(commentText);
    commentInput.value = ""; // Clear input after comment submission
  }
});

function addNewComment(commentText) {
  const commentContainer = document.querySelector(".commentbox");
  const commentElement = document.createElement("div");
  commentElement.classList.add("user");
  commentElement.innerHTML = `<p>${commentText}</p>`;
  commentContainer.appendChild(commentElement);
}

// Mobile and PC Responsive Design Tweaks
const mediaQuery = window.matchMedia("(max-width: 768px)");
mediaQuery.addListener(handleMobileView);

function handleMobileView(e) {
  if (e.matches) {
    // Modify styles for mobile
    document.body.style.fontSize = "14px";
  } else {
    // Modify styles for desktop
    document.body.style.fontSize = "16px";
  }
}

// Initial call to handle different views
handleMobileView(mediaQuery);
