let sign_name = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-name"
);
let sign_email = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-email"
);
let sign_password = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-password"
);
let confirm_password = document.querySelector(
  ".sign-form-container form .flex .inputbox #confirm-password"
);
let sign_number = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-number"
);
let sign_nationality = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-nationality"
);
let sign_city = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-city"
);
let sign_gender = document.querySelector(
  ".sign-form-container form .flex .inputbox #sign-gender"
);
let form_one = document.querySelector(".sign-form-container .big form");
let form_two = document.querySelector(
  ".sign-form-container .big .share form-two"
);

let sign_up_btn = document.querySelector("header .icons a .fa-user-plus");

let terms_agree = document.getElementById("agree");

let methods = document.querySelectorAll(
  ".sign-form-container form .share button"
);

let sign_check_name = false;
let sign_check_number = false;
let sign_check_spChar = false;
let confirm_check = false;

let cheker = false;
let space_cnt = 0;

function containsSpecialChars(str) {
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  return specialChars.test(str);
}
function showError(obj1, str) {
  obj1.value = "";
  obj1.style.borderStyle = "solid";
  obj1.style.borderColor = "red";
  obj1.placeholder = `Please, Enter a valid ${str}`;
}

function validate(ddl) {
  var selectedValue = ddl.options[ddl.selectedIndex].value;
  if (selectedValue == "Male" || selectedValue == "Female") {
    return true;
  }
  return false;
}

/**********for checking the validation of the email */
// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
/*************/
/******************Log in section Ends */

form_one.onsubmit = () => {
  /******************************************************************** */
  if (sign_name.value === "") {
    alert("Please enter your name");
    showError(sign_name, "Name");
    return false;
  }
  if (sign_email.value === "") {
    alert("Please enter your E-mail");
    showError(sign_email, "E-mail");
    return false;
  }
  if (sign_password.value === "") {
    alert("Please enter your Password");
    showError(sign_password, "Password");
    return false;
  }
  if (confirm_password.value === "") {
    alert("Please Confirm Your Password");
    showError(confirm_password, "Confirmation");
    return false;
  }
  if (sign_number.value === "") {
    alert("Please enter your Number");
    showError(sign_number, "Number");
    return false;
  }
  if (sign_nationality.value === "") {
    alert("Please enter your Nationality");
    showError(sign_nationality, "Nationality");
    return false;
  }
  if (sign_city.value === "") {
    alert("Please enter your City");
    showError(sign_nationality, "City");
    return false;
  }
  if (validate(sign_gender) === false) {
    alert("Please select your gender");
    return false;
  }
  /***************************************************************************** */
  for (let i = 0; i < sign_name.value.length; i++) {
    if (sign_name.value[i] === " ") {
      space_cnt++;
    }
  }
  if (sign_password.value.length !== 8) {
    alert("Your password must consists of only 8 characters");
    showError(sign_password, "Password");
    return false;
  }
  if (sign_password.value[0].toUpperCase() !== sign_password.value[0]) {
    alert("Your password must start with a capital letter");
    showError(sign_password, "Password");
    return false;
  }
  for (let i = 0; i < sign_password.value.length; i++) {
    if (typeof +sign_password.value[i] === typeof 2) {
      sign_check_number = true;
    }
  }
  if (containsSpecialChars(sign_password.value)) {
    sign_check_spChar = true;
  }
  if (sign_password.value !== confirm_password.value) {
    alert("Your confirmation is wrong");
    showError(confirm_password, "Confirmation");
    return false;
  }

  if (space_cnt !== 2) {
    alert("Your Name must be tripartite Ex: Mohamed Ahmed Rabea");
    return false;
  }
  if (sign_check_number === false) {
    alert("your password must contains one digit atleast");
    showError(sign_password, "Password");
    return false;
  }
  if (sign_check_spChar === false) {
    alert("your password must contains one special character atleast");
    showError(login_password, "Password");
    return false;
  }
  alert("Your Form is Submitted");
  sign_up_btn.style.display = "none";
};
