function setCookies() {
    document.cookie = `firstname=${document.querySelector('#firstname').value}`;
    document.cookie = `email=${document.querySelector('#email').value}`;
}

function showCookies() {
    let cookies = document.cookie;
    let p = document.createElement('p');
    p.innerHTML = 'cookies: ' + cookies;
    document.body.appendChild(p);
}