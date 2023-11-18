function createElement(data) {
    var theP = document.createElement("p");
    theP.textContent = data;
    document.body.appendChild(theP);
}

function queryWikipedia(callback) {
    // let request = new XMLHttpRequest();

    // request = ("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);

    // Create a new XMLHttpRequest object
    var xhr = new XMLHttpRequest();
    let url = "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*";

    // Configure it: specify the type of request (GET or POST), the URL, and whether it should be asynchronous
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          const extract = response.query.pages[Object.keys(response.query.pages)[0]].extract;
          callback(extract);
        }
      };

    // Send the request
    xhr.send();

}

queryWikipedia(createElement);
// createElement("LALALALALAL");