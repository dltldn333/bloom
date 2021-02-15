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

//모바일 버튼 제어

window.addEventListener('scroll', function(){
    var logo_button = document.querySelector(".mobile_logo_btn")
    logo_button.classList.toggle("btn_mode", window.scrollY > 0)
})

$.fn.scrollStopped = function(callback) {
    var that = this, $this = $(that);
    $this.scroll(function(ev) {
      clearTimeout($this.data('scrollTimeout'));
      $this.data('scrollTimeout', setTimeout(callback.bind(that), 250, ev));
    });
  };
   
$(window).scrollStopped(function(){
    $(".mobile_logo_btn").css('opacity', '1');
})

  

//Javascript
var lastScrollTop = 0;
var delta = 5;
var fixBox = document.querySelector('.mobile_logo_btn');
var fixBoxHeight = fixBox.offsetHeight;
var didScroll;
//스크롤 이벤트 
window.onscroll = function(e) {
    didScroll = true;
};

//0.25초마다 스크롤 여부 체크하여 스크롤 중이면 hasScrolled() 호출
setInterval(function(){
    if(didScroll){
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled(){
    var nowScrollTop = window.scrollY;
    if(Math.abs(lastScrollTop - nowScrollTop) <= delta){
        return;
    }
    if(nowScrollTop > lastScrollTop || nowScrollTop > fixBoxHeight){
            //Scroll down
            $(".mobile_logo_btn").css('opacity', '0.2');
            $('#simbol_button').prop('checked', (false))
    }
    lastScrollTop = nowScrollTop;
}

$('body').on("scrollstop",function(){
    alert("Stopped scrolling!");
  });
    
