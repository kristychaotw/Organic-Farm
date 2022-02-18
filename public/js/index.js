// 視窗卷軸 1. top-btn按鈕 2. nav add bg-color
$(window).scroll(function(){
    // 判斷如果視窗高度超過 # product ， # top-btn 加上active
    const ptop = document.getElementById("product")
    // console.log($(window).scrollTop(), navtop.offsetTop);
    if ($(window).scrollTop() > ptop.offsetTop-200){
        console.log($(window).scrollTop(),"2:",ptop.offsetTop-200)
        $("#top-btn").addClass("active");
        $('#nav-id').addClass('active');
        $('header').addClass('active');
    }else{
        $("#top-btn").removeClass("active")
        $('#nav-id').removeClass('active')
        $('header').removeClass('active')
    }

})// window scroll end


// 點擊事件
$("#top-btn").on("click",function(){
    // console.log("topbt-test");
    $("html,body").animate({
        "scrollTop":0},400)
}) // top-btn click end

$("#nav-btn-id").on("click",function(){
    // console.log("bt-test")
    if ( $("#nav-btn-id").hasClass('active')){
        $("#nav-btn-id").removeClass('active')
        $(".nav-top").slideToggle()
    }else{
        $("#nav-btn-id").addClass('active')
        $(".nav-top").slideToggle()
    }
})

// 視窗<768 ，改變product 圖文順序
let newimg1=$('#webimg1').clone(true);
let newimg3=$('#webimg3').clone(true);
newimg1.hide();
newimg3.hide();

$(window).resize(function(){
    if( $(window).width() >= 768 ){
        $('#webimg1').show();
        $('#webimg3').show();
        newimg1.hide();
        newimg3.hide();

    }else{
        newimg1.show();
        newimg3.show();
        $('#webimg1').hide();
        newimg1.insertAfter('#webtxt1');

        $('#webimg3').hide();
        newimg3.insertAfter('#webtxt3');
    }
})//window resize end

$(document).ready(function(){
    if (window.innerWidth < 768) {
        newimg1.show();
        newimg3.show();
        $('#webimg1').hide();
        newimg1.insertAfter('#webtxt1');

        $('#webimg3').hide();
        newimg3.insertAfter('#webtxt3');
    } 
 });