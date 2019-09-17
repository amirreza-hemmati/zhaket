(() => {
    // event scroll window
    $(window).scroll(() => {
        // fade toggle button with scroll
        if($(window).scrollTop() > 150){
            // scroll-top
            $(".scroll-top").fadeIn("slow");
        }else{
            $(".scroll-top").fadeOut("slow");
        }

        // toggle class for style position card
        const cardseo = document.querySelector('.card-seo');
        const offsetCardSeo = (cardseo.offsetTop + $(".card-seo").height());
        
        if($(window).scrollTop() > offsetCardSeo){
            if($(window).scrollTop() > 2407){
                $(".my-fixed").addClass("card-abu");
                $(".my-fixed").removeClass("card-fixed");
            }else{
                $(".my-fixed").removeClass("card-abu");
                $(".my-fixed").addClass("card-fixed");
            }
        } 
        else{
            $(".my-fixed").removeClass("card-fixed");            
        }

    });

    // scrolltop => 0
    $(".scroll-top").click(() => {
        $("html , body").animate({
            scrollTop: 0,
        } , "slow")
    });

    // toggle text section.child
    $(".show-more > a").click(e => { 
        e.preventDefault();
        $(".d-none").slideToggle("slow");        
    });

    // tooltip
    $('.tooltip').tooltipster();
})()