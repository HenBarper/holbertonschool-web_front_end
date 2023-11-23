function setCookies() {
    const expDate = new Date();
    expDate.setDate(expDate.getDate() + 10);

    document.cookie = `firstname=${document.querySelector('#firstname').value}`;
    document.cookie = `email=${document.querySelector('#email').value}`;
    document.cookie = `expires="${expDate}"`;

    showWelcomeMessageOrForm();
}

function showCookies() {
    let p = document.createElement('p');
    let cookEmail = getCookie('email');
    let cookName = getCookie('firstname');
    p.innerHTML = `Email: ${cookEmail} - Firstname: ${cookName}`;
    document.body.appendChild(p);
}

function getCookie(name) {
    let cookies = document.cookie.split(';');

    for(let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim();
        if (cookie.startsWith(name + '=')) {
            return cookie.substring(name.length + 1);
        }
    }
    return '';
}

function showForm() {
    let welcomeMessage = document.getElementById('welcome-message');
    let loginForm = document.getElementById('login-form');

    if (welcomeMessage.style.display !== 'none') {
        welcomeMessage.style.display = 'none';
    }

    loginForm.style.display = 'block';
}

function hideForm() {
    let loginForm = document.getElementById('login-form');
    loginForm.style.display = 'none';
}

function deleteCookiesAndShowForm() {
    document.cookie = 'firstname=; expires=Thu, 01 Jan 2020 00:00:00 UTC;';
    document.cookie = 'email=; expires=Thu, 01 Jan 2020 00:00:00 UTC;';
    showForm();
}

function showWelcomeMessageOrForm() {
    let welcomeMessage = document.getElementById('welcome-message');
    let loginForm = document.getElementById('login-form');

    let cookEmail = getCookie('email');
    let cookName = getCookie('firstname');

    if (cookEmail && cookName) {
        loginForm.style.display = 'none';

        let h1 = welcomeMessage.querySelector('h1');
        h1.textContent = `Welcome ${cookName}`;
        welcomeMessage.style.display = 'block';

        let logoutLink = document.getElementById('logout');
        logoutLink.addEventListener('click', function () {
            deleteCookiesAndShowForm();
            welcomeMessage.style.display = 'none';
        });
    } else {
        showForm();
    }
}