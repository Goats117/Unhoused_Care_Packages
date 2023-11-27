
function calculateCarePackages() {
    // Define the quantities of supplies needed for one care package
    const suppliesPerPackage = {
      "water bottles": 1,  
      "nail clippers": 1,  
      "balms": 1,
      "gallon bag": 1,
      "hand warmers": 2,
      "socks": 1,
      "crackers": 1,
      "tuna": 1,
      "wipes": 5,
      "large band-aid": 3,
      "small band-aid": 6,
    };
    
    // Function to prompt the user for the current quantities of supplies
    function promptForCurrentSupplies() {
      const currentSupplies = {};
    
      // Loop through each supply item in the care package
      for (const item in suppliesPerPackage) {
        // Prompt the user for the current quantity of each supply
        const userInput = prompt(`Enter the current quantity of ${item}:`);
    
        // Convert the user input to a number and update the currentSupplies object
        currentSupplies[item] = parseInt(userInput, 10) || 0;
      }
    
      return currentSupplies;
    }
    
    // Function to calculate the maximum number of care packages that can be made
    function calculateCarePackages(suppliesPerPackage, currentSupplies) {
      let maxPackages = Infinity;
    
      // Loop through each supply item in the care package
      for (const item in suppliesPerPackage) {
        // Calculate the maximum number of care packages based on the current supply quantity
        const maxPackagesForItem = Math.floor(currentSupplies[item] / suppliesPerPackage[item]);
    
        // Update the maximum number of care packages
        maxPackages = Math.min(maxPackages, maxPackagesForItem);
      }
    
      return maxPackages;
    }
    
    // Prompt the user for the current quantities of supplies
    const currentSupplies = promptForCurrentSupplies();
    
    // Calculate and display the maximum number of care packages that can be made
    const maxPackages = calculateCarePackages(suppliesPerPackage, currentSupplies);
    alert(`You can make a maximum of ${maxPackages} care packages with the remaining supplies.`);
  }
  
  // Get the button element and attach the click event handler
  const calculateButton = document.getElementById('calculateButton');
  calculateButton.addEventListener('click', calculateCarePackages);
  
  