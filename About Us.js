 
// Select all the elements that will display while scrolling
const boxes = document.querySelectorAll('.box-1, .side-image, .Text, .Left-picture, .Right-picture'); 

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1    // Activate when 10% of the above elements are visible
    });

    boxes.forEach(el => observer.observe(el)); 

// Function to open and close the side navigation menu
    function openNav() {
      document.getElementById("side-navigation").style.width = "250px";
    }

    function closeNav() {
      document.getElementById("side-navigation").style.width = "0";
    }
