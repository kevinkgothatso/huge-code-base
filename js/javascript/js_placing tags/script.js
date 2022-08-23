var msg = '<h1>This page is awesome</h1>';
var msg2 = "<h1 id='text'>This page is awesome 2</h1>";
window.document.write(msg); // wont know exactly where to put the items, compared to doc obj
window.document.write(msg2);

el = document.getElementById('info');
el.innerHTML = msg;