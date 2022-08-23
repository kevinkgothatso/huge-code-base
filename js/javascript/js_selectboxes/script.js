//select boxes

var options = document.getElementById("options");


///index and index value
var index = options.selectedIndex;
   console.log("selected object index:"+index);
   console.log("selected object value:"+options[index].value);
   console.log('');

//options property and length
console.log("options methdo: "+options.options); //collection of all option elements
console.log("length of options: "+options.length);
console.log('');



//selcted options
console.log('selcted optins collection: '+options.selectedOptions);

options.addEventListener("change", function(){
    console.log('');
      console.log("New selection: " + options[options.selectedIndex].value);
});

//add option from text{
    var btn_add = document.getElementById("btn-add");

    btn_add.addEventListener("click", function(){
        var inputText = document.getElementById("text");
        var ele = document.createElement('option');
        ele.textContent = inputText.value;
          options.add(ele, "Facebook");
    });

    //remove option
    var btn_add = document.getElementById("btn-rem");

    btn_add.addEventListener("click", function(){
          options.remove(options.selectedIndex);
    });