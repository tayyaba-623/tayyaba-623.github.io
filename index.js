
// Select all the elements that will display while scrolling
const cards = document.querySelectorAll('.box, .text-alignment h2, .text-alignment p');

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1    // Activate when 10% of the above elements are visible
    }); 

    cards.forEach(card => observer.observe(card));

// Function to open and close the side navigation menu  
 function openNav() {
  document.getElementById("Side-navigation").style.width = "250px";
}

function closeNav() {
  document.getElementById("Side-navigation").style.width = "0";
}