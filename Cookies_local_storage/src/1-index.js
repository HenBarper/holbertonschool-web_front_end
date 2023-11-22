function setCookies() {
    const expDate = new Date();
    expDate.setDate(expDate.getDate() + 10);

    document.cookie = `firstname=${document.querySelector('#firstname').value}`;
    document.cookie = `email=${document.querySelector('#email').value}`;
    document.cookie = `expires="${expDate}"`;
}

function showCookies() {
    let cookies = document.cookie;
    let p = document.createElement('p');
    p.innerHTML = 'cookies: ' + cookies;
    document.body.appendChild(p);
}