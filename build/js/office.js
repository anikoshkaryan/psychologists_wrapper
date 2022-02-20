$(document).on("click", ".personal_office_of_psychologist_item", function(){

    var data_id = $(this).data("id");
    $(".personal_office_of_psychologist_item").removeClass("active")
    $(this).addClass("active");

    $(".personal_office_of_psychologist_form_wrapper").removeClass("open");
    $("#" + data_id).addClass("open");

})


$(".personal_office_of_psychologist_form_item_main_title").click(function () {
    let id = $(this).attr("href");
    let scrollElem = $(id);
    let offsetTop = $(scrollElem).offset().top;
    $("html, body").animate({
        scrollTop: offsetTop - 120,
    }, 1000);
      $('.personal_office_of_psychologist_form_item_main_title').removeClass('active_color');
    $(this).addClass('active_color');
  
});



$(document).on("focusin", ".four_step_input_field", function(){
    $(this).parent().addClass("active");
  
})

$(document).on("focusout", ".four_step_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.label-text').hide();
  } else{
      $(this).parent().find('.label-text').show();
  }

})


$(document).on("focusin", ".four_step_input_field", function(){
    $(this).parent().addClass("active");
  
})

$(document).on("focusout", ".four_step_input_field", function(){
  $(this).parent().removeClass("active");
  var val = $(this).val();
  if(val.length > 0){
      $(this).parent().find('.label-text2').hide();
  } else{
      $(this).parent().find('.label-text2').show();
  }

})
$(document).on("click", ".notifications_show_more_link", function(){
    $(".new_notifications_items_wrapper_hidden").slideToggle();
})


$(document).on("click", ".education_link", function(){
    let inputs = '<div class="education_input_main_wrapper">'+
                 '<input type="text" class="education_input_wrapper" placeholder="Заполните раздел">'+
                 '</div>';
    $(".education_input_main_parent_wrapper").append(inputs);

})

$(document).on("change", ".personal_check_input", function(){
    $(".personal_office_upcoming_session_input").removeClass("active");
    $(this).parent().toggleClass("active");

})


$(document).on("click", ".account_deleting_btn", function(){
    $(".account_deleting_btn").removeClass("active_color");
    $(this).addClass("active_color");
})


$(document).on("change", ".schedule_input_field", function(){
    $(".schedule_input").removeClass("active");
    $(this).parent().toggleClass("active");

})

$(document).on("change", ".schedule_input_second", function(){
    $(".schedule_hour_input").removeClass("active");
    $(this).parent().toggleClass("active");

})
