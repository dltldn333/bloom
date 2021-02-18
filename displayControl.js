//Fast tuch 라이브러리 사용
$(function() {
    FastClick.attach(document.body);
    });
    
(function() {
    const change_view = $('#change_view') //보기방식 변경
    //블럭 버튼 클릭 시
    $('#block_align_btn').click(function(){
        $('#block_align_btn').css('fill', '#191919');
        $('#list_align_btn').css('fill', '#E1E1EB');
        change_view.addClass('block_view');
        change_view.removeClass('list_view');
    });
    //리스트 버튼 클릭 시
    $('#list_align_btn').click(function(){
        $('#list_align_btn').css('fill', '#191919');
        $('#block_align_btn').css('fill', '#E1E1EB');
        change_view.addClass('list_view');
        change_view.removeClass('block_view');
    });
}())

//모바일 버튼 제어
window.addEventListener('scroll', function(){
    var logo_button = document.querySelector("#logo_btn")
    logo_button.classList.toggle("btn_mode_off", window.scrollY > 0)
    logo_button.classList.toggle("mobile_logo_btn", logo_button.classList.contains('btn_mode_off') == false)
    if (window.scrollY > 0){
        let simbolButton = document.querySelector('#simbol_button')
        simbolButton.checked = false
    } 
})

// $('.mobile_logo').click(function(){
//     let simbolButton = document.querySelector('#simbol_button')
//     simbolButton.checked = true
// });


$(".mobile_logo").click(function(){
    that = $(this);
    that.toggleClass('button_check', that.is(':checked'));
});

function headChange(){
    const slider_color = $('.slider_section').css('background-color')
    $('.headcolor').attr('content', slider_color)
}







function init(){
    headChange()
}

init();