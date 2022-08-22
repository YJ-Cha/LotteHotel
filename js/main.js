const closeBtn = document.querySelector('.popup_btn_close');
    const elPopup = document.querySelector('.popup');

    closeBtn.onclick = function(aa){
        aa.preventDefault(); //a태그의 기본 기능을 막아준다
        elPopup.style.display = "none";
    };

    /*
    const openFtSelect = document.querySelector('.ft_select_box');
    const elFtSelect = document.querySelector('.ft_select_list');

    openFtSelect.onclick = function() {
        if(elFtSelect.style.display === "none") {
            elFtSelect.style.display = "block";
        } else {
            elFtSelect.style.display = "none";
        }
    }; */

    var aa = 0; //변수 aa에 0을 넣는다.
    $('.ft_select_box').click(function(){
        if(aa == 0){
            $('.ft_select_list').show();
            aa = 5;
        } else {
            $('.ft_select_list').hide();
            aa = 0;
        };
    });

//스크롤 되면 헤더 bottom만 고정
const bottomTop = $('.bottom').offset().top;
$(window).scroll(function(){
    let scroll = $(window).scrollTop();

    if(scroll >= bottomTop){
        $('.bottom').addClass('stick');
    } else {
        $('.bottom').removeClass('stick');
    }
})

