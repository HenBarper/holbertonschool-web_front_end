document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) === "undefined") {
        alert("Sorry, your browser does not support Web storage. Try again with a better one");
        return;
    }

    const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

    function getCartFromStorage() {
        const cartString = sessionStorage.getItem('cart');
        return cartString ? JSON.parse(cartString) : {};
    }

    function addItemToCart(item) {
        const cart = getCartFromStorage();
        cart[item] = (cart[item] || 0) + 1;
        sessionStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    function removeItemFromCart(item) {
        const cart = getCartFromStorage();
        delete cart[item];
        sessionStorage.setItem('cart', JSON.stringify(cart));
        displayCart();
    }

    function clearCart() {
        sessionStorage.removeItem('cart');
        displayCart();
    }

    function createStore() {
        const h2 = document.createElement('h2');
        h2.textContent = 'Available products:';
        document.body.appendChild(h2);

        const ul = document.createElement('ul');

        availableItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            li.addEventListener('click', function () {
                addItemToCart(item);
            });

            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    }

    function displayCart() {
        const cartDiv = document.createElement('div');
        document.body.appendChild(cartDiv);

        updateCart();
    }

    function updateCart() {
        const cart = getCartFromStorage();
        const cartDiv = document.querySelector('div');
    
        while (cartDiv.firstChild) {
            cartDiv.removeChild(cartDiv.firstChild);
        }
    
        const ul = document.createElement('ul');
    
        if (Object.keys(cart).length === 0) {
            const emptyCartLi = document.createElement('li');
            emptyCartLi.textContent = 'Your cart is empty';
            ul.appendChild(emptyCartLi);
        } else {
            Object.keys(cart).forEach(item => {
                const li = document.createElement('li');
                li.textContent = `${item} x ${cart[item]} (remove)`;
    
                li.addEventListener('click', function () {
                    removeItemFromCart(item);
                });
    
                ul.appendChild(li);
            });
        }
    
        const clearTextLi = document.createElement('li');
        clearTextLi.textContent = 'Clear my cart';
        clearTextLi.classList.add('clear-text');
        clearTextLi.addEventListener('click', clearCart);
        ul.appendChild(clearTextLi);

        cartDiv.appendChild(ul);
    }
    

    createStore();
    displayCart();
});
