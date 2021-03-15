$(function() {
  // navbar background change on scroll
  $(window).scroll(function() {
    var scrolling = $(this).scrollTop();
    if (scrolling > 5) {
      $(".navbar").addClass("scroll-bg");
    } else {
      $(".navbar").removeClass("scroll-bg");
    }
  });

  // scroll animantion
  var html_body = $("html, body");
  $("a.nav-link").on("click", function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        html_body.animate(
          {
            scrollTop: target.offset().top - 50
          },
          1500,
          "easeInOutCubic"
        );
        return false;
      }
    }
  });

  // counter active
  $(".counter").counterUp({
    delay: 10,
    time: 10000
  });

  // back to top animation
  var bc2top = $(".back-to-top-btn");
  bc2top.on("click", function() {
    html_body.animate(
      {
        scrollTop: 0
      },
      2500
    );
  });
});
