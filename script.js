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
  const buttons = document.querySelectorAll("#shareButton");

  buttons.forEach((createButton) => {
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
  const createButton = document.getElementById("backButtonToMainFrModel5");
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

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("backButtonToMainFrModel15");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal15")
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
  const createButton = document.getElementById("backButtonToMainFrModel6");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal6")
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
  const createButton = document.getElementById("backButtonToMainFrModel16");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal16")
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
  const createButton = document.getElementById("backButtonToModal9");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal9")
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

document.addEventListener("DOMContentLoaded", () => {
  const createButton = document.getElementById("createSOSButton");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal6")
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
  const createButton = document.getElementById("backButton");
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
  const createButton = document.getElementById("backButtonToMain");
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
  const createButton = document.getElementById("backButtonToMainFrLimited");
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
  const createButton = document.getElementById("backButtonTolimitedFrFinal");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal11")
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
  const createButton = document.getElementById("backButtonToMainFrunlimited");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal12")
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
  const createButton = document.getElementById("backButtonToMainFrModel3");
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
  const createButton = document.getElementById("backButtonToModal7");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal8")
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
  const createButton = document.getElementById("backButtonToMainFrModel13");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal13")
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
  const createButton = document.getElementById("backButtonToMainFrModel4");
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
  const createButton = document.getElementById("backButtonToMainFrModel14");
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
  const createButton = document.getElementById("createSystemButtonFromModal12");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal12")
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
  const createButton = document.getElementById("backButtonToMainFrModel17");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal17")
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
  const createButton = document.getElementById("createSystemButtonFromModal11");
  createButton.addEventListener("click", () => {
    const currentModal = bootstrap.Modal.getInstance(
      document.getElementById("modal11")
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
  const buttons = document.querySelectorAll("#backButtonToModal1");

  buttons.forEach((createButton) => {
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
});

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll("#createSurveyInfo");

  buttons.forEach((createButton) => {
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
});

function changeMainImage(src) {
  const mainImage = document.getElementById("mainImage");
  mainImage.src = src;
}
