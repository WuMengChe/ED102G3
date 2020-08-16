$(document).ready(function(){
   $('.type_card').on('mouseenter', function(){
      $('.type_card').removeClass('active');
      $(this).addClass('active').siblings('.type_card').addClass('unactive');
      $('.type_txt').show();
   });
   $('.type_card').on('mouseleave', function(){
      $('.type_card').removeClass('active').removeClass('unactive');
      $(this).addClass('');
      $('.type_txt').hide();
   });
})

