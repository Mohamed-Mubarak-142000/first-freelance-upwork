document.addEventListener("DOMContentLoaded", () => {
  const startWorkButton = document.getElementById("startWorkButton");
  const popupModal = new bootstrap.Modal(document.getElementById("popupModal"));
  const images = document.querySelectorAll(".row img");

  // Show initial popup modal
  startWorkButton.addEventListener("click", () => {
    popupModal.show();
  });

  // Add click event to each image
  images.forEach((image) => {
    image.addEventListener("click", () => {
      const targetModalId = image.getAttribute("data-target");
      const targetModal = new bootstrap.Modal(
        document.querySelector(targetModalId)
      );
      targetModal.show();
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal1")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});
