$(document).ready(function(){
    $('.next_step').click(function(){
        if ($(this).hasClass('content_btn_submit')){
            if ($('#document').val() != ""){
                $('.wrapper').animate({
                    left: '-=800'
                });
            }else{
                alert('Debe ingresar el numero de Documento');
            }
        }else{
            $('.wrapper').animate({
                left: '-=800'
            });
        }
    });

    $('.before_step').click(function(){
        $('.wrapper').animate({
            left: '+=800'
        });
    });

    $('.the_options').click(function(){
        state_button = $(this).attr('attr');
        myvalue = $(this).attr('myvalue');

        $(this).css('background', '#414141');
        $(this).siblings('.the_options').css('background', '#FFF');
        $(this).siblings('.value_check').attr({
            value: myvalue
        });
    });

    $('.rest_questions').click(function(){
        myvalue = $(this).attr('myvalue');
        if(myvalue == 'si'){
            $(this).parent('.select_options').siblings('.text_hidden').show();
            $(this).parents('.line_options').css('height', '42px');
        }else{
            $(this).parent('.select_options').siblings('.text_hidden').hide();
            $(this).parents('.line_options').css('height', '22px');
        }
    });

    $('.final_button').click(function(){
        $.ajax({
            type: "POST",
            url: 'save',
            data: $("form").serialize(),
            success: function(){
                $('.wrapper').animate({
                    left: '-=800'
                });
                $('.congratulations span').html($('input[name]').val());
            }
        });
    });

    $(document).keydown(function(objEvent) {
        if (objEvent.keyCode == 9) {  //tab pressed
            objEvent.preventDefault(); // stops its action
        }
    })
});