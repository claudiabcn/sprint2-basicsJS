import { products } from "./products.js";

const cart = [];

const buy = (productId) => {
  const productInCart = cart.find((product) => product.id === productId);

  if (productInCart) {
    productInCart.quantity++;
  } else {
    const productToAdd = products.find((product) => product.id === productId);

    if (productToAdd) {
      const newProduct = { ...productToAdd, quantity: 1 };
      cart.push(newProduct);
    }
  }

  console.log("Estado actual del carrito:", cart);
  console.log("Total actualizado:", calculateTotal());
};

const addCartBtns = document.querySelectorAll(".add-to-cart");

addCartBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const productId = parseInt(btn.dataset.productId);
    buy(productId);
  });
});

const cleanCart = () => {
  cart.length = 0;
  console.log("Carrito limpiado:", cart);
};

const cleanCartBtn = document.querySelector("#clean-cart");
if (cleanCartBtn) {
  cleanCartBtn.addEventListener("click", () => {
    cleanCart();
  });
}

const calculateTotal = () => {
  let total = 0;
  cart.forEach((product) => {
    total += product.price * product.quantity;
  });
  return total;
};

// Exercise 4
const applyPromotionsCart = () => {
  subtotalWithDiscount = 0;

  // Apply promotions to each item in the array "cart"
};

// Exercise 5
const printCart = () => {
  // Fill the shopping cart modal manipulating the shopping cart dom
};

// ** Nivell II **

// Exercise 7
const removeFromCart = (id) => {};

const open_modal = () => {
  printCart();
};
