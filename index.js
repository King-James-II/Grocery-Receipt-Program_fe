// Array containing customer names
const customers = ["John S.", "Emma M.", "Frank T."];

// Array containing receipt items for each customer
const receipts = [
  ["eggs", "white bread", "milk"],
  ["milk", "cheese", "butter", "pancake mix", "flour"],
  ["cereal", "whole wheat bread", "milk", "cheese", "eggs", "vanilla"]
];

// Object containing prices for each item
const prices = {
  "eggs": 3.50,
  "white bread": 4.50,
  "milk": 5.99,
  "cheese": 6.50,
  "butter": 3.45,
  "pancake mix": 4.50,
  "flour": 5.75,
  "cereal": 4.50,
  "whole wheat bread": 6.50,
  "vanilla": 8.75
};

// Function to set text content of an HTML element by ID
function setElementText(id, text) {
  document.getElementById(id).innerText = text;
}

// Function to populate the table with customer receipts
function populateTable() {
  // Loop through each customer
  for (let i = 0; i < customers.length; i++) {
    let customer = customers[i];
    let receipt = receipts[i];
    let receipt_list = ""; // Initialize an empty string to hold receipt items
    let sum = 0; // Initialize total sum for the customer

    // Loop through each item in the receipt
    for (let j = 0; j < receipt.length; j++){
      let item = receipt[j];
      let price = prices[item]; // Get the price of the item from the prices object
      receipt_list = `${receipt_list}${item}\n`; // Add item to receipt list string
      sum += price; // Add price to total sum
    }

    // Displaying customer information and total sum
    console.log("customer" + i.toString(), customer);
    console.log("receipt" + i.toString(), receipt_list);
    console.log("total" + i.toString(), sum);
    
    // Setting text content of HTML elements with customer information and total sum
    setElementText("customer" + i.toString(), customer);
    setElementText("receipt" + i.toString(), receipt_list);
    setElementText("total" + i.toString(), sum);
  }
}
