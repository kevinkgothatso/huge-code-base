
var ele = document.getElementById('btn');

ele.addEventListener("click",function(){
     var url = './content.html';
     $("#temp_cont").remove();

     $('#content').load(url +'#content', sucesss, fail);

});


function sucesss(){
    console.info("loading sucessful");
}

function fail(e){
    console.info("Error"+e.message);
}


