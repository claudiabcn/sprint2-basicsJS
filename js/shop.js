import { products } from "./products.js";

const cart = [];

const cartList = document.querySelector('#cart_list');
const totalPrice = document.querySelector('#total_price');
const promoPrice = document.querySelector('#promo_price');

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
    
    printCart();
    
    const total = calculateTotal();
    const totalConPromociones = applyPromotionsCart(cart, total);

    console.log("Estado actual del carrito:", cart);
    console.log("Total:", total);
    console.log("Total con promociones:", totalConPromociones);
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
    printCart();
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

const applyPromotionsCart = (cart, total) => {
    let discount = 0;
    cart.forEach(product => {
        if (parseInt(product.id) === 1 && product.quantity >= 3) {
            discount += product.price * product.quantity * 0.2;
        }
        if (parseInt(product.id) === 3 && product.quantity >= 10) {
            discount += product.price * product.quantity * 0.3;
        }
    });

    const subtotalWithDiscount = total - discount;
    return subtotalWithDiscount;
};

const printCart = () => {

    const emptyCartMessage = document.querySelector('#empty-cart-message');
    const productRows = cartList.querySelectorAll('tr:not(#empty-cart-message)');


    if (cart.length === 0) {

        emptyCartMessage.style.display = 'table-row';
        totalPrice.textContent = "0.00";
        promoPrice.textContent = "0.00";
    } else {

        emptyCartMessage.style.display = 'none';
            const cartRowsHTML = cart.map(product => {
            const productTotal = (product.price * product.quantity).toFixed(2);
            return `
                <tr>
                    <th scope="row">${product.name}</th>
                    <td>$${product.price}</td>
                    <td>${product.quantity}</td>
                    <td>$${productTotal}</td>
                </tr>
            `;
        });

        cartList.innerHTML += cartRowsHTML.join('');
        

        const total = calculateTotal();
        const finalTotal = applyPromotionsCart(cart, total);
        
   
        totalPrice.textContent = total.toFixed(2);
        promoPrice.textContent = finalTotal.toFixed(2);
    }
};