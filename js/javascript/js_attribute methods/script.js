//Attribute methods

var eleDiv =document.getElementsByTagName('div')[0];

if(!eleDiv.hasAttribute("class")){
    var attr = eleDiv.setAttribute('id', 'thisClass');
    console.log(attr);
}



 var eleSection = document.getElementsByClassName('section')[0];
 console.log( eleSection.getAttribute('id'));
 eleSection.removeAttribute('class');