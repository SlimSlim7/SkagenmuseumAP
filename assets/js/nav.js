document.addEventListener("DOMContentLoaded", () => {
    const navItems = document.querySelectorAll(".nav-menu > li.has-dropdown"); // finder alle html elementer, som matcher css selector udtrykket
  
    navItems.forEach(item => {
      // Kun tilføj klik-event til menupunkter med klasse dropdown-click
      if (item.classList.contains("dropdown-click")) {
        item.querySelector("a").addEventListener("click", (e) => {
          e.preventDefault();
  
          // Luk andre dropdowns
          navItems.forEach(other => {
            if (other !== item) other.classList.remove("active");
          });
  
          // Toggle nuværende
          item.classList.toggle("active");
        });
      }
    });
  
    // Klik udenfor lukker dropdowns
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".nav-menu")) {
        navItems.forEach(item => item.classList.remove("active"));
      }
    });
  });
  