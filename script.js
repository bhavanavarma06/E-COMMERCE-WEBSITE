let cart = [];
let total = 0;

// Function to add products to the cart
function addToCart(productName, productPrice) {
  cart.push({ name: productName, price: productPrice });
  total += productPrice;
  renderCart();
}

// Function to render the cart
function renderCart() {
  const cartItems = document.getElementById('cart-items');
  const cartTotal = document.getElementById('cart-total');

  // Clear current cart items
  cartItems.innerHTML = '';

  if (cart.length === 0) {
    cartItems.innerHTML = '<li>Your cart is empty.</li>';
  } else {
    cart.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = ${item.name} - $${item.price.toFixed(2)};
      li.innerHTML += ` <button onclick="removeFromCart(${index})">Remove</button>`;
      cartItems.appendChild(li);
    });
  }

  cartTotal.textContent = total.toFixed(2);
}

// Function to remove products from the cart
function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  renderCart();
}
