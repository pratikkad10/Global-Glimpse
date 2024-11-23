(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })()




  setTimeout(() => {
    const successMessage = document.getElementById('flash-success');
    const errorMessage = document.getElementById('flash-error');

    if (successMessage) {
        successMessage.classList.add('flash-hidden');
    }
    if (errorMessage) {
        errorMessage.classList.add('flash-hidden');
    }
}, 3000);

// Function to hide flash messages when the close button is clicked
function hideMessage(id) {
    const element = document.getElementById(id);
    if (element) {
        element.classList.add('flash-hidden');
    }
}