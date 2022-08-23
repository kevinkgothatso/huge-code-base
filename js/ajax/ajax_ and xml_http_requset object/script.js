//loading data using the xmlhttpRequest method()

var xhr = new XMLHttpRequest();

xhr.onload = function(responseText) {
    console.log(xhr.responseText);
}

xhr.open('GET','./data.json',true); //this method only prepares request and doesnt send it 
xhr.send(null); //send request