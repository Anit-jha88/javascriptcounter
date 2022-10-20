$(document).ready(function($) {
    $('.inner-slide').slick({
        dots: false,
        arrows: true,
        speed: 1000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });

    // var acc = document.getElementsByClassName("accordion");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //         this.classList.toggle("active");
    //         var panel = this.nextElementSibling;
    //         if (panel.style.maxHeight) {
    //             panel.style.maxHeight = null;
    //         } else {
    //             panel.style.maxHeight = panel.scrollHeight + "px";
    //         }
    //     });
    // }

    //sticky menu
    // $(window).scroll(function() {
    //     if ($(window).width() > 1024) {
    //         if ($(window).scrollTop() > 75) {
    //             $(".hesder").addClass('fixed');
    //         } else {
    //             $(".hesder").removeClass('fixed');

    //         }
    //     }
    // });



    // sub-menu
    $('html').click(function() {
        $('.navbar-nav li .clickD').removeClass('toggled');
        $('.toggled').removeClass('toggled');
        $('.sub-menu').hide();
    });
    $(document).click(function() {
        $('navbar-nav li .clickD').removeClass('toggled');
        $('.toggled').removeClass('toggled');
        $('.sub-menu').hide();
    });
    $('.navbar-nav').click(function(e) {
        e.stopPropagation();
    });

    // if (jQuery(window).width() < 1025) {
    jQuery("<span class='clickD'></span>").insertAfter("ul.navbar-nav li.menu-item-has-children > a");
    // }
    $('ul.navbar-nav li .clickD').click(function(e) {
        e.preventDefault();
        var $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.removeClass('toggled');
            $this.next().hide();
        } else {
            $this.parent().parent().find('.sub-menu').removeClass('show');
            $this.parent().parent().find('.toggled').removeClass('toggled');
            $this.parent().parent().find('.sub-menu').hide();
            $this.next().toggleClass('show');
            $this.toggleClass('toggled');
            $this.next().show();
        }
    });



    // one page js 

    // $('a[href*="#"]').on('click', function (e) {
    //   e.preventDefault();
    //   $(document).off("scroll");
    //   $('.navbar-nav > li > a').each(function () {
    //     $(this).parent('li').removeClass('current-menu-item');
    //   });
    //   $(this).parent('li').addClass('current-menu-item');
    //   var target = this.hash,
    //     $target = $(target);
    //   $('html, body').stop().animate({
    //     'scrollTop': $target.offset().top - 80
    //   }, 500, 'swing', function () {
    //     window.location.href.substr(0, window.location.href.indexOf('#'));
    //     $(document).on("scroll", onScroll);
    //   });
    // });
    // $(document).on("scroll", onScroll);

    // var mapHeight = $('.footadd').height();
    // $('.fotmap').height(mapHeight + 'px')


var btn = $('#top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 100) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

$(".buy-click").click(function(){
  $(this).next(".crd_body_txt").slideToggle();
  $(this).toggleClass("add")
  $(this).next(".crd_body_txt").toggleClass("add");
});

$(".fill").click(function(){
  $(this).toggleClass("add");
});
$(".fill2").click(function(){
  $(this).toggleClass("add");
});


$('.banner-slide-cont').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  fade: false,
  asNavFor: '.banner-slide-cont2'
});
$('.banner-slide-cont2').slick({
  slidesToShow: 20,
  slidesToScroll: 1,
  asNavFor: '.banner-slide-cont',
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 9
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 5
      }
    },
  ]
});

$(".fancybox").fancybox();

// $("a.fancybox").fancybox().trigger('click');

$('.tooltip-click').click(function(){ 
  $(this).next('.tooltip-cont').fadeToggle();
});


$("input:checkbox").on('click', function() {
  // in the handler, 'this' refers to the box clicked on
  var $box = $(this);
  if ($box.is(":checked")) {
    // the name of the box is retrieved using the .attr() method
    // as it is assumed and expected to be immutable
    var group = "input:checkbox[name='" + $box.attr("name") + "']";
    // the checked state of the group/box on the other hand will change
    // and the current value is retrieved using .prop() method
    $(group).prop("checked", false);
    $box.prop("checked", true);
  } else {
    $box.prop("checked", false);
  }
});
 
});

$(function() {
  $('.calendar').pignoseCalendar();
});

  