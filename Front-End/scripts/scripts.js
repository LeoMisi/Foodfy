const modalOverlay = document.querySelector('.modal-overlay')
const receitas = document.querySelectorAll('.receita')

for (let receita of receitas){
  receita.addEventListener("click", function(){
    const imageId = receita.getAttribute('id')
    modalOverlay.classList.add('active')
    modalOverlay.querySelector("img").src = `/assets/${imageId}`;
  })
}

document.querySelector('.close-modal').addEventListener('click', function(){
  modalOverlay.classList.remove('active')
  modalOverlay.querySelector('iframe').src = ""
})

