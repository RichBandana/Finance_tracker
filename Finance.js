function sendMessage() {
  const name = document.getElementById('contact-name').value;
  const email = document.getElementById('contact-email').value;
  const message = document.getElementById('contact-message').value;

  if (name && email && message) {
    // Store message in localStorage (as a mock database)
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push({ name, email, message });
    localStorage.setItem('messages', JSON.stringify(messages));

    // Show a success message
    document.getElementById('contact-message-status').textContent = "Message sent successfully!";
    document.getElementById('contact-message-status').style.color = "green";

    // Clear form fields after successful submission
    document.getElementById('contact-name').value = '';
    document.getElementById('contact-email').value = '';
    document.getElementById('contact-message').value = '';
  } else {
    // Show an error message if any field is empty
    document.getElementById('contact-message-status').textContent = "Please fill in all fields.";
    document.getElementById('contact-message-status').style.color = "red";
  }
}

// Event listener for the Send Message button
document.getElementById('send-message-button').addEventListener('click', sendMessage);
// Get references to the form elements
const loginForm = document.querySelector('#login-form');
const signupForm = document.querySelector('#signup-form');

// Function to store user data in localStorage
function storeUserData(username, password) {
  localStorage.setItem('username', username);
  localStorage.setItem('password', password);
}

// Function to validate login data
function validateLogin(username, password) {
  const storedUsername = localStorage.getItem('username');
  const storedPassword = localStorage.getItem('password');
  
  if (username === storedUsername && password === storedPassword) {
    alert('Login successful!');
  } else {
    alert('Incorrect username or password!');
  }
}

// Handle Signup form submission
signupForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.querySelector('#signup-username').value;
  const password = document.querySelector('#signup-password').value;

  // Store user data
  storeUserData(username, password);
  
  alert('Signup successful!');
  signupForm.reset(); // Reset the form after signup
});

// Handle Login form submission
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();
  
  const username = document.querySelector('#login-username').value;
  const password = document.querySelector('#login-password').value;

  // Validate user data
  validateLogin(username, password);
  
  loginForm.reset(); // Reset the form after login
});
// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", function() {
  // Get the login and signup forms
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  // Get the login and signup buttons
  const loginButton = document.getElementById('login-btn');
  const signupButton = document.getElementById('signup-btn');

  // Add event listener to Login button
  loginButton.addEventListener('click', function() {
    // Toggle the login form visibility
    if (loginForm.classList.contains('active')) {
      loginForm.classList.remove('active');
    } else {
      loginForm.classList.add('active');
      signupForm.classList.remove('active'); // Hide signup form if open
    }
  });

  // Add event listener to Sign Up button
  signupButton.addEventListener('click', function() {
    // Toggle the signup form visibility
    if (signupForm.classList.contains('active')) {
      signupForm.classList.remove('active');
    } else {
      signupForm.classList.add('active');
      loginForm.classList.remove('active'); // Hide login form if open
    }
  });
});

  const ctx = document.getElementById('spendingChart').getContext('2d');
  const spendingChart = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: ['Food', 'Entertainment', 'Rent'],
      datasets: [{
        data: [2000, 1500, 5000], // Example data
        backgroundColor: ['#ff9999', '#66b3ff', '#99ff99'],
        hoverBackgroundColor: ['#ff6666', '#3399ff', '#66ff66']
      }]
    }
  });
  document.getElementById('login-form').addEventListener('submit', function(e) {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    
    if (!validateEmail(email)) {
      alert('Please enter a valid email.');
      e.preventDefault();
    }
    if (password.length < 6) {
      alert('Password must be at least 6 characters.');
      e.preventDefault();
    }
  });
  
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  document.getElementById('transaction-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = document.getElementById('transaction-amount').value;
    const category = document.getElementById('transaction-category').value;
  
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    transactions.push({ amount, category });
    
    localStorage.setItem('transactions', JSON.stringify(transactions));
    alert('Transaction saved!');
  
    updateDashboard();
  });
  
  function updateDashboard() {
    let transactions = JSON.parse(localStorage.getItem('transactions')) || [];
    let totalExpenses = transactions.reduce((acc, curr) => acc + parseFloat(curr.amount), 0);
    
    document.getElementById('total-expenses').innerText = `₹${totalExpenses}`;
  }
  
  window.onload = updateDashboard;
  
  




