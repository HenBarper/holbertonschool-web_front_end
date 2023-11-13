function changeMode(size, weight, transform, background, color) {
    return function() {
        document.body.style.fontSize = size + 'px';
        document.body.style.fontWeight = weight;
        document.body.style.textTransform = transform;
        document.body.style.backgroundColor = background;
        document.body.style.color = color;
    }
}

function main() {
    const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
    const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
    const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

    document.body.innerHTML += '<p>Welcome Holberton!</p>';

    var spookyButton = document.createElement("button");
    spookyButton.textContent = "spooky";
    spookyButton.onclick = spooky;
    document.body.appendChild(spookyButton);

    var darkButton = document.createElement("button");
    darkButton.textContent = "dark";
    darkButton.onclick = darkMode;
    document.body.appendChild(darkButton);

    var screamButton = document.createElement("button");
    screamButton.textContent = "scream";
    screamButton.onclick = screamMode;
    document.body.appendChild(screamButton);
}

main();