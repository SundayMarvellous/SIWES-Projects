document.addEventListener("DOMContentLoaded", function () {
    const overviewButton = document.querySelector(
      ".planet_description-nav-buttons button:nth-of-type(1)"
    );
    const internalStructureButton = document.querySelector(
      ".planet_description-nav-buttons button:nth-of-type(2)"
    );
    const surfaceGeologyButton = document.querySelector(
      ".planet_description-nav-buttons button:nth-of-type(3)"
    );
  
    const overviewContent = document.querySelector(
      ".planet_description-content-overview"
    );
    const internalStructureContent = document.querySelector(
      ".planet_description-content-internal-structure"
    );
    const surfaceGeologyContent = document.querySelector(
      ".planet_description-content-surface-geology"
    );
  
    const planetImage = document.querySelector(".planet img");
    const defaultImageSrc = "./assets/planet-saturn.svg"; // Set the default image source
  
    function hideAllContent() {
      overviewContent.style.display = "none";
      internalStructureContent.style.display = "none";
      surfaceGeologyContent.style.display = "none";
    }
  
    function deactivateAllButtons() {
      overviewButton.classList.remove("active");
      internalStructureButton.classList.remove("active");
      surfaceGeologyButton.classList.remove("active");
    }
  
    // Set the initial state to display the default image and content
    planetImage.src = defaultImageSrc;
    hideAllContent();
    overviewContent.style.display = "block"; // Display default content
  
    overviewButton.addEventListener("click", function () {
      hideAllContent();
      deactivateAllButtons();
  
      overviewContent.style.display = "block";
      overviewButton.classList.add("active");
  
      planetImage.src = defaultImageSrc; // Set default image on overview click
    });
  
    internalStructureButton.addEventListener("click", function () {
      hideAllContent();
      deactivateAllButtons();
  
      internalStructureContent.style.display = "block";
      internalStructureButton.classList.add("active");
  
      planetImage.src = "./assets/planet-saturn-internal.svg"; // Set internal structure image
    });
  
    surfaceGeologyButton.addEventListener("click", function () {
      hideAllContent();
      deactivateAllButtons();
  
      surfaceGeologyContent.style.display = "block";
      surfaceGeologyButton.classList.add("active");
  
      planetImage.src = "./assets/geology-saturn.png"; // Set surface geology image
    });
  });
  