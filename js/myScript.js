const openModalButtons = document.querySelectorAll('[data-modal-target]')
const closeModalButtons = document.querySelectorAll('[data-close-button]')
const overlay = document.getElementById('overlay')

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget)
    openModal(modal)
  })
} )

overlay.addEventListener('click', () =>{
  const modals = document.querySelectorAll('.modal.active')
  modals.forEach(modal => {
  closeModal(modal)
  })
})

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal')
    closeModal(modal)
  })
} )

function openModal(modal) {
  if (modal == null) return
  modal.classList.add("active")
  overlay.classList.add("active")
}

function closeModal(modal) {
  if (modal == null) return
  modal.classList.remove("active")
  overlay.classList.remove("active")
}

/*
const addTitleButton = ducument.querySelectorAll('[data-add-target]')

addTitleButton.forEach(button => {
  button.addEventListener('click', () => {
    if(document.getElementById("choix")=="Liste"){
    const add = document.querySelector(button.dataset.addTarget)
    addTitle(add)
  }
  })
} )

function addTitle(add){
  if(add==null) return
add.createElement("p");                 
var textnode = document.createTextNode(document.getElementById("title").value);         
add.appendChild(textnode);                              
document.getElementById("liste").appendChild(add); 
}
*/