let cart = []

const buttons = document.querySelectorAll('.add-to-cart');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const productDiv = button.parentElement;
        const productName = productDiv.querySelector('h3').textContent;
        const productPrice = productDiv.querySelector('p').textContent;

        cart.push({
            name: productName,
            price: productPrice
        });

        localStorage.setItem('cart', JSON.stringify(cart));
        console.log(cart);
    })
})
