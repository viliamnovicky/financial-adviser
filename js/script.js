// Modal
const showModal = function() {
    const modal = document.querySelector(".modal")
    modal.classList.remove("hidden")
}

const hideModal = function() {
    const modal = document.querySelector(".modal")
    modal.classList.add("hidden")
}

document.querySelector(".footer__btn").addEventListener("click", showModal)
document.querySelector(".modal__close").addEventListener("click", hideModal)

// Hamburger
const hideNavbar = function(e) {
    e.preventDefault
}

document.querySelector(".hamburger__links").addEventListener("click", function() {
    document.querySelector(".hamburger__checkbox").checked = false
})