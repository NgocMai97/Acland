jQuery(document).ready(function ($) {
    $(window).load(function() {
       setTimeout(function(){
            $('#myModal').addClass('show');
            $('body').addClass('modal-open');
       },1000);
       
  });
  $('.modalInformation button').click(function(){
    $('#myModal').removeClass('show');
    $('body').removeClass('modal-open');
  })
});