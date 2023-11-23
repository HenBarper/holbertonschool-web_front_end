function setCookies() {
    const expDate = new Date();
    expDate.setDate(expDate.getDate() + 10);

    document.cookie = `firstname=${document.querySelector('#firstname').value}`;
    document.cookie = `email=${document.querySelector('#email').value}`;
    document.cookie = `expires="${expDate}"`;
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