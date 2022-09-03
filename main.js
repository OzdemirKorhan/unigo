// write a function that opens and closes a modal
$(window).on("load",function() {
    console.log("window loaded");
    $(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(this).innerHeight();
        $(".fader").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top +50;

            /* If the element is completely within bounds of the window, fader it in */
            if (objectBottom < windowBottom) { //object comes into view (scrolling down)
                if ($(this).css("opacity")==0) {
                    $(this).css({'transform' : 'translateY(0)'});
                    $(this).fadeTo(800,1);
                }
            }
        });
    }).scroll(); //invoke scroll-handler on page-load
});
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector(".contact-modal");
  const openModal = document.querySelector(".contact-section .contact-button");
  const closeButton = document.querySelector(".contact-modal .close-button");

  openModal.addEventListener("click", function() {
    modal.classList.add("open");
      document.body.style.overflow = "hidden";
  })


    closeButton.addEventListener("click", function() {
    modal.classList.remove("open");
        document.body.style.overflow = "scroll";
  })

    document.querySelector(".navbar .menu").addEventListener("click", function() {
        document.querySelector(".open-menu").classList.remove("d-none");
        document.querySelector(".hero-text").classList.add("d-none");
        document.querySelector(".menu").classList.add("d-none");
        document.querySelector(".hero-logo").classList.add("d-none");
    })
    document.querySelector(".navbar .close-button").addEventListener("click", function() {
        document.querySelector(".open-menu").classList.add("d-none");
        document.querySelector(".hero-text").classList.remove("d-none");
        document.querySelector(".menu").classList.remove("d-none");
        document.querySelector(".hero-logo").classList.remove("d-none");
    })
    document.querySelectorAll(".buttons .btn").forEach(function(button) {
        button.addEventListener("click", function() {
            document.querySelector(".open-menu").classList.add("d-none");
            document.querySelector(".hero-text").classList.remove("d-none");
            document.querySelector(".menu").classList.remove("d-none");
            document.querySelector(".hero-logo").classList.remove("d-none");
            //scroll to the section according to the button clicked
            const section = button.dataset.section;
            const sectionElement = document.querySelector(`div[data-section="${section}"]`);
            sectionElement.scrollIntoView({behavior: "smooth"});
        })
    })


    document.querySelector(".send-button").addEventListener("click", function(e) {
        e.preventDefault();
        console.log("test")
        const list = document.getElementsByClassName("form-control");
        let valid = true;

        for(let el of list){
            if(el.value === "" || el.value === null) {
                el.classList.add("red-border");
                valid = false;
            }
        }
    })
});

