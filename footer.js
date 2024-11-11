document.addEventListener("DOMContentLoaded", function () {
  // Fetch the footer HTML file
  fetch("footer.html")
    .then((response) => {
      // Check if the response is successful
      if (!response.ok) {
        // Throw an error if the response is not okay
        throw new Error("Network response was not ok: " + response.statusText);
      }
      // Return the HTML content as text
      return response.text();
    })
    .then((data) => {
      // Find the footer container and insert the fetched footer HTML
      const footerContainer = document.getElementById("footer-container");
      if (footerContainer) {
        footerContainer.innerHTML = data;
      } else {
        console.error("Footer container not found on the page");
      }
    })
    .catch((error) => {
      // Log any errors that occur during the fetch operation
      console.error("There was an error fetching the footer HTML:", error);
    });
});
