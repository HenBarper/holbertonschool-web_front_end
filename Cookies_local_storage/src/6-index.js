document.addEventListener('DOMContentLoaded', function () {
    if (typeof(Storage) === "undefined") {
        alert("Sorry, your browser does not support Web storage. Try again with a better one");
        return;
    }

    const availableItems = ["Shampoo", "Soap", "Sponge", "Water"];

    function addGrocery(item) {
        sessionStorage.setItem(item, true);
        displayCart();
    }

    function createStore() {
        const ul = document.createElement('ul');

        availableItems.forEach(item => {
            const li = document.createElement('li');
            li.textContent = item;

            li.addEventListener('click', function () {
                addGrocery(item);
            });

            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    }

    function displayCart() {
        const cartItems = Object.keys(sessionStorage);
    
        if (cartItems.length === 0) {
            return;
        }
    
        const p = document.createElement('p');
        p.textContent = `You previously had ${cartItems.length} items in your cart`;
        document.body.appendChild(p);
    }

    createStore();
    displayCart();
});
