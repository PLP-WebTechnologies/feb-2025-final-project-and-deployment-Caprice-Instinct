let cart = JSON.parse(localStorage.getItem('cart')) || [];

const cartItemsContainer = document.getElementById('cart-items');

cart.forEach(item => {
    const itemDiv = document.createElement('div');
    itemDiv.classList.add('cart-item');

    itemDiv.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.price}</p>
    `;
    cartItemsContainer.appendChild(itemDiv);
})

localStorage.setItem('cart', JSON.stringify(cart));

document.getElementById('checkout').addEventListener('click', function() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    
    if (cart.length === 0) {
        alert('Your cart is empty. Please add items to the cart before proceeding.');
    } else {
        window.location.href = 'checkout.html';
    }
});