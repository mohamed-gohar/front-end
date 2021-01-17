$(function () {
  // nice scroll
  $("body").niceScroll({
    cursorcolor: "#eb1c22",
    cursorwidth: "13px",
    cursorborder: "1px solid #fff",
    cursorborderradius: 0,
    scrollspeed: 35,
    mousescrollstep: 25,
    zindex: 555,
  });

  // slider height dynamicaly
  let WH = $(window).height(),
    headerH = $(".header").innerHeight(),
    navH = $(".navbar").innerHeight();
  $(".slider .carousel-item").innerHeight((WH - (headerH + navH)) * 1.1);

  $(window).resize(function () {
    let WH = $(window).height(),
      headerH = $(".header").innerHeight(),
      navH = $(".navbar").innerHeight();
    $(".slider .carousel-item").innerHeight((WH - (headerH + navH)) * 1.1);
  });

  // $(".carousel").carousel({
  //   interval: 3000,
  //   pause: false,
  // });

  // height of h2 in feature section dynamic
  let height = 0;
  $(".feature h2").each(function () {
    if ($(this).height() > height) {
      height = $(this).height();
    }
  });
  $(".feature h2").height(height);

  $(window).resize(function () {});

  // scroll to top
  let scrollTo = $("span.top");
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      scrollTo.fadeIn(500);
    } else {
      scrollTo.fadeOut(500);
    }
  });

  scrollTo.click(function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      1000
    );
  });
});
