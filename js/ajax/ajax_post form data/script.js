//getting form data

var datax;


$("input[type='submit']").on('click',function(){
    var str = $("#name").val()+$('#surname').val();
       console.log(str);
      datax = $("#form_data").serialize(str);
      console.log("data:"+datax)

      sessionStorage.data = datax;
      sessionStorage.str= str;
    
// $.post('./post_data.php',datax).done(function(data, textStatus, jqXHR){
//         console.log("Status Success: "+textStatus);  
//     }).fail(function(data, textStatus, jqXHR){
//         console.log("Status Fail: "+textStatus);

    
});

