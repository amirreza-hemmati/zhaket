(() => {
    // event scroll window
    $(window).scroll(() => {
      // fade toggle button with scroll
      if ($(window).scrollTop() > 150) {
        // scroll-top
        $(".scroll-top").fadeIn("slow");
      } else {
        $(".scroll-top").fadeOut("slow");
      }

      // toggle class for style position card
      const cardseo = document.querySelector(".card-seo");
      const offsetCardSeo = cardseo.offsetTop + $(".card-seo").height();

      if ($(window).scrollTop() > offsetCardSeo) {
        const sumOffsetLeft = document.getElementsByClassName(
          "sum-store-bot"
        )[0].offsetLeft;
        $(".card-fixed").css("left", sumOffsetLeft + "px");
        if ($(window).scrollTop() > 2407) {
          $(".my-fixed").addClass("card-abu");
          $(".my-fixed").removeClass("card-fixed");
        } else {
          $(".my-fixed").removeClass("card-abu");
          $(".my-fixed").addClass("card-fixed");
        }
      } else {
        $(".my-fixed").removeClass("card-fixed");
      }
    });

    $(window).resize(function() {
      const sumOffsetLeft = document.getElementsByClassName("sum-store-bot")[0]
        .offsetLeft;
      $(".card-fixed").css("left", sumOffsetLeft + "px");
    });

  if($("#btn-collapse-1").hasClass("btn-activate")){
    $(".my-fixed").removeClass("card-abu");
    $(".my-fixed").removeClass("card-fixed");
  }

  // scrolltop => 0
  $(".scroll-top").click(() => {
    $("html , body").animate(
      {
        scrollTop: 0,
      },
      "slow"
    );
  });

  // toggle text section.child
  let toggleBool = true;
  $(".show-more > a").click(e => {
    e.preventDefault();
    $(".d-none").slideToggle("slow");
    if (toggleBool) {
      $(".show-more > a").text("نمایش کمتر");
    } else {
      $(".show-more > a").text("نمایش بیشتر");
    }
    toggleBool = !toggleBool;
  });

  // collapse
  $(`.data-collapse-1`)
    .siblings("div")
    .css("display", "none");
  for (let index = 1; index < $(".collapse").children().length + 1; ++index) {
    $(`#btn-collapse-${index}`).click(function(e) {
      e.preventDefault();
      $(this)
        .siblings()
        .removeClass("btn-activate");
      $(this).addClass("btn-activate");
      $(`.data-collapse-${index}`)
        .siblings("div")
        .css("display", "none");
      $(`.data-collapse-${index}`).css("display", "block");
      if (index === 1) {
        $(".my-fixed").removeClass("card-abu");
        $(".my-fixed").removeClass("card-fixed");
      }
    });
  }

  // tooltip
  $(".tooltip").tooltipster();
})();
