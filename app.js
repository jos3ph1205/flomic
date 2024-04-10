/* --------------------------------------------------
NAV CURRENT SECTION
-------------------------------------------------- */
const mainSection = document.querySelectorAll(".main-section");
const navLinks = document.querySelectorAll("nav a");

const mainSectionObserver = new IntersectionObserver(
   (entries) => {
      entries.forEach((entry) => {
         let secId = entry.target.getAttribute("id");

         if (entry.isIntersecting) {
            navLinks.forEach((link) => {
               link.classList.remove("active");
            });

            document.querySelector(`nav a[href*="${secId}"]`).classList.add("active");
         }
      });
   },
   {
      threshold: 0.5,
   }
);

mainSection.forEach((el) => mainSectionObserver.observe(el));