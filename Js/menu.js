let menu_btn = document.querySelector(".header .navigation");
let searchForm = document.querySelector(".search-form-container");
let cartForm = document.querySelector(".shopping-form-container");
document.querySelector("#menu-btn").onclick = () => {
  location.href = "/index.html#order";
};
document.querySelector("#search-btn").onclick = () => {
  cartForm.classList.remove("active");
  searchForm.classList.toggle("active");
};
document.querySelector("#shopping-btn").onclick = () => {
  searchForm.classList.remove("active");

  cartForm.classList.toggle("active");
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

let add_btns = document.querySelectorAll("#menu .box-container .box");
let add_images = document.querySelectorAll("#menu .box-container .box img");
let add_prices = document.querySelectorAll(
  "#menu .box-container .box .content .price .price-num"
);
let add_names = document.querySelectorAll(
  "#menu .box-container .box .content h3"
);
let add_after = document.getElementById("box_container_add");

for (let i = 0; i < add_btns.length; i++) {
  add_btns[i].addEventListener("click", function () {
    let div = document.createElement("div");
    div.className = "box";
    div.innerHTML = `
    <i class="fas fa-times" aria-hidden="true"></i>
    <img src=${add_images[i].getAttribute("src")} alt="">
    <div class="content">
        <h3>${add_names[i].innerHTML}</h3>
        <span>quantity : </span>
        <input type="number" name="" value="0" id="" min="0">
        <br>
        <span>price : </span>
        <span class="price">$<span class="price-num">${
          add_prices[i].innerHTML
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
    console.log(add_btns);
    console.log(add_images);
    console.log(product);
    console.log("clicked");
    cartForm.classList.add("active");
  });
}
