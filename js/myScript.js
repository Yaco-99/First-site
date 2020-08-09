const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

// addTitleButton.forEach((button) => {
//   button.addEventListener("click", () => {
//     if (document.getElementById("choix").value == 1) {
//       console.log("JE RENTRE DANS LA CONDITION WSH");
//       const add = document.querySelector(button.dataset.addTarget);
//       addTitle(add, data);
//     }
//   });
// });

function addTitle(data) {
  const titleParap = document.createElement("a");
  titleParap.href = data.adressInputValue;
  titleParap.innerHTML = `<p>${data.titleInputValue}</p>`;
  const setId = document.getElementById("liste").appendChild(titleParap);
  setId.setAttribute("id", data.titleInputValue + "l");
}

function addToWatch(data) {
  const titleParap = document.createElement("a");
  titleParap.href = data.adressInputValue;
  titleParap.innerHTML = `${data.titleInputValue} <img src="/img/${data.titleInputValue}.png" alt="erreur" />`;
  let day = document.getElementById("selectJour").value;
  day = parseInt(day);

  switch (day) {
    case 0:
      alert("Il faut choisir un jour !");
      break;
    case 1:
      setId = document.getElementById("lundi").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      console.log(setId);
      break;
    case 2:
      setId = document.getElementById("mardi").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      break;
    case 3:
      setId = document.getElementById("mercredi").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      break;
    case 4:
      setId = document.getElementById("jeudi").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      break;
    case 5:
      setId = document.getElementById("vendredi").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      break;
    case 6:
      setId = document.getElementById("samedi").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      break;
    case 7:
      setId = document.getElementById("dimanche").appendChild(titleParap);
      setId.setAttribute("id", data.titleInputValue + "p");
      break;
  }
}

function suprTitle(dataSupr) {
  const titleSupr = document.getElementById(dataSupr.suptitleInputValue + "l");
  console.log(titleSupr);
  titleSupr.remove();
}

function suprToWatch(dataSupr) {
  titleSupr = document.getElementById(dataSupr.suptitleInputValue + "p");
  console.log(titleSupr);
  titleSupr.remove();
}

const myForm = document.getElementById("myform");
const _handleSubmit = (e) => {
  e.preventDefault();
  const titleInputValue = document.getElementById("title").value;
  const adressInputValue = document.getElementById("adress").value;
  const choiceSelectValue = document.getElementById("choix").value;

  const data = {
    titleInputValue,
    adressInputValue,
    choiceSelectValue,
  };
  if (choiceSelectValue == 0) {
    alert("Il faut choisir où ajouter la série !");
  } else if (choiceSelectValue == 1) {
    addTitle(data);
  } else {
    addToWatch(data);
  }
};

const myformSup = document.getElementById("myformSup");
const _handleSupr = (e) => {
  e.preventDefault();
  const suptitleInputValue = document.getElementById("titleSup").value;
  const supchoiceSelectValue = document.getElementById("choiceSupr").value;

  const dataSupr = {
    suptitleInputValue,
    supchoiceSelectValue,
  };
  if (supchoiceSelectValue == 0) {
    alert("Il faut choisir où supprimer la série !");
  } else if (supchoiceSelectValue == 1) {
    suprTitle(dataSupr);
  } else {
    suprToWatch(dataSupr);
  }
};
myForm.addEventListener("submit", _handleSubmit);
myformSup.addEventListener("submit", _handleSupr);
