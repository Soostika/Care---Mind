// Blog Section Slider
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");
const blogsContainer = document.querySelector(".blogs-container");

// Debounce function for performance optimization
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

// Update Arrow Visibility based on scroll position
function updateArrowVisibility() {
  const scrollLeft = blogsContainer.scrollLeft;
  const scrollWidth = blogsContainer.scrollWidth;
  const clientWidth = blogsContainer.clientWidth;

  // Show left arrow only if scrolled to the right
  if (scrollLeft > 0) {
    leftArrow.classList.remove("hidden");
  } else {
    leftArrow.classList.add("hidden");
  }

  // Show right arrow only if not at the end
  if (scrollLeft + clientWidth < scrollWidth) {
    rightArrow.classList.remove("hidden");
  } else {
    rightArrow.classList.add("hidden");
  }
}

// Initial visibility check
updateArrowVisibility();

// Debounced scroll event listener for better performance
blogsContainer.addEventListener("scroll", debounce(updateArrowVisibility, 100));

// Click event for left arrow
leftArrow.addEventListener("click", () => {
  blogsContainer.scrollBy({
    left: -blogsContainer.clientWidth * 0.9, // Adjust to scroll a bit less than full width for finer control
    behavior: "smooth",
  });
});

// Click event for right arrow
rightArrow.addEventListener("click", () => {
  blogsContainer.scrollBy({
    left: blogsContainer.clientWidth * 0.9, // Adjust to scroll a bit less than full width for finer control
    behavior: "smooth",
  });
});
// Sample data for stories
const stories = [
  { date: "May 1, 2024", topic: "Story 1" },
  { date: "May 2, 2024", topic: "Story 2" },
  { date: "May 3, 2024", topic: "Story 3" },
  { date: "May 4, 2024", topic: "Story 4" },
  { date: "May 5, 2024", topic: "Story 5" },
  { date: "May 6, 2024", topic: "Story 6" },
  { date: "May 7, 2024", topic: "Story 7" },
  { date: "May 8, 2024", topic: "Story 8" },
  { date: "May 9, 2024", topic: "Story 9" },
  { date: "May 10, 2024", topic: "Story 10" },
  { date: "May 11, 2024", topic: "Story 11" },
  { date: "May 12, 2024", topic: "Story 12" },
];

const storiesPerPage = 6;
let currentPage = 1;

// Function to display stories for the current page
function displayStories() {
  const start = (currentPage - 1) * storiesPerPage;
  const end = start + storiesPerPage;
  const currentStories = stories.slice(start, end);

  const storiesContainer = document.getElementById("stories-container");
  storiesContainer.innerHTML = ""; // Clear previous content

  currentStories.forEach((story) => {
    const storyCard = document.createElement("div");
    storyCard.classList.add("story-card");

    const storyDate = document.createElement("p");
    storyDate.classList.add("story-date");
    storyDate.textContent = story.date;

    const storyTopic = document.createElement("p");
    storyTopic.classList.add("story-topic");
    storyTopic.textContent = story.topic;

    const readMoreButton = document.createElement("button");
    readMoreButton.classList.add("read-more-button");
    readMoreButton.textContent = "Read More";

    storyCard.appendChild(storyDate);
    storyCard.appendChild(storyTopic);
    storyCard.appendChild(readMoreButton);
    storiesContainer.appendChild(storyCard);
  });

  updatePagination();
}

// Function to handle pagination
function updatePagination() {
  const pageButtonsContainer = document.getElementById("page-buttons");
  pageButtonsContainer.innerHTML = ""; // Clear previous pagination buttons

  const totalPages = Math.ceil(stories.length / storiesPerPage);

  for (let i = 1; i <= totalPages; i++) {
    const pageButton = document.createElement("button");
    pageButton.classList.add("page-button");
    pageButton.textContent = i;
    pageButton.onclick = () => goToPage(i);

    if (i === currentPage) {
      pageButton.classList.add("active");
    }

    pageButtonsContainer.appendChild(pageButton);
  }
}

// Functions to navigate pages
function goToPage(page) {
  currentPage = page;
  displayStories();
}

function previousPage() {
  if (currentPage > 1) {
    currentPage--;
    displayStories();
  }
}

function nextPage() {
  const totalPages = Math.ceil(stories.length / storiesPerPage);
  if (currentPage < totalPages) {
    currentPage++;
    displayStories();
  }
}

// Initial display
displayStories();
