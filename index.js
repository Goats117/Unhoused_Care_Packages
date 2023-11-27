// index.js

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

// Function to calculate the maximum number of care packages that can be made
function calculateCarePackages(suppliesPerPackage, currentSupplies) {
  let maxPackages = Infinity;

  // Loop through each supply item in the care package
  for (const item in suppliesPerPackage) {
    // Calculate the maximum number of care packages based on the user input
    const maxPackagesForItem = Math.floor(currentSupplies[item] / suppliesPerPackage[item]);

    // Update the maximum number of care packages
    maxPackages = Math.min(maxPackages, maxPackagesForItem);
  }

  return maxPackages;
}

// Function to handle form submission
function submitForm() {
  // Get values from input fields
  const water = parseInt(document.getElementById('water').value, 10) || 0;
  const nailClippers = parseInt(document.getElementById('nail').value, 10) || 0;
  const balms = parseInt(document.getElementById('balm').value, 10) || 0;
  const gallonBag = parseInt(document.getElementById('bag').value, 10) || 0;
  const handWarmers = parseInt(document.getElementById('warmers').value, 10) || 0;
  const socks = parseInt(document.getElementById('socks').value, 10) || 0;
  const crackers = parseInt(document.getElementById('crackers').value, 10) || 0;
  const tuna = parseInt(document.getElementById('tuna').value, 10) || 0;
  const wipes = parseInt(document.getElementById('wipes').value, 10) || 0;
  const largeBand = parseInt(document.getElementById('largeBand').value, 10) || 0;
  const smallBand = parseInt(document.getElementById('smallBand').value, 10) || 0;

  // Create an object with user input
  const userInput = {
    "water bottles": water,
    "nail clippers": nailClippers,
    "balms": balms,
    "gallon bag": gallonBag,
    "hand warmers": handWarmers,
    "socks": socks,
    "crackers": crackers,
    "tuna": tuna,
    "wipes": wipes,
    "large band-aid": largeBand,
    "small band-aid": smallBand,
  };

  // Calculate the maximum number of care packages based on user input
  const maxPackages = calculateCarePackages(suppliesPerPackage, userInput);

  // Display the result
  alert(`You can make a maximum of ${maxPackages} care packages with the provided supplies.`);
}
