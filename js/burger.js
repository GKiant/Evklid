window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger__list').classList.toggle('is-active')
  })
  document.querySelector('#burger__close').addEventListener('click', function() {
    document.querySelector('#burger__list').classList.remove('is-active')
  })
})
