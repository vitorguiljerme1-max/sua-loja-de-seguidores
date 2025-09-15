const cart = [];
const cartItems = document.getElementById('cart-items');

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', () => {
        const product = button.dataset.product;
        const quantity = button.previousElementSibling.value;
        cart.push({product, quantity});
        renderCart();
    });
});

function renderCart() {
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.quantity} - ${item.product}`;
        cartItems.appendChild(li);
    });
}

document.getElementById('checkout').addEventListener('click', () => {
    if(cart.length === 0){
        alert("Seu carrinho está vazio!");
        return;
    }
    let message = 'Olá, quero comprar:\n';
    cart.forEach(item => {
        message += `${item.quantity} - ${item.product}\n`;
    });
    const url = `https://api.whatsapp.com/send?phone=5581996744143&text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
});
