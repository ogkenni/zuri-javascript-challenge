const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const firstName = form["firstName"].value;
  const lastName = form["lastName"].value;
  const email = form["email"].value;
  const password = form["password"].value;

  if (firstName === ""){
    addErrorTo("firstName", "First name is required");
  } else {
    removeErrorFrom("firstName");
  }

  if (lastName === ""){
    addErrorTo("lastName", "Last name is required");
  } else {
    removeErrorFrom("lastName");
  }

  if (email === ""){
    addErrorTo("email", "Email is required");
  } else if (!validateEmail(email)){
    addErrorTo("email", "Looks like this is not an email");
  } else{
    removeErrorFrom("email");
  }
  
  if (password === ""){
    addErrorTo("password", "Password is required");
  }  else {
    removeErrorFrom("password");
  }
 });


 ///toggle password visibility
 document.getElementById('togglePassword').addEventListener('click', function (e) {
  const passwordInput = document.getElementById('password');
  const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
  this.classList.toggle('fa-eye-slash');
});

///removing eye icon after submission so that the error icon can show
document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault(); 
  document.getElementById('togglePassword').style.display = 'none';
});


 ///function to add errors
function addErrorTo(field, message){
  const formControl = form[field].parentNode
  form[field].classList.add("error");
  const small = formControl.querySelector("small");
  small.innerText = message;
  small.style.opacity ="1";
  const image = formControl.querySelector("img");
  image.style.opacity="1";
}


///function to remove error
function removeErrorFrom(field){
  const formControl = form[field].parentNode
  form[field].classList.remove('error');
  const small = formControl.querySelector("small");
  small.style.opacity ="0";
  const image = formControl.querySelector("img");
  image.style.opacity="0";
}

//Validate email
function validateEmail(email) {
  var re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

