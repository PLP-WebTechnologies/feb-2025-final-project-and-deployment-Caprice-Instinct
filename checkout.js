let cart = JSON.parse(localStorage.getItem('cart')) || [];

const orderItemsContainer = document.getElementById('order-items');
const totalPriceElement = document.getElementById('total-price');
const checkoutForm = document.getElementById('checkout-form');

function displayCartItems() {
    let totalPrice = 0;
    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('order-item');

        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.price}</p>
        `;

        const price = parseFloat(item.price.replace('$', ''));
        totalPrice += price;

        orderItemsContainer.appendChild(itemDiv);
    });
    totalPriceElement.textContent = `$${totalPrice.toFixed(2)}`;
}

displayCartItems();

checkouForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const email = document.getElementById('email').value;
    const paymentMethod = document.getElementById('payment').value;

    if (name && address && email && paymentMethod) {
        alert(`Order placed successfully!
            Name: ${name}
            Address: ${address}
            Email: ${email}
            Payment Method: ${paymentMethod}
            Total: ${totalPriceElement.textContent}`);

        // Clear cart after order is placed
        localStorage.removeItem('cart');
        cart = [];
        
        // Redirect to home page or thank you page (optional)
        window.location.href = 'index.html';
    } else {
        alert('Please fill out all the fields.');
    }
})