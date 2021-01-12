$(function () {
  // nice scroll
  $("body").niceScroll({
    cursorcolor: "#f7600f",
    cursorwidth: "10px",
    cursorborder: "none",
    cursorborderradius: 0,
    scrollspeed: 25,
    mousescrollstep: 20,
  });

  $(".contact form textarea").niceScroll({
    cursorcolor: "#f7600f",
    cursorwidth: "10px",
    cursorborder: "none",
    cursorborderradius: "5px",
    scrollspeed: 25,
    mousescrollstep: 20,
  });

  //header width
  $(".header").height($(window).height());

  // chevron down to feature section

  $(".fa-chevron-down").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".hire").offset().top,
      },
      700
    );
  });

  // scroll to our work
  $(".btn-our-work").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".our-works").offset().top,
      },
      1000
    );
  });
  // scroll to hire us

  $(".btn-hire").click(function () {
    $("html, body").animate(
      {
        scrollTop: $(".contact").offset().top + 1,
      },
      2000
    );
  });

  // testimonial slider-----------------------------

  // let prev = $(".fa-chevron-left"),
  //   next = $(".fa-chevron-right");
  // function slidertesti() {
  //   if ($(".client").first().hasClass("active")) {
  //     prev.fadeOut(300);
  //   } else {
  //     prev.fadeIn(300);
  //   }
  //   if ($(".client").last().hasClass("active")) {
  //     next.fadeOut(300);
  //   } else {
  //     next.fadeIn(300);
  //   }
  // }
  // slidertesti();

  //right
  $(".fa-chevron-right").click(function () {
    if (!$(".client.active").is(":last-of-type")) {
      $(".client.active").fadeOut(300, function () {
        $(this).removeClass("active").next().addClass("active").fadeIn();
      });
    } else {
      $(".client.active").fadeOut(300, function () {
        $(this).removeClass("active");
        $(".client").eq(0).addClass("active").fadeIn();
      });
    }
  });
  //left
  $(".fa-chevron-left").click(function () {
    if (!$(".client.active").is(":first-of-type")) {
      $(".client.active").fadeOut(300, function () {
        $(this).removeClass("active").prev().addClass("active").fadeIn();
      });
    } else {
      $(".client.active").fadeOut(300, function () {
        $(this).removeClass("active");
        $(".client").last().addClass("active").fadeIn();
      });
    }
  });
  setInterval(function () {
    $(".fa-chevron-right").click();
  }, 5000);
});
