// write a function that opens and closes a modal
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.querySelector(".contact-modal");
  const openModal = document.querySelector(".contact-section .contact-button");
  const closeButton = document.querySelector(".contact-modal .close-button");

  openModal.addEventListener("click", function() {
    modal.classList.add("open");  })
    document.body.style.overflow = 'hidden';

    closeButton.addEventListener("click", function() {
    modal.classList.remove("open");
        document.body.style.overflow = 'scroll';
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
});

