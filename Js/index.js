/*********************************************Header section */

let searchForm = document.querySelector(".search-form-container");
let cartForm = document.querySelector(".shopping-form-container");
let userForm = document.querySelector(".login-form-container");
let menu_btn = document.querySelector(".header .navigation");
let floating_btn = document.querySelector(".float");

document.querySelector("#search-btn").onclick = () => {
  cartForm.classList.remove("active");
  userForm.classList.remove("active");
  menu_btn.classList.remove("active");
  searchForm.classList.toggle("active");
};
document.querySelector("#shopping-btn").onclick = () => {
  searchForm.classList.remove("active");
  userForm.classList.remove("active");
  menu_btn.classList.remove("active");
  cartForm.classList.toggle("active");
};
document.querySelector("#user-btn").onclick = () => {
  cartForm.classList.remove("active");
  searchForm.classList.remove("active");
  menu_btn.classList.remove("active");
  userForm.classList.toggle("active");
};
document.querySelector("#menu-btn").onclick = () => {
  cartForm.classList.remove("active");
  searchForm.classList.remove("active");
  userForm.classList.remove("active");
  menu_btn.classList.toggle("active");
};

window.onscroll = () => {
  menu_btn.classList.remove("active");
  searchForm.classList.remove("active");
  userForm.classList.remove("active");
  if (document.documentElement.scrollTop > 100) {
    floating_btn.classList.add("active");
  } else {
    floating_btn.classList.remove("active");
  }
};

/*************************end of header section *********/
/****************products section */
document.querySelector(".home").onmousemove = (e) => {
  let x = (window.innerWidth - e.pageX * 2) / 90;
  let y = (window.innerHeight - e.pageY * 2) / 90;

  document.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(${y}px) translateY(${x}px)`;
};
document.querySelector(".home").onmouseleave = () => {
  document.querySelector(
    ".home .home-parallax-img"
  ).style.transform = `translateX(0px) translateY(0px)`;
};

let product = document.querySelectorAll(
  ".shopping-form-container .products-container .box-container .box"
);
let product_times = document.querySelectorAll(
  ".shopping-form-container .products-container .box-container .box .fa-times"
);

let product_price = document.querySelectorAll(
  ".shopping-form-container .products-container .box-container .box .content .price .price-num"
);
let product_quantity = document.querySelectorAll(
  ".shopping-form-container .products-container .box-container .box .content input"
);

let arr = [];
let result = 0;
let check;
let rem;
document.querySelector(
  ".shopping-form-container .cart-total .total span"
).innerHTML = `$${result}`;
for (let i = 0; i < product.length; i++) {
  product_times[i].onclick = () => {
    product[i].classList.add("rem");
    result -=
      parseInt(product_price[i].innerHTML) *
      parseInt(product_quantity[i].value);
    product_price[i].innerHTML = "0";
  };
}
let arr_price = [];
document.querySelector("#confirm-btn").onclick = () => {
  result = 0;
  for (let i = 0; i < product.length; i++) {
    arr[i] = +product_quantity[i].value;
    arr_price[i] = arr[i] * parseInt(product_price[i].innerHTML);
    result += arr_price[i];
  }
  document.querySelector(
    ".shopping-form-container .cart-total .total span"
  ).innerHTML = `$${result}`;
};
/***********products section ends */
/****************login in section starts */
let login_name = document.querySelector(
  ".login-form-container form #login-name"
);
let login_email = document.querySelector(
  ".login-form-container form #login-email"
);
let login_password = document.querySelector(
  ".login-form-container form #login-password"
);
let login_show_pass = document.getElementById("show-pass");
login_show_pass.onclick = () => {
  let show_pass_check = login_password;
  if (login_show_pass.checked === true) {
    show_pass_check.type = "text";
  } else {
    show_pass_check.type = "password";
  }
};
let login_check_number = false;
let login_check_spChar = false;

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

/**********for checking the validation of the email */
// function validateEmail(email) {
//   var re = /\S+@\S+\.\S+/;
//   return re.test(email);
// }
/*************/
/******************Log in section Ends */
document.querySelector(".login-form-container form").onsubmit = () => {
  if (login_name.value === "") {
    alert("Please enter your name");
    showError(login_name, "Name");
    return false;
  }
  if (login_email.value === "") {
    alert("Please enter your E-mail");
    showError(login_email, "E-mail");
    return false;
  }
  if (login_password.value === "") {
    alert("Please enter your Password");
    showError(login_password, "Password");
    return false;
  }
  if (login_password.value.length !== 8) {
    alert("Your password must consists of only 8 characters");
    showError(login_password, "Password");
    login_show_pass.checked = true;
    return false;
  }
  if (login_password.value[0].toUpperCase() !== login_password.value[0]) {
    alert("Your password must start with a capital letter");
    showError(login_password, "Password");
    login_show_pass.checked = true;
    return false;
  }
  for (let i = 0; i < login_password.value.length; i++) {
    if (typeof +login_password.value[i] === typeof 2) {
      login_check_number = true;
    }
  }
  if (containsSpecialChars(login_password.value)) {
    login_check_spChar = true;
  }
  if (login_check_number === false) {
    alert("your password must contains one digit atleast");
    showError(login_password, "Password");
    login_show_pass.checked = true;
    return false;
  }
  if (login_check_spChar === false) {
    alert("your password must contains one special character atleast");
    showError(login_password, "Password");
    login_show_pass.checked = true;
    return false;
  }
  alert("Your Form is Submitted");
};

/***********************End of header section */
/******************************************** */
/********************************************* */

let order_inputs = document.querySelectorAll(
  "#order_form .flex .inputBox .input_order"
);
document.querySelector("#order_form").onsubmit = () => {
  for (let i = 0; i < order_inputs.length; i++) {
    if (order_inputs[i].value === "") {
      showError(order_inputs[i], "Value");
      return false;
    }
  }
  return true;
};

/************************************ */

let add_to_cart_btns = document.querySelectorAll(".add-to-cart");
let add_to_cart_images = document.querySelectorAll(".add-cart-image");
let add_to_cart_prices = document.querySelectorAll(".add-cart-price");
let add_to_cart_names = document.querySelectorAll(".food-name-to-add-to-cart");
let add_after = document.getElementById("box_container_add");

for (let i = 0; i < add_to_cart_btns.length; i++) {
  add_to_cart_btns[i].addEventListener("click", function () {
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
    <i class="fas fa-times" aria-hidden="true"></i>
    <img src=${add_to_cart_images[i].getAttribute("src")} alt="">
    <div class="content">
        <h3>${add_to_cart_names[i].innerHTML}</h3>
        <span>quantity : </span>
        <input type="number" name="" value="0" id="" min="0">
        <br>
        <span>price : </span>
        <span class="price">$<span class="price-num">${
          add_to_cart_prices[i].innerHTML
        }</span></span>
    </div>`;

    add_after.appendChild(div);

    product = document.querySelectorAll(
      ".shopping-form-container .products-container .box-container .box"
    );
    product_times = document.querySelectorAll(
      ".shopping-form-container .products-container .box-container .box .fa-times"
    );

    product_price = document.querySelectorAll(
      ".shopping-form-container .products-container .box-container .box .content .price .price-num"
    );
    product_quantity = document.querySelectorAll(
      ".shopping-form-container .products-container .box-container .box .content input"
    );
    for (let i = 0; i < product.length; i++) {
      product_times[i].onclick = () => {
        product[i].classList.add("rem");
        result -=
          parseInt(product_price[i].innerHTML) *
          parseInt(product_quantity[i].value);
        product_price[i].innerHTML = "0";
      };
    }

    cartForm.classList.add("active");
  });
}

/****************************** */

let heart = document.querySelectorAll(".fa-heart");

for (let i = 0; i < heart.length; i++) {
  heart[i].addEventListener("click", function () {
    heart[i].style.color = "#ce1edb";
  });
}

let email_checker = document.querySelector(
  ".footer .newletter form #email_sub"
);

document.querySelector(".footer .newletter form").onsubmit = () => {
  if (email_checker.value === "") {
    showError(email_checker, "Email");
    return false;
  }
  return true;
};
