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
//       console.log("je suis dans la condition");
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

function setmyId(data, titleParap, day) {
  setId = document.getElementById(day).appendChild(titleParap);
  setId.setAttribute("id", data.titleInputValue + "p");
}
function addToWatch(data) {
  const titleParap = document.createElement("a");
  titleParap.href = data.adressInputValue;
  titleParap.innerHTML = `${data.titleInputValue} <img src="${data.imageValue}" alt="erreur" />`;
  console.log(data.imageValue);
  let day = document.getElementById("selectJour").value;
  day = parseInt(day);

  switch (day) {
    case 0:
      alert("Il faut choisir un jour !");
      break;
    case 1:
      setmyId(data, titleParap, day);
      break;
    case 2:
      setmyId(data, titleParap, day);
      break;
    case 3:
      setmyId(data, titleParap, day);
      break;
    case 4:
      setmyId(data, titleParap, day);
      break;
    case 5:
      setmyId(data, titleParap, day);
      break;
    case 6:
      setmyId(data, titleParap, day);
      break;
    case 7:
      setmyId(data, titleParap, day);
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
function hideImg() {
  const hideImg = document.getElementById("imginput");
  const hideDay = document.getElementById("jour");
  const titleWidth = document.getElementById("title");
  if (document.getElementById("choix").value == 1) {
    hideImg.style.display = "none";
    hideDay.style.display = "none";
    titleWidth.style.width = "80%";
  } else {
    hideImg.style.display = "inline";
    hideDay.style.display = "inline";
    titleWidth.style.width = "60%";
  }
}

const myForm = document.getElementById("myform");
const _handleSubmit = async (e) => {
  e.preventDefault();
  const titleInputValue = document.getElementById("title").value;
  const adressInputValue = document.getElementById("adress").value;
  const choiceSelectValue = document.getElementById("choix").value;
  const imageToUpload = document.getElementById("myfile").files[0];

  let imageValue = 0;

  if (imageToUpload != null) {
    imageValue = await uploadImage(imageToUpload);
    console.log({ imageValueIntoSubmit: imageValue });
  }
  const data = {
    titleInputValue,
    adressInputValue,
    choiceSelectValue,
    imageValue,
  };
  console.log(choiceSelectValue);
  if (choiceSelectValue == 0) {
    alert("Il faut choisir où ajouter la série !");
    return;
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

const uploadImage = (pictureFile) => {
  return new Promise((resolve, reject) => {
    const data = new FormData();
    data.append("image", pictureFile);

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        const res = JSON.parse(this.responseText);
        resolve(res.data.link);
      }
    };

    xhr.open("POST", "https://api.imgur.com/3/image");
    xhr.setRequestHeader("Authorization", "Client-ID 955b6fc4ff1ae7f");

    xhr.send(data);
  });
};
