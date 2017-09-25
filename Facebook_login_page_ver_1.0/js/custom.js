$(document).ready(function () {
    $('.e2.dp3.he1:not(:last-child) input').focusout(function () {
        if (this.value != "") {
            $(this).css('background-color', '#FAFFBD');
        } else {
            $(this).css('background-color', '#FFFFFF');
        }
    });
    $('.e4-f3 input').focusout(function () {
        var error_span = this.parentElement.getElementsByTagName('span');
        if (this.value == "") {
            $(this).addClass('f4');
            error_span[1].className = error_span[1].className.replace(' dp4', ' dp3');
        } else {
            $(this).removeClass('f4');
            error_span[1].className = error_span[1].className.replace(' dp3', ' dp4');
        };
        if ($(error_span[0]).hasClass('dp3') == true) {
            error_span[0].className = error_span[0].className.replace(' dp3', ' dp4');
        };
    });
    $('.e4-f3 input').focusin(function () {
        var error_span = this.parentElement.getElementsByTagName('span');
        if ($(error_span[1]).hasClass('dp3') == true) {
            error_span[1].className = error_span[1].className.replace(' dp3', ' dp4');
            error_span[0].className = error_span[0].className.replace(' dp4', ' dp3');
        } else {
            error_span[0].className = error_span[0].className.replace(' dp3', ' dp4');
        };
    });
    // if($('.g7 input[type=radio]:checked')==0){
    //     $('.g7 span.dp3').attr('class','dp3 f4');
    // }else{
    //     $('.g7 span.dp3').attr('class','dp3');
    // };
    $('.g7 input[type=radio]').focus(function(){
        $('.g7 span:not(.g4)').attr('class','dp3');
        $('.g7 span.g4').attr('class','g4 dp4');
    });
});
function validateForm() {
    var input_radio = $("form#sign-up-form input[type=radio]:checked");
    var input_text = $("form#sign-up-form input[type=text]");
    var logic = true;
    for (var i = 0; i < input_text.length; i++) {
        if (input_text[i].value == "") {
            logic = false;
        };
    };
    if (logic == true && input_radio.length != 0) {
        return true;
    } else if (logic == false && input_radio.length == 0) {
        for (var i = 0; i < input_text.length; i++) {
            if (input_text[i].value == "") {
                var error_span = input_text[i].parentElement.getElementsByTagName('span')[1];
                error_span.className = "g4 dp3";
                $(input_text[i]).addClass('f4');
            };
        };
        for( var i = 0; i<$('.g7 span.dp3').length;i++){
            $($('.g7 span.dp3')[i],this).addClass('f4');
        };
        $('.g7 span:last-child').attr('class','g4 dp3'); 
        for (var i = 0; i < input_text.length; i++){
            if (input_text[i].value == ""){
                $(input_text[i],this).focus();
                break;
            };
        };
        return false;   
    } else if(logic == false && input_radio.length != 0){
        for (var i = 0; i < input_text.length; i++) {
            if (input_text[i].value == "") {
                var error_span = input_text[i].parentElement.getElementsByTagName('span')[1];
                error_span.className = "g4 dp3";
                $(input_text[i]).addClass('f4');
            };
        };
        for (var i = 0; i < input_text.length; i++){
            if (input_text[i].value == ""){
                $(input_text[i],this).focus();
                break;
            };
        };
        return false;  
    } else if(logic == true && input_radio.length == 0){
        for( var i = 0; i<$('.g7 span.dp3').length;i++){
            $($('.g7 span.dp3')[i]).className = "dp3 f4";
        };
        $('.g7 span:last-child').attr('class','g4 dp3'); 
        return false;  
    };
};
