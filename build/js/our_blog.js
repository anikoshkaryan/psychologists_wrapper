
$(document).on('click', '.our_blog_show_more_link', function(){
    $(".hidden_items").toggleClass('open');
})


$(document).on('change', ".first_main_step_form_input input", function(){
   $(this).parent().toggleClass('active');
})




$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 65,
    from: 0,
    grid: true,
    onChange: function (data) {
        $('.irs-min').html("<span class='before_after'>от</span> " + data.from);
        $('.irs-max').html("<span class='before_after'>до</span> " + data.to);
        if(data.from > 0){
            $(".irs-min").removeClass('silver');
        } else {
            $(".irs-min").addClass('silver');
        }
        if(data.to < 65){
            $(".irs-max").removeClass('silver');
        } else {
            $(".irs-max").addClass('silver');
        }
    },
    

});



$(document).ready(function(){
    $('.irs-min').html("<span class='before_after'>от</span> 0");
    $('.irs-max').html("<span class='before_after'>до</span> 65");
    $(".irs-min").addClass('silver');
    $(".irs-max").addClass('silver');
    
})

$( function() {
    $( "#second_datepicker" ).datepicker();
  } );

  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  $( function() {
    $( "#third_datepicker" ).datepicker();
  } );

  $( function() {
    $( "#four_datepicker" ).datepicker();
  } );


$(document).on('change', ".appointment_day", function(){
   $("#second_datepicker").val("");
   $("#second_datepicker").attr("placeholder", "Другой день");
  
})
$(document).on('change', ".appointment_day", function(){
    $("#third_datepicker").val("");
    $("#third_datepicker").attr("placeholder", "Другой день");
   
 })

 $(document).on('change', ".appointment_day", function(){
    $("#datepicker").val("");
    $("#datepicker").attr("placeholder", "Другой день");
   
 })

 $(document).on('change', ".appointment_day", function(){
    $("#four_datepicker").val("");
    $("#four_datepicker").attr("placeholder", "Другой день");
   
 })
$(document).on("change", "#datepicker", function(){
    $(".appointment_day").prop( "checked", false );
})

$(document).on("change", "#second_datepicker", function(){
    $(".appointment_day").prop( "checked", false );
})

$(document).on("change", "#third_datepicker", function(){
    $(".appointment_day").prop( "checked", false );
})

$(document).on("change", "#four_datepicker", function(){
    $(".appointment_day").prop( "checked", false );
})

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


$(document).on("click", "#form_steps1", function(){
    $('.first_step_parent_child_wrapper').removeClass('open');
    $("#first_step_wrapper").addClass("open");
})

$(document).on("click", ".second_step_click_item", function(){

    var data_id = $(this).data("id");

    $(".child_step_form").removeClass("open");

    $(".second_step_click_item").removeClass("active")
    $(this).addClass("active");
    
    $(".second_step_form_wrapper").removeClass("open");
    $("#" + data_id).addClass("open");


    


})



$(document).on("click", ".open_form_link", function(){

    var data_id = $(this).data("id");

    $(".second_step_form_wrapper").removeClass("open");

    $(".child_step_form").removeClass("open");
    $("#" + data_id).addClass("open");

})


$(document).on("click", ".read_more", function(){
    $(this).parent().find(".read_more_text").slideToggle();

})


$(document).on("click", ".back_link",  function(){
    $(this).closest(".child_step_form ").removeClass("open");
    var item_id = $(this).closest(".child_step_form ").attr("id");
    var open_id = '';
    switch (item_id) {
        case "open_form1_2":
            open_id = 'open-div1'
            break;
        case "open_form2_2":
            open_id = 'open-div2'
            break; 
        case "open_form3_2":
            open_id = 'open-div3'
            break;
    }
    console.log('#'+open_id)
    $('.second_step_form_wrapper').removeClass('open');
    $('#'+open_id).addClass('open');

})


$(document).on("click", ".sign_up_btn", function(){
    $(".child_step_form").removeClass("open");
    $("#first_step_wrapper").removeClass("open");
    $("#third_step_wrapper").addClass("open");
})



$(document).on("change", ".check_input_first", function(){
    $(".check_input_label", '.first_main_step_form_inputs_wrapper').removeClass("active");
    
    var class_name= $(this).data('class');
    console.log(class_name)
    $('.'+class_name).toggleClass("active");
})

$(document).on("change", ".check_input_second", function(){
    $(".check_input_label2").removeClass("active");
    $(this).parent().toggleClass("active");

})