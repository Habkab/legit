$(document).ready(function(){
    $nav= $('.nav');
    $toggleCollapse= $('.toggle-collapse');

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse');
    })


    
    $('.move-up').click(function(){

      $('html,body').animate({
       scrollTop : 0
      },1000);
    });

});

