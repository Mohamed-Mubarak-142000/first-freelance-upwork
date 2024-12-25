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

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("shareButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal7")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("unlimitedButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("limitedButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("limitedButton2");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal10")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("unlimitedButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal2")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createSurveyInfo");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal3")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("sosButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal4")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("systemButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal14")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("eventButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal5")
    );
    currentModal.hide();
    const targetModalId = createButton.getAttribute("data-target");
    const targetModal = new bootstrap.Modal(
      document.querySelector(targetModalId)
    );
    targetModal.show();
  });
});
function changeMainImage(src) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = src;
}
