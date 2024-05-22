window.addEventListener("load", function (event) {
  const modal = document.querySelector(".modal-container");
  const modalOpen = document.querySelectorAll(".navigation-link-btn");
  const modalClose = document.querySelector(".modal-close-button");

  modalOpen.forEach((el) => {
    el.addEventListener("click", (e) => {
      e.preventDefault();
      modal.classList.add("is-show");
    });
  });

  modalClose.addEventListener("click", (e) => {
    modal.classList.remove("is-show");
  });

  document.body.addEventListener("keydown", function (e) {
    if (e.key == "Escape") {
      modal.classList.remove("is-show");
    }
  });
});
