 //assignment_LA4

// Initialize the queue array to store customer names.  It starts empty.
let queue = []; 

// Array of customer names to be added to the queue.
let customers = ["Elaine", "Althea", "Angelo", "Lito", "Engelbert"];

// Function to add a customer to the queue.
function addCustomer(name) {
    // Add the customer's name to the end of the queue using push().
    queue.push(name); 
    // Print a message to the console confirming the addition.
    console.log(${name} added to the queue.); 
}

// Function to serve (remove and process) the next customer in the queue.
function serveCustomer() {
    // Check if the queue is empty.
    if (queue.length === 0) { 
        // If empty, print a message and exit the function.
        console.log("The queue is empty."); 
        return; 
    }

    // Remove and retrieve the first customer from the queue using shift().
    let servedCustomer = queue.shift(); 
    // Print a message indicating which customer is being served.
    console.log(Serving customer: ${servedCustomer}); 
    // Display the updated queue after serving the customer.
    displayQueue(); 
}

// Function to display the current contents of the queue to the console.
function displayQueue() {
    // Check if the queue is empty.
    if (queue.length === 0) { 
        // If empty, print a message and exit the function.
        console.log("Queue is empty"); 
        return; 
    }
    // Print the current queue array to the console.
    console.log("Current Queue:", queue); 
}

// Example usage: Add all customers to the queue, then serve the first two.
// Add each customer in the 'customers' array to the queue using the addCustomer function.
customers.forEach(customer => addCustomer(customer)); 
// Serve the first customer in the queue.
serveCustomer(); 
// Serve the second customer in the queue.
serveCustomer(); 
// Display the remaining customers in the queue.
displayQueue();