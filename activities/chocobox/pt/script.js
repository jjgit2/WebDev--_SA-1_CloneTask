let cart = [];
let total = 0;

function addToCart(product, price) {
    cart.push(product);
    total += price;
    displayCart();
}

function displayCart() {
    const cartItems = document.getElementById('cart-items');
    const totalElement = document.getElementById('total');
    
    cartItems.innerHTML = ''; // Clear previous items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        cartItems.appendChild(li);
    });

    totalElement.textContent = `Total: $${total.toFixed(2)}`;
}

function checkout() {
    const message = document.getElementById('message');
    message.textContent = 'Thank you for your order!';
    // Optionally clear the cart after checkout
    cart = [];
    total = 0;
    displayCart(); // Update the cart display
}

function displaySelection() {
    const selectElement = document.getElementById('occasion-select');
    const selectedValue = selectElement.value;
    const resultDiv = document.getElementById('result');

    if (selectedValue) {
        resultDiv.textContent = `You selected: ${selectedValue}`;
    } else {
        resultDiv.textContent = 'Please select an occasion.';
    }
}


