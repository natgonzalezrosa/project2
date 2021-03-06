$(document).ready(function() {
    // Getting references to our form and inputs
    var loginForm = $("form.login");
    var nameInput = $("input#name-input");
    var emailInput = $("input#email-input");
    var passwordInput = $("input#password-input");
  
    // When the form is submitted, we validate there's an email and password entered
    loginForm.on("submit", function(event) {
      event.preventDefault();
      var userData = {
        firstName: nameInput.val().trim(),
        email: emailInput.val().trim(),
        password: passwordInput.val().trim()
      };
  
      if (!userData.firstName || !userData.email || !userData.password) {
        return;
      }
  
      // If we have an email and password we run the loginUser function and clear the form
      loginUser(userData.firstName, userData.email, userData.password);
      nameInput.val("");
      emailInput.val("");
      passwordInput.val("");
    });
  
    // loginUser does a post to our "api/login" route and if successful, redirects us to the members page
    function loginUser(firstName, email, password) {
      $.post("/api/login", {
        firstName: firstName,
        email: email,
        password: password
      }).then(function(data) {
        window.location.replace(data);
        // If there's an error, log the error
      }).catch(function(err) {
        $("#centralModalSuccess").modal('toggle');
        console.log(err);
      });
    }
  
  });