//forms filter

var inputText = $('input:text');
// console.log(inputText.val());

$('input:submit').on('click', function(){
   
$('body').prepend(
    function (){
        console.log("Alert");

        var str = '<ul><li>';
        str += inputText.val();
        str += '</li></ul>'
        return str;
    }
);

});


