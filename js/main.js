$(function(){
    $('.works__container').slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });
  });

  $(function(){
    $(".menu__btn").on("click", function(){
        $(".header__inner-menu").toggleClass("header__inner-menu--active");
    })
})