document.addEventListener('DOMContentLoaded', function () {
    // Set a 3-second delay for hiding the loader
    setTimeout(function () {
        var loaderElement = document.getElementById('loading');
        if (loaderElement) {
            loaderElement.style.display = 'none';
        }
    }, 0);
});

document.addEventListener('DOMContentLoaded', function () {
  const animatedElements = document.querySelectorAll('.animated');

  function checkScroll() {
    animatedElements.forEach((element) => {
      let scrollPosition = window.scrollY + window.innerHeight;
      let elementPosition = element.offsetTop + element.offsetHeight;

      if (scrollPosition > elementPosition) {
        element.classList.add('animate');
      }
    });
  }

  // Initial check in case the elements are already visible on page load
  checkScroll();

  // Listen for scroll events
  window.addEventListener('scroll', checkScroll);
});

document.addEventListener("DOMContentLoaded", function () {
        const navLinks = document.querySelectorAll("nav ul li a");

        navLinks.forEach(function (link) {
            link.addEventListener("click", function () {
                // Close the navigation menu when a link is clicked
                document.getElementById("check").checked = false;
            });
        });
    });
