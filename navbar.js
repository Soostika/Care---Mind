document.addEventListener("DOMContentLoaded", () => {
    const navbarContainer = document.getElementById("navbar-container");
  
    if (!navbarContainer) {
      console.error("Navbar container element not found");
      return;
    }
  
    // Fetch the navbar content
    fetch("navbar.html")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch navbar: " + response.statusText);
        }
        return response.text();
      })
      .then((data) => {
        navbarContainer.innerHTML = data;
  
        // Active Page Logic
        const activePage = window.location.pathname.split("/").pop();
        const navLinks = document.querySelectorAll(".nav_links");
  
        navLinks.forEach((link) => {
          const linkPath = new URL(link.href).pathname.split("/").pop();
          if (linkPath === activePage) {
            link.classList.add("active");
          }
        });
  
        // Dropdown functionality for hover and click
        document.querySelectorAll("nav ul li a.nav_links").forEach((menuItem) => {
          menuItem.addEventListener("click", function (e) {
            const dropdown = this.nextElementSibling;
            if (dropdown && dropdown.classList.contains("dropdown")) {
              e.preventDefault();
              dropdown.classList.toggle("show");
  
              // Close all other dropdowns
              document
                .querySelectorAll(".dropdown.show")
                .forEach((otherDropdown) => {
                  if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove("show");
                  }
                });
            }
          });
        });
  
        // Close dropdown when clicking outside
        document.addEventListener("click", (e) => {
          if (!e.target.closest("nav ul li")) {
            document.querySelectorAll(".dropdown.show").forEach((dropdown) => {
              dropdown.classList.remove("show");
            });
          }
        });
      })
      .catch((error) => {
        console.error(
          "There has been a problem with the fetch operation:",
          error
        );
      });
  });
  