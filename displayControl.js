
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

$('.mobile_logo_btn').click(function(){
    if(navigator.vibrate){
        navigator.vibrate(200)
        console.log('진동~~~')
    } else{
        console.log('진동을 사용할 수 없는 기기')
    }
});


function headChange(){
    const slider_color = $('.slider_section').css('background-color')
    $('.headcolor').attr('content', slider_color)
}

function blockAddMotion() {
    $('.contents_block').attr('ontouchstart', '')
}




function init(){
    headChange()
    blockAddMotion()
}

init();