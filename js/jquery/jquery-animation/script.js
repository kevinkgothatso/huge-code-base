//Jquery animation



// $('#btn').on( 'click', function() {
//      $('.divClass').animate({
//      opacity : 0.0,
//     paddingleft: '+=80'
//     }, 500, function() {
//      $(this).remove(); //call back function to remove element
//     }) ;
//     }) ;

    $('#btn').on('click', function (){
        $('.divClass').animate(
            {
                height:'-=50',
                width: '+=300'},500
        );
    });

    