
// Opens the slide-in panel and shows the program details
function openPanel(Title, Overview, Duration, Fees) {
    document.getElementById("Course-Title").innerText = Title;
    document.getElementById("Overview").innerText = Overview;
    document.getElementById("Duration").innerHTML = Duration;
    document.getElementById("Fees").innerHTML = Fees;
    document.getElementById("sidePanel").style.width = "100%";
  }

// Close the slide-in panel
  function closePanel() {
    document.getElementById("sidePanel").style.width = "0";
  }

// Function to open and close the side navigation menu
  function openNav() {
    document.getElementById("side-navigation").style.width = "250px";
  }

  function closeNav() {
    document.getElementById("side-navigation").style.width = "0";
  }
  