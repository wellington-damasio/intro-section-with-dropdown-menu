const dropdownToggles = document.querySelectorAll('.dropdown__btn')
const dropdowns = document.querySelectorAll('.dropdown')

dropdownToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const target = toggle.getAttribute('data-target')
    const targetElement = document.querySelector(target)

    targetElement.classList.toggle('dropdown--open')
    targetElement.focus()
  })
})

dropdowns.forEach(dropdown => {
  dropdown.addEventListener('focusout', () => {
    setTimeout(() => {
      dropdown.classList.remove('dropdown--open')
    }, 650)
  })
})