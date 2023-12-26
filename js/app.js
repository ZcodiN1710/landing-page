// all the global variables
const navMenu = document.getElementById("nav-menu");
const sections = document.querySelectorAll("section");

// added 5 nav links using for loop
for (let i = 1; i < 5; i++) {
  // created li and anchor tags then appended them
  const liElements = document.createElement("li");
  const anchor = document.createElement("a");
  anchor.innerHTML = `section ${i}`;
  anchor.href = `#section${i}`;
  liElements.append(anchor);
  navMenu.append(liElements);

  // removed the default behavior of anchor tags and added scrolling function with smooth behavior to them
  anchor.addEventListener("click", (eo) => {
    eo.preventDefault();
    console.log("anchor clicked");
    if (anchor.href) {
      window.scrollTo({
        top: document.getElementById(`section${i}`).offsetTop,
        behavior: "smooth",
      });
    }
  });
}

// added active class to the section in the current viewport and removed the class from other sections
window.addEventListener("scroll", () => {
  sections.forEach((section) => {
    if (window.scrollY >= section.offsetTop - 180) {
      document
        .querySelector(".active-section")
        .classList.remove("active-section");
      section.classList.add("active-section");
    }
  });
});

// added functionality to scroll to top button
document.addEventListener('DOMContentLoaded', () => {
  let scrollToTopBtn = document.getElementById('scrollToTopBtn');

  // Showing or hiding the button based on the user's scroll position
  window.addEventListener('scroll', function () {
      if (document.documentElement.scrollTop > 20) {
          scrollToTopBtn.style.display = 'block';
      } else {
          scrollToTopBtn.style.display = 'none';
      }
  });

  // Scrolling to the top when the button is clicked
  scrollToTopBtn.addEventListener('click', function () {
      document.documentElement.scrollTop = 0;
  });
});


