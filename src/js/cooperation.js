$(document).on("focusin", ".personal_data_input_field", function(){
    $(this).parent().addClass("active");
  
})

$(document).on("focusout", ".personal_data_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.label-text').hide();
  } else{
      $(this).parent().find('.label-text').show();
  }

})


$(document).on('change', ".cooperation_input_field", function(){
    $(".cooperation_radio_input").removeClass("active");
    $(this).parent().addClass('active');
 })
 
 $(document).on("click", ".open_file_btn", function(){
     $(".file_input").addClass("open");
 })