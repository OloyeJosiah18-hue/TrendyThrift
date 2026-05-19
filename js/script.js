const cartButtons = document.querySelectorAll('.add-cart');

cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart successfully! Product will be delivered within 3-5 business days.');
    });
});

