// page 2 contact info function
function validateForm(event) {
    event.preventDefault();
  
    const phoneNumberInput = document.getElementById('phoneNumber');
    const phoneNumber = phoneNumberInput.value;
  
    const phoneRegex = /^\d{10}$/;
  
    if (!phoneRegex.test(phoneNumber)) {
      displayErrorMessage('Please enter a valid 10-digit phone number.');
    } else {
     
      clearErrorMessage();
    
      console.log('Form submitted successfully!');
    }
  }
  
  function displayErrorMessage(message) {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = message;
  }
  
  function clearErrorMessage() {
    const errorMessageDiv = document.getElementById('error-message');
    errorMessageDiv.textContent = '';
  }
  // end page 2 contact info function
  